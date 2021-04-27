import React from 'react';
import './App.scss';
import MHeader from "./components/MHeader/MHeader";
import {Layout} from "antd";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Content} from "antd/es/layout/layout";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";

function App() {
    const isCollapsed = useSelector<AppRootStateType, boolean>(state => state.sidebar.isCollapsed)

    return (
        <Layout>
            <MHeader/>
            <Layout>
                <SideBar/>
                <Content style={{marginLeft: isCollapsed ? "80px" : "235px"}}
                         className={"content"}
                >
                    <Dashboard/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
