import React, { useRef, useState } from "react";
import axios from "axios";

export default function CompanyReg() {
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [paidCapital, setPaidCapital] = useState("");
  const [authorizedCapital, setAuthorizedCapital] = useState("");
  const [reserveName, setReserveName] = useState(false);
  const [registerAddress, setRegisterAddress] = useState("");
  const [addressProof, setAddressProof] = useState(null);

  const fileInputRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result.split(",")[1]);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    };

    if (file) {
      fileToBase64(file)
        .then((base64String) => {
          setAddressProof({
            addressProofFile: {
              name: file.name,
              data: base64String,
              contentType: file.type,
            },
          });
        })
        .catch((error) => {
          console.error("Error converting file to base64:", error);
        });
    }
  };

  console.log(addressProof);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    if (!companyName.trim()) {
      validationErrors.companyName = "Company Name is required";
    }

    if (!companyType.trim()) {
      validationErrors.companyType = "Company Type is required";
    }

    if (!purpose.trim()) {
      validationErrors.purpose = "Purpose is required";
    }

    if (!paidCapital.trim()) {
      validationErrors.paidCapital = "Paid Capital is required";
    }

    if (!authorizedCapital.trim()) {
      validationErrors.authorizedCapital = "Authorized Capital is required";
    }

    if (!registerAddress.trim()) {
      validationErrors.registerAddress = "Register Address is required";
    }

    if (!addressProof) {
      validationErrors.addressProof = "Address Proof is required";
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

    // Continue with form submission
    console.log({
      name: companyName,
      type: companyType,
      purpose,
      paidCapital,
      authCapital: authorizedCapital,
      reservedName: reserveName,
      registerAddress,
      addressProof,
    });

    try {
      // Make a POST request to your backend API
      const response = await axios.post("http://localhost:8000/api/companies", {
        name: companyName,
        type: companyType,
        purpose,
        paidCapital,
        authCapital: authorizedCapital,
        reservedName: reserveName,
        registerAddress,
        addressProof,
      });
      console.log("Company created:", response.data);
      Reset();
      // Handle success or redirect to another page
    } catch (error) {
      console.error("Error creating company:", error.message);
      // Handle error
    }
  };

  const Reset = () => {
    setCompanyName("");
    setCompanyType("");
    setPurpose("");
    setPaidCapital("");
    setAuthorizedCapital("");
    setReserveName(false);
    setRegisterAddress("");
    setAddressProof(null);

    // Reset the form directly
    if (fileInputRef.current) {
      fileInputRef.current.reset();
    }

    setErrors({});
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center my-4 p-4 ">
        <p className="text-4xl font-extrabold">Company Registration Form</p>
      </div>
      <form
        ref={fileInputRef}
        onSubmit={handleSubmit}
        className="max-w-fit mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Name of the Company:</span>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Company Type:</span>
          <input
            type="text"
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Purpose:</span>
          <textarea
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Paid Capital:</span>
          <input
            type="number"
            value={paidCapital}
            onChange={(e) => setPaidCapital(e.target.value)}
            className="m-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Authorized Capital:</span>
          <input
            type="number"
            value={authorizedCapital}
            onChange={(e) => setAuthorizedCapital(e.target.value)}
            className="m-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="mb-4 flex">
          <span className="text-gray-700">Reserved Your Name:</span>
          <input
            type="checkbox"
            checked={reserveName}
            onChange={() => setReserveName(!reserveName)}
            className="m-2 p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Register Address:</span>
          <input
            type="text"
            value={registerAddress}
            onChange={(e) => setRegisterAddress(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="mb-4 flex">
          <span className="text-gray-700">Upload Address Proof:</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        {/* Display validation errors */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => Reset()}
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
