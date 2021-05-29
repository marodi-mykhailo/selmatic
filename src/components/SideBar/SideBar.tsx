import React, {useEffect, useState} from 'react';
import './SideBar.scss';
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import {
    BarsOutlined,
    CreditCardOutlined,
    DingtalkOutlined,
    HomeOutlined,
    LinkOutlined,
    MailOutlined,
    RocketOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    StockOutlined,
    SyncOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import triggerImg from '../../assets/img/sidebar_trigger.jpeg'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setIsCollapsed} from "../../redux/sidebar.reducer";
import {NavLink} from 'react-router-dom';
import {getTime} from "../../assets/helpers/getTime";

const {SubMenu, Item} = Menu

const SideBar = () => {
    const dispatch = useDispatch()
    const isCollapsed = useSelector<AppRootStateType, boolean>(state => state.sidebar.isCollapsed)

    useEffect(() => {
        getTime()
    }, [])

    const [time, setTime] = useState('')

    const onCollapse = () => {
        dispatch(setIsCollapsed(!isCollapsed))
    }

    setTimeout(() => setTime(getTime()), 1000)

    return (
        <Sider className={"sidebar"}
               width={235}
               trigger={null}
               collapsible
               collapsed={isCollapsed}>
            <div className={"self_clear"}>
                <div style={{backgroundImage: `url(${triggerImg})`}} className={"trigger"} onClick={onCollapse}/>
            </div>
            {/*<div className={"sidebar__nav"}>*/}
            {/*    {!isCollapsed ? <h1 className={"sidebar__nav-title"}>Sesja</h1> : <hr className={"sidebar__nav-hr"}/>}*/}
            {/*    <Menu className={"sidebar__nav-menu"}*/}
            {/*          theme="light"*/}
            {/*          mode="inline"*/}
            {/*          selectable={false}>*/}
            {/*        <Item style={{backgroundColor: "inherit"}}*/}
            {/*              className={"sidebar__nav-item"}*/}
            {/*              key={"1"}*/}
            {/*              icon={<SyncOutlined/>}>*/}
            {/*            Sesja wygasa za {time}*/}
            {/*        </Item>*/}
            {/*    </Menu>*/}
            {/*</div>*/}
            <div className={"sidebar__nav"}>
                {/*{!isCollapsed ? <h1 className={"sidebar__nav-title"}>Navigacja</h1> :*/}
                {/*    <hr className={"sidebar__nav-hr"}/>}*/}
                <Menu className={"sidebar__nav-menu"}
                      theme="light"
                      mode="inline"
                      defaultSelectedKeys={['1']}>
                    <Item className={"sidebar__nav-item"}
                          key={"1"}
                          icon={<HomeOutlined/>}>
                        <NavLink activeClassName={"nav-link--active"}
                                 to={"/"}
                        >
                            Dashboard
                        </NavLink>
                    </Item>
                    <Item className={"sidebar__nav-item"}
                          key={"2"}
                          icon={<ShoppingCartOutlined/>}>
                        <NavLink activeClassName={"nav-link--active"}
                                 to={"/transactions"}
                        >
                            Transakcje
                        </NavLink>
                    </Item>
                    <Item className={"sidebar__nav-item"}
                          key={"3"}
                          icon={<BarsOutlined/>}>
                        <NavLink activeClassName={"nav-link--active"}
                                 to={"/monitoring"}
                        >
                            Monitoring
                        </NavLink>
                    </Item>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub1"}
                             icon={<MailOutlined/>}
                             title={"Szablony wiadomości"}>
                        <Item className={"sidebar__nav-item"}
                              key={"4"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/templates"}
                            >
                                Lista szablonów
                            </NavLink>
                        </Item>

                        <Item className={"sidebar__nav-item"}
                              key={"5"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/templates/new"}
                            >
                                Dodaj nowy szablon
                            </NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub2"}
                             icon={<RocketOutlined/>}
                             title={" Bazy kodów"}
                    >
                        <Item className={"sidebar__nav-item"}
                              key={"6"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/databases"}
                            >
                                Bazy kodów
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"7"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/databases/new"}
                            >
                                Dodaj nową bazę
                            </NavLink>
                        </Item>
                    </SubMenu>
                    <Item className={"sidebar__nav-item"}
                          key={"8"}
                          icon={<DingtalkOutlined/>}>
                        Reklamacje
                    </Item>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub3"}
                             icon={<LinkOutlined/>}
                             title={"Integracje"}
                    >
                        <Item className={"sidebar__nav-item"}
                              key={"9"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/integrations/allegro"}
                            >
                                Allegro
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"10"}>
                            Fakturownia
                        </Item>
                    </SubMenu>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub4"}
                             icon={<CreditCardOutlined/>}
                             title={"Płatności"}
                    >
                        <Item className={"sidebar__nav-item"}
                              key={"11"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/payments/top-up"}
                            >
                                Doładuj konto
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"12"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/payments/history"}
                            >
                                Historia płatności
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"13"}>
                            Faktury
                        </Item>
                    </SubMenu>
                    <Item className={"sidebar__nav-item"}
                          key={"14"}
                          icon={<UsergroupAddOutlined/>}>
                        <NavLink activeClassName={"nav-link--active"}
                                 to={"/customers"}
                        >
                            Klienci
                        </NavLink>
                    </Item>
                    <Item className={"sidebar__nav-item"}
                          key={"15"}
                          icon={<StockOutlined/>}>
                        <NavLink activeClassName={"nav-link--active"}
                                 to={"/statistics"}
                        >
                            Statystyki
                        </NavLink>

                    </Item>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub5"}
                             icon={<SettingOutlined/>}
                             title={"Ustawienia"}>
                        <Item className={"sidebar__nav-item"}
                              key={"16"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/settings/account"}
                            >
                                Konto
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"17"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/settings/sales"}
                            >
                                Sprzedaż
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"18"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/settings/notifications"}
                            >
                                Powiadomienia
                            </NavLink>
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"19"}>
                            <NavLink activeClassName={"nav-link--active"}
                                     to={"/settings/mobile"}
                            >
                                Aplikacja mobilna
                            </NavLink>
                        </Item>
                    </SubMenu>

                    {/* Need to normal view */}

                    <Item className={"sidebar__nav-item"}
                          key={"20"}
                    />
                    <Item className={"sidebar__nav-item"}
                          key={"21"}
                    />
                    <Item className={"sidebar__nav-item"}
                          key={"22"}
                    />

                    {/* Need to normal view */}


                </Menu>
            </div>

        </Sider>
    );
};

export default SideBar;