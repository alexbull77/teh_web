import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(products.find((product) => product.id == productId));
    }, []);

    console.log(productId);
    console.log(product);
    // const thisProduct = products.find((prod) => prod.id == productId);
    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                </div>
            ) : (
                <div>Product is not here</div>
            )}
        </div>
    );
};

export default ProductDetail;
