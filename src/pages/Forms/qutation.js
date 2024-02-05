import React, { useState } from "react";

export default function QuotationPage() {
  // State variables for Quotation Details
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [quotationNumber, setQuotationNumber] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);

  // State variables for Quotation Table
  const [quotationItems, setQuotationItems] = useState([
    { name: "", description: "", print: "", quantity: "", total: "" },
  ]);

  // Validation state
  const [errors, setErrors] = useState({});

  const handleQuotationItemChange = (index, field, value) => {
    const updatedQuotationItems = [...quotationItems];
    updatedQuotationItems[index][field] = value;
    setQuotationItems(updatedQuotationItems);
  };

  const addQuotationItem = () => {
    setQuotationItems([
      ...quotationItems,
      { name: "", description: "", print: "", quantity: "", total: "" },
    ]);
  };

  const removeQuotationItem = (index) => {
    const updatedQuotationItems = quotationItems.filter((_, i) => i !== index);
    setQuotationItems(updatedQuotationItems);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    // Required field validation
    if (!companyName.trim()) {
      validationErrors.companyName = "Company Name is required";
    }

    if (!address.trim()) {
      validationErrors.address = "Address is required";
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = "Phone Number is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!purpose.trim()) {
      validationErrors.purpose = "Purpose is required";
    }

    if (!quotationNumber) {
      validationErrors.quotationNumber = "Quotation Number is required";
    }

    if (!expiryDate) {
      validationErrors.expiryDate = "Expiry Date is required";
    }

    // Validate Quotation Items
    const itemValidationErrors = quotationItems.map((item, index) => {
      const itemErrors = {};

      if (!item.name.trim()) {
        itemErrors[`quotationItems[${index}].name`] = `In Quotation No. ${
          index + 1
        }, Name/Description is required`;
      }

      if (!item.print.trim()) {
        itemErrors[`quotationItems[${index}].print`] = `In Quotation No. ${
          index + 1
        }, Print is required`;
      }

      if (!item.quantity.trim()) {
        itemErrors[`quotationItems[${index}].quantity`] = `In Quotation No. ${
          index + 1
        }, Quantity is required`;
      }

      if (!item.total.trim()) {
        itemErrors[`quotationItems[${index}].total`] = `In Quotation No. ${
          index + 1
        }, Total is required`;
      }

      return itemErrors;
    });

    if (itemValidationErrors.length > 0) {
      itemValidationErrors.forEach((itemErrors, index) => {
        Object.keys(itemErrors).forEach((key) => {
          validationErrors[key] = itemErrors[key];
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
      companyName,
      address,
      phoneNumber,
      email,
      purpose,
      quotationNumber,
      expiryDate,
      quotationItems,
    });
  };

  const resetForm = () => {
    setCompanyName("");
    setAddress("");
    setPhoneNumber(null);
    setEmail("");
    setPurpose("");
    setQuotationNumber(null);
    setExpiryDate(null);
    setQuotationItems([
      { name: "", description: "", print: "", quantity: "", total: "" },
    ]);
    setErrors({});
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center my-4 p-4">
        <p className="text-4xl font-extrabold">Quotation Page</p>
      </div>
      <form
        onSubmit={handleSubmit}
        onReset={resetForm}
        className="max-w-fit mx-auto bg-white p-6 rounded-md shadow-md"
      >
        {/* Quotation Details Section */}
        <div className="mb-6">
          <label className="block mb-2">
            <span className="text-gray-700">Company Name:</span>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Address:</span>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Phone Number:</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
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
            <span className="text-gray-700">Purpose:</span>
            <textarea
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Quotation Number:</span>
            <input
              type="text"
              value={quotationNumber}
              onChange={(e) => setQuotationNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Date Expiry:</span>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="mt-1 p-2 md:w-1/4 border rounded-md"
            />
          </label>
        </div>

        {/* Quotation Table Section */}
        <div className="mb-6">
          <p className="text-2xl font-semibold mb-2">Quotation Table</p>
          <table className="w-full hidden md:block">
            <thead className="">
              <tr>
                <th>Name/Description</th>
                <th>Print</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {quotationItems.map((item, index) => (
                <tr key={index} className="">
                  <td>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        handleQuotationItemChange(index, "name", e.target.value)
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.print}
                      onChange={(e) =>
                        handleQuotationItemChange(
                          index,
                          "print",
                          e.target.value
                        )
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuotationItemChange(
                          index,
                          "quantity",
                          e.target.value
                        )
                      }
                      className="p-1 border rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.total}
                      onChange={(e) =>
                        handleQuotationItemChange(
                          index,
                          "total",
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
                        onClick={() => removeQuotationItem(index)}
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
            {quotationItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p>Item No. {index + 1}</p>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="py-1">
                    Name/Description
                  </label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleQuotationItemChange(index, "name", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="py-1">
                    Print
                  </label>
                  <input
                    type="text"
                    value={item.print}
                    onChange={(e) =>
                      handleQuotationItemChange(index, "print", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="py-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuotationItemChange(
                        index,
                        "quantity",
                        e.target.value
                      )
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="py-1">
                    Total
                  </label>
                  <input
                    type="text"
                    value={item.total}
                    onChange={(e) =>
                      handleQuotationItemChange(index, "total", e.target.value)
                    }
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="flex flex-col py-2">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => removeQuotationItem(index)}
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
            onClick={addQuotationItem}
            className="mt-2 p-2 bg-green-500 text-white rounded-md"
          >
            Add Item
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
            type="reset"
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
