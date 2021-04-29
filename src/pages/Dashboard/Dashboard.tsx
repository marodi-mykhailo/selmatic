import React from 'react';
import "./Dashboard.scss";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import DashboardSteps from "../../components/DashboardSteps/DashboardSteps";
import StatCard from "../../components/StatCard/StatCard";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import PageTitle from "../../components/PageTitle/PageTitle";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Dashboard",
    link: "#"
}]

const Dashboard = () => {
    return (
        <div className={"dashboard"}>
            <PageTitle title={"Dashboard"} subtitle={"podsumowanie & statystyki"}/>
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
            <div className={"dashboard__charts"}>
                <ChartComponent title={"Ilość transakcji w kwietniu"}
                                pointBackgroundColor={"#F89F9F"}
                                pointBorderColor={"rgba(248,159,159, .2)"}
                                tooltipText={"transakcji"}
                />
                <ChartComponent title={"Wartość sprzedaży w kwietniu (PLN)"}
                                pointBackgroundColor={"#9ACBE6"}
                                pointBorderColor={"#9ACBE6"}
                                tooltipText={"PLN"}
                />
            </div>

        </div>
    );
};

export default Dashboard;