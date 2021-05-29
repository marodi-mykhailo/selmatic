import React, {useState} from 'react';
import './AuctionDetails.scss';
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TransitionTableItemType} from "../../redux/transactionTable.reducer";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import {Button, Descriptions, Select} from "antd";
import FloatLabel from "../../components/FloatLabel/FloatLabel";

const AuctionDetails = () => {
    const {id} = useParams<{ id?: string }>()

    const [template, setTemplate] = useState()
    const [codeBase, setCodeBase] = useState()

    const transaction = useSelector<AppRootStateType, TransitionTableItemType | undefined>(
        state => state.transitionTable.find(item => item.id === id)
    )

    const steps: Array<MBreadcrumbItemType> = [{
        id: v1(),
        name: "Transakcje",
        link: "/transaction"
    }, {
        id: v1(),
        name: transaction?.id,
        link: ""
    }]


    return (
        <div>
            <PageTitle title={"Transakcje"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"space-between"}>
                <ContentBox style={{padding: "40px 50px"}}
                            title={`Szczegóły aukcji ${transaction?.auction}`}
                            className={"width--60"}
                >
                    <Descriptions size={"small"} className={"description"}>
                        <Descriptions.Item label="Nazwa aukcji">
                            <NavLink to={""}>League Of Legends LOL Smurf Konto EUW 20 Kapsuł</NavLink>
                        </Descriptions.Item>
                        <Descriptions.Item label="Status wysyłki kodu">
                            <span style={{color: "#39c343"}}>Wysłany</span>
                        </Descriptions.Item>
                        <Descriptions.Item label="Platforma">Allegro</Descriptions.Item>
                        <Descriptions.Item label="Klient">Paweł Kowalski</Descriptions.Item>
                        <Descriptions.Item label="Ilość zakupionych sztuk">1</Descriptions.Item>
                        <Descriptions.Item label={<div>
                            Ilość sprzedanych przedmiotów :
                            <p className={"description__sub"}>(Ostatnie 30 dni)</p>
                        </div>}
                                           className={"border-none no-after"}
                        >
                            9,99 zł
                        </Descriptions.Item>

                    </Descriptions>
                </ContentBox>
                <ContentBox title={"Status"}
                            className={"width--40 text-center"}
                >
                    <Button style={{marginTop: "20px"}}
                            className={"btn btn--danger width--80 center margin-center"}>
                        WYŁĄCZ MONITORING
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
                    <span className={"link-text"}>dodać nowy.</span>
                    <p style={{margin: "0"}}
                       className={"link-text"}>Szablon wiadomości
                    </p>
                </div>

                <div className={"settings-page__content__input"}>
                    <FloatLabel label={"Szablon"}
                                value={template}
                                type={"select"}
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
                    <span className={"link-text"}>dodać nowy.</span>
                    <p style={{margin: "0"}}
                       className={"link-text"}>Szablon wiadomości
                    </p>
                </div>

                <div className={"settings-page__content__input"}>
                    <FloatLabel label={"Baza kodów"}
                                value={codeBase}
                                type={"select"}
                    >
                        <Select showSearch
                                style={{width: "85%"}}
                                onChange={value => setCodeBase(value)}
                                value={codeBase}
                                className={"custom-select"}
                        >
                            <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
                            <Select.Option value={'private'}>Prywatne</Select.Option>
                            <Select.Option value={'company'}>Firmowe</Select.Option>
                        </Select>
                    </FloatLabel>
                </div>

                <Button style={{marginTop: "20px"}}
                        className={"btn btn--blue"}>
                    WYŁĄCZ MONITORING
                </Button>

            </ContentBox>
        </div>
    );
};

export default AuctionDetails;