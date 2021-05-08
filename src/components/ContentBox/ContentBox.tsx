import React, {FunctionComponent} from 'react';
import './ContentBox.scss';

type ContentBoxPropsType = {
    title: string
    className?: string
    contentClassName?: string
    icon?: string
}

const ContentBox: FunctionComponent<ContentBoxPropsType> = ({
                                                                title,
                                                                className,
                                                                contentClassName,
                                                                children,
                                                                icon = "fas fa-link"
                                                            }) => {
    return (
        <div className={`content__box ${className}`}>
            <h1 className={"content__box-title"}>
                <i className={`${icon}`}/>
                {title}</h1>
            <div className={`content__box-content ${contentClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default ContentBox;