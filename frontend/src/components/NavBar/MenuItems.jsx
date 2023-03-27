import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import React from "react";
import { Link } from "react-router-dom";

export const MenuItems = ({ showMenu, active, Links }) => {
    return (
        <ul
            className={
                active
                    ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
                    : "hidden"
            }
        >
            <CloseSharpIcon onClick={showMenu} className='cursor-pointer' />
            {Links.map((link) => (
                <li key={link.name}>
                    <Link to={link.link}>{link.name}</Link>
                </li>
            ))}
        </ul>
    );
};
