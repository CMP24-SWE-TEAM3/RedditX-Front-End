// Import react bootstrap components
import Carousel from "react-bootstrap/Carousel";

// Import react hooks
import { useState } from "react";

// Import styled components
import {
  Container,
  Paragraph,
  ImageContainer,
  PostTitle,
} from "./PostContent.styled";

import { BASE_URL } from "API/axios";
import RichTextPostBody from "../RichTextPostBody/RichTextPostBody";
import { useEffect } from "react";
/**
 * PostContent Component that is in the side of Post
 * @returns {React.Component} PostContent component
 */
const PostContent = ({ post }) => {
  // Index of the carousel image
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  return (
    <Container>
      <PostTitle>{post.title}</PostTitle>
      {!isJsonString(post.text) && <Paragraph>{post.text}</Paragraph>}
      {isJsonString(post.text) && <RichTextPostBody post={post} />}
      {!isJsonString(post.text) && (
        <ImageContainer>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={post.attachments.length > 1}
            interval={null}
          >
            {post.attachments.map((attachment, index) => (
              <Carousel.Item key={index}>
                <img
                  crossOrigin="anonymous"
                  className="d-block w-100"
                  src={`${BASE_URL}/posts/files/${attachment}`}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </ImageContainer>
      )}
    </Container>
  );
};

export default PostContent;
