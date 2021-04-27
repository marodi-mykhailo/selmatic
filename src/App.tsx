import React from 'react';
import './App.scss';
import MHeader from "./components/MHeader/MHeader";
import {Layout} from "antd";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <Layout>
            <MHeader/>
            <Layout>
                <SideBar/>
                <Dashboard/>
            </Layout>
        </Layout>
    );
}

export default App;
