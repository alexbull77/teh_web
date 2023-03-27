import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar/NavBar";

export const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer
                title='Refresh your day with my web project'
                description='Experience the finest selection of premium design choices. Our carefully curated collection will delight your senses and invigorate your day. Try our webpages application today and discover a world of joy and relaxation.'
            />
        </>
    );
};
