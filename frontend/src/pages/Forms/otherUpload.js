import React, { useState } from "react";

export default function OtherDocumentsUpload() {
  const [otherDocument, setOtherDocument] = useState(null);
  const downloadNoc = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const [uploadNoc, setUploadNoc] = useState(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    if(!otherDocument){
      validationErrors.otherDocument = "Document File is required";
    }

    if(!otherDocument){
      validationErrors.uploadNoc = "NOC File is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert(
        "Please fix the following errors:\n\n" +
          Object.values(validationErrors).join("\n")
      );
      return;
    }

    // Reset errors if no validation errors
    setErrors({});

    console.log({
      otherDocument,
      uploadNoc,
    });
  };

  const handleDownload = (file) => {
    const blob = new Blob([file]);
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = file.name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const resetForm = () => {
    setOtherDocument(null);
    setUploadNoc(null);
    setErrors({});
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center my-4 p-4 ">
        <p className="text-4xl font-extrabold">Other Documents Upload Form</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-fit mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Other Document:</span>
          <input
            type="file"
            onChange={(e) => setOtherDocument(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Download NOC:</span>
          <button
            type="file"
            onClick={() => handleDownload(downloadNoc)}
            className="mt-1 mx-4 p-2 w-1/2 border rounded-md"
          >Download</button>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Upload NOC:</span>
          <input
            type="file"
            onChange={(e) => setUploadNoc(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        {/* Display validation errors */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            {Object.entries(errors).map(([field, error], index) => (
              <p key={index}>{`${error}`}</p>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => resetForm()}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
