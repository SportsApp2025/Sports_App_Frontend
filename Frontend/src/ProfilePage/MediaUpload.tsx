import React, { useState } from "react";
// Import FontAwesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

interface UploadItem {
  id: number;
  title: string;
  file: File | null;
}

const MediaUpload: React.FC = () => {
  const [photoUploads, setPhotoUploads] = useState<UploadItem[]>([
    { id: Date.now(), title: "", file: null },
  ]);
  const [videoUploads, setVideoUploads] = useState<UploadItem[]>([
    { id: Date.now(), title: "", file: null },
  ]);
  const [activeTab, setActiveTab] = useState<"photo" | "video">("video"); // Track active tab

  const handleAdd = (type: "photo" | "video") => {
    if (type === "photo") {
      setPhotoUploads([
        ...photoUploads,
        { id: Date.now(), title: "", file: null },
      ]);
    } else {
      setVideoUploads([
        ...videoUploads,
        { id: Date.now(), title: "", file: null },
      ]);
    }
  };

  const handleRemove = (id: number, type: "photo" | "video") => {
    if (type === "photo") {
      setPhotoUploads(photoUploads.filter((item) => item.id !== id));
    } else {
      setVideoUploads(videoUploads.filter((item) => item.id !== id));
    }
  };

  const handleTitleChange = (
    id: number,
    value: string,
    type: "photo" | "video"
  ) => {
    if (type === "photo") {
      setPhotoUploads(
        photoUploads.map((item) =>
          item.id === id ? { ...item, title: value } : item
        )
      );
    } else {
      setVideoUploads(
        videoUploads.map((item) =>
          item.id === id ? { ...item, title: value } : item
        )
      );
    }
  };

  const handleFileChange = (
    id: number,
    file: File | null,
    type: "photo" | "video"
  ) => {
    if (type === "photo") {
      setPhotoUploads(
        photoUploads.map((item) =>
          item.id === id ? { ...item, file } : item
        )
      );
    } else {
      setVideoUploads(
        videoUploads.map((item) =>
          item.id === id ? { ...item, file } : item
        )
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-xl font-Raleway font-semibold">Media Upload</h2>

        {/* Tab for switching between Photos and Videos */}
        <div className="flex space-x-4 border-b pb-2 mt-2">
          <span
            onClick={() => setActiveTab("photo")}
            className={`cursor-pointer ${
              activeTab === "photo"
                ? "text-red-500 font-semibold border-b-2 border-red-500"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            Photos
          </span>
          <span
            onClick={() => setActiveTab("video")}
            className={`cursor-pointer ${
              activeTab === "video"
                ? "text-red-500 font-semibold border-b-2 border-red-500"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            Videos
          </span>
        </div>

        {/* Photos Section */}
        {activeTab === "photo" && (
          <div className="mt-4">
            <h3 className="text-lg font-Raleway font-semibold">Title</h3>
            {photoUploads.map((upload) => (
              <div key={upload.id} className="flex items-center space-x-3 mt-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={upload.title}
                  onChange={(e) =>
                    handleTitleChange(upload.id, e.target.value, "photo")
                  }
                  className="border p-2 w-full rounded-md dark:bg-gray-600 dark:text-white"
                />
                <input
                  type="file"
                  
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(upload.id, e.target.files?.[0] || null, "photo")
                  }
                  className="border p-2 file:bg-white file:rounded-lg  file:border-gray-300 file:dark:bg-slate-400 file:dark:text-white rounded-md dark:bg-gray-600 dark:text-white"

                  
                />
                
                
                 
                {photoUploads.length > 1 && (
                  <button
                    onClick={() => handleRemove(upload.id, "photo")}
                    className="text-red-500"
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => handleAdd("photo")}
              className="flex items-center bg-yellow-200 shadow-lg hover:bg-yellow-300 text-black px-3 py-2 rounded-md mt-2 dark:bg-yellow-200 dark:text-black"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-1 font-Opensans" /> Add Photo
            </button>
          </div>
        )}

        {/* Videos Section */}
        {activeTab === "video" && (
          <div className="mt-6">
            <h3 className="text-lg font-Opensans font-semibold">Videos</h3>
            {videoUploads.map((upload) => (
              <div key={upload.id} className="flex items-center space-x-3 mt-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={upload.title}
                  onChange={(e) =>
                    handleTitleChange(upload.id, e.target.value, "video")
                  }
                  className="border p-2 w-full rounded-md dark:bg-gray-600 dark:text-white"
                />
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    handleFileChange(upload.id, e.target.files?.[0] || null, "video")
                  }
                  className="border p-2  file:bg-white file:rounded-lg  file:border-gray-300  file:dark:bg-slate-400 file:dark:text-white rounded-md dark:bg-gray-600 dark:text-white"
                />
                {videoUploads.length > 1 && (
                  <button
                    onClick={() => handleRemove(upload.id, "video")}
                    className="text-red-500"
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => handleAdd("video")}
              className="flex items-center bg-yellow-200 shadow-lg hover:bg-yellow-300 text-black px-3 py-2 rounded-md mt-2 dark:bg-yellow-200 dark:text-black"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-1 font-Opensans" /> Add Video
            </button>
          </div>
        )}

        <div className="flex justify-end items-center mt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 shadow-md rounded-md dark:bg-red-600">
            Upload 
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaUpload;
