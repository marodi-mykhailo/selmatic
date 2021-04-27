import React from 'react';
import './App.scss';
import MHeader from "./components/MHeader/MHeader";
import {Layout} from "antd";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <Layout>
            <MHeader/>
            <Layout>
                <SideBar/>
            </Layout>
        </Layout>
    );
}

export default App;
