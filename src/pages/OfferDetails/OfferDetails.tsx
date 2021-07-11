import React, {useEffect, useState} from 'react';
import './OfferDetails.scss';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import {Button, Descriptions, Select} from "antd";
import FloatLabel from "../../components/FloatLabel/FloatLabel";
import {changeOfferIsActive, OfferType} from "../../redux/offers.reducer";
import {getCodeDatabaseNames} from "../../redux/codeDatabase.reduce";

const OfferDetails = () => {
    const {id} = useParams<{ id?: string }>()

    const [template, setTemplate] = useState()
    const [codeBase, setCodeBase] = useState()

    const dispatch = useDispatch()

    const offer = useSelector<AppRootStateType, OfferType | undefined>(
        state => state.offers.find(item => item.id === Number(id))
    )

    const codeDatabaseNames = useSelector<AppRootStateType, Array<{ id: string; name: string }>>(state => state.codeDatabase.strippedDownCodeDatabase)

    const steps: Array<MBreadcrumbItemType> = [{
        id: v1(),
        name: "Transakcje",
        link: "/transaction"
    }, {
        id: v1(),
        name: String(offer?.id),
        link: ""
    }]

    const onIsActiveChange = (id: string) => {
        dispatch(changeOfferIsActive(id))
    }

    useEffect(() => {
        dispatch(getCodeDatabaseNames())
    }, [])

    return (
        <div>
            <PageTitle title={"Orders"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"space-between"}>
                <ContentBox style={{padding: "40px 50px"}}
                            title={`Szczegóły aukcji ${offer?.offer_name}`}
                            className={"width--60"}
                >
                    <Descriptions size={"small"} className={"description"}>
                        <Descriptions.Item label="Nazwa aukcji">
                            <NavLink to={""}>{offer?.offer_name}</NavLink>
                        </Descriptions.Item>
                        <Descriptions.Item label="Status wysyłki kodu">
                            <span style={{color: "#39c343"}}>{offer?.status_platform}</span>
                        </Descriptions.Item>
                        <Descriptions.Item label="Platforma">{offer?.platform}</Descriptions.Item>
                        <Descriptions.Item label="Klient">Paweł Kowalski</Descriptions.Item>
                        <Descriptions.Item label="Ilość zakupionych sztuk">{offer?.stock_sold}</Descriptions.Item>
                        <Descriptions.Item label={<div>
                            Ilość sprzedanych przedmiotów :
                            <p className={"description__sub"}>(Ostatnie 30 dni)</p>
                        </div>}
                                           className={"border-none no-after"}
                        >
                            {offer?.sold_last_30d}
                        </Descriptions.Item>

                    </Descriptions>
                </ContentBox>
                <ContentBox title={"Status"}
                            className={"width--40 text-center"}
                >
                    <Button style={{marginTop: "20px"}}
                            className={`btn ${offer?.is_active === "YES" ? "btn--danger" : "btn--green"}
                             width--80 center margin-center`}
                            onClick={() => onIsActiveChange(offer?.offer_id!)}
                    >
                        {offer?.is_active === "YES"
                            ? "WYŁĄCZ MONITORING"
                            : "WŁĄCZ MONITORING"
                        }
                    </Button>

                    <p style={{marginTop: "20px"}}
                       className={"text-center sub-text width--60 margin-center"}
                    >
                        Monitoring dla tej aukcji jest włączony.
                        Sprzedaż jest obsługiwana przez system bla bla...
                    </p>


                </ContentBox>
            </div>
            <ContentBox style={{padding: "40px 50px", marginTop: "25px"}}
                        title={`Konfiguracja monitoringu`}
                        className={"width--60"}
            >
                <div style={{margin: "0"}}
                     className={"sub-text font-size-14"}
                >
                    Szablon który jest wykorzystywany do wysyłania wiadomości. Możesz także &nbsp;
                    <span className={"link-text"}>
                       <NavLink to={'/templates/new'}>dodać nowy.</NavLink>
                    </span>
                    <p style={{margin: "0"}}
                       className={"link-text"}>Szablon wiadomości
                    </p>
                </div>

                <div className={"settings-page__content__input"}>
                    <FloatLabel label={"Szablon"}
                                value={template}
                    >
                        <Select showSearch
                                style={{width: "85%"}}
                                onChange={value => setTemplate(value)}
                                value={template}
                                className={"custom-select"}
                        >
                            <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
                            <Select.Option value={'private'}>Prywatne</Select.Option>
                            <Select.Option value={'company'}>Firmowe</Select.Option>
                        </Select>
                    </FloatLabel>
                </div>

                <div style={{margin: "0"}}
                     className={"sub-text font-size-14"}
                >
                    Baza kodów z której system pobiera dane. Możesz także &nbsp;
                    <span className={"link-text"}>
                        <NavLink to={'/databases/new'}>dodać nowy.</NavLink>
                    </span>
                    <p style={{margin: "0"}}
                       className={"link-text"}>Szablon wiadomości
                    </p>
                </div>

                <div className={"settings-page__content__input"}>
                    <FloatLabel label={"Baza kodów"}
                                value={codeBase}
                    >
                        <Select showSearch
                                style={{width: "85%"}}
                                onChange={value => setCodeBase(value)}
                                value={codeBase}
                                className={"custom-select"}
                        >
                            <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
                            {codeDatabaseNames.map(item =>
                                <Select.Option key={v1()} value={item.id}>{item.name}</Select.Option>
                            )}
                        </Select>
                    </FloatLabel>
                </div>

                <Button style={{marginTop: "20px"}}
                        className={"btn btn--blue"}>
                    WŁĄCZ MONITORING
                </Button>

            </ContentBox>
        </div>
    );
};

export default OfferDetails;