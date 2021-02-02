import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";
import { BsPlus } from "react-icons/bs";

const AddButton = () => {
  return (
    <Link to="/cookies/new">
      <AddButtonStyled>
        <BsPlus className="float-right" size="2em" />
      </AddButtonStyled>
    </Link>
  );
};

export default AddButton;
