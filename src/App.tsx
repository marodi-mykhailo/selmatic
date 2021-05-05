import React from 'react';
import './App.scss';
import MHeader from "./components/MHeader/MHeader";
import {Layout} from "antd";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Content} from "antd/es/layout/layout";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import Transactions from "./pages/Transakcje/Transakcje";
import MessageTemplates from "./pages/MessageTemplates/MessageTemplates";
import {Redirect, Route, Switch} from 'react-router-dom';
import CodeDatabase from "./pages/CodeDatabase/CodeDatabase";
import Monitoring from "./pages/Monitoring/Monitoring";
import TextEditor from "./components/TextEditor/TextEditor";
import Customers from "./pages/Customers/Customers";
import CustomersInfo from "./pages/CustomersInfo/CustomersInfo";

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
                    <Switch>
                        <Route exact path={['/', '/dashboard']} render={() => <Dashboard/>}/>
                        <Route path={'/transactions'} render={() => <Transactions/>}/>
                        <Route path={'/templates'} render={() => <MessageTemplates/>}/>
                        <Route path={'/databases'} render={() => <CodeDatabase/>}/>
                        <Route path={'/monitoring'} render={() => <Monitoring/>}/>
                        <Route path={'/customers/:id'} render={() => <CustomersInfo/>}/>
                        <Route path={'/customers'} render={() => <Customers/>}/>
                        <Route path={'/404'} render={() => <h1 className={"header-404"}>404 Page not found</h1>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                    <TextEditor/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
