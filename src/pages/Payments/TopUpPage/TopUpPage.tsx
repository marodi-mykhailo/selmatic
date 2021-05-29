import React from 'react';
import './TopUpPage.scss';
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import bitcoinLogo from '../../../assets/img/bitcoin.png';
import przelew24Logo from '../../../assets/img/przelew24.png';
import visaLogo from '../../../assets/img/visa.png';
import mastercardLogo from '../../../assets/img/mastercard.png';
import {Button} from "antd";

const steps: Array<MBreadcrumbItemType> = [
    {
        id: v1(),
        name: "Doładuj konto",
        link: "/templates"
    }
]

const TopUpPage = () => {
    return (
        <div>
            <PageTitle title={"Doładuj konto"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Doładuj konto"}>

                <p style={{marginTop: "-20px"}} className={"sub-text"}>
                    Doładuj swoje konto byś mógł w pełni korzystać z funkcjonalności cybersent.net
                    <br/>
                    1 kredyt = 1 wysłany kod
                </p>

                <div className={"credits-radio"}>
                    <div style={{marginTop: "40px"}} className={"custom-checkbox"}>
                        <p className={"checkbox-wrapper__text"}>
                            Możliwość zgłaszania reklamacji
                        </p>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" id={"fifty"}
                                   name="radio" value={50}/>
                            <span className={"custom-checkbox__text"}>50 Kredytów</span>
                        </label>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" id={"hundred"}
                                   name="radio" value={""}/>
                            <span className={"custom-checkbox__text"}>100 Kredytów</span>
                        </label>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" id={"two-hundred"} name="radio"/>
                            <span className={"custom-checkbox__text"}>200 Kredytów</span>
                        </label>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" name="radio"/>
                            <span className={"custom-checkbox__text"}>500 Kredytów</span>
                        </label>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" name="radio"/>
                            <span className={"custom-checkbox__text"}>1500 Kredytów</span>
                        </label>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" name="radio"/>
                            <span className={"custom-checkbox__text"}>
                                <input className={"custom-input credits-radio__input"} type={"number"}/>
                                Kredytów</span>
                        </label>
                    </div>
                </div>

                <p className={"credits-sum"}>
                    <b>Kwota do zapłaty:</b> 3,00 PLN Brutto <br/>
                    <a className={"credits-sum__link"} href={"#"}>Edytuj dane do faktury</a>
                </p>

                <div>
                    <h3 className={"content__box-title"}>Wybierz metodę płatności:</h3>
                    <div className={"payment-method-radio"}>

                        <div>
                            <input id={"mastercard-visa"}
                                   type={"radio"}
                                   name={"payment-method"}
                                   onChange={e => console.log(e.currentTarget.checked)}
                            />
                            <div className={"payment-method-radio__item"}>
                                <label htmlFor={"mastercard-visa"}
                                       className={"payment-method-radio__item__label"}>
                                    <img src={mastercardLogo} alt={"mastercard-logo"}/>
                                    <img src={visaLogo} alt={"visa-logo"}/>
                                </label>
                            </div>

                            <p style={{margin: "10px 0"}} className={"text-center"}>Karta kredytowa</p>
                        </div>

                        <div>
                            <input id={"bitcoin"}
                                   type={"radio"}
                                   name={"payment-method"}
                                   onChange={e => console.log(e.currentTarget.checked)}
                            />
                            <div className={"payment-method-radio__item"}>
                                <label htmlFor={"bitcoin"}
                                       className={"payment-method-radio__item__label"}>
                                    <img src={bitcoinLogo} alt={"bitcoin-logo"}/>
                                </label>
                            </div>

                            <p style={{margin: "10px 0"}} className={"text-center"}>Kryptowaluty</p>
                        </div>

                        <div>
                            <div className={"payment-method-radio__item"}>
                                <input id={"przelew24"}
                                       type={"radio"}
                                       name={"payment-method"}
                                       onChange={e => console.log(e.currentTarget.checked)}
                                />
                                <div className={"payment-method-radio__item"}>
                                    <label htmlFor={"przelew24"}
                                           className={"payment-method-radio__item__label"}>
                                        <img src={przelew24Logo} alt={"przelew-24-logo"}/>
                                    </label>
                                </div>

                            </div>
                            <p style={{margin: "10px 0"}} className={"text-center"}>Przelewy24</p>

                        </div>

                    </div>
                </div>

                <Button style={{marginTop: "40px"}} className={"btn"}>
                    Zapłać
                </Button>

            </ContentBox>


        </div>
    );
};

export default TopUpPage;