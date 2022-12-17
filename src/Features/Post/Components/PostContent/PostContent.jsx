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
  CarouselItem,
} from "./PostContent.styled";

import { BASE_URL } from "API/axios";
import RichTextPostBody from "../RichTextPostBody/RichTextPostBody";
import { useEffect } from "react";
import isJsonString from "Features/Post/Utils/isJsonString";
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
      {!isJsonString(post.textJSON) && <Paragraph>{post.textJSON}</Paragraph>}
      {isJsonString(post.textJSON) && <RichTextPostBody post={post} />}
      {!isJsonString(post.textJSON) && (
        <ImageContainer>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={post.attachments.length > 1}
            interval={null}
            wrap={false}
            nextIcon={
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIndex(
                    index < post.attachments.length - 1 ? index + 1 : index
                  );
                }}
                aria-hidden="true"
                className="carousel-control-next-icon"
              />
            }
            prevIcon={
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIndex(index > 0 ? index - 1 : index);
                }}
                aria-hidden="true"
                className="carousel-control-prev-icon"
              />
            }
          >
            {post.attachments.map((attachment, index) => (
              <CarouselItem key={index}>
                <img
                  crossOrigin="anonymous"
                  className="d-block w-100"
                  src={`${BASE_URL}/posts/files/${attachment}`}
                  alt="First slide"
                />
              </CarouselItem>
            ))}
          </Carousel>
        </ImageContainer>
      )}
    </Container>
  );
};

export default PostContent;
