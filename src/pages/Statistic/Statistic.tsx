import React, {useEffect, useState} from 'react';
import './Statistic.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import StatCard from "../../components/StatCard/StatCard";
import {Select} from "antd";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {getStatistics, StatisticsType, updateChartStatisticsByMonth} from "../../redux/statisctics.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Zaawansowane statystyki",
    link: ""
},]

const Statistic = () => {

    const [month, setMonth] = useState<string>()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStatistics())
    }, [])

    const onSelectHandler = (value: string) => {
        dispatch(updateChartStatisticsByMonth(value))

    }

    const {
        todayOrdersCount,
        activeOffersCount,
        transactionsOrdersForChart,
        valueOfSalesForChart
    } = useSelector<AppRootStateType, StatisticsType>(state => state.statistics)

    return (
        <div className={"statistic"}>
            <PageTitle title={"Statystyki"} subtitle={"zaawansowane statystyki sprzedaży"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"statistic__card__wrapper"}>
                <StatCard
                    backgroundColor={"mate-black-gradient"}
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
                    title={"6 210,394 PLN"}
                    subTitle={"Stan kont allegro"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"lilac-blue-gradient"}
                    title={"6 210,394 PLN"}
                    subTitle={"Pozostała ilość kredytów"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"rose-black-gradient"}
                    title={"35"}
                    subTitle={"Pozostała ilość kredytów"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"gold-orange-gradient"}
                    title={"121"}
                    subTitle={"Pozostała ilość kredytów"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"orange-rose-gradient"}
                    title={"6 210,394 PLN"}
                    subTitle={"Pozostała ilość kredytów"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"violet-blue-gradient"}
                    title={"6 210,394 PLN"}
                    subTitle={"Pozostała ilość kredytów"}
                    link={"#"}
                />
            </div>
            <div className={"statistic-select"}>
                <h3 className={"statistic-select__title"}>
                    Zakres statystyk
                </h3>
                <p className={"statistic-select__sub-title"}>
                    Możesz wybrać okres generowanych poniżej statystyk.
                    Aktualnie wybrany miesiąc: <strong>Maj</strong>
                </p>
                <Select defaultValue={"3"}
                        className={"statistic-select__select"}
                        onChange={onSelectHandler}
                >

                    <Select.Option value={"3"}>
                        <b>Maj 2021</b>
                        &nbsp;
                        <span style={{fontWeight: 300}}>(Aktyalny)</span>
                    </Select.Option>

                    <Select.Option value={"4"}>
                        <b>Kwi 2021</b>
                    </Select.Option>

                    <Select.Option value={"5"}>
                        <b>Mart 2021</b>
                    </Select.Option>

                </Select>

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
                                pointBorderColor={"#9ACBE6"}
                                tooltipText={"PLN"}
                                chartData={valueOfSalesForChart}
                />
            </div>
        </div>
    );
};

export default Statistic;