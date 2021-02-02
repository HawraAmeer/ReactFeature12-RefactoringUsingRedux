import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";
import { BsPlusCircle } from "react-icons/bs";

const AddButton = () => {
  return (
    <Link to="/products/new">
      <AddButtonStyled>
        <BsPlusCircle className="float-right" size="2em" />
      </AddButtonStyled>
    </Link>
  );
};

export default AddButton;
