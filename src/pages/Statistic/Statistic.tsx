import React, {useState} from 'react';
import './Statistic.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import StatCard from "../../components/StatCard/StatCard";
import {Select} from "antd";
import ChartComponent from "../../components/ChartComponent/ChartComponent";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Zaawansowane statystyki",
    link: ""
},]

const Statistic = () => {

    const [month, setMonth] = useState<string>()

    const onSelectHandler = (value: string) => {
        setMonth(value)
    }

    return (
        <div className={"statistic"}>
            <PageTitle title={"Statystyki"} subtitle={"zaawansowane statystyki sprzedaży"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"statistic__card__wrapper"}>
                <StatCard
                    backgroundColor={"mate-black-gradient"}
                    title={"35"}
                    subTitle={"Ilość zamówień dziś"}
                    link={"#"}
                />
                <StatCard
                    backgroundColor={"purple-blue-gradient"}
                    title={"121"}
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
                <Select defaultValue={"maj"}
                        className={"statistic-select__select"}
                        onChange={onSelectHandler}
                >

                    <Select.Option value={"maj"}>
                        <b>Maj 2021</b>
                        &nbsp;
                        <span style={{fontWeight: 300}}>(Aktyalny)</span>
                    </Select.Option>

                    <Select.Option value={"kwi"}>
                        <b>Kwi 2021</b>
                    </Select.Option>

                    <Select.Option value={"mart"}>
                        <b>Mart 2021</b>
                    </Select.Option>

                </Select>

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

export default Statistic;