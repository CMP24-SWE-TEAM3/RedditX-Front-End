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
  return (
    <Container>
      <PostTitle>{post.title}</PostTitle>
      <Paragraph>{post.text}</Paragraph>
      <ImageContainer>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={post.attachments.length > 1}
          interval={null}
        >
          {post.attachments.map((attachment) => (
            <Carousel.Item>
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
    </Container>
  );
};

export default PostContent;
