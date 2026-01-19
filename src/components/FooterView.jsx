// export default function FooterView() {
//   return (
//     <footer className="bg-gray-900 text-white py-10 mt-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">
//           Hogo Autofills
//         </h3>
//         <p className="text-gray-400">
//           Premium window film solutions for your home and office.
//         </p>
//         <p className="mt-4 text-sm">© 2025 Hogo Autofills. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }






// import { themes } from "../config/themeConfig";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
// import logo from "../assets/images/logo.png";
 
// export default function FooterView() {
//   return (
//     <footer
//       className="pt-24"
//       style={{
//         backgroundColor: themes.backgroundBlack,
//         color: themes.textWhite,
//       }}
//     >
//       {/* GRID: About (wide) + Company + Service + Contact */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-14">
//         {/* ABOUT – WIDE */}
//         <div className="lg:col-span-2 lg:pr-14">
//           <img
//             src={logo}
//             alt="Hogo Autofills Logo"
//             className="h-20 mb-4 object-contain"
//           />
 
//           <p className="leading-[1.9] opacity-80 max-w-xl">
//             At Hogo Autofills, we’re dedicated to providing professional,
//             high-quality car detailing services. From routine hand washes to
//             advanced ceramic coatings, we help keep your vehicle looking its
//             best.
//           </p>
 
//           {/* Social Icons */}
//           <div className="flex gap-4 mt-8">
//             {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp].map(
//               (Icon, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all"
//                   style={{ backgroundColor: themes.backgroundGray }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.backgroundColor = themes.hover)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.backgroundColor =
//                       themes.backgroundGray)
//                   }
//                 >
//                   <Icon style={{ color: themes.textWhite }} />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
 
//         {/* COMPANY */}
//         <div className="lg:pl-2">
//           <h3 className="text-lg font-semibold mb-8">Company</h3>
//           <ul className="space-y-4 list-none">
//             {["Home", "Gallery", "About Us", "Blog", "Contact"].map((item, i) => (
//               <li
//                 key={i}
//                 className="cursor-pointer transition-all opacity-80"
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.color = themes.hover)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = themes.textWhite)
//                 }
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
 
//         {/* SERVICE */}
//         <div className="lg:pl-1">
//           <h3 className="text-lg font-semibold mb-8">Our Service</h3>
//           <ul className="space-y-4 list-none">
//             {[
//               "Exterior Hand Wash & Wax",
//               "Paint Correction",
//               "Interior Deep Cleaning",
//               "Ceramic Coating Protection",
//               "Engine Bay Detailing",
//               "Headlight Restoration",
//             ].map((item, i) => (
//               <li
//                 key={i}
//                 className="cursor-pointer transition-all opacity-80"
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.color = themes.hover)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = themes.textWhite)
//                 }
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
 
//         {/* CONTACT */}
//         <div className="lg:pl-1">
//           <h3 className="text-lg font-semibold mb-8">Contact Us</h3>
 
//           <div className="space-y-6">
//             <div className="flex gap-4">
//               <MdLocationOn
//                 className="text-xl mt-1"
//                 style={{ color: themes.primary }}
//               />
//               <p>
//                 <span className="font-medium">Head Office</span>
//                 <br />
//                 <span className="opacity-80">
//                   123 Shine Street, Los Angeles, CA
//                 </span>
//               </p>
//             </div>
 
//             <div className="flex gap-4">
//               <MdPhone
//                 className="text-xl mt-1"
//                 style={{ color: themes.primary }}
//               />
//               <p>
//                 <span className="font-medium">Call Us</span>
//                 <br />
//                 <span className="opacity-80">+1 800 987 654</span>
//               </p>
//             </div>
 
//             <div className="flex gap-4">
//               <MdEmail
//                 className="text-xl mt-1"
//                 style={{ color: themes.primary }}
//               />
//               <p>
//                 <span className="font-medium">Email Us</span>
//                 <br />
//                 <span className="opacity-80">support@Hogo Autofills.com</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
 
//       {/* BOTTOM BAR */}
//       <div
//         className="mt-20"
//         style={{ borderTop: `1px solid ${themes.backgroundGray}` }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
//           <p>© 2026 - Hogo Autofills by Reactheme</p>
 
