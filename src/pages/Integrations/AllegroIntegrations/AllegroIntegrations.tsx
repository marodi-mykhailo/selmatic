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
import settingsIcon from "../../../assets/icons/settings_icon.png";
import deleteIcon from "../../../assets/icons/delete_icon.png";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Integracje Allegro",
    link: ""
}]

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
            <Tag key={record.key} color={"rgb(57, 195, 67)"}>
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
                    <img className={"statisticsTable__options-icon statisticsTable__options-icon--settings"}
                         src={settingsIcon}/>
                    <img className={"statisticsTable__options-icon statisticsTable__options-icon--delete"}
                         src={deleteIcon}
                    />
                </Space>
            )
        }
    }
]


const AllegroIntegrations = () => {

    const data = useSelector<AppRootStateType, RelatedAccountsTableType>(state => state.relatedAccountsTable)

    return (
        <div>
            <PageTitle title={"Integracje Allegro"}
                       subtitle={"Lista powi??zanych kont"}/>
            <MBreadcrumb steps={steps}/>

            <ContentBox title={"POWI???? NOWE KONTO ALLEGRO"}
                        className={"mb20"}
            >
                <p>
                    Aby zintegrowa?? konto Allegro - kliknij w poni??szy przycisk. Zostaniesz przekierowany do strony
                    Allegro - zaloguj si?? i zezw??l na po????czenie aplikacji z kontem Allegro. To wszystko!
                </p>

                <Button className={"btn"}>
                    Powi???? konto Allegro
                </Button>

            </ContentBox>

            <ContentBox title={"LISTA POWI??ZANYCH KONT"}>
                <InformBox>
                    <strong>Informacja:</strong> nie masz powi??zanych kont Allegro z systemem.
                </InformBox>

                <StatisticsTable data={data} searchAttr={"nazwaBazy"} columns={columns}/>

            </ContentBox>

        </div>
    );
};

export default AllegroIntegrations;