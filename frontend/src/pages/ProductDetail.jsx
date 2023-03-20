import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/product/${productId}`)
            .then((res) => setProduct(res.data));
    }, []);

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
