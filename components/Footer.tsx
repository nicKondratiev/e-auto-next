import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

import androidSVG from "./svgs/android.svg";
import appleSVG from "./svgs/apple.svg";

import Link from "next/link";
import Image from "next/image";

export function FooterListItem({
  title,
  listItems,
}: {
  title: string;
  listItems: string[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h6 className="text-base font-semibold text-gray-700">{title}</h6>
      <ul className="flex flex-col gap-2">
        {listItems.map((item, key) => (
          <li
            className="cursor-pointer text-sm font-light text-gray-500 hover:text-black hover:underline"
            key={key}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

type FooterObjType = {
  title: string;
  listItems: string[];
};

export default function Footer() {
  const navObject: FooterObjType = {
    title: "Navigation",
    listItems: [
      "VIN Check",
      "Car service",
      "Disassembled cars",
      "Tbilisi Parking",
      "Registration Calculator",
      "Inspection calculator",
      "Advertisements",
    ],
  };

  const helpObject: FooterObjType = {
    title: "Help",
    listItems: ["FAQ", "Send a message", "Request a Call", "info@eauto.ge"],
  };

  const categoriesObject: FooterObjType = {
    title: "Categories",
    listItems: [
      "Sedan",
      "Jeep",
      "Coupe",
      "Hatchback",
      "Universal",
      "Cabriolet",
      "Minivan",
    ],
  };

  const aboutUsObject: FooterObjType = {
    title: "About",
    listItems: ["Story", "Founders", "Team", "Achievements"],
  };

  const socialLinkStyles =
    "flex w-fit items-center rounded-full bg-gray-200 p-3 duration-300 hover:bg-gray-300";

  return (
    <div className="flex h-full w-full flex-col gap-10 bg-white px-10">
      <div className="flex h-36 items-center border-b">
        <div className="flex items-center gap-8">
          <div className="flex gap-3">
            <Image src={androidSVG} alt="androidSVG" />
            <Image src={appleSVG} alt="appleSVG" />
          </div>
          <p className="text-sm font-light text-gray-600">
            Download the app and get constantly updated information
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-44">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-blue-600">
            eauto<span className="text-black">.ge</span>
          </h2>
          <div className="flex h-fit w-full gap-2">
            <Link className={socialLinkStyles} href={"/dashboard"}>
              <InstagramIcon />
            </Link>
            <Link className={socialLinkStyles} href={"/dashboard"}>
              <LinkedInIcon />
            </Link>
            <Link className={socialLinkStyles} href={"/dashboard"}>
              <FacebookIcon />
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-between gap-20">
          <FooterListItem
            title={navObject.title}
            listItems={navObject.listItems}
          />
          <FooterListItem
            title={helpObject.title}
            listItems={helpObject.listItems}
          />
          <FooterListItem
            title={categoriesObject.title}
            listItems={categoriesObject.listItems}
          />
          <FooterListItem
            title={aboutUsObject.title}
            listItems={aboutUsObject.listItems}
          />
        </div>
      </div>

      <div className="flex justify-center border-t py-5">
        <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
      </div>
    </div>
  );
}
