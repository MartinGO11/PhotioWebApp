import React from 'react';
import {
    Link
} from "react-router-dom";
import { StickyContainer, Sticky } from 'react-sticky';
import { HeaderComponent } from './HeaderComponent';

export const Navbar = () => {
    return (
        <>
            <HeaderComponent />
            <Sticky>
                {({
                    style
                }) => (
                    <nav id='navbar'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                )}
                
            </Sticky>
        </>
    )
}
