import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRootStore } from "../../mst/Stores/RootStore.tsx";
import { observer } from "mobx-react";
export const ProductDetail = observer(() => {
  const { productId } = useParams();
  const { selectedProduct, resetSelectedProduct, selectProductById } = useRootStore();

  if (productId === undefined)
    return null;

  useEffect(() => {
    selectProductById(productId);
    return (() => {
      resetSelectedProduct();
    })
  }, []);

  return (
    <>
      {selectedProduct === undefined ? (
        <div>
          <h1>Post is not here</h1>
        </div>
      ) : (
        <div className="h-screen">
          <div className="mt-7 flex justify-center">
            <h1 className="text-4xl font-bold">{selectedProduct.title}</h1>
          </div>
          <div className="flex justify-center mt-7 ml-10 mr-10">
            <p>{selectedProduct.description}</p>
          </div>
          <div className="mt-7 flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden">
              <img
                src={selectedProduct.image}
                alt="thumbnail"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className=" flex justify-center ml-10 mt-7 text-2xl font-bold">
            {`Price: ${(
              selectedProduct.price -
              (selectedProduct.price * selectedProduct.discountPercentage) / 100
            ).toFixed(2)} USD`}
          </div>
        </div>
      )}
    </>
  );
});

export default ProductDetail;
