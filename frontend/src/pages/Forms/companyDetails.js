import React, { useState } from "react";

export default function CompanyDetailRegistration() {
  // State variables for Company Details
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [registerAddress, setRegisterAddress] = useState("");
  const [purposeName, setPurposeName] = useState("");
  const [companyObjectives, setCompanyObjectives] = useState("");

  // State variables for Director/Shareholder Table
  const [directors, setDirectors] = useState([
    { srNo: 1, name: "", din: "", email: "", mobile: "" },
  ]);

  const handleDirectorChange = (index, field, value) => {
    const updatedDirectors = [...directors];
    updatedDirectors[index][field] = value;
    setDirectors(updatedDirectors);
  };

  const addDirector = () => {
    setDirectors([
      ...directors,
      { srNo: directors.length + 1, name: "", din: "", email: "", mobile: "" },
    ]);
  };

  const removeDirector = (index) => {
    const updatedDirectors = directors.filter((_, i) => i !== index);
    setDirectors(updatedDirectors);
  };

  // State variables for Authorized and Paid Capital Table
  const [capitalDetails, setCapitalDetails] = useState([
    { particular: "", numberOfShares: "", amountPerShare: "" },
  ]);

  const handleCapitalChange = (index, field, value) => {
    const updatedCapitalDetails = [...capitalDetails];
    updatedCapitalDetails[index][field] = value;
    setCapitalDetails(updatedCapitalDetails);
  };

  const addCapitalDetail = () => {
    setCapitalDetails([
      ...capitalDetails,
      { particular: "", numberOfShares: "", amountPerShare: "" },
    ]);
  };

  const removeCapitalDetail = (index) => {
    const updatedCapitalDetails = capitalDetails.filter((_, i) => i !== index);
    setCapitalDetails(updatedCapitalDetails);
  };

  // Validation state
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    if (!purposeName.trim()) {
      validationErrors.purposeName = "Purpose Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      validationErrors.mobileNumber = "Invalid mobile number";
    }

    if (!registerAddress.trim()) {
      validationErrors.registerAddress = "Register Address is required";
    }

    if (!companyObjectives.trim()) {
      validationErrors.companyObjectives = "Company Objectives are required";
    }

    // Validation for directors array
    const directorValidationErrors = directors.map((director, index) => {
      const directorErrors = {};

      if (!director.name.trim()) {
        directorErrors[`directors[${index}].name`] = `In Directors ${
          index + 1
        }, Name is required`;
      }

      if (!director.din.trim()) {
        directorErrors[`directors[${index}].din`] = `In Directors ${
          index + 1
        }, DIN is required`;
      }

      if (!director.email.trim()) {
        directorErrors[`directors[${index}].email`] = `In Directors ${
          index + 1
        }, Email is required`;
      } else if (!/\S+@\S+\.\S+/.test(director.email)) {
        directorErrors[`directors[${index}].email`] = `In Directors ${
          index + 1
        }, Invalid email address`;
      }

      if (!director.mobile.trim()) {
        directorErrors[`directors[${index}].mobile`] = `In Directors ${
          index + 1
        }, Mobile is required`;
      } else if (!/^\d{10}$/.test(director.mobile)) {
        directorErrors[`directors[${index}].mobile`] = `In Directors ${
          index + 1
        }, Invalid mobile number"`;
      }

      return directorErrors;
    });

    if (directorValidationErrors.length > 0) {
      directorValidationErrors.forEach((directorErrors, index) => {
        Object.keys(directorErrors).forEach((key) => {
          validationErrors[key] = directorErrors[key];
        });
      });
    }

    // Validation for capitalDetails array
    const capitalDetailsValidationErrors = capitalDetails.map(
      (detail, index) => {
        const detailErrors = {};

        if (!detail.particular.trim()) {
          detailErrors[
            `capitalDetails[${index}].particular`
          ] = `In Capital Details ${index + 1}, Particular is required`;
        }

        if (!detail.numberOfShares.trim()) {
          detailErrors[
            `capitalDetails[${index}].numberOfShares`
          ] = `In Capital Details ${index + 1}, Number of Shares is required`;
        }

        if (!detail.amountPerShare.trim()) {
          detailErrors[
            `capitalDetails[${index}].amountPerShare`
          ] = `In Capital Details ${index + 1}, Amount per Share is required`;
        }

        return detailErrors;
      }
    );

    if (capitalDetailsValidationErrors.length > 0) {
      capitalDetailsValidationErrors.forEach((detailErrors, index) => {
        Object.keys(detailErrors).forEach((key) => {
          validationErrors[key] = detailErrors[key];
        });
      });
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
      email,
      mobileNumber,
      registerAddress,
      purposeName,
      companyObjectives,
      directors,
      capitalDetails,
    });
  };

  const resetForm = () => {
    setEmail("");
    setMobileNumber("");
    setRegisterAddress("");
    setPurposeName("");
    setCompanyObjectives("");
    setDirectors([{ srNo: 1, name: "", din: "", email: "", mobile: "" }]);
    setCapitalDetails([
      { particular: "", numberOfShares: "", amountPerShare: "" },
    ]);
    setErrors({});
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center my-4 p-4 ">
        <p className="text-4xl font-extrabold">
          Company Detail Registration Form
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-fit mx-auto bg-white p-6 rounded-md shadow-md"
      >
        {/* Company Details Section */}
        <div className="mb-6">
          <label className="block mb-2">
            <span className="text-gray-700">Purpose Name of Company:</span>
            <input
              type="text"
              value={purposeName}
              onChange={(e) => setPurposeName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              autoFocus
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Email ID:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Mobile Number:</span>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Register Address:</span>
            <input
              type="text"
              value={registerAddress}
              onChange={(e) => setRegisterAddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Detail of Purpose of Company:</span>
            <textarea
              value={companyObjectives}
              onChange={(e) => setCompanyObjectives(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>

        {/* Director/Shareholder Table Section */}
        <div className="mb-6">
          <p className="text-2xl font-semibold mb-2">
            Detail of Director/Shareholder Table
          </p>
          <table className="w-full hidden md:block">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>DIN</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {directors.map((director, index) => (
                <tr key={index}>
                  <td>{director.srNo}</td>
                  <td>
                    <input
                      type="text"
                      value={director.name}
                      onChange={(e) =>
                        handleDirectorChange(index, "name", e.target.value)
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={director.din}
                      onChange={(e) =>
                        handleDirectorChange(index, "din", e.target.value)
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={director.email}
                      onChange={(e) =>
                        handleDirectorChange(index, "email", e.target.value)
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      value={director.mobile}
                      onChange={(e) =>
                        handleDirectorChange(index, "mobile", e.target.value)
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    {index !== 0 && (
                      <button
                        type="button"
                        onClick={() => removeDirector(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden">
            {directors.map((director, index) => (
              <div key={index} className="flex flex-col">
                <p>Item No. {index + 1}</p>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="py-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={director.name}
                    onChange={(e) =>
                      handleDirectorChange(index, "name", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="din" className="py-1">
                    DIN
                  </label>
                  <input
                    type="text"
                    id="din"
                    value={director.din}
                    onChange={(e) =>
                      handleDirectorChange(index, "din", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="py-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={director.email}
                    onChange={(e) =>
                      handleDirectorChange(index, "email", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="mobile" className="py-1">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={director.mobile}
                    onChange={(e) =>
                      handleDirectorChange(index, "mobile", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => removeDirector(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addDirector}
            className="mt-2 p-2 bg-green-500 text-white rounded-md"
          >
            Add Director
          </button>
        </div>

        {/* Authorized and Paid Capital Table Section */}
        <div className="mb-6">
          <p className="text-2xl font-semibold mb-2">
            Detail of Authorized and Paid Capital Table
          </p>
          <table className="w-full hidden md:block">
            <thead>
              <tr>
                <th>Particular</th>
                <th>No of Shares</th>
                <th>Amount per Share</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {capitalDetails.map((detail, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={detail.particular}
                      onChange={(e) =>
                        handleCapitalChange(index, "particular", e.target.value)
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={detail.numberOfShares}
                      onChange={(e) =>
                        handleCapitalChange(
                          index,
                          "numberOfShares",
                          e.target.value
                        )
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={detail.amountPerShare}
                      onChange={(e) =>
                        handleCapitalChange(
                          index,
                          "amountPerShare",
                          e.target.value
                        )
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    {index !== 0 && (
                      <button
                        type="button"
                        onClick={() => removeCapitalDetail(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden">
            {capitalDetails.map((detail, index) => (
              <div key={index} className="flex flex-col">
                <p>Item No. {index + 1}</p>
                <div className="flex flex-col py-2">
                  <label htmlFor="Particular" className="py-1">
                    Particular
                  </label>
                  <input
                    value={detail.particular}
                    id="Particular"
                    onChange={(e) =>
                      handleCapitalChange(index, "particular", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="noofshares" className="py-1">
                    No of Shares
                  </label>
                  <input
                    type="number"
                    id="noofshares"
                    value={detail.numberOfShares}
                    onChange={(e) =>
                      handleCapitalChange(
                        index,
                        "numberOfShares",
                        e.target.value
                      )
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="amountperShare" className="py-1">
                    Amount per Share
                  </label>
                  <input
                    type="number"
                    id="amountperShare"
                    value={detail.amountPerShare}
                    onChange={(e) =>
                      handleCapitalChange(
                        index,
                        "amountPerShare",
                        e.target.value
                      )
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => removeCapitalDetail(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addCapitalDetail}
            className="mt-2 p-2 bg-green-500 text-white rounded-md"
          >
            Add Capital Detail
          </button>
        </div>

        {/* Display validation errors */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            {Object.entries(errors).map(([field, error], index) => (
              <p key={index}>{`${error}`}</p>
            ))}
          </div>
        )}

        {/* Form Submission Section */}
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
