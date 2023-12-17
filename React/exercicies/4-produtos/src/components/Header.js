import React from "react";

const MenuItem = ({ texto, ...props }) => {
    return (
        <a style={{ margin: "10px", textDecoration: "underline" }} {...props}>
            {texto}
        </a>
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
                <MenuItem href='/' texto='Home' />
                <MenuItem href='/produtos' texto='Produtos' />
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
