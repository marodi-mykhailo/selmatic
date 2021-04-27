import React, {useEffect, useState} from 'react';
import './SideBar.scss';
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import {
    BarsOutlined, CreditCardOutlined, DingtalkOutlined,
    HomeOutlined, LinkOutlined,
    MailOutlined, RocketOutlined, SettingOutlined,
    ShoppingCartOutlined, StockOutlined,
    SyncOutlined, UsergroupAddOutlined,
    UserOutlined
} from "@ant-design/icons";
import triggerImg from '../../assets/img/sidebar_trigger.jpeg'

const {SubMenu, Item} = Menu

const SideBar = () => {
    useEffect(() => {
        getTime()
    }, [])

    const [isCollapsed, setIsCollapsed] = useState(false)
    const [time, setTime] = useState('')

    const onCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const getTime = () => {
        let date = new Date(),
            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

        setTime(`${hours}:${minutes}:${seconds}`)
    }
    setTimeout(getTime, 1000)

    return (
        <Sider className={"sidebar"}
               width={235}
               trigger={null}
               collapsible
               collapsed={isCollapsed}>
            <div className={"self_clear"}>
                <div style={{backgroundImage: `url(${triggerImg})`}} className={"trigger"} onClick={onCollapse}/>
            </div>
            <div className={"sidebar__nav"}>
                {!isCollapsed ? <h1 className={"sidebar__nav-title"}>Sesja</h1> : <hr className={"sidebar__nav-hr"}/>}
                <Menu className={"sidebar__nav-menu"}
                      theme="light"
                      mode="inline"
                      selectable={false}>
                    <Item style={{backgroundColor: "inherit"}}
                          className={"sidebar__nav-item"}
                          key={"1"}
                          icon={<SyncOutlined/>}>
                        Sesja wygasa za {time}
                    </Item>
                </Menu>
            </div>
            <div className={"sidebar__nav"}>
                {!isCollapsed ? <h1 className={"sidebar__nav-title"}>Navigacja</h1> :
                    <hr className={"sidebar__nav-hr"}/>}
                <Menu className={"sidebar__nav-menu"}
                      theme="light"
                      mode="inline"
                      defaultSelectedKeys={['1']}>
                    <Item className={"sidebar__nav-item"}
                          key={"1"}
                          icon={<HomeOutlined/>}>
                        Dashboard
                    </Item>
                    <Item className={"sidebar__nav-item"}
                          key={"2"}
                          icon={<ShoppingCartOutlined/>}>
                        Transakcje
                    </Item>
                    <Item className={"sidebar__nav-item"}
                          key={"3"}
                          icon={<BarsOutlined/>}>
                        Monitoring
                    </Item>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub1"}
                             icon={<MailOutlined/>}
                             title={"Szablony wiadomości"}>
                        <Item className={"sidebar__nav-item"}
                              key={"4"}>
                            Lista szablonów
                        </Item>

                        <Item className={"sidebar__nav-item"}
                              key={"5"}>
                            Dodaj nowy szablon
                        </Item>
                    </SubMenu>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub2"}
                             icon={<RocketOutlined/>}
                             title={" Bazy kodów"}
                    >
                        <Item className={"sidebar__nav-item"}
                              key={"6"}>
                            Bazy kodów
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"7"}>
                            Dodaj nową bazę
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
                            Allegro
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
                            Doładuj konto
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"12"}>
                            Historia płatności
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"13"}>
                            Faktury
                        </Item>
                    </SubMenu>
                    <Item className={"sidebar__nav-item"}
                          key={"14"}
                          icon={<UsergroupAddOutlined/>}>
                        Klienci
                    </Item>
                    <Item className={"sidebar__nav-item"}
                          key={"15"}
                          icon={<StockOutlined/>}>
                        Statystyki
                    </Item>
                    <SubMenu className={"sidebar__nav-item"}
                             key={"sub5"}
                             icon={<SettingOutlined/>}
                             title={"Ustawienia"}>
                        <Item className={"sidebar__nav-item"}
                              key={"16"}>
                            Konto
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"17"}>
                            Sprzedaż
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"18"}>
                            Powiadomienia
                        </Item>
                        <Item className={"sidebar__nav-item"}
                              key={"19"}>
                            Aplikacja mobilna
                        </Item>
                    </SubMenu>

                </Menu>
            </div>

        </Sider>
    );
};

export default SideBar;