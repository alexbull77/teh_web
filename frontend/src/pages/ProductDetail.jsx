import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${productId}`)
            .then((res) => setProduct(res.data));
    }, []);

    return (
        <div className='mt=50 place-items-center h-screen'>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
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
