import React, {useState} from 'react';
import './TransakcjeDetails.scss';
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {TransitionTableItemType} from "../../../redux/transactionTable.reducer";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {Button, Descriptions} from "antd";

const TransactionDetails = () => {
    const {id} = useParams<{ id?: string }>()

    const transaction = useSelector<AppRootStateType, TransitionTableItemType | undefined>(
        state => state.transitionTable.find(item => item.id === id)
    )

    const steps: Array<MBreadcrumbItemType> = [{
        id: v1(),
        name: "Transakcje",
        link: "/transactions"
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
                            <NavLink to={""}>{transaction?.auction}</NavLink>
                        </Descriptions.Item>
                        <Descriptions.Item label="Status wysyłki kodu">
                            <span style={{color: "#39c343"}}>{transaction?.codeShippingStatus}</span>
                        </Descriptions.Item>
                        <Descriptions.Item label="Platforma">{transaction?.platform}</Descriptions.Item>
                        <Descriptions.Item label="Klient">{transaction?.client}</Descriptions.Item>
                        <Descriptions.Item label="Ilość zakupionych sztuk">{transaction?.count}</Descriptions.Item>
                        <Descriptions.Item label="Cena za sztukę">{transaction?.pricePerItem}</Descriptions.Item>
                        <Descriptions.Item label="Data zakupu">{transaction?.dateOfPurchase}</Descriptions.Item>
                        <Descriptions.Item label="Zakończona">{transaction?.paymentStatus}</Descriptions.Item>
                        <Descriptions.Item label="Data zakończenia transakcji PayU:"
                                           className={"no-after"}
                        >
                            {transaction?.payUTransactionCompletionDate}
                        </Descriptions.Item>
                        <Descriptions.Item label="Data wysyłki kodu">{transaction?.codeShipmentDate}</Descriptions.Item>
                        <Descriptions.Item
                            label="Wysłane kody"
                            className={"sentCodes-column border-none"}
                        >
                            {transaction?.sentCodes.map((item: string, index: number) => (
                                <div key={v1()}>
                                    {`${index + 1}. ${item}`}
                                </div>
                            ))}
                        </Descriptions.Item>


                    </Descriptions>
                </ContentBox>
                <ContentBox title={"Operacje"}
                            className={"width--40 text-center"}
                >
                    <div className={"width--80 margin-center"}>
                        <Button className={"btn btn--danger width--100 center"}>
                            ANULUJ TRANSAKCJĘ
                        </Button>

                        <p style={{marginTop: "20px"}}
                           className={"text-center sub-text margin-center"}
                        >
                            Transakcja zostanie oznaczona jako anulowana,
                            kody nie zostaną wysłane.
                        </p>

                        <hr style={{margin: "20px 0"}}
                            className={"custom-hr"}
                        />

                        <div className={"operation-email-input custom-box-shadow"}>
                            kowalskikowal@allegromail.pl
                        </div>

                        <Button style={{margin: "20px 0"}}
                                className={"btn btn--accept width--100 center"}>
                            WYŚLIJ PONOWNIE KODY
                        </Button>

                        <p className={"text-center sub-text margin-center"}
                        >
                            W przypadku problemów z wysyłką kodów (np. klient informuje,
                            że nie otrzymał kodów) - możesz ponownie wysłać email na ten
                            sam lub inny adres e-mail (wpisując go w polu powyżej).
                        </p>

                    </div>

                </ContentBox>
            </div>
        </div>
    );
};

export default TransactionDetails;