"use client";

import "./styles.css";

import { Link } from "react-scroll";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

export default function SectionsNav() {
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
    <div className="mx-3 my-4 flex h-[130px] flex-col justify-between rounded-lg bg-white">
      {navItem.map((item, index) => (
        <Link
          onClick={() => console.log("clicked")}
          to={item.sectionId}
          smooth={true}
          duration={400}
          className="flex cursor-pointer flex-row items-center gap-3"
          key={index}
        >
          <TripOriginIcon fontSize="small" className="text-gray-300" />
          <span className="text-sm ">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
