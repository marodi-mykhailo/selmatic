import React, {useEffect} from 'react';
import './App.scss';
import MHeader from "./components/MHeader/MHeader";
import {Layout} from "antd";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Content} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import Transactions from "./pages/Orders/Orders";
import MessageTemplates from "./pages/MessageTemplates/MessageTemplates";
import {Redirect, Route, Switch} from 'react-router-dom';
import CodeDatabase from "./pages/CodeDatabase/CodeDatabase";
import Monitoring from "./pages/Monitoring/Monitoring";
import TextEditor from "./components/TextEditor/TextEditor";
import Customers from "./pages/CustomersContainer/Customers/Customers";
import CustomersInfo from "./pages/CustomersContainer/CustomersInfo/CustomersInfo";
import NewCodeDatabase from "./pages/CodeDatabase/NewCodeDatabase/NewCodeDatabase";
import Statistic from "./pages/Statistic/Statistic";
import {AppResponseType, setIsDesktop, setIsMobile, setIsTablet} from './redux/app.reducer';
import {setIsCollapsed} from "./redux/sidebar.reducer";
import Account from "./pages/Settings/Account/Account";
import Sales from "./pages/Settings/Sales/Sales";
import Notifications from "./pages/Settings/Notifications/Notifications";
import MobileApp from "./pages/Settings/MobileApp/MobileApp";
import AllegroIntegrations from "./pages/Integrations/AllegroIntegrations/AllegroIntegrations";
import NewMessageTemplates from "./pages/MessageTemplates/NewMessageTemplates/NewMessageTemplates";
import PaymentsHistory from "./pages/Payments/PaymentsHistory/PaymentsHistory";
import OfferDetails from "./pages/OfferDetails/OfferDetails";
import OrderDetails from './pages/Orders/OrderDetails/OrderDetails';
import TopUpPage from "./pages/Payments/TopUpPage/TopUpPage";
import InformBox from "./components/InformBox/InformBox";

function App() {
    const isCollapsed = useSelector<AppRootStateType, boolean>(state => state.sidebar.isCollapsed)
    const {isMobile, isTablet, isDesktop} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)

    const dispatch = useDispatch()

    useEffect(() => {
        // authAPI.login("sebek.kasprzak.sk@gmail.com", "zaq1@WSX")


        resizeInit()

        window.addEventListener('resize', resizeInit)

        return () => {
            window.removeEventListener('resize', resizeInit)
        }

    }, [isMobile, isTablet, isDesktop])


    function resizeInit() {

        if (window.outerWidth < 482 && !isMobile) {
            dispatch(setIsMobile())
            dispatch(setIsCollapsed(false))
        }

        if (window.outerWidth < 992 && window.outerWidth > 482 && !isTablet) {
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
            {/*<Switch>*/}
            {/*    <Route exact path={'/login'} render={() => <Auth isRegister={false}/>}/>*/}
            <div>
                <MHeader/>
                {isCollapsed && (isTablet || isMobile) && <div className={"hide-header-height"}/>}
                <Layout>
                    {!(isTablet || isMobile) && < SideBar/>}
                    <Content style={{marginLeft: getLeftMargin(), position: "relative"}}
                             className={"content"}
                    >
                        <InformBox/>
                        <Switch>
                            <Route exact path={['/', '/dashboard']} render={() => <Dashboard/>}/>
                            <Route path={'/auction/:id'} render={() => <OfferDetails/>}/>
                            <Route path={'/transactions/:id'} render={() => <OrderDetails/>}/>
                            <Route path={'/transactions'} render={() => <Transactions/>}/>
                            <Route path={'/templates/new'} render={() => <NewMessageTemplates/>}/>
                            <Route path={'/templates'} render={() => <MessageTemplates/>}/>
                            <Route path={'/databases/new'} render={() => <NewCodeDatabase/>}/>
                            <Route path={'/databases'} render={() => <CodeDatabase/>}/>
                            <Route path={'/monitoring'} render={() => <Monitoring/>}/>
                            <Route path={'/customers/:id'} render={() => <CustomersInfo/>}/>
                            <Route path={'/customers'} render={() => <Customers/>}/>
                            <Route path={'/statistics'} render={() => <Statistic/>}/>
                            <Route path={'/settings/account'} render={() => <Account/>}/>
                            <Route path={'/settings/sales'} render={() => <Sales/>}/>
                            <Route path={'/settings/notifications'} render={() => <Notifications/>}/>
                            <Route path={'/settings/mobile'} render={() => <MobileApp/>}/>
                            <Route path={'/integrations/allegro'} render={() => <AllegroIntegrations/>}/>
                            <Route path={'/payments/history'} render={() => <PaymentsHistory/>}/>
                            <Route path={'/payments/top-up'} render={() => <TopUpPage/>}/>
                            <Route path={'/404'}
                                   render={() => <h1 className={"header-404"}>404 Page not found</h1>}/>
                            <Redirect from={'*'} to={'/404'}/>
                        </Switch>
                        <TextEditor/>
                    </Content>
                </Layout>
            </div>
            {/*</Switch>*/}
        </Layout>
    );
}

export default App;
