// Import Data = Component that import json file

// # Main Import
import React, { useEffect, useState } from "react";

// # Import Component Style
import "./importData.css";

function ImportData() {
  const [files, setFiles] = useState([]);
  const [nameFile, setNameFile] = useState([]);


  const readFile = e => {
    const fileReader = new FileReader();
    console.log(e.target)
    const { files } = e.target;
    console.log(files)
    setNameFile(files[0].name);
    fileReader.readAsText(files[0], "UTF-8");
    fileReader.onload = (e) => {
      const content = e.target.result;
      setFiles(JSON.parse(content));
    };
  };

  const removeFile = () => {
    setFiles([]);
    setNameFile([]);
}

  console.log(files);

  return (
    <>
      <h3>Upload Json file - Example : </h3>
      <div className="input-container">
        <label className="custom-file-upload">
          <input type="file" multiple onChange={readFile} />
          <i class="fas fa-upload" />
          <div className="input-text">Browse..</div>
        </label>
        {nameFile ? <div className="file-preview" onClick={removeFile}>{nameFile}</div> : " "}
      </div>
    </>
  );
}

export default ImportData;
