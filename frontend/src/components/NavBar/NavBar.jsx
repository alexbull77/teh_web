import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button } from "@mui/material/";
import React, { useState } from "react";

const Nav = () => {
    const Links = [
        { name: "Home", link: "/home" },
        { name: "Posts", link: "/posts" },
        { name: "Products", link: "/products" },
        { name: "SignIn", link: "/signin" },
        { name: "SignUp", link: "/signup" },
    ];

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex-grow items-center font-[Poppins] text-gray-800'>
                    <a href='/home'>TeaHeaven</a>
                </div>

                <div
                    className='font-bold text-3xl absolute font-[Poppins] ml-auto md:hidden inset-3 '
                    onClick={toggleMenu}
                >
                    <MenuRoundedIcon />
                </div>
                {/* <div
                    onClick={toggleMenu}
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    <MenuRoundedIcon />
                    {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
                {/* </div> */}

                <ul
                    className={`${
                        open ? "block" : "hidden"
                    } md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:transition-none md:duration-0`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className='md:ml-8 text-xl md:my-0 my-7'
                        >
                            <a
                                href={link.link}
                                className='text-gray-800 hover:text-gray-400 duration-500'
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <div className='py-2 px-6'>
                        <Button href='/products' variant='outlined'>
                            Shop Now
                        </Button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
