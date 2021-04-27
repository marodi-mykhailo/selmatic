import React from 'react';
import "./Dashboard.scss";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import DashboardSteps from "../../components/DashboardSteps/DashboardSteps";
import StatCard from "../../components/StatCard/StatCard";

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
            <div className={"dashboard__steps-container self_clear"}>
                <DashboardSteps/>
            </div>
            <div className={"dashboard__statCards"}>
                <StatCard backgroundColor={"#578ebe"}
                          title={"0"}
                          subTitle={"Ilość zamówień dziś"}
                          icon={"fa fa-shopping-cart"}
                          link={"#"}
                          bottomBgc={"#4884b8"}
                />
                <StatCard
                    backgroundColor={"#e35b5a"}
                    title={"0"}
                    subTitle={"Ilość aktywnych aukcji"}
                    icon={"far fa-chart-bar"}
                    link={"#"}
                    bottomBgc={"#e04a49"}
                />
                <StatCard
                    backgroundColor={"#44b6ae"}
                    title={"0.00 PLN"}
                    subTitle={"Stan kont Allegro"}
                    icon={"fas fa-dollar-sign"}
                    link={"#"}
                    bottomBgc={"#3ea7a0"}
                />
                <StatCard
                    backgroundColor={"#8775a7"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fa fa-globe"}
                    link={"#"}
                    bottomBgc={"#7c699f"}
                />
            </div>
        </div>
    );
};

export default Dashboard;