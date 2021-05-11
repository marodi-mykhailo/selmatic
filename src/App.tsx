import React, {useEffect} from 'react';
import './App.scss';
import MHeader from "./components/MHeader/MHeader";
import {Layout} from "antd";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Content} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import Transactions from "./pages/Transakcje/Transakcje";
import MessageTemplates from "./pages/MessageTemplates/MessageTemplates";
import {Redirect, Route, Switch} from 'react-router-dom';
import CodeDatabase from "./pages/CodeDatabase/CodeDatabase";
import Monitoring from "./pages/Monitoring/Monitoring";
import TextEditor from "./components/TextEditor/TextEditor";
import Customers from "./pages/Customers/Customers";
import CustomersInfo from "./pages/CustomersInfo/CustomersInfo";
import NewCodeDatabase from "./pages/CodeDatabase/NewCodeDatabase/NewCodeDatabase";
import Statistic from "./pages/Statistic/Statistic";
import {appReducerType, setIsDesktop, setIsMobile, setIsTablet} from './redux/app.reducer';
import {setIsCollapsed} from "./redux/sidebar.reducer";

function App() {
    const isCollapsed = useSelector<AppRootStateType, boolean>(state => state.sidebar.isCollapsed)
    const {isMobile, isTablet, isDesktop} = useSelector<AppRootStateType, appReducerType>(state => state.app)

    const dispatch = useDispatch()

    useEffect(() => {

        changeToTablet()

        window.addEventListener('resize', changeToTablet)

        return () => {
            window.removeEventListener('resize', changeToTablet)
        }

    }, [isMobile, isTablet, isDesktop])


    function changeToTablet() {

        if (window.outerWidth < 482 && !isMobile) {
            dispatch(setIsMobile())
            dispatch(setIsCollapsed(false))
        }

        if (window.outerWidth < 992 && window.outerWidth > 482 && !isTablet) {
            console.log(isTablet)
            dispatch(setIsTablet())
            dispatch(setIsCollapsed(false))
        }

        if (window.outerWidth > 992 && !isDesktop) {
            dispatch(setIsDesktop())
        }


    }

    const getLeftMargin = () => {
        return (isTablet || isMobile) ? "0" : isCollapsed ? "80px" : "235px"
    }


    return (
        <Layout>
            <MHeader/>
            {isCollapsed && (isTablet || isMobile) && <div className={"hide-header-height"}/>}
            <Layout>
                {!(isTablet || isMobile) && < SideBar/>}
                <Content style={{marginLeft: getLeftMargin()}}
                         className={"content"}
                >
                    <Switch>
                        <Route exact path={['/', '/dashboard']} render={() => <Dashboard/>}/>
                        <Route path={'/transactions'} render={() => <Transactions/>}/>
                        <Route path={'/templates'} render={() => <MessageTemplates/>}/>
                        <Route path={'/databases/new'} render={() => <NewCodeDatabase/>}/>
                        <Route path={'/databases'} render={() => <CodeDatabase/>}/>
                        <Route path={'/monitoring'} render={() => <Monitoring/>}/>
                        <Route path={'/customers/:id'} render={() => <CustomersInfo/>}/>
                        <Route path={'/customers'} render={() => <Customers/>}/>
                        <Route path={'/statistics'} render={() => <Statistic/>}/>
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
