import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductCardCustom from "../layout/ProductCardCustom";

const Products = ({ products }) => {
    return (
        <div>
            <>
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
                        {!products.length ? (
                            <div>No products available</div>
                        ) : (
                            products.map((product) => (
                                <Grid item xs={12} md={6} lg={3}>
                                    <ProductCardCustom
                                        key={product.id}
                                        title={product.title}
                                        description={product.description}
                                        image={product.images}
                                        rating={product.rating}
                                    />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </>
        </div>
    );
};

export default Products;
