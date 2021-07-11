import React from 'react';
import './StatCard.scss';

type StatCardPropsType = {
    backgroundColor: string
    title: string | number
    subTitle: string
    link: string
}

const StatCard = ({backgroundColor, title, subTitle, link}: StatCardPropsType) => {
    return (
        <div className={"statCard"}>
            <div className={`statCard__content ${backgroundColor}`}
            >
                <div className={"statCard-visual"}/>
                <div className={"statCard__details"}>
                    <div className={"statCard__details-desc"}>
                        {subTitle}
                    </div>
                    <div className={"statCard__details-number"}>{title}</div>
                </div>
                <a className={"statCard__link"}
                   href={link}>
                    Zobacz więcej
                    <i className="far fa-arrow-alt-circle-right"/>
                </a>
            </div>

        </div>
    );
};

export default StatCard;