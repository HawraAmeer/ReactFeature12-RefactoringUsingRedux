// Components
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
// Styling
import { ProductWrapper } from "../styles";
import UpdateButton from "./buttons/UpdateButton";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <UpdateButton productSlug={product.slug} />
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default ProductItem;
