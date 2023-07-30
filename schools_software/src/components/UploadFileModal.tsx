// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTimes,
//   faUpload,
//   faCheck,
//   faTimesCircle,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";


// const UploadFileModal: React.FC = () => {
//   const [filename, setFilename] = useState("");
//   const [isCopying, setIsCopying] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [progressTimeout, setProgressTimeout] = useState<number | null>(
//     null
//   );
//   const [state, setState] = useState(1);



//   const cancel = () => {
//     setIsUploading(false);
//     setProgress(0);
//     if (progressTimeout) clearTimeout(progressTimeout);
//     setProgressTimeout(null);
//     setState(1);
//     fileReset();
//   };

//   const copy = async () => {
//     if (!isCopying) {
//       setIsCopying(true);
//       try {
//         await navigator.clipboard.writeText(filename);
//         setIsCopying(false);
//       } catch (error) {
//         console.error("Error copying link:", error);
//         setIsCopying(false);
//       }
//     }
//   };

//   const fail = () => {
//     setIsUploading(false);
//     setProgress(0);
//     if (progressTimeout) clearTimeout(progressTimeout);
//     setProgressTimeout(null);
//     setState(2);
//   };

//   const fileDisplay = (name = "") => {
//     setFilename(name);
//   };
//   const file = () => {
//     const fileInput = document.getElementById("fileInput") as HTMLInputElement;
//     fileInput.click();
//   };
//   const fileHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const target = e.target;
//     const file = target?.files?.[0]; 

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e2) => {
//         if (e2.target) {
//           fileDisplay(file.name);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const fileReset = () => {
//     setFilename("");
//   };

//   const progressDisplay = () => {
//     return `${Math.floor(progress * 100)}%`;
//   };

//   const progressLoop = async () => {
//     if (isUploading) {
//       if (progress === 0) {
//         await new Promise((res) => setTimeout(res, 1000));
//         if (!isUploading) {
//           return;
//         } else if (randomInt(0, 2) === 0) {
//           fail();
//           return;
//         }
//       }
//       if (progress < 1) {
//         setProgress(progress + 0.01);
//         setProgressTimeout(setTimeout(progressLoop, 50));
//       } else if (progress >= 1) {
//         setProgressTimeout(
//           setTimeout(() => {
//             if (isUploading) {
//               success();
//               setState(3);
//               setProgressTimeout(null);
//             }
//           }, 250)
//         );
//       }
//     }
//   };

//   const stateDisplay = () => {
//     return state;
//   };

//   const success = () => {
//     setIsUploading(false);
//     setState(3);
//   };

//   const upload = () => {
//     if (!isUploading) {
//       setIsUploading(true);
//       setProgress(0);
//       setState(1);
//       progressLoop();
//     }
//   };
//   const actions = {
//     cancel,
//     copy,
//     fail,
//     file,
//     fileReset,
//     upload
//   };

//   const action = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const actionName = e.currentTarget.dataset.action;
//     if (actionName) {
//       const actionFunc = actions[actionName as keyof typeof actions];
//       if (actionFunc) {
//         actionFunc();
//       }
//     }
//     stateDisplay();
//   };

//   const randomInt = (min = 0, max: number = 2 ** 32) => {
//     const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
//     const relativeValue = (max - min) * percent;
//     return Math.round(min + relativeValue);
//   };

//   return (
//     <div id="upload" className="upload_model d-flex d" data-state={3} data-ready={!!filename}>
//       <div className="upload_model_header">
//         <button className="upload_model_close-button" type="button">
//           <FontAwesomeIcon icon={faTimes} className="upload_model_close-icon" />
//           <span className="upload_model_sr">Close</span>
//         </button>
//       </div>
//       <div className="upload_model_body">
//         <div className="upload_model_col">
//           <FontAwesomeIcon
//             icon={faUpload}
//             className={`upload_model_icon upload_model_icon--blue ${
//               state === 1 ? "hide" : ""
//             }`}
//           />
//           <FontAwesomeIcon
//             icon={faTimesCircle}
//             className={`upload_model_icon upload_model_icon--red ${state === 2 ? "" : "hide"}`}
//           />
//           <FontAwesomeIcon
//             icon={faCheckCircle}
//             className={`upload_model_icon upload_model_icon--green ${
//               state === 3 ? "" : "hide"
//             }`}
//           />
//         </div>
//         <div className="upload_model_col">
//           <div className="upload_model_content">
//             <h2 className="upload_model_title">Upload a File</h2>
//             <p className="upload_model_message">
//               Select a file to upload from your computer or device.
//             </p>
//             <div className="upload_model_actions">
//               <button
//                 className="upload_model_button upload_model_button--upload"
//                 type="button"
//                 data-action="file"
//                 onClick={action}
//               >
//                 Choose File
//               </button>
//               <input
//                 id="file"
//                 type="file"
//                 hidden
//                 onChange={fileHandle}
//               />
//             </div>
//             <div className="upload_model_actions" hidden={filename === ""}>
//               <FontAwesomeIcon icon={faUpload} className="upload_model_file-icon" />
//               <div className="upload_model_file" data-file>
//                 {filename}
//               </div>
//               <button
//                 className="upload_model_close-button"
//                 type="button"
//                 data-action="fileReset"
//                 onClick={fileReset}
//               >
//                 <FontAwesomeIcon icon={faTimes} className="upload_model_close-icon" />
//                 <span className="upload_model_sr">Remove</span>
//               </button>
//               <button
//                 className="upload_model_button"
//                 type="button"
//                 data-action="upload"
//                 onClick={upload}
//               >
//                 Upload
//               </button>
//             </div>
//           </div>
//           <div className="upload_model_content" hidden={state !== 1}>
//             <h2 className="upload_model_title">Uploading…</h2>
//             <p className="upload_model_message">
//               Just give us a moment to process your file.
//             </p>
//             <div className="upload_model_actions">
//               <div className="upload_model_progress">
//                 <div className="upload_model_progress-value" data-progress-value>
//                   {progressDisplay()}
//                 </div>
//                 <div className="upload_model_progress-bar">
//                   <div
//                     className="upload_model_progress-fill"
//                     data-progress-fill
//                     style={{ transform: `translateX(${progressDisplay()})` }}
//                   ></div>
//                 </div>
//               </div>
//               <button
//                 className="upload_model_button"
//                 type="button"
//                 data-action="cancel"
//                 onClick={cancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//           <div className="upload_model_content" hidden={state !== 2}>
//             <h2 className="upload_model_title">Oops!</h2>
//             <p className="upload_model_message">
//               Your file could not be uploaded due to an error. Try uploading it again?
//             </p>
//             <div className="upload_model_actions upload_model_actions--center">
//               <button
//                 className="upload_model_button"
//                 type="button"
//                 data-action="upload"
//                 onClick={upload}
//               >
//                 Retry
//               </button>
//               <button
//                 className="upload_model_button"
//                 type="button"
//                 data-action="cancel"
//                 onClick={cancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//           <div className="upload_model_content" hidden={state !== 3}>
//             <h2 className="upload_model_title">Upload Successful!</h2>
//             <p className="upload_model_message">
//               Your file has been uploaded. You can copy the link to your clipboard.
//             </p>
//             <div className="upload_model_actions upload_model_actions--center">
//               <button
//                 className="upload_model_button"
//                 type="button"
//                 data-action="copy"
//                 onClick={copy}
//               >
//                 Copy Link
//               </button>
//               <button
//                 className="upload_model_button"
//                 type="button"
//                 data-action="cancel"
//                 onClick={cancel}
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadFileModal;

import React, { useState } from 'react';

enum ModalState {
  Hidden,
  Uploading,
  Error,
  Success,
}

const UploadFileModal: React.FC = () => {
  const [filename, setFilename] = useState<string>('');
  const [isCopying, setIsCopying] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [progressTimeout, setProgressTimeout] = useState<number | null>(null);
  const [modalState, setModalState] = useState<ModalState>(ModalState.Hidden);
  const [state, setState] = useState(1)
  const fileHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const fileTarget=target?.files?.[0]
    if (fileTarget) {
      const reader = new FileReader();
      reader.onload = (e2) => {
        setFilename(target.files[0].name);
        setModalState(ModalState.Hidden);
      };
      reader.readAsDataURL(target.files[0]);
    }
  };

  const fileReset = () => {
    setFilename('');
  };
  //   const fileHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target;
  //   const file = target?.files?.[0]; 

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e2) => {
  //       if (e2.target) {
  //         fileDisplay(file.name);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const copy = async () => {
    if (!isCopying) {
      setIsCopying(true);
      const copyButton = document.querySelector("[data-action='copy']") as HTMLButtonElement;
      if (copyButton) {
        // disable
        copyButton.style.width = `${copyButton.offsetWidth}px`;
        copyButton.disabled = true;
        copyButton.textContent = 'Copied!';
        try {
          await navigator.clipboard.writeText(filename);
        } catch (error) {
          console.error('Failed to copy the text: ', error);
        }
        await new Promise((res) => setTimeout(res, 1000));
        // reenable
        setIsCopying(false);
        copyButton.removeAttribute('style');
        copyButton.disabled = false;
        copyButton.textContent = 'Copy Link';
      }
    }
  };

  const cancel = () => {
    setIsUploading(false);
    setProgress(0);
    if (progressTimeout) {
      clearTimeout(progressTimeout);
      setProgressTimeout(null);
    }
    setModalState(ModalState.Hidden);
    fileReset();
  };

  const success = () => {
    setIsUploading(false);
    setModalState(ModalState.Success);
  };

  const fail = () => {
    setIsUploading(false);
    setProgress(0);
    if (progressTimeout) {
      clearTimeout(progressTimeout);
      setProgressTimeout(null);
    }
    setModalState(ModalState.Error);
  };

  const upload = () => {
    if (!isUploading) {
      setIsUploading(true);
      setProgress(0);
      setModalState(ModalState.Uploading);
      progressLoop();
    }
  };

  const progressLoop = () => {
    if (isUploading) {
      if (progress === 0) {
        setTimeout(() => {
          if (!isUploading) {
            return;
          } else if (Utils.randomInt(0, 2) === 0) {
            fail();
            return;
          }
        }, 1000);
      }
      if (progress < 1) {
        setProgress((prevProgress) => prevProgress + 0.01);
        setProgressTimeout(setTimeout(progressLoop, 50));
      } else if (progress >= 1) {
        setProgressTimeout(
          setTimeout(() => {
            if (isUploading) {
              success();
              setProgressTimeout(null);
            }
          }, 250)
        );
      }
    }
  };
  

  const file = () => {
    const fileInput = document.querySelector('#file') as HTMLInputElement;
    fileInput?.click();
  };
