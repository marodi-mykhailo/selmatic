import React from 'react';
import {KeyOutlined, LockOutlined} from "@ant-design/icons";

const HeaderNameDropdown = () => {
    return (
        <div className={"dropdown header__menu-name-dropdown"}>
            <ul className={"header__menu-name-dropdown-list"}>
                <li className={"header__menu-name-dropdown-list-item"}>
                    <LockOutlined className={"header__menu-name-dropdown-list-item-icon"}/>
                    <span className={"header__menu-name-dropdown-list-item-text"}>Zablokuj sesję</span>
                </li>
                <li className={"header__menu-name-dropdown-list-item"}>
                    <KeyOutlined className={"header__menu-name-dropdown-list-item-icon"}/>
                    <span className={"header__menu-name-dropdown-list-item-text"}>Wyloguj się</span>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNameDropdown;