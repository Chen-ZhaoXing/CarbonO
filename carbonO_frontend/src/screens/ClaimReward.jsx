// import React from 'react'
// import axios from "axios";
// import Dropzone from "../components/carbontracker/Dropzone"



// const ClaimReward = () => {

//   const postData = () => {
//     // const apiKey = "AIzaSyC3rJnOOPzFe0snLWmBrgukHmSqFxlimU8";

//     console.log("in");

//     let body = {
//       requests: [
//         {
//           image: {
//             source: {
//               imageUri:
//                 "https://p2d7x8x2.stackpathcdn.com/content/uploads/2016/05/Bill.jpg", //image URL
//             },
//           },
//           features: [
//             {
//               type: "TEXT_DETECTION",
//               maxResults: 1,
//             },
//           ],
//         },
//       ],
//     };

//     axios
//       .post(
//         "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC3rJnOOPzFe0snLWmBrgukHmSqFxlimU8",
//         body
//       )
//       .then((response) => console.log(response));
//   };


//   return (
//     <div>
//       <div className="md: w-1/2 mx-auto shadow-l rounded-2xl pb-2 bg-white mt-32">
//         <Dropzone />
//         <button
//           className="bg-primary-500 bg-[#5E9387]  focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
//             px-7 py-2 w-full text-white text-center rounded-md block sm:w-auto font-bold hover:bg-gray-700 hover:text-white mt-20"
//           as="a"
//           onClick={() => postData()}
//         >
//           Upload Receipt
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ClaimReward

import React from "react";
import { useDropzone } from "react-dropzone";

function ClaimReward({ open }) {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = 
    useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
          <div className="text-center">
            {isDragActive ? (
              <p className="dropzone-content">
                Release to drop file here
              </p>
            ) : (
              <p className="dropzone-content"> 
                Drag 'n' drop file here
              </p>
            )}
            <button type="button" onClick={open} className="btn">
              Click to select file
            </button>
          </div>
        </div>
        <aside>
          <ul>
              {files}
          </ul>
        </aside>
    </div>  
  );
}

export default ClaimReward;
