"use client";

import { useRef } from "react";
import useStore from "../../../app/store";

import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function ImgInput() {
  const { updateField, inputFields, isFormSubmitted } = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "listing-imgs");

      await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      ).then(async (res) => {
        const data = await res.json();

        updateField("img", data.secure_url);
      });
    }
  };

  return (
    <div
      onClick={() => inputRef?.current?.click()}
      className={`${
        isFormSubmitted && !inputFields.img
          ? "border-red-300"
          : "border-blue-500"
      } flex h-[80px] w-full cursor-pointer items-center gap-2 rounded-lg border border-dashed border-blue-500 bg-blue-100 px-2`}
    >
      <div className="flex items-center text-sm font-semibold text-blue-500">
        <span className="p-3">
          <CameraAltIcon className="text-blue-500" fontSize="large" />
        </span>
        Upload Photo
      </div>
      <input
        name="image"
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/heif,image/heic, image/webp"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
