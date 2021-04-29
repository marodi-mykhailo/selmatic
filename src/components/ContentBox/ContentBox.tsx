import React, {FunctionComponent} from 'react';
import './ContentBox.scss';

type ContentBoxPropsType = {
    title: string
    className?: string
    contentClassName?: string
}

const ContentBox: FunctionComponent<ContentBoxPropsType> = ({title, className, contentClassName, children}) => {
    return (
        <div className={`content__box ${className}`}>
            <h1 className={"content__box-title"}>
                <i className="fas fa-link"/>
                {title}</h1>
            <div className={`content__box-content ${contentClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default ContentBox;