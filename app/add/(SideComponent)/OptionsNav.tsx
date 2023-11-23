// "use client";

// import TripOriginIcon from "@mui/icons-material/TripOrigin";

// export default function OptionsNav() {
//   const navItem = [
//     {
//       name: "Primary Features",
//       location: "",
//     },
//     {
//       name: "Photo",
//       location: "",
//     },
//     {
//       name: "Price",
//       location: "",
//     },
//   ];

//   return (
//     <div className="relative mx-2 my-4 flex h-[130px] flex-col justify-between rounded-lg bg-white">
//       {navItem.map((item, index) => (
//         <div className="relative flex items-center gap-3" key={index}>
//           {index !== 0 && (
//             <div className="absolute bottom-0 left-2 h-6 w-px -translate-y-full translate-x-full bg-gray-300"></div>
//           )}
//           <TripOriginIcon fontSize="small" className="text-gray-300" />
//           <label className="text-sm">{item.name}</label>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import TripOriginIcon from "@mui/icons-material/TripOrigin";

export default function OptionsNav() {
  const navItem = [
    {
      name: "Primary Features",
      location: "",
    },
    {
      name: "Photo",
      location: "",
    },
    {
      name: "Price",
      location: "",
    },
  ];

  return (
    <div className="mx-2 my-4 flex h-[130px] flex-col justify-between rounded-lg bg-white">
      {navItem.map((item, index) => (
        <div className="flex items-center gap-3" key={index}>
          <TripOriginIcon fontSize="small" className="text-gray-300" />
          <label className="text-sm">{item.name}</label>
        </div>
      ))}
    </div>
  );
}
