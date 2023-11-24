import { Dispatch, SetStateAction } from "react";

import CartQuantity from "../../../components/CartQuantity";
import withDelayedQtyUpdate from "../../../components/CartQuantity/hoc/withDelayedQtyUpdate";

import "./ProductFooterDetails.scss";

const ProductFooterDetails = ({
  amount,
  price,
  quantity,
  setQuantity,
}: {
  amount: number;
  price: number | undefined;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}) => {
  const CartQuantityDelayed = withDelayedQtyUpdate(CartQuantity);

  return (
    <div className="product__footer__details">
      <CartQuantityDelayed
        quantity={quantity}
        setQuantity={setQuantity}
        amount={amount}
      />
      <div className="product__footer__price">
        <h3>Price: {(quantity * price!).toFixed(2)}$</h3>
      </div>
    </div>
  );
};

export default ProductFooterDetails;
