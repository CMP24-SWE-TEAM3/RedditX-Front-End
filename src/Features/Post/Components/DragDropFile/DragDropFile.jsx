// Import hooks
import React, { useEffect, useState } from "react";

// Import react dropzone
import { useDropzone } from "react-dropzone";
import PreviewImage from "../PreviewImage/PreviewImage";
import UploadedImagesContainer from "../UploadedImagesContainer/UploadedImagesContainer";

// Import styled components
import {
  DragAndDropFrame,
  UploadButton,
  DragDropParagraph,
} from "./DragDropFile.styled";

function DragAndDropFile() {
  // State for files
  const [files, setFiles] = useState([]);

  // State to store the selected image id
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Use dropzone hook
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    onDrop: (acceptedFiles) => {
      const newFiles = [
        ...files,
        ...acceptedFiles.map((file) => {
          const reader = new FileReader();
          reader.onload = (x) => {
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              src: x.target.result,
              uploadDate: new Date().getTime(),
            });
          };
          reader.readAsDataURL(file);
          return file;
        }),
      ];
      setFiles(() => newFiles);
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  return (
    <div>
      <DragAndDropFrame {...getRootProps()} containFiles={files.length !== 0}>
        <input {...getInputProps()} />
        {files.length === 0 && (
          <DragDropParagraph>
            Drag And drop images or
            <UploadButton variant="light" onClick={open}>
              Upload
            </UploadButton>
          </DragDropParagraph>
        )}
        <UploadedImagesContainer
          files={files}
          setFiles={setFiles}
          open={open}
          selectedImageId={selectedImageId}
          setSelectedImageId={setSelectedImageId}
        />
      </DragAndDropFrame>
      <PreviewImage selectedImageId={selectedImageId} files={files} />
    </div>
  );
}

export default DragAndDropFile;
