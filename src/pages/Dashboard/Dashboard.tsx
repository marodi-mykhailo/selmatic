import React, {useEffect} from 'react';
import "./Dashboard.scss";

import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import StatCard from "../../components/StatCard/StatCard";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import PageTitle from "../../components/PageTitle/PageTitle";
import {useDispatch, useSelector} from "react-redux";
import {getStatistics} from "../../redux/statisctics.reducer";
import {AppRootStateType} from "../../redux/store";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Dashboard",
    link: ""
}]

const Dashboard = () => {

    const dispatch = useDispatch()

    const todayOrdersCount = useSelector<AppRootStateType, number>(state => state.statistics.todayOrdersCount)
    const activeOffersCount = useSelector<AppRootStateType, number>(state => state.statistics.activeOffersCount)
    const transactionsOrdersForChart = useSelector<AppRootStateType, { [key: string]: number }>(state => state.statistics.transactionsOrdersForChart)
    const valueOfSalesForCharts = useSelector<AppRootStateType, { [key: string]: number }>(state => state.statistics.valueOfSalesForChart)

    useEffect(() => {
        dispatch(getStatistics())
    }, [])

    return (
        <div className={"dashboard"}>
            <PageTitle title={"Dashboard"} subtitle={"podsumowanie & statystyki"}/>
            <MBreadcrumb steps={steps}/>
            {/*<div className={"dashboard__steps-container self_clear"}>*/}
            {/*    <DashboardSteps/>*/}
            {/*</div>*/}
            <div className={"dashboard__statCards"}>
                <StatCard backgroundColor={"mate-black-gradient"}
                          title={todayOrdersCount}
                          subTitle={"Ilość zamówień dziś"}
                          link={"#"}
                />
                <StatCard
                    backgroundColor={"purple-blue-gradient"}
                    title={activeOffersCount}
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
                                chartData={transactionsOrdersForChart}
                />
                <ChartComponent title={"Wartość sprzedaży w kwietniu (PLN)"}
                                pointBackgroundColor={"#9ACBE6"}
                                pointBorderColor={"rgba(248,159,159, .2)"}
                                tooltipText={"PLN"}
                                chartData={valueOfSalesForCharts}
                />
            </div>

        </div>
    );
};

export default Dashboard;