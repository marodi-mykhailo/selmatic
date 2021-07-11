import React, {useEffect} from 'react';
import './CodeDatabase.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CodeDatabaseItemType, deleteItemFromCodeDatabase, getCodeDatabase} from "../../redux/codeDatabase.reduce";
import {AppResponseType} from "../../redux/app.reducer";

import settingsIcon from "../../assets/icons/settings_icon.png";
import deleteIcon from "../../assets/icons/delete_icon.png";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Lista baz kodów",
    link: ""
}]


const CodeDatabase = () => {

    const {isMobile} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)

    const data = useSelector<AppRootStateType, Array<CodeDatabaseItemType>>(state => state.codeDatabase.codeDatabases)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCodeDatabase())
    }, [])


    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            fixed: !isMobile && "left"
        }, {
            title: "Nazwa bazy",
            dataIndex: "code",
            key: "code",
            fixed: !isMobile && "left"
        },
        {
            title: "Data dodania",
            dataIndex: "created_at",
            key: "created_at",
            render: (record: any) => {
                return (new Date(record)).toUTCString()
            }
        }, {
            title: "Kodów",
            dataIndex: "codesCount",
            key: "codesCount"
        }, {
            title: "Sprzedanych",
            dataIndex: "soldCount",
            key: "soldCount"
        }, {
            title: "Pozostało",
            dataIndex: "leftCount",
            key: "leftCount"
        }, {
            title: "Typ bazy",
            dataIndex: "db_type",
            key: "db_type",
            render: (text: any) => {
                switch (+text) {
                    case 0:
                        return "Zwykła"
                    case 1:
                        return "Rekurencyjna"
                    default:
                        return "-----------"
                }
            }
        }, {
            title: "Operacje",
            dataIndex: "operacje",
            key: "operacje",
            render: (record: any, item: any) => {
                return (
                    <Space size="small">
                        <img className={"statisticsTable__options-icon statisticsTable__options-icon--settings"}
                             src={settingsIcon}/>
                        <img className={"statisticsTable__options-icon statisticsTable__options-icon--delete"}
                             src={deleteIcon}
                             onClick={() => onDeleteHandler(item.id)}
                        />
                    </Space>
                )
            }
        }
    ]


    const onDeleteHandler = (id: number) => {
        dispatch(deleteItemFromCodeDatabase(id))
    }

    return (
        <div>
            <PageTitle title={"Bazy kodów"} subtitle={"lista baz kodów"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Lista baz kodów"}>
                <StatisticsTable data={data} searchAttr={"code"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default CodeDatabase;