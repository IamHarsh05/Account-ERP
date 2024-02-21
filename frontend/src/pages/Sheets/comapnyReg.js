import React, { useEffect, useState } from "react";
import "smart-webcomponents-react/source/styles/smart.default.css";
import { Grid } from "smart-webcomponents-react/grid";

export default function ComapnyRegSheet() {
  const [data, setData] = useState([]);
  const [loding, setLoading] = useState([]);
  const [error, setError] = useState([]);

  // Function to fetch all items from the server
  function getAllUser() {
    fetch(`http://localhost:8000/api/companies`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  const downloadFile = (file) => {
    const fileName = file.addressProofFile.name;
    const fileType = file.addressProofFile.contentType;

    // Convert the Base64 string to a Uint8Array
    const binaryString = atob(file.addressProofFile.data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the Uint8Array
    const blob = new Blob([bytes], { type: fileType });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  console.log(data);

  //UseEffect Hook to Fetch items on component mount
  useEffect(() => {
    getAllUser();
  }, []);

  const columns = [
    {
      label: "Company Name",
      dataField: "name",
    },
    {
      label: "Company Type",
      dataField: "type",
    },
    {
      label: "Purpose",
      dataField: "purpose",
    },
    {
      label: "Paid Capital",
      dataField: "paidCapital",
    },
    {
      label: "Authorized Capital",
      dataField: "authCapital",
    },
    {
      label: "Name Reserved",
      dataField: "reservedName",
    },
    {
      label: "Address",
      dataField: "registerAddress",
    },
    {
      label: "Address Proof",
      dataField: "addressProof",
    },
  ];

  const behavior = {
    columnResizeMode: "growAndShrink",
  };

  const appearance = {
    alternationCount: 2,
    showRowHeader: true,
    showRowHeaderSelectIcon: true,
    showRowHeaderFocusIcon: true,
  };

  const paging = {
    enabled: true,
  };

  const pager = {
    visible: true,
  };

  const sorting = {
    enabled: true,
  };

  const editing = {
    enabled: true,
  };

  const filtering = {
    enabled: true,
  };

  const selection = {
    enabled: true,
  };

  const grouping = {
    enabled: true,
  };

  return (
    <div className="flex w-screen p-4 bg-red-500 flex-col justify-center">
      <Grid
        dataSource={data}
        columns={columns}
        appearance={appearance}
        behavior={behavior}
        paging={paging}
        pager={pager}
        filtering={filtering}
        sorting={sorting}
        editing={editing}
        grouping={grouping}
      >
      {data.map((comapany, index) => (
        <div key={index}>
          <p>{comapany.name}</p>
          <button onClick={() => downloadFile(comapany.addressProof)}>
            Download File
          </button>
        </div>
      ))}
      
      </Grid>
    </div>
  );
}
