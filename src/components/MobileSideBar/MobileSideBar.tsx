import React from 'react';
import './MobileSideBar.scss';
import {Menu} from "antd";
import {
    BarsOutlined, CreditCardOutlined, DingtalkOutlined,
    HomeOutlined, LinkOutlined,
    MailOutlined,
    RocketOutlined, SettingOutlined,
    ShoppingCartOutlined, StockOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";


const {SubMenu, Item} = Menu

type MobileSideBarPropsType = {
    isCollapsed: boolean
}


const MobileSideBar = ({isCollapsed}: MobileSideBarPropsType) => {

    return (
        <div style={!isCollapsed ? {height: "0", paddingTop: "0"} : {height: "750px"}}
             className={"mobile-sidebar"}>
            <div className={"sidebar__nav"}>
                <h1 className={"sidebar__nav-title"}>Navigacja</h1>
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
                    {/* Need to normal view */}


                </Menu>
            </div>
        </div>
    );
};

export default MobileSideBar;