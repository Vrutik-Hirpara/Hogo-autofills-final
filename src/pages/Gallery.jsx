 
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
 
// // HERO BG
// import bg from "../assets/images/gallery-page-bg.webp";
 
// // GALLERY IMAGES
// import img1 from "../assets/images/gallery1.webp";
// import img2 from "../assets/images/gallery2.webp";
// import img3 from "../assets/images/gallery3.webp";
// import img4 from "../assets/images/gallery4.webp";
// import img5 from "../assets/images/gallery5.webp";
// import img6 from "../assets/images/gallery6.webp";
// import img7 from "../assets/images/gallery7.webp";
// import img8 from "../assets/images/gallery8.webp";
// import img9 from "../assets/images/gallery4.webp";
// import RollingButton from "../components/RollingButton";
 
// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState("all");
 
//   const galleryImages = [
//     img1, img2, img3, // Interior
//     img4, img5, img6, // Exterior
//     img7, img8, img9, // Facility
//   ];
 
//   const filteredImages =
//     activeFilter === "all"
//       ? galleryImages
//       : activeFilter === "interior"
//       ? galleryImages.slice(0, 3)
//       : activeFilter === "exterior"
//       ? galleryImages.slice(3, 6)
//       : galleryImages.slice(6, 9);
 
//   return (
//     <>
//       {/* ================= GALLERY HERO ================= */}
//   <section
//         className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
//         />
 
//         <div className="relative z-10 max-w-4xl w-full">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{
//               color: themes.textWhite,
//               fontFamily: themes.fontPrimary,
//             }}
//           >
//             Gallery
//           </h1>
 
//           <div className="w-full h-[1px] my-6 bg-white/20" />
 
//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link
//               to="/"
//               className="font-bold transition"
//               style={{ color: themes.backgroundGray }}
//             >
//               Home
//             </Link>
 
//             <span style={{ color: themes.textWhite }}>›</span>
 
//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Gallery
//             </span>
//           </div>
//         </div>
//       </section>
 
 
 
 
 
// {/* ================= GALLERY FILTER & GRID ================= */}
// <section
//   className="py-16 sm:py-20 px-4 sm:px-6"
//   style={{ backgroundColor: themes.backgroundGray }}
// >
//   <div className="max-w-7xl mx-auto">
 
