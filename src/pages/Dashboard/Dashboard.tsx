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
    link: ""
}]

const Dashboard = () => {
    return (
        <div className={"dashboard"}>
            <PageTitle title={"Dashboard"} subtitle={"podsumowanie & statystyki"}/>
            <MBreadcrumb steps={steps}/>
            {/*<div className={"dashboard__steps-container self_clear"}>*/}
            {/*    <DashboardSteps/>*/}
            {/*</div>*/}
            <div className={"dashboard__statCards"}>
                <StatCard backgroundColor={"mate-black-gradient"}
                          title={"0"}
                          subTitle={"Ilość zamówień dziś"}
                          link={"#"}
                />
                <StatCard
                    backgroundColor={"purple-blue-gradient"}
                    title={"0"}
                    subTitle={"Ilość aktywnych aukcji"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"rose-orange-gradient"}
                    title={"0.00 PLN"}
                    subTitle={"Stan kont Allegro"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"lilac-blue-gradient"}
                    title={"50 PLN"}
                    subTitle={"Pozostała ilość kredytów"}
                    link={"#"}
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