import React from 'react';
import './DashboardSteps.scss';

const DashboardSteps = () => {
    return (
        <div className={"progress-bar"}>
            <div className={"progress-bar__item progress-bar__item--active"}>
                <div className={"progress-bar__item-number"}>
                    <i className="fa fa-shopping-cart"/>
                </div>
                <div className="progress-bar__item-title progress-bar__item--first">Allegro</div>
                <div className={"progress-bar__item-content"}>
                    <a href={"#"}>Zintegruj pierwsze konto</a>
                </div>
            </div>
            <div className={"progress-bar__item progress-bar__item--active"}>
                <div className={"progress-bar__item-number"}>
                    <i className="fa fa-rocket"/>
                </div>
                <div className="progress-bar__item-title">BAZY KODÓW</div>
                <div className={"progress-bar__item-content"}>
                    <a href={"#"}>Zintegruj pierwsze konto</a>
                </div>
            </div>
            <div className={"progress-bar__item"}>
                <div className={"progress-bar__item-number"}>
                    <i className="fa fa-envelope"/>
                </div>
                <div className="progress-bar__item-title">SZABLONY</div>
                <div className={"progress-bar__item-content"}>
                    <a href={"#"}>Zintegruj pierwsze konto</a>
                </div>
            </div>
            <div className={"progress-bar__item"}>
                <div className={"progress-bar__item-number"}>
                    <i className="fa fa-user"/>
                </div>
                <div className="progress-bar__item-title progress-bar__item--last">DANE KONTA</div>
                <div className={"progress-bar__item-content"}>
                    <a href={"#"}>Zintegruj pierwsze konto</a>
                </div>
            </div>


        </div>
    );
};

export default DashboardSteps;