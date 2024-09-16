// pages/uploadImage/UploadPhotoForm.jsx
"use client"; // This marks the component as a Client Component

import { useState } from 'react';

const UploadPhotoForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!selectedFile) {
      alert("Please upload a photo");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("Photo uploaded successfully!");
      } else {
        alert("Failed to upload photo!");
      }
    } catch (error) {
      console.error("Error during upload:", error);
      alert("An error occurred while uploading the photo");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Photo</button>
    </form>
  );
};

export default UploadPhotoForm;
