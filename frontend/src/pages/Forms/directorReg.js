import React, { useState } from "react";

export default function DirectorReg() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [sharePattern, setSharePattern] = useState("");
  const [education, setEducation] = useState("");
  const [dinNumber, setDinNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [panCardNumber, setPanCardNumber] = useState("");
  const [occupation, setOccupation] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!dateOfBirth.trim()) {
      validationErrors.dateOfBirth = "Date of Birth is required";
    }

    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = "Mobile Number is required";
    }

    if (!sharePattern.trim()) {
      validationErrors.sharePattern = "Share Pattern is required";
    }

    if (!education.trim()) {
      validationErrors.education = "Education is required";
    }

    if (!dinNumber.trim()) {
      validationErrors.dinNumber = "DIN Number is required";
    }

    if (!gender) {
      validationErrors.gender = "Gender is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!panCardNumber.trim()) {
      validationErrors.panCardNumber = "PAN Card Number is required";
    }

    if (!occupation.trim()) {
      validationErrors.occupation = "Occupation is required";
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
      name,
      dateOfBirth,
      mobileNumber,
      sharePattern,
      education,
      dinNumber,
      gender,
      email,
      panCardNumber,
      occupation,
    });
  };

  const resetForm = () => {
    setName("");
    setDateOfBirth("");
    setMobileNumber("");
    setSharePattern("");
    setEducation("");
    setDinNumber("");
    setGender("");
    setEmail("");
    setPanCardNumber("");
    setOccupation("");
    setErrors({});
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center my-4 p-4 ">
        <p className="text-4xl font-extrabold">Director Registration Form</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/3 mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            autoFocus
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Date of Birth:</span>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Mobile Number:</span>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Share Pattern:</span>
          <input
            type="text"
            value={sharePattern}
            onChange={(e) => setSharePattern(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Education:</span>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">DIN Number:</span>
          <input
            type="text"
            value={dinNumber}
            onChange={(e) => setDinNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Gender:</span>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">PAN Card Number:</span>
          <input
            type="text"
            value={panCardNumber}
            onChange={(e) => setPanCardNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Occupation:</span>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        {/* Display validation errors */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            {Object.entries(errors).map(([field, error], index) => (
              <p key={index}>{`${field}: ${error}`}</p>
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
