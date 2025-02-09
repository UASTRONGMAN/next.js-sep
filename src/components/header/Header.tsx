import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link> <br/>
            <Link href={'/users'}>Users</Link> <br/>
            <Link href={'/posts'}>Posts</Link><br/>
            <Link href={'/comments'}>Comments</Link>
            <hr/>
        </div>
    );
};

export default Header;
