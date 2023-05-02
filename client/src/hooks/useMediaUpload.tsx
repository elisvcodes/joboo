import axios from "axios";
import { useState } from "react";

const useMediaUpload = () => {
  const uploadMedia = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!
    );
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      return res.data.secure_url;
    } catch (error: any) {
      if (error.response && error.response.status === 413) {
        throw new Error("File too large");
      } else if (error.response && error.response.status === 400) {
        throw new Error("Invalid file type");
      } else {
        throw new Error("Failed to upload file");
      }
    }
  };

  return { uploadMedia };
};

export default useMediaUpload;
