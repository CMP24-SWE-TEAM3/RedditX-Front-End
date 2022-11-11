import TestHome from "Features/Authentication/Pages/TestHome";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DummyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
      <Button
        variant="danger"
        className="m-5"
        onClick={() => navigate("login")}
      >
        Login
      </Button>
      <Button
        variant="dark"
        className="m-5"
        onClick={() => navigate("register")}
      >
        Signup
      </Button>
      <Button
        variant="success"
        className="m-5"
        onClick={() => navigate("submit")}
      >
        Create post
      </Button>
      <Button
        variant="light"
        className="m-5"
        onClick={() => navigate("subreddit")}
      >
        Subreddit profile
      </Button>
      <Button
        variant="warning"
        className="m-5"
        onClick={() => navigate("category")}
      >
        Communities leader board
      </Button>
      <Button
        variant="info"
        className="m-5"
        onClick={() => navigate("index-page")}
      >
        index page
      </Button>
      <Button
        variant="secondary"
        className="m-5"
        onClick={() => navigate("search")}
      >
        search
      </Button>
      <Button
        variant="danger"
        className="m-5"
        onClick={() => navigate("forget-password")}
      >
        forget password
      </Button>
      <Button
        variant="dark"
        className="m-5"
        onClick={() => navigate("forget-username")}
      >
        forget username
      </Button>
      <Button
        variant="warning"
        className="m-5"
        onClick={() => navigate("user/reset-password/token")}
      >
        New Password
      </Button>
      <Button
        variant="warning"
        className="m-5"
        onClick={() => navigate("user/reset-password/token")}
      >
        New Password
      </Button>
      <Button
        variant="warning"
        className="m-5"
        onClick={() => navigate("user/reset-password/token")}
      >
        New Password
      </Button>
      <TestHome />
    </div>
  );
};

export default DummyPage;
