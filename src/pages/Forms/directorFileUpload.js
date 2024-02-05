import React, { useState } from "react";

export default function DirectorFileUpload() {
  const [panFile, setPanFile] = useState(null);
  const [addressFile, setAddressFile] = useState(null);
  const [passportFile, setPassportFile] = useState(null);
  const [drivingLicenseFile, setDrivingLicenseFile] = useState(null);
  const [votingCardFile, setVotingCardFile] = useState(null);
  const [bankStatementFile, setBankStatementFile] = useState(null);
  const [lightBillFile, setLightBillFile] = useState(null);
  const [passportPhotoFile, setPassportPhotoFile] = useState(null);
  const [directorSignFile, setDirectorSignFile] = useState(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    if (!panFile) {
      validationErrors.panFile = "Pan Card File is required";
    }

    if (!addressFile) {
      validationErrors.addressFile = "Address Proof File is required";
    }

    if (!passportFile) {
      validationErrors.passportFile = "Passport File is required";
    }

    if (!drivingLicenseFile) {
      validationErrors.drivingLicenseFile = "Driving License File is required";
    }

    if (!votingCardFile) {
      validationErrors.votingCardFile = "Voting Card File is required";
    }

    if (!bankStatementFile) {
      validationErrors.bankStatementFile = "Bank Statement File is required";
    }

    if (!lightBillFile) {
      validationErrors.lightBillFile = "Light Bill File is required";
    }

    if (!passportPhotoFile) {
      validationErrors.passportPhotoFile = "Passport Photo File is required";
    }

    if (!directorSignFile) {
      validationErrors.directorSignFile =
        "Director Sign File Photo File is required";
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
      panFile,
      addressFile,
      passportFile,
      drivingLicenseFile,
      votingCardFile,
      bankStatementFile,
      lightBillFile,
      passportPhotoFile,
      directorSignFile,
    });
  };

  const resetForm = () => {
    setPanFile(null);
    setAddressFile(null);
    setPassportFile(null);
    setDrivingLicenseFile(null);
    setVotingCardFile(null);
    setBankStatementFile(null);
    setLightBillFile(null);
    setPassportPhotoFile(null);
    setDirectorSignFile(null);
    setErrors({});
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center my-4 p-4 ">
        <p className="text-4xl font-extrabold">Director File Upload Form</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-fit mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">PAN File:</span>
          <input
            type="file"
            onChange={(e) => setPanFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Address File:</span>
          <input
            type="file"
            onChange={(e) => setAddressFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Passport File:</span>
          <input
            type="file"
            onChange={(e) => setPassportFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Driving License File:</span>
          <input
            type="file"
            onChange={(e) => setDrivingLicenseFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Voting Card File:</span>
          <input
            type="file"
            onChange={(e) => setVotingCardFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Bank Statement File:</span>
          <input
            type="file"
            onChange={(e) => setBankStatementFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Light Bill File:</span>
          <input
            type="file"
            onChange={(e) => setLightBillFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Passport Photo File:</span>
          <input
            type="file"
            onChange={(e) => setPassportPhotoFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Director Sign File:</span>
          <input
            type="file"
            onChange={(e) => setDirectorSignFile(e.target.files[0])}
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
