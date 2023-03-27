import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/NavBar/NavBar";
import { SecondNavBar } from "../components/NavBar/SecondNavBar";

export const Root = () => {
    return (
        <>
            <SecondNavBar />
            <Outlet />
            <Footer
                title='Refresh your day with my web project'
                description='Experience the finest selection of premium design choices. Our carefully curated collection will delight your senses and invigorate your day. Try our webpages application today and discover a world of joy and relaxation.'
            />
        </>
    );
};
