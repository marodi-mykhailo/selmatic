import React from 'react';
import "./Dashboard.scss";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Dashboard",
    link: "#"
}]

const Dashboard = () => {
    return (
        <div className={"dashboard"}>
            <h1 className={"page-title"}>Dashboard
                <small> podsumowanie & statystyki</small>
            </h1>
            <MBreadcrumb steps={steps}/>
        </div>
    );
};

export default Dashboard;