import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ProductCardCustom from "../layout/ProductCardCustom";

const Products = ({ products }) => {
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
            <Grid container my={6} rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">
                {!products || products.length === 0 ? (
                    < Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                        width: 1,
                        m: 5,
                    }}>
                        <Typography>
                            <h1>No Products Here!</h1>
                        </Typography>
                    </Box>

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
