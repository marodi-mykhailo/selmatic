import React from 'react';

const HeaderBellDropdown = () => {
    return (
        <div className={"dropdown header__menu-bell-dropdown"}>
            <div className={"header__menu-bell-dropdown-top"}>
                <p className={"header__menu-bell-dropdown-text"}>
                    Nowych powiadomień: <span className={"bold"}>0</span>
                </p>
            </div>
            <div className={"header__menu-bell-dropdown-content"}></div>
        </div>
    );
};

export default HeaderBellDropdown;