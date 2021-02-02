import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { SubmitButtonStyled } from "../styles";
import { useHistory, useParams } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { productSlug } = useParams();
  const _product = useSelector((state) => state.products).find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    _product ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (_product) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    history.push("/products");
  };

  return (
    <>
      <h1 className="text-center">{_product ? "Update" : "Create"} Cookie</h1>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={product.name}
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
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            className="form-control"
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <SubmitButtonStyled className="btn float-right">
          {_product ? "Update" : "Create"}
        </SubmitButtonStyled>
      </form>
    </>
  );
};

export default ProductForm;
