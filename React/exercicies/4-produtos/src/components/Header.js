import React from "react";

const MenuItem = ({ texto, ...props }) => {
    return (
        <li style={{ margin: "10px", textDecoration: "underline" }} {...props}>
            {texto}
        </li>
    );
};

const Menu = () => {
    return (
        <div style={{ display: "flex" }}>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    listStyle: "none",
                }}>
                <MenuItem texto='Home' id='home' />
                <MenuItem texto='Produtos' id='produtos' />
            </ul>
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <Menu />
        </header>
    );
};

export default Header;
