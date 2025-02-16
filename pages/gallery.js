import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

const ImageLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
  </div>
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});

  const galleryImages = [
    {
      id: 1,
      src: "/assets/img/gallery/gallery-img01.jpg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/assets/img/gallery/gallery-img02.jpg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/assets/img/gallery/gallery-img03.jpg",
      alt: "Gallery Image 3",
    },
    {
      id: 4,
      src: "/assets/img/gallery/gallery-img04.jpg",
      alt: "Gallery Image 4",
    },
    {
      id: 5,
      src: "/assets/img/gallery/gallery-img05.jpg",
      alt: "Gallery Image 5",
    },
    {
      id: 6,
      src: "/assets/img/gallery/gallery-img06.jpg",
      alt: "Gallery Image 6",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") handleLightboxClose();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="gallery-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center mb-60">
                  <h2 className="tp-section-title mb-20">Our School Gallery</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {galleryImages.map((image) => (
                <div key={image.id} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="gallery-item position-relative mb-30 overflow-hidden"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(image)}
                  >
                    {loadingStates[image.id] && <ImageLoader />}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`img-fluid w-100 ${
                        loadingStates[image.id] ? "opacity-0" : "opacity-100"
                      }`}
                      style={{ height: "300px", objectFit: "cover" }}
                      onLoad={() => {
                        setLoadingStates((prev) => ({
                          ...prev,
                          [image.id]: false,
                        }));
                      }}
                    />
                    <div className="gallery-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="gallery-icon">
                        <i className="far fa-expand-arrows-alt fs-3"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedImage && (
              <div
                className="lightbox-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  zIndex: 1050,
                }}
              >
                <div className="position-relative" style={{ maxWidth: "90vw" }}>
                  <button
                    onClick={handleLightboxClose}
                    className="btn-close btn-close-white position-absolute top-0 end-0"
                    style={{ transform: "translate(100%, -100%)" }}
                    aria-label="Close"
                  ></button>

                  <div
                    onClick={handlePrevImage}
                    className="nav-arrow position-fixed top-50 translate-middle-y"
                    style={{ left: "5%", zIndex: 1060 }}
                  >
                    ‹
                  </div>

                  <div
                    onClick={handleNextImage}
                    className="nav-arrow position-fixed top-50 translate-middle-y"
                    style={{ right: "5%", zIndex: 1060 }}
                  >
                    ›
                  </div>

                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="img-fluid"
                    style={{ maxHeight: "90vh" }}
                  />
                </div>
              </div>
            )}
          </div>

          <style jsx>{`
            .gallery-item {
              border-radius: 8px;
            }

            .gallery-overlay {
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0);
              opacity: 0;
              transition: all 0.3s ease;
            }

            .gallery-icon {
              color: white;
              opacity: 0;
              transform: scale(0.8);
              transition: all 0.3s ease;
            }

            .gallery-item:hover .gallery-overlay {
              background-color: rgba(0, 0, 0, 0.2);
              opacity: 1;
            }

            .gallery-item:hover .gallery-icon {
              opacity: 1;
              transform: scale(1);
            }

            .gallery-item img {
              transition: transform 0.3s ease;
            }

            .gallery-item:hover img {
              transform: scale(1.1);
            }

            .nav-arrow {
              color: white;
              font-size: 6rem;
              cursor: pointer;
              transition: all 0.3s ease;
              padding: 20px;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }

            .nav-arrow:hover {
              opacity: 0.8;
            }
          `}</style>
        </div>
      </Layout>
    </>
  );
}
