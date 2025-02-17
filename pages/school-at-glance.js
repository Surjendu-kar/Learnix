import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ImageLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
  </div>
);

const BigCard = ({ image, category, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="blog__post-item-two shine__animate-item">
      <div className="blog__post-thumb-two relative">
        <Link href="#" className="shine__animate-link">
          {isLoading && <ImageLoader />}
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            quality={75}
            priority={false}
            onLoadingComplete={() => setIsLoading(false)}
            className={`transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
      </div>
      <div className="blog__post-content-two">
        <Link href="#" className="cat">
          {category}
        </Link>
        <h4 className="title">
          <Link href="#">{title}</Link>
        </h4>
        <p className="mt-2" style={{ color: "white" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const SmallCard = ({ image, category, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="blog__post-item-three shine__animate-item">
      <div className="blog__post-thumb-three relative">
        <Link href="#" className="shine__animate-link">
          {isLoading && <ImageLoader />}
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            quality={75}
            priority={false}
            onLoadingComplete={() => setIsLoading(false)}
            className={`transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
      </div>
      <div className="blog__post-content-three">
        <Link href="#" className="cat">
          {category}
        </Link>
        <h4 className="title">
          <Link href="#">{title}</Link>
        </h4>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default function SchoolAtGlance() {
  const bigCards = [
    {
      image: "/assets/img/infrastucture/img-1.jpg",
      category: "ACADEMICS",
      title: "Exceptional Academic Programs",
      description:
        "Offering comprehensive education with focus on student development and learning excellence",
    },
    {
      image: "/assets/img/infrastucture/img-2.jpeg",
      category: "ACHIEVEMENTS",
      title: "Student Achievements",
      description:
        "Our students excel in academics, sports, and cultural activities at various levels",
    },
  ];

  const smallCards = [
    {
      image: "/assets/img/infrastucture/img-3.jpeg",
      category: "FACULTY",
      title: "Dedicated Teaching Staff",
      description: "Experienced educators committed to student success",
    },
    {
      image: "/assets/img/infrastucture/img-4.jpg",
      category: "ACTIVITIES",
      title: "Co-Curricular Activities",
      description: "Wide range of activities for holistic development",
    },
    {
      image: "/assets/img/infrastucture/img-5.jpeg",
      category: "SPORTS",
      title: "Sports Excellence",
      description: "Regular sports training and competitions",
    },
    {
      image: "/assets/img/infrastucture/img-6.jpg",
      category: "CULTURE",
      title: "Cultural Programs",
      description: "Regular cultural events and celebrations",
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="School At Glance">
      <section className="blog-area-two section-pt-120 section-pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section__title text-center mb-50">
                <span className="sub-title">Discover Our School</span>
                <h2 className="title tg-svg">
                  School At{" "}
                  <span className="position-relative">
                    <span
                      className="svg-icon"
                      id="svg-10"
                      data-svg-icon="assets/img/icons/title_shape.svg"
                    />
                    Glance
                  </span>
                </h2>
                <p className="desc">
                  Experience excellence in education with our comprehensive
                  facilities and dedicated approach to student development
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <BigCard {...bigCards[0]} />
            </div>
            <div className="col-lg-6">
              <SmallCard {...smallCards[0]} />
              <SmallCard {...smallCards[1]} />
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-6">
              <BigCard {...bigCards[1]} />
            </div>
            <div className="col-lg-6">
              <SmallCard {...smallCards[2]} />
              <SmallCard {...smallCards[3]} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
