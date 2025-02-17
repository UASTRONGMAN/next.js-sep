import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link> <br/>
            <Link href={'/cars'}>Cars</Link> <br/>
            <Link href={'/form'}>Form</Link> <br/>
            <hr/>
        </div>
    );
};

export default Header;
