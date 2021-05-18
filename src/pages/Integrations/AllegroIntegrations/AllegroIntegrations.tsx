import React from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {Button, Space, Tag} from "antd";
import InformBox from "../../../components/InformBox/InformBox";
import StatisticsTable from "../../../components/StatisticsTable/StatisticsTable";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {RelatedAccountsTableType} from "../../../redux/relatedAccountsTable.reducer";
import {stat} from "fs";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Integracje Allegro",
    link: ""
}]

const AllegroIntegrations = () => {

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        }, {
            title: "Login",
            dataIndex: "login",
            key: "login",
        },
        {
            title: "Data dodania",
            dataIndex: "addedData",
            key: "addedData"
        }, {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: any, record: any) => (
                <Tag key={record.key} color={"#00BCD4"}>
                    {status.toUpperCase()}
                </Tag>
            )
        }, {
            title: "Ostatnio sprawdzane",
            dataIndex: "lastCheckDate",
            key: "lastCheckDate"
        }, {
            title: "Operacje",
            dataIndex: "operacje",
            key: "operacje",
            render: () => {
                return (
                    <Space size="small">
                        <Button
                            className={"statisticsTable__options-icon statisticsTable__options-icon--settings"}
                            size={"large"}
                            shape={"circle"}>
                            <i className="fas fa-cog"/>
                        </Button>
                        <Button className={"statisticsTable__options-icon statisticsTable__options-icon--delete"}
                                size={"large"}
                                shape={"circle"}>
                            <i className="fas fa-trash"/>
                        </Button>
                    </Space>
                )
            }
        }
    ]

    const data = useSelector<AppRootStateType, RelatedAccountsTableType>(state => state.relatedAccountsTable)

    return (
        <div>
            <PageTitle title={"Integracje Allegro"}
                       subtitle={"Lista powiązanych kont"}/>
            <MBreadcrumb steps={steps}/>

            <ContentBox title={"POWIĄŻ NOWE KONTO ALLEGRO"}
                        icon={"fas fa-cog"}
                        className={"mb20"}
            >
                <p>
                    Aby zintegrować konto Allegro - kliknij w poniższy przycisk. Zostaniesz przekierowany do strony
                    Allegro - zaloguj się i zezwól na połączenie aplikacji z kontem Allegro. To wszystko!
                </p>

                <Button className={"btn"}>
                    Powiąż konto Allegro
                </Button>

            </ContentBox>

            <ContentBox title={"LISTA POWIĄZANYCH KONT"}>
                <InformBox>
                    <strong>Informacja:</strong> nie masz powiązanych kont Allegro z systemem.
                </InformBox>

                <StatisticsTable data={data} searchAttr={"nazwaBazy"} columns={columns}/>

            </ContentBox>

        </div>
    );
};

export default AllegroIntegrations;