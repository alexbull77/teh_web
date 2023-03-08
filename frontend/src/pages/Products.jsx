import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ProductCardCustom from "../layout/ProductCardCustom.jsx";
import CustomGridContainer from "../components/CustomGridContainer.jsx";

const Products = ({ products }) => {
    return (
        <CustomGridContainer>
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
        </CustomGridContainer>
    );
};

export default Products;
