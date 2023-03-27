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
        // <div className='mt=50 place-items-center h-screen'>
        //     {product ? (
        //         <div>
        //             <h1>{product.title}</h1>
        //             <p>Price: ${product.price}</p>
        //             <p>{product.description}</p>
        //         </div>
        //     ) : (
        //         <div>Product is not here</div>
        //     )}
        // </div>
        <>
            {!product ? (
                <div>
                    <h1>Post is not here</h1>
                </div>
            ) : (
                <div className='h-screen'>
                    <div className='mt-7 flex justify-center'>
                        <h1 className='text-4xl font-bold'>{product.title}</h1>
                    </div>
                    <div className='flex justify-center mt-7 ml-10 mr-10'>
                        <p>{product.description}</p>
                    </div>
                    <div className='mt-7 flex justify-center'>
                        <div className='w-full max-w-md rounded-lg overflow-hidden'>
                            <img
                                src={product.thumbnail}
                                alt='thumbnail'
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                    <div className=' flex justify-center ml-10 mt-7 text-2xl font-bold'>
                        {`Price: ${(
                            product.price -
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)} USD`}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
