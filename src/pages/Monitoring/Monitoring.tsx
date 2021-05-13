import React from 'react';
import './Monitoring.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {AppRootStateType} from "../../redux/store";
import {monitoringTableType} from "../../redux/monitoringTable.reducer";
import {useSelector} from "react-redux";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Monitoring",
    link: ""
}]

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id"
    }, {
        title: "Nazwa aukcji",
        dataIndex: "nazwaAukcji",
        key: "nazwaAukcji",
    },
    {
        title: "Koniec aukcji",
        dataIndex: "koniecAukcji",
        key: "koniecAukcji"
    },
    {
        title: "Operacje",
        dataIndex: "operacje",
        key: "operacje",
        render: () => {
            return (
                <div className={"monitoringTable__options"}>
                    <span className={"monitoringTable__options-item text-blue"}>Szczegóły</span>
                    <span>/</span>
                    <span className={"monitoringTable__options-item text-red"}>Wyłacz monitoring</span>
                </div>
            )
        }
    }
]

const Monitoring = () => {
    const data = useSelector<AppRootStateType, monitoringTableType>(state => state.monitoringTable)
    return (
        <div>
            <PageTitle title={"Monitoring"} subtitle={"lista aukcji Alegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Aukcje Monitorowane"}>
                <StatisticsTable data={data} searchAttr={"nazwaAukcji"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default Monitoring;