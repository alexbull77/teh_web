import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import ProductCardCustom from "../layout/ProductCardCustom";

const Products = ({ products }) => {
    // console.log(">>Products.jsx", products);
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
            }}
        >
            <Grid container my={6} rowSpacing={5} columnSpacing={5}>
                {!products ? (
                    <Typography>
                        <h1>No Products Here!</h1>
                    </Typography>
                ) : (
                    products.map((product) => (
                        <Grid item xs={12} md={6} lg={3} key={product.id}>
                            <ProductCardCustom
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                image={product.images}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default Products;
