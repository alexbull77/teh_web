import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRootStore } from "../MST/Stores/RootStore.tsx";
import { observer } from "mobx-react";

export const ProductDetail = observer(() => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { findProductById } = useRootStore();

  useEffect(() => {
    setProduct(findProductById(productId));
  }, []);

  return (
    <>
      {!product ? (
        <div>
          <h1>Post is not here</h1>
        </div>
      ) : (
        <div className="h-screen">
          <div className="mt-7 flex justify-center">
            <h1 className="text-4xl font-bold">{product.title}</h1>
          </div>
          <div className="flex justify-center mt-7 ml-10 mr-10">
            <p>{product.description}</p>
          </div>
          <div className="mt-7 flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt="thumbnail"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className=" flex justify-center ml-10 mt-7 text-2xl font-bold">
            {`Price: ${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)} USD`}
          </div>
        </div>
      )}
    </>
  );
});

export default ProductDetail;
