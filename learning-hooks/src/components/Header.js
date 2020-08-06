import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item" child="Accordian"></Link>
            <Link href="/search" className="item" child="Search"></Link>
            <Link href="/translate" className="item" child="Translate"></Link>
        </div>
    );
}

export default Header;