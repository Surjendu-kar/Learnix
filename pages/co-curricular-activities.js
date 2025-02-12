// import Layout from "@/components/layout/Layout";
// import { CoCurricularCard } from "@/components/school-cards/CoCurricularCard";
// import co_curricular_activities from "../data/co_curricular_activities.json";
// import { useDispatch, useSelector } from "react-redux";
// import { addPerPage, addSort } from "@/features/courseFilterSlice";
// import Pagination from "@/components/blog/Pagination";
// import { useEffect, useState } from "react";
// import FilterActivities from "@/components/co-curricular-activities/FilterActivities";

// function CoCurricularActivities() {
//   const dispatch = useDispatch();
//   const { courseSort } = useSelector((state) => state.courseFilter);
//   const { sort, perPage } = courseSort;

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);

//   const activitiesData = Array.isArray(co_curricular_activities)
//     ? co_curricular_activities
//     : co_curricular_activities.coCurricularActivities || [];

//   const sortHandler = (e) => {
//     dispatch(addSort(e.target.value));
//     setCurrentPage(1);
//   };

//   const perPageHandler = (e) => {
//     const value = JSON.parse(e.target.value);
//     const newItemsPerPage = value.end === 0 ? activitiesData.length : value.end;
//     setItemsPerPage(newItemsPerPage);
//     setCurrentPage(1);
//     dispatch(
//       addPerPage({
//         start: 0,
//         end: newItemsPerPage,
//       })
//     );
//   };
//   const getDurationInMinutes = (duration) => {
//     const [time, unit] = duration.split(" ");
//     return unit.includes("hour") ? parseFloat(time) * 60 : parseFloat(time);
//   };

//   const sortFilter = (a, b) => {
//     switch (sort) {
//       case "name_asc":
//         return a.activityName.localeCompare(b.activityName);
//       case "name_desc":
//         return b.activityName.localeCompare(a.activityName);
//       case "duration_asc":
//         return (
//           getDurationInMinutes(a.duration) - getDurationInMinutes(b.duration)
//         );
//       case "duration_desc":
//         return (
//           getDurationInMinutes(b.duration) - getDurationInMinutes(a.duration)
//         );
//       case "participants_asc":
//         return a.maxParticipants - b.maxParticipants;
//       case "participants_desc":
//         return b.maxParticipants - a.maxParticipants;
//       case "latest":
//       case "":
//       default:
//         return new Date(b.date) - new Date(a.date);
//       case "oldest":
//         return new Date(a.date) - new Date(b.date);
//     }
//   };

//   // Calculate pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   const filteredContent = activitiesData
//     ?.sort(sortFilter)
//     .slice(indexOfFirstItem, indexOfLastItem);

//   // Pagination handlers
//   const pages = Math.ceil(activitiesData.length / itemsPerPage);
//   const getPaginationGroup = [...Array(pages)].map((_, i) => i + 1);

//   const handleActive = (item) => {
//     setCurrentPage(item);
//   };

//   const prev = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const next = () => {
//     if (currentPage !== pages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const content = filteredContent.map((item) => (
//     <div className="col" key={item.id}>
//       <CoCurricularCard item={item} />
//     </div>
//   ));

//   useEffect(() => {
//     dispatch(
//       addPerPage({
//         start: 0,
//         end: 6,
//       })
//     );
//   }, []);

//   return (
//     <Layout
//       headerStyle={1}
//       footerStyle={1}
//       breadcrumbTitle="Co Curricular Activities"
//     >
//       <section className="all-courses-area section-py-120">
//         <div
//           // style={{ maxWidth: "1400px", margin: "auto" }}
//           className="container"
//         >
//           <div className="row">
//             <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
//               <FilterActivities />
//             </div>
//             <div className="col-xl-9 col-lg-8">
//               <div className="tab-content" id="myTabContent">
//                 {/* Top Bar */}
//                 <div className="shop-top-wrap courses-top-wrap">
//                   <div className="row align-items-center">
//                     <div className="col-md-6">
//                       <div className="shop-top-left">
//                         <p>
//                           We found {filteredContent?.length} activities for you
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="d-flex justify-content-center justify-content-md-end align-items-center">
//                         <div className="shop-top-right m-0 ms-md-auto">
//                           <select
//                             value={sort}
//                             name="orderby"
//                             className="orderby"
//                             onChange={sortHandler}
//                           >
//                             <option value="">Sort by (Latest First)</option>
//                             <option value="oldest">Oldest First</option>
//                           </select>
//                         </div>
//                         <div>
//                           <select
//                             onChange={perPageHandler}
//                             className="chosen-single form-select ms-3"
//                             value={JSON.stringify(perPage)}
//                           >
//                             <option
//                               value={JSON.stringify({
//                                 start: 0,
//                                 end: 0,
//                               })}
//                             >
//                               All
//                             </option>
//                             <option
//                               value={JSON.stringify({
//                                 start: 0,
//                                 end: 6,
//                               })}
//                             >
//                               6 per page
//                             </option>
//                             <option
//                               value={JSON.stringify({
//                                 start: 0,
//                                 end: 9,
//                               })}
//                             >
//                               9 per page
//                             </option>
//                             <option
//                               value={JSON.stringify({
//                                 start: 0,
//                                 end: 12,
//                               })}
//                             >
//                               12 per page
//                             </option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Grid Content */}
//                 <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
//                   {content}
//                 </div>

//                 {/* Pagination */}
//                 {pages > 1 && (
//                   <Pagination
//                     prev={prev}
//                     currentPage={currentPage}
//                     getPaginationGroup={getPaginationGroup}
//                     next={next}
//                     pages={pages}
//                     handleActive={handleActive}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default CoCurricularActivities;

import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import co_curricular_activities from "../data/co_curricular_activities.json";
import { CoCurricularCard } from "@/components/school-cards/CoCurricularCard";

function CoCurricularActivities() {
  const activitiesData = Array.isArray(co_curricular_activities)
    ? co_curricular_activities
    : co_curricular_activities.coCurricularActivities || [];

  return (
    <ActivityPageTemplate
      data={activitiesData}
      title="Curricula Activities"
      CardComponent={CoCurricularCard}
      breadcrumbTitle="School Activities"
    />
  );
}

export default CoCurricularActivities;
