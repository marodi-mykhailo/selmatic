import React from 'react';
import './PageTitle.scss';

type PageTitleType = {
    title: string
    subtitle: string
}

const PageTitle = ({title, subtitle}: PageTitleType) => {
    return (
        <h1 className={"page-title"}>{title}
            <small> {subtitle}</small>
        </h1>
    );
};

export default PageTitle;