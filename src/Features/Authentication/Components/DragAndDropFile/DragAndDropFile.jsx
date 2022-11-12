// Import hooks
import React, { useEffect } from "react";

// Import react dropzone
import { useDropzone } from "react-dropzone";

// Import components
import UploadedImagesContainer from "Features/Authentication/Components/UploadedImagesContainer/UploadedImagesContainer";

// Import styled components
import {
  DragAndDropFrame,
  UploadButton,
  DragDropParagraph,
} from "./DragAndDropFile.styled";

/**
 * Drag and drop file component (The component that allows you to drag and drop files)
 *
 * @param {Array} files - Array of files (images and videos)
 * @param {Function} setFiles - Function to set files (images and videos)
 * @returns {React.Component} - Drag and drop file component (The component that allows you to drag and drop files)
 */
function DragAndDropFile({ file, setFile }) {
  // Use dropzone hook
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )[0]
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    // return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  return (
    <div>
      <DragAndDropFrame {...getRootProps()} containFiles={file !== null}>
        <input {...getInputProps()} />
        {file === null && (
          <DragDropParagraph>
            Drag And drop images or
            <UploadButton variant="light" onClick={open}>
              Upload
            </UploadButton>
          </DragDropParagraph>
        )}
        {file && (
          <UploadedImagesContainer
            file={file}
            setFile={setFile}
            open={open}
          />
        )}
      </DragAndDropFrame>
    </div>
  );
}

export default DragAndDropFile;
