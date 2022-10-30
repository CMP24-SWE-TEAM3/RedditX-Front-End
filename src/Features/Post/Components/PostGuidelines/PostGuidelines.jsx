// Import react bootstrap components
import Table from "react-bootstrap/Table";

// Import styled components
import {
  Container,
  PostLogo,
  TableData,
  TableHeader,
} from "./PostGuidelines.styled";

// Import images
import Guideline from "Features/Post/Assets/Images/Post-guidelines.png";

/**
 * Post guidelines component (The post guidelines in the sidebar in the create post page)
 *
 * @returns {React.Component} PostGuidelines component (The post guidelines in the sidebar in the create post page)
 */
const PostGuidelines = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>
              <PostLogo src={Guideline} alt="post guidelines" />
              Posting to Reddit
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>1. Remember the human</TableData>
          </tr>
          <tr>
            <TableData>2. Behave like you would in real life</TableData>
          </tr>
          <tr>
            <TableData>3. Look for the original source of content</TableData>
          </tr>
          <tr>
            <TableData>4. Search for duplicates before posting</TableData>
          </tr>
          <tr>
            <TableData>5. Read the community’s rules</TableData>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PostGuidelines;
