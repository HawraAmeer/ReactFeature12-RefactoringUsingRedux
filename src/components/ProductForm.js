import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/actions";
import { SubmitButtonStyled } from "../styles";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const resetForm = () =>
    setProduct({
      name: "",
      price: 0,
      description: "",
      image: "",
    });

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    resetForm();
    history.push("/products");
  };

  return (
    <>
      <h1 className="text-center">Cookie Form</h1>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            min="1"
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            className="form-control"
            type="text"
            name="image"
            onChange={handleChange}
          />
        </div>
        <SubmitButtonStyled className="btn float-right">
          Submit
        </SubmitButtonStyled>
      </form>
    </>
  );
};

export default ProductForm;
