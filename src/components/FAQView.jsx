import { useState } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
 
const faqs = [
  {
    q: "What is car detailing?",
    a: "Car detailing is a thorough cleaning, restoration, and finishing of a vehicle to produce a show-quality level of detail."
  },
  {
    q: "How often should I get my car detailed?",
    a: "We recommend every 3–6 months depending on usage and environment."
  },
  {
    q: "What’s included in a full detailing service?",
    a: "Exterior wash, wax, polishing, interior deep cleaning, dashboard treatment, tire shine, and more."
  },
  {
    q: "Will detailing remove scratches and stains?",
    a: "Light scratches and most stains can be removed. Deep scratches may require paint correction."
  },
  {
    q: "How long does a detailing session take?",
    a: "It usually takes between 2–6 hours depending on the service."
  },
];
 
export default function FAQView() {
  const [active, setActive] = useState(0);
 
  return (
    <section
      className="py-24"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
       
        {/* LEFT */}
        <div>
          <DecoratedTitle text="EVERYTHING YOU NEED TO KNOW" style={{ color: themes.backgroundBlack }}/>
          <h2
            className="text-4xl md:text-5xl font-bold mt-6 leading-tight"
            style={{ color: themes.textWhite }}
          >
            Frequently Asked <br /> Questions
          </h2>
        </div>
 
        {/* RIGHT */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b pb-6 cursor-pointer"
              style={{ borderColor: themes.backgroundGray }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3
                  className="text-lg font-medium"
                  style={{ color: themes.textWhite }}
                >
                  {item.q}
                </h3>
 
                <span
                  className={`transition-transform duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                  style={{ color: themes.textWhite }}
                >
                  ▼
                </span>
              </div>
 
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p
                  className="leading-relaxed opacity-80"
                  style={{ color: themes.textWhite }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}