//           <div className="flex gap-8">
//             {["Terms & Conditions", "Privacy Policy"].map((item, i) => (
//               <span
//                 key={i}
//                 className="cursor-pointer transition-all"
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.color = themes.hover)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = themes.textWhite)
//                 }
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
 






 
// import { useEffect, useRef, useState } from "react";
// import DecoratedTitle from "./DecoratedTitle";
// import RollingButton from "./RollingButton";
// import { themes } from "../config/themeConfig";
 
// import about2 from "../assets/images/about2.webp";
// import about1 from "../assets/images/about1.jpg";
 
// export default function AboutView() {
//   return (
//     <>
//       {/* About Section */}
//       <section style={{color: themes.textWhite }}>
//         <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center py-20">
         
//           {/* Images */}
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
//             <img
//               src={about2}
//               alt="Detailing"
//               className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover"
//             />
//             <img
//               src={about1}
//               alt="Detailing"
//               className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover sm:mt-14"
//             />
//           </div>
 
//           {/* Content */}
//           <div className="space-y-8">
//             <DecoratedTitle text="ABOUT US" />
 
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl text-left md:text-justify"
//             style={{ color: themes.backgroundBlack }}
//             >
//               Restoring Lasting Shine, <br /> Inside and Out
//             </h2>
 
//             <p
//               className="leading-relaxed max-w-xl text-left md:text-justify"
//               style={{ color: themes.backgroundBlack }}
//             >
//               At Hogo Autofills, we’re passionate about making every vehicle look
//               its absolute best— inside and out. From restoring showroom-level
//               gloss to deep-cleaning interiors, our expert team delivers
//               flawless results with care and precision.
//             </p>
 
//             <RollingButton text="Read More" />
//           </div>
//         </div>
//       </section>
 
//       {/* Stats Band */}
//       <StatsBand />
//     </>
//   );
// }
 
// /* ===================== STATS BAND ===================== */
 
// function StatsBand() {
//   const stats = [
//     { label: "Hours of Works", value: 65250, icon: "briefcase" },
//     { label: "Happy Customers", value: 23160, icon: "thumb" },
//     { label: "Experienced Workers", value: 1500, icon: "users" },
//     { label: "Years of Experience", value: 20, icon: "medal" },
//   ];
 
//   const [start, setStart] = useState(false);
//   const ref = useRef(null);
 
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setStart(true);
//       },
//       { threshold: 0.3 }
//     );
 
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
 
//   return (
//     <section
//       ref={ref}
//       // style={{ backgroundColor: themes.backgroundBlack }}
//       className="py-20 overflow-hidden"
//     >
//       <div
//         className={`max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 transition-all duration-1000 ${
//           start
//             ? "translate-x-0 opacity-100"
//             : "-translate-x-16 md:-translate-x-32 opacity-0"
//         }`}
//       >
//         {stats.map((item, i) => (
//           <StatItem key={i} item={item} start={start} />
//         ))}
//       </div>
//     </section>
//   );
// }
 
// function StatIcon({ name }) {
//   const cls = "w-10 h-10";
 
//   if (name === "briefcase")
//     return (
//       <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
//         <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2z" />
//       </svg>
//     );
 
//   if (name === "thumb")
//     return (
//       <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
//         <path d="M2 10h4v12H2zm20 1c0-1.1-.9-2-2-2h-6l1-4V3c0-.6-.4-1-1-1h-1l-4 7v13h9c.8 0 1.5-.5 1.8-1.2l2-5c.1-.3.2-.6.2-.8v-4z" />
//       </svg>
//     );
 
//   if (name === "users")
//     return (
//       <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
//         <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-2.7-5.3-4-2-4zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 1.9 2 2.9v3h7v-3c0-2.7-5.3-4-8-4z" />
//       </svg>
//     );
 
//   if (name === "medal")
//     return (
//       <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
//         <path d="M12 2l3 6 6 .9-4.5 4.4L17.8 20 12 17l-5.8 3 1.1-6.7L2.8 8.9 9 8z" />
//       </svg>
//     );
// }
 
// function StatItem({ item, start }) {
//   const [count, setCount] = useState(0);
 
//   useEffect(() => {
//     if (!start) return;
 
