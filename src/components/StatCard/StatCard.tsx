import React from 'react';
import './StatCard.scss';

type StatCardPropsType = {
    backgroundColor: string
    title: string
    subTitle: string
    link: string
    icon: string
    bottomBgc: string
}

const StatCard = ({backgroundColor, title, subTitle, icon, link, bottomBgc}: StatCardPropsType) => {
    return (
        <div className={"statCard"}>
            <div className={"statCard__content"}
                 style={{backgroundColor: backgroundColor}}
            >
                <div className={"statCard-visual"}>
                    <i className={icon}/>
                </div>
                <div className={"statCard__details"}>
                    <div className={"statCard__details-number"}>{title}</div>
                    <div className={"statCard__details-desc"}>
                        {subTitle}
                    </div>
                </div>
                <a className={"statCard__link"}
                   style={{backgroundColor: bottomBgc}}
                   href={link}>
                    Zobacz więcej
                    <i className="far fa-arrow-alt-circle-right"/>
                </a>
            </div>

        </div>
    );
};

export default StatCard;