// NOT FOR THIS ONE
const stateDisplay = () => {
  return state;
};
  const actions = {
  cancel,
  copy,
  fail,
  file,
  fileReset,
  upload
};

const action = (e: React.MouseEvent<HTMLButtonElement>) => {
  const actionName = e.currentTarget.dataset.action;
  if (actionName) {
    const actionFunc = actions[actionName as keyof typeof actions];
    if (actionFunc) {
      actionFunc();
    }
  }
  stateDisplay();
};
// NOT FOR THIS ONE
  return (
    <div
      id="upload"
      className="upload_model"
      data-state={modalState}
      data-ready={!!filename}
      onClick={(e) => action(e)}
    >
      {/* Modal Header */}
      <div className="upload_model_header">
        <button className="upload_model_close-button" type="button">
          <svg className="upload_model_close-icon" viewBox="0 0 16 16" width="16px" height="16px" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="1,1 15,15" />
              <polyline points="15,1 1,15" />
            </g>
          </svg>
          <span className="upload_model_sr">Close</span>
        </button>
      </div>

      {/* Modal Body */}
      <div className="upload_model_body">
        <div className="upload_model_col">
          {/* File Upload Icons */}
          <svg className="upload_model_icon upload_model_icon--blue" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
            <g fill="none" stroke="hsl(223,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle className="upload_model_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
              <polyline className="upload_model_icon-sdo14" points="7 12 12 7 17 12" strokeDasharray="14.2 14.2" />
              <line className="upload_model_icon-sdo10" x1="12" y1="7" x2="12" y2="17" strokeDasharray="10 10" />
            </g>
          </svg>
          {/* Error Icon */}
          <svg
            className="upload_model_icon upload_model_icon--red"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            aria-hidden="true"
            style={{ display: modalState === ModalState.Error ? 'block' : 'none' }}
          >
            <g fill="none" stroke="hsl(3,90%,50%)" strokeWidth="2" strokeLinecap="round">
              <circle className="upload_model_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
              <line className="upload_model_icon-sdo14" x1="7" y1="7" x2="17" y2="17" strokeDasharray="14.2 14.2" />
              <line className="upload_model_icon-sdo14" x1="17" y1="7" x2="7" y2="17" strokeDasharray="14.2 14.2" />
            </g>
          </svg>
          {/* Check Icon */}
          <svg
            className="upload_model_icon upload_model_icon--green"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            aria-hidden="true"
            style={{ display: modalState === ModalState.Success ? 'block' : 'none' }}
          >
            <g fill="none" stroke="hsl(138,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle className="upload_model_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
              <polyline className="upload_model_icon-sdo14" points="7 12.5 10 15.5 17 8.5" strokeDasharray="14.2 14.2" />
            </g>
          </svg>
        </div>

        <div className="upload_model_col">
          {/* File Upload Content */}
          <div className="upload_model_content" style={{ display: modalState === ModalState.Hidden ? 'block' : 'none' }}>
            <h2 className="upload_model_title">Upload a File</h2>
            <p className="upload_model_message">Select a file to upload from your computer or device.</p>
            <div className="upload_model_actions">
              <button className="upload_model_button upload_model_button--upload" type="button" onClick={file}>
                Choose File
              </button>
              <input id="file" type="file" hidden onChange={fileHandle} />
            </div>
            <div className="upload_model_actions" style={{ display: filename ? 'block' : 'none' }}>
              <svg className="upload_model_file-icon" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="4 1 12 1 20 8 20 23 4 23" />
                  <polyline points="12 1 12 8 20 8" />
                </g>
              </svg>
              <div className="upload_model_file" data-file>
                {filename}
              </div>
              <button className="upload_model_close-button" type="button" data-action="fileReset" onClick={fileReset}>
                <svg className="upload_model_close-icon" viewBox="0 0 16 16" width="16px" height="16px" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="4,4 12,12" />
                    <polyline points="12,4 4,12" />
                  </g>
                </svg>
                <span className="upload_model_sr">Remove</span>
              </button>
              <button className="upload_model_button" type="button" data-action="upload" onClick={upload}>
                Upload
              </button>
            </div>
          </div>

          {/* Uploading Content */}
          <div className="upload_model_content" style={{ display: modalState === ModalState.Uploading ? 'block' : 'none' }}>
            <h2 className="upload_model_title">Uploading...</h2>
            <p className="upload_model_message">Just give us a moment to process your file.</p>
            <div className="upload_model_actions">
              <div className="upload_model_progress">
                <div className="upload_model_progress-value" data-progress-value>
                  {`${Math.floor(progress * 100)}%`}
                </div>
                <div className="upload_model_progress-bar">
                  <div className="upload_model_progress-fill" data-progress-fill style={{ transform: `translateX(${Math.floor(progress * 100)}%)` }} />
                </div>
              </div>
              <button className="upload_model_button" type="button" data-action="cancel" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>

          {/* Error Content */}
          <div className="upload_model_content" style={{ display: modalState === ModalState.Error ? 'block' : 'none' }}>
            <h2 className="upload_model_title">Oops!</h2>
            <p className="upload_model_message">Your file could not be uploaded due to an error. Try uploading it again?</p>
            <div className="upload_model_actions upload_model_actions--center">
              <button className="upload_model_button" type="button" data-action="upload" onClick={upload}>
                Retry
              </button>
              <button className="upload_model_button" type="button" data-action="cancel" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>

          {/* Success Content */}
          <div className="upload_model_content" style={{ display: modalState === ModalState.Success ? 'block' : 'none' }}>
            <h2 className="upload_model_title">Upload Successful!</h2>
            <p className="upload_model_message">Your file has been uploaded. You can copy the link to your clipboard.</p>
            <div className="upload_model_actions upload_model_actions--center">
              <button className="upload_model_button" type="button" data-action="copy" onClick={copy}>
                Copy Link
              </button>
              <button className="upload_model_button" type="button" data-action="cancel" onClick={cancel}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Utils {
  static randomInt(min = 0, max: number = 2 ** 32): number {
    const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
    const relativeValue = (max - min) * percent;
    return Math.round(min + relativeValue);
  }
}

export default UploadFileModal;
