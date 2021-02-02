import { Link } from "react-router-dom";
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ productSlug }) => {
  return (
    <Link to={`/products/${productSlug}/edit`}>
      <UpdateButtonStyled>Update</UpdateButtonStyled>
    </Link>
  );
};

export default UpdateButton;
