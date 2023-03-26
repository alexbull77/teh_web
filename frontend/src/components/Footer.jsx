import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {"Copyright © "}
            <Link color='inherit' href='https://www.heytherebeautiful.org/'>
                WEB
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function Footer(props) {
    const { description, title } = props;

    return (
        <Box component='footer' sx={{ bgcolor: "background.paper", py: 6 }}>
            <Container maxWidth='lg'>
                <Typography variant='h6' align='center' gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    color='text.secondary'
                    component='p'
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Footer;
