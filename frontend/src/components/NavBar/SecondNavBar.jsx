import React, { useState } from "react";

export const SecondNavBar = () => {
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
        <nav>
            <div className='container mx-auto px-6 py-2 flex justify-between items-center'>
                <a className='font-bold text-2xl lg:text-4xl' href='home/'>
                    WEB
                </a>
                <div className='block lg:hidden'>
                    <button
                        className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none'
                        onClick={toggleMenu}
                    >
                        <svg
                            className='fill-current h-3 w-3'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <title>Menu</title>
                            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:block'>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};