//     {/* FILTER BUTTONS */}
//     <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap">
//       {[
//         { key: "all", label: "View All" },
//         { key: "interior", label: "Interior" },
//         { key: "exterior", label: "Exterior" },
//         { key: "facility", label: "Facility" },
//       ].map((item) => (
//         <button
//           key={item.key}
//           onClick={() => setActiveFilter(item.key)}
//           className="
//             px-4 sm:px-6
//             py-2
//             rounded
//             transition
//             text-xs sm:text-sm md:text-base
//             font-medium
//           "
//           style={{
//             backgroundColor:
//               activeFilter === item.key
//                 ? themes.primary
//                 : themes.backgroundBlack,
//             color: themes.textWhite,
//           }}
//           onMouseEnter={(e) => {
//             if (activeFilter !== item.key) {
//               e.currentTarget.style.backgroundColor = themes.backgroundGray;
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (activeFilter !== item.key) {
//               e.currentTarget.style.backgroundColor = themes.backgroundBlack;
//             }
//           }}
//         >
//           {item.label}
//         </button>
//       ))}
//     </div>
 
//     {/* IMAGE GRID */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
//       {filteredImages.map((img, index) => (
//         <div
//           key={index}
//           className="relative overflow-hidden rounded-xl group"
//           style={{ backgroundColor: themes.backgroundBlack }}
//         >
//           {/* IMAGE */}
//           <img
//             src={img}
//             alt="Gallery"
//             className="
//               w-full
//               h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]
//               object-cover
//               transition-transform duration-500
//               group-hover:scale-110
//             "
//           />
 
//           {/* OVERLAY */}
//           <div
//             className="
//               absolute inset-0
//               opacity-0
//               group-hover:opacity-100
//               transition-opacity duration-300
//               flex items-center justify-center
//             "
//             style={{ backgroundColor: `${themes.backgroundBlack}99` }}
//           >
//             <RollingButton text="VIEW" />
//           </div>
//         </div>
//       ))}
//     </div>
 
//   </div>
// </section>
 
 
//     </>
//   );
// }
 



 
// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
 
// // HERO BG
// import bg from "../assets/images/gallery-page-bg.webp";
 
// // GALLERY IMAGES
// import img1 from "../assets/images/gallery1.webp";
// import img2 from "../assets/images/gallery2.webp";
// import img3 from "../assets/images/gallery3.webp";
// import img4 from "../assets/images/gallery4.webp";
// import img5 from "../assets/images/gallery5.webp";
// import img6 from "../assets/images/gallery6.webp";
// import img7 from "../assets/images/gallery7.webp";
// import img8 from "../assets/images/gallery8.webp";
// import img9 from "../assets/images/gallery4.webp";
 
// import RollingButton from "../components/RollingButton";
 
// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState("all");
 
//   /* ================= HERO ANIMATION ================= */
//   const heroRef = useRef(null);
//   const [heroVisible, setHeroVisible] = useState(false);
 
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setHeroVisible(true);
//       },
//       { threshold: 0.3 }
//     );
 
//     if (heroRef.current) observer.observe(heroRef.current);
//     return () => observer.disconnect();
//   }, []);
 
//   const galleryImages = [
//     img1, img2, img3,
//     img4, img5, img6,
//     img7, img8, img9,
//   ];
 
//   const filteredImages =
//     activeFilter === "all"
//       ? galleryImages
//       : activeFilter === "interior"
//       ? galleryImages.slice(0, 3)
//       : activeFilter === "exterior"
//       ? galleryImages.slice(3, 6)
//       : galleryImages.slice(6, 9);
 
//   return (
//     <>
//       {/* ================= GALLERY HERO ================= */}
//       <section
//         className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
//         />
 
//         {/* HERO CONTENT (ANIMATED) */}
//         <div
//           ref={heroRef}
//           className={`
//             relative z-10 max-w-4xl w-full
//             transition-all duration-700 ease-out
//             ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }
//           `}
//         >
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{
//               color: themes.textWhite,
//               fontFamily: themes.fontPrimary,
//             }}
//           >
//             Gallery
//           </h1>
 
//           <div className="w-full h-[1px] my-6 bg-white/20" />
 
//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link
//               to="/"
//               className="font-bold transition"
//               style={{ color: themes.backgroundGray }}
//             >
//               Home
//             </Link>
 
//             <span style={{ color: themes.textWhite }}>›</span>
 
//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Gallery
//             </span>
//           </div>
//         </div>
//       </section>
 
//       {/* ================= GALLERY FILTER & GRID ================= */}
//       <section
//         className="py-16 sm:py-20 px-4 sm:px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto">
 
//           {/* FILTER BUTTONS */}
//           <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap">
//             {[
//               { key: "all", label: "View All" },
//               { key: "interior", label: "Interior" },
//               { key: "exterior", label: "Exterior" },
//               { key: "facility", label: "Facility" },
//             ].map((item) => (
//               <button
//                 key={item.key}
//                 onClick={() => setActiveFilter(item.key)}
//                 className="px-4 sm:px-6 py-2 rounded transition text-xs sm:text-sm md:text-base font-medium"
//                 style={{
//                   backgroundColor:
//                     activeFilter === item.key
//                       ? themes.primary
//                       : themes.backgroundBlack,
//                   color: themes.textWhite,
//                 }}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
 
//           {/* IMAGE GRID (UNCHANGED) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
//             {filteredImages.map((img, index) => (
//               <div
//                 key={index}
//                 className="relative overflow-hidden rounded-xl group"
//                 style={{ backgroundColor: themes.backgroundBlack }}
//               >
//                 <img
//                   src={img}
//                   alt="Gallery"
//                   className="
//                     w-full
//                     h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]
//                     object-cover
//                     transition-transform duration-500
//                     group-hover:scale-110
//                   "
//                 />
 
//                 <div
//                   className="
//                     absolute inset-0
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-opacity duration-300
//                     flex items-center justify-center
//                   "
//                   style={{ backgroundColor: `${themes.backgroundBlack}99` }}
//                 >
//                   <RollingButton text="VIEW" />
//                 </div>
//               </div>
//             ))}
//           </div>
 
//         </div>
//       </section>
//     </>
//   );
// }
 
 




 
import { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
 
// HERO BG
import bg from "../assets/images/gallery-page-bg.webp";
 
// IMAGES
import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";
import img7 from "../assets/images/gallery7.jpg";
import img8 from "../assets/images/gallery8.jpg";
import img9 from "../assets/images/gallery8.jpg";
 
import RollingButton from "../components/RollingButton";
 
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
 
  const galleryImages = {
    all: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    interior: [img1, img2, img3],
    exterior: [img4, img5, img6],
    facility: [img7, img8, img9],
  };
 
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]
                   flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
 
        {/* SAME HERO ANIMATION AS BLOG */}
        <div
          className="
            relative z-10 max-w-4xl w-full
            transition-all duration-700 ease-out
            opacity-100 translate-y-0
          "
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
          >
            Gallery
          </h1>
 
          <div className="w-full h-[1px] my-6 bg-white/20" />
 
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
              Home
            </Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <span className="font-bold" style={{ color: themes.textWhite }}>
              Gallery
            </span>
          </div>
        </div>
      </section>
 
      {/* ================= FILTER + GRID ================= */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto">
 
          {/* FILTER BUTTONS */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["all", "interior", "exterior", "facility"].map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className="px-6 py-2 rounded text-sm font-medium transition"
                style={{
                  backgroundColor:
                    activeFilter === key
                      ? themes.primary
                      : themes.backgroundBlack,
                  color: themes.textWhite,
                }}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
 
          {/* GRID (REMOUNT ON FILTER CHANGE) */}
          <div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages[activeFilter].map((img, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-xl group
                  transition-all duration-700 ease-out
                  opacity-0 translate-x-16
                  animate-gallery
                `}
                style={{
                  animationDelay: `${index * 180}ms`,
                  backgroundColor: themes.backgroundBlack,
                }}
              >
                {/* IMAGE */}
                <img
                  src={img}
                  alt="Gallery"
                  className="
                    w-full h-[260px] lg:h-[300px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
 
                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  style={{ backgroundColor: `${themes.backgroundBlack}99` }}
                >
                  <RollingButton text="VIEW" />
                </div>
              </div>
            ))}
          </div>
 
        </div>
      </section>
 
      {/* LOCAL STYLE (BLOG-LIKE ANIMATION) */}
      <style>
        {`
          .animate-gallery {
            animation: slideIn 0.7s ease-out forwards;
          }
 
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(64px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
}
 
 
 