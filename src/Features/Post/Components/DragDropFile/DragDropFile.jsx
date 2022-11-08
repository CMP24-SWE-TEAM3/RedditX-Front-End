// Import hooks
import React, { useEffect, useState } from "react";

// Import react dropzone
import { useDropzone } from "react-dropzone";

// Import components
import PreviewImage from "Features/Post/Components/PreviewImage/PreviewImage";
import UploadedImagesContainer from "Features/Post/Components/UploadedImagesContainer/UploadedImagesContainer";

// Import styled components
import {
  DragAndDropFrame,
  UploadButton,
  DragDropParagraph,
} from "./DragDropFile.styled";

// Import contexts
import { useCreatePostAttachments } from "Features/Post/Contexts/createPostAttachments";

/**
 * Drag and drop file component (The component that allows you to drag and drop files)
 *
 * @returns {React.Component} - Drag and drop file component (The component that allows you to drag and drop files)
 */
function DragAndDropFile() {
  // Context for files (Attachments)
  const { createPostAttachments, setCreatePostAttachments } =
    useCreatePostAttachments();

  // State to store the selected image id
  const [selectedImageId, setSelectedImageId] = useState(null);

  // State to store whether the image loading is done or not
  const [isLoadingDone, setIsLoadingDone] = useState(false);

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
        ...createPostAttachments,
        ...acceptedFiles.map((file) => {
          const reader = new FileReader();
          reader.onload = (x) => {
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              src: x.target.result,
              uploadDate: new Date().getTime(),
            });
            // TODO: rerender preview image when image loading is done
            if (reader.readyState === FileReader.DONE)
              setIsLoadingDone(() => !isLoadingDone);
          };
          reader.readAsDataURL(file);
          return file;
        }),
      ];
      setCreatePostAttachments(() => newFiles);
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      createPostAttachments.forEach((file) =>
        URL.revokeObjectURL(file.preview)
      );
  });

  return (
    <div>
      <DragAndDropFrame
        {...getRootProps()}
        containFiles={createPostAttachments.length !== 0}
      >
        <input {...getInputProps()} />
        {createPostAttachments.length === 0 && (
          <DragDropParagraph>
            Drag And drop images or
            <UploadButton variant="light" onClick={open}>
              Upload
            </UploadButton>
          </DragDropParagraph>
        )}
        <UploadedImagesContainer
          files={createPostAttachments}
          setFiles={setCreatePostAttachments}
          open={open}
          selectedImageId={selectedImageId}
          setSelectedImageId={setSelectedImageId}
        />
      </DragAndDropFrame>
      {createPostAttachments.length > 1 && (
        <PreviewImage
          selectedImageId={selectedImageId}
          files={createPostAttachments}
          isLoadingDone={isLoadingDone}
        />
      )}
    </div>
  );
}

export default DragAndDropFile;
