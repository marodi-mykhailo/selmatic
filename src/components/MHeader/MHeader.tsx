import React from 'react';
import './MHeader.scss';
import {Header} from "antd/es/layout/layout";
import logo from '../../assets/img/logo.png';
import {BellOutlined, DownOutlined} from "@ant-design/icons";
import {Dropdown} from "antd";
import HeaderBellDropdown from "./Dropdown/HeaderBellDropdown/HeaderBellDropdown";
import HeaderNameDropdown from "./Dropdown/HeaderNameDropdown/HeaderNameDropdown";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {appReducerType} from "../../redux/app.reducer";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import triggerImg from "../../assets/img/sidebar_trigger.jpeg";
import {setIsCollapsed} from "../../redux/sidebar.reducer";
import {MeReducerType} from "../../redux/me.reducer";


const MHeader = () => {

        const dispatch = useDispatch()

        const {isMobile, isTablet} = useSelector<AppRootStateType, appReducerType>(state => state.app)
        const isCollapsed = useSelector<AppRootStateType, boolean>(state => state.sidebar.isCollapsed)

        const me = useSelector<AppRootStateType, MeReducerType>(state => state.me[0])

        const onCollapse = () => {
            dispatch(setIsCollapsed(!isCollapsed))
        }

        return (
            <Header className={"header"}>
                <img className={"header__logo"} src={logo} alt={"logo"}/>
                <div className={"header__menu"}>

                    {!isMobile && <>
                        <Dropdown overlay={HeaderBellDropdown}
                                  placement="bottomRight" arrow>
                            <div className={"header__menu-bell"}>
                                <BellOutlined/>
                            </div>
                        </Dropdown>
                        <Dropdown overlay={HeaderNameDropdown}
                                  placement="bottomRight" arrow>
                            <div className={"header__menu-name"}>
                                <span className={"header__menu-name-text"}>{me?.login}</span>
                                <DownOutlined/>
                            </div>
                        </Dropdown>
                    </>
                    }

                    {(isTablet || isMobile)
                    && <div className={"header-mobile-switcher"}>
                        <div style={{backgroundImage: `url(${triggerImg})`}} className={"trigger"} onClick={onCollapse}/>
                    </div>}
                </div>


                {isMobile &&
                <div className={'header-mobile__sub-header'}>
                    <>
                        <Dropdown overlay={HeaderBellDropdown}
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
                    </>
                </div>
                }


                {(isTablet || isMobile)
                && <div style={!isCollapsed ? {"height": "0", "padding": "0"} : {"height": "800px"}}
                        className={"header-mobile"}>
                    <MobileSideBar isCollapsed={isCollapsed}/>
                </div>}

            </Header>
        );
    }
;

export default MHeader;