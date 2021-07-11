import React, {ChangeEvent, useState} from 'react';
import './OrderDetails.scss';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {Button, Descriptions} from "antd";
import {GetOrdersType, orderCancellation, sendCodesAgain} from "../../../redux/orders.reducer";

const OrderDetails = () => {
    const {id} = useParams<{ id?: string }>()

    const order = useSelector<AppRootStateType, GetOrdersType | undefined>(
        state => state.orders.find(item => item.order["0"].order_id === id)
    )

    const {...orderData} = order?.order["0"]

    const dispatch = useDispatch()

    const [email, setEmail] = useState<string | undefined>(order?.customer.email)

    const steps: Array<MBreadcrumbItemType> = [{
        id: v1(),
        name: "Transakcje",
        link: "/transactions"
    }, {
        id: v1(),
        name: String(order?.order["0"].order_id),
        link: ""
    }]

    const onOrderCancel = () => {
        dispatch(orderCancellation(orderData?.order_id))
    }


    const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onCodesAgainSend = () => {
        dispatch(sendCodesAgain({order_id: orderData?.order_id, email}))
    }


    return (
        <div>
            <PageTitle title={"Transakcje"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"space-between"}>
                <ContentBox style={{padding: "40px 50px"}}
                            title={`Szczegóły aukcji ${orderData?.offer_name}`}
                            className={"width--60"}
                >
                    <Descriptions size={"small"} className={"description"}>
                        <Descriptions.Item label="Nazwa aukcji">
                            <NavLink to={""}>{orderData?.offer_name}</NavLink>
                        </Descriptions.Item>
                        <Descriptions.Item label="Status wysyłki kodu">
                            <span style={{color: "#39c343"}}>{order?.order.send_status}</span>
                        </Descriptions.Item>
                        <Descriptions.Item label="Platforma">{order?.order.platform}</Descriptions.Item>
                        <Descriptions.Item label="Klient">{order?.customer.name}</Descriptions.Item>
                        <Descriptions.Item label="Ilość zakupionych sztuk">{orderData?.quantity}</Descriptions.Item>
                        <Descriptions.Item
                            label="Cena za sztukę">{orderData?.order_price} {orderData?.order_currency}</Descriptions.Item>
                        <Descriptions.Item label="Data zakupu">{orderData?.created_at}</Descriptions.Item>
                        <Descriptions.Item label="Zakończona">{order?.order.ended}</Descriptions.Item>
                        <Descriptions.Item label="Data zakończenia transakcji PayU:"
                                           className={"no-after"}
                        >
                            {order?.order.date_PayU}
                        </Descriptions.Item>
                        <Descriptions.Item label="Data wysyłki kodu">{order?.order.sent_date}</Descriptions.Item>
                        <Descriptions.Item
                            label="Wysłane kody"
                            className={"sentCodes-column border-none"}
                        >
                            {order?.order.codes.map((item: string, index: number) => (
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
                        <Button className={"btn btn--danger width--100 center"}
                                disabled={orderData.isCanceled === 0}
                                onClick={onOrderCancel}
                        >
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
                            <input value={email} onChange={onEmailChanged}/>
                        </div>

                        <Button style={{margin: "20px 0"}}
                                className={"btn btn--accept width--100 center"}
                                onClick={onCodesAgainSend}
                        >
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

export default OrderDetails;