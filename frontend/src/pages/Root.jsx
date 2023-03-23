import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/NavBar/NavBar";

export const Root = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer
                title='Refresh your day with our premium teas'
                description='Experience the finest selection of premium teas from around the world. Our carefully curated collection will delight your senses and invigorate your day. Try our teas today and discover a world of flavor and relaxation.'
            />
        </>
    );
};