//     let current = 0;
//     const end = item.value;
//     const duration = 1500;
//     const step = Math.ceil(end / (duration / 20));
 
//     const timer = setInterval(() => {
//       current += step;
//       if (current >= end) {
//         current = end;
//         clearInterval(timer);
//       }
//       setCount(current);
//     }, 20);
 
//     return () => clearInterval(timer);
//   }, [start, item.value]);
 
//   return (
//     <div className="flex flex-col items-center gap-3 text-center">
//       <StatIcon name={item.icon} />
 
//       <h3
//         className="text-2xl md:text-3xl font-bold"
//         style={{ color: themes.backgroundBlack }}
//       >
//         {count}+
//       </h3>
 
//       <p style={{ color: themes.backgroundBlack }}>{item.label}</p>
//     </div>
//   );
// }
 
 
 
import { themes } from "../config/themeConfig";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/images/logo.png";
 
export default function FooterView() {
  return (
    <footer
      className="pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundColor: themes.backgroundBlack,
        color: themes.textWhite,
      }}
    >
      {/* GRID: About (wide) + Company + Service + Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-14">
        {/* ABOUT – WIDE */}
        <div className="lg:col-span-2 lg:pr-14">
          <img
            src={logo}
            alt="Hogo Autofills Logo"
            className="h-16 sm:h-20 mb-4 object-contain"
          />
 
          <p className="leading-[1.9] opacity-80 max-w-xl">
            At Hogo Autofills, we’re dedicated to providing professional,
            high-quality car detailing services. From routine hand washes to
            advanced ceramic coatings, we help keep your vehicle looking its
            best.
          </p>
 
          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mt-8">
            {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all"
                  style={{ backgroundColor: themes.backgroundGray }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = themes.hover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      themes.backgroundGray)
                  }
                >
                  <Icon style={{ color: themes.textWhite }} />
                </div>
              )
            )}
          </div>
        </div>
 
        {/* COMPANY */}
        <div className="lg:pl-2">
          <h3 className="text-lg font-semibold mb-8">Company</h3>
          <ul className="space-y-4 list-none">
            {["Home", "Gallery", "About Us", "Blog", "Contact"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all opacity-80"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = themes.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = themes.textWhite)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
 
        {/* SERVICE */}
        <div className="lg:pl-1">
          <h3 className="text-lg font-semibold mb-8">Our Service</h3>
          <ul className="space-y-4 list-none">
            {[
              "Exterior Hand Wash & Wax",
              "Paint Correction",
              "Interior Deep Cleaning",
              "Ceramic Coating Protection",
              "Engine Bay Detailing",
              "Headlight Restoration",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all opacity-80"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = themes.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = themes.textWhite)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
 
        {/* CONTACT */}
        <div className="lg:pl-1">
          <h3 className="text-lg font-semibold mb-8">Contact Us</h3>
 
          <div className="space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <MdLocationOn
                className="text-xl mt-1"
                style={{ color: themes.primary }}
              />
              <p>
                <span className="font-medium">Head Office</span>
                <br />
                <span className="opacity-80">
                  123 Shine Street, Los Angeles, CA
                </span>
              </p>
            </div>
 
            <div className="flex gap-3 sm:gap-4">
              <MdPhone
                className="text-xl mt-1"
                style={{ color: themes.primary }}
              />
              <p>
                <span className="font-medium">Call Us</span>
                <br />
                <span className="opacity-80">+1 800 987 654</span>
              </p>
            </div>
 
            <div className="flex gap-3 sm:gap-4">
              <MdEmail
                className="text-xl mt-1"
                style={{ color: themes.primary }}
              />
              <p>
                <span className="font-medium">Email Us</span>
                <br />
                <span className="opacity-80">support@Hogo Autofills.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* BOTTOM BAR */}
      <div
        className="mt-20"
        style={{ borderTop: `1px solid ${themes.backgroundGray}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2026 - Hogo Autofills by Reactheme</p>
 
          <div className="flex gap-8">
            {["Terms & Conditions", "Privacy Policy"].map((item, i) => (
              <span
                key={i}
                className="cursor-pointer transition-all"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = themes.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = themes.textWhite)
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
 
 