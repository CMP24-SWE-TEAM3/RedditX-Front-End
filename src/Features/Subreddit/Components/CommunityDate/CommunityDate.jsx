import { FiEyeOff } from "react-icons/fi";
import { TbCake } from "react-icons/tb";
import { AddDescription, BirthDay, Private } from "./CommunityDate.styled";

const CommunityDate = () => {
  let isPrivate = true;
  return (
    <>
      <AddDescription>
        <div>Add description</div>
      </AddDescription>
      <BirthDay>
        <div className="cake-day">
          <span className="icon">
            <TbCake />
          </span>
          <span className="text">Created date</span>
        </div>
      </BirthDay>
      {isPrivate && (
        <Private>
          <div className="container">
            <span className="icon">
              <FiEyeOff />
            </span>
            <span className="text">Private</span>
          </div>
        </Private>
      )}
    </>
  );
};

export default CommunityDate;
