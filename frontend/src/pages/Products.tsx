import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import CustomGridContainer from "../components/CustomGridContainer.tsx";
import ProductCardCustom from "../layout/ProductCardCustom.tsx";
import { useRootStore } from "../MST/Stores/RootStore.tsx";

const Products = observer(() => {
  const { products, fetchProducts, haveProducts } = useRootStore();

  // const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
    // axios
    //     .get("https://dummyjson.com/products")
    //     .then((response) => setProducts(response.data.products))
    //     .catch((error) => {
    //         console.log(error);
    //     });
  }, []);

  return (
    <CustomGridContainer>
      {!haveProducts || products.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 1,
            m: 5,
          }}
        >
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
              image={product.image}
              price={product.price}
              // quantity={product.quantity}
            />
          </Grid>
        ))
      )}
    </CustomGridContainer>
  );
});

export default Products;
