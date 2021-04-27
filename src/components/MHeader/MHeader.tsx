import React from 'react';
import './MHeader.scss';
import {Header} from "antd/es/layout/layout";
import logo from '../../assets/img/logo.png';
import {BellOutlined, DownOutlined} from "@ant-design/icons";
import {Dropdown} from "antd";
import HeaderBellDropdown from "./Dropdown/HeaderBellDropdown/HeaderBellDropdown";
import HeaderNameDropdown from "./Dropdown/HeaderNameDropdown/HeaderNameDropdown";


const MHeader = () => {
    return (
        <Header className={"header"}>
            <img className={"header__logo"} src={logo} alt={"logo"}/>
            <div className={"header__menu"}>
                <Dropdown  overlay={HeaderBellDropdown}
                          placement="bottomRight" arrow>
                    <div className={"header__menu-bell"}>
                        <BellOutlined/>
                    </div>
                </Dropdown>
                <Dropdown overlay={HeaderNameDropdown}
                          placement="bottomRight" arrow>
                    <div className={"header__menu-name"}>
                        <span className={"header__menu-name-text"}>Marodi Mykhailo </span>
                        <DownOutlined/>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default MHeader;