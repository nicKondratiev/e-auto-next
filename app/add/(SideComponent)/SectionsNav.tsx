"use client";

import "./styles.css";

import { useState, useEffect } from "react";

import { Link } from "react-scroll";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

export default function SectionsNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveId(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    {
      name: "Primary Features",
      sectionId: "primary-section",
    },
    {
      name: "Photo",
      sectionId: "photo-section",
    },
    {
      name: "Price",
      sectionId: "price-section",
    },
  ];

  return (
    <div className="mx-3 my-4 flex h-[100px] flex-col justify-between rounded-lg bg-white">
      {navItem.map((item, index) => (
        <Link
          key={index}
          to={item.sectionId}
          onClick={() => setActiveId(item.sectionId)}
          offset={-10}
          smooth={true}
          spy={true}
          duration={400}
          className={`${
            activeId === item.sectionId
              ? "text-gray-900 duration-300"
              : "text-gray-300"
          } flex cursor-pointer flex-row items-center gap-2`}
        >
          <TripOriginIcon fontSize="small" />
          <span className={`text-xs`}>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
