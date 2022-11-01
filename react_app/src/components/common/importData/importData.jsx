// Import Data = Component that import json file

// # Main Import
import React, { useState } from "react";

// # Import Component Style
import "./importData.css";

function ImportData() {
/* State that loads the imported json information */
  const [files, setFiles] = useState([]);

/* State to import errors */
  const [error, setErrorData] = useState([])


/* Function that reads JSON files and stores in State   */

  const readFile = (uploadedFile) =>{
    const fileReader = new FileReader();
    fileReader.onloadend = ()=>{
       try{
          setFiles(JSON.parse(fileReader.result));
          setErrorData(null)      
        }catch(e){
          setErrorData("**Not valid JSON file!**");
          setFiles([])
       }
    }
    if( uploadedFile !== undefined)
       fileReader.readAsText(uploadedFile);
 }

  console.log(files);
  console.log(error);

  return (
    <>
      <h3>Upload Json file - Example : </h3>
        <input class="custom-file-input" type="file" onChange={(e)=>readFile(e.target.files[0])}></input>
    </>
  );
}

export default ImportData;
