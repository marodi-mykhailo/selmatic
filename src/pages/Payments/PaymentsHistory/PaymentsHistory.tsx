import React from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import StatisticsTable from "../../../components/StatisticsTable/StatisticsTable";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {PaymentsHistoryTableType, PaymentsStatusType} from "../../../redux/paymentsHistoryTable.reducer";
import {Tag} from "antd";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Historia płatności",
    link: ""
}]


const PaymentsHistory = () => {

    const data = useSelector<AppRootStateType, PaymentsHistoryTableType>(state => state.paymentsHistoryTable)

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        }, {
            title: "Data",
            dataIndex: "date",
            key: "date"
        }, {
            title: "Kwota",
            dataIndex: "amount",
            key: "amount"
        }, {
            title: "Kredytów",
            dataIndex: "credits",
            key: "credits"
        }, {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: any, record: any) => (
                <Tag key={record.key} color={getColor(status)}>
                    {status.toUpperCase()}
                </Tag>
            )
        }, {
            title: "Informacja",
            dataIndex: "information",
            key: "information"
        }
    ]

    const getColor = (status: PaymentsStatusType) => {
        switch (status) {
            case "rozpoczęta":
                return "rgb(111,160,220)"
            case "odzrzucona":
                return "rgb(50, 49, 79)"
            case "zaakceptowana":
                return "rgb(74, 113, 192)"
        }
    }

    return (
        <div>
            <PageTitle title={"Historia płatności"} subtitle={"Lista Twoich płatności"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Lista szablonów wiadomości"}>
                <StatisticsTable data={data} searchAttr={"id"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default PaymentsHistory;