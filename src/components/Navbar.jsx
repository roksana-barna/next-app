import Link from 'next/link';
import React from 'react';

const Navlinks = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/about",
        title: "About",
    },
    {
        path: "/blog",
        title: "Blog",
    },
    {
        path: "/dashboard",
        title: "Dashboard",
    }
];

const Navbar = () => {
    return (
            <nav className='flex justify-between items-center container mx-auto'>
                <h2 className='font-semibold text-3xl'>Next App</h2>
                <ul className='flex justify-center items-center'>
                    {
                        Navlinks.map(({ path,title}) => <li className='px-4' key={path}>
                            <Link href={path}>{title}</Link>
                        </li>
                        )
                    }
                </ul>
            </nav>
    );
};

export default Navbar;