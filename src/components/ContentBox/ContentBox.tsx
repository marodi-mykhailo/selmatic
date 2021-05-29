import React, {CSSProperties, FunctionComponent} from 'react';
import './ContentBox.scss';

type ContentBoxPropsType = {
    title?: string
    className?: string
    contentClassName?: string
    style?: CSSProperties
}

const ContentBox: FunctionComponent<ContentBoxPropsType> = ({
                                                                title,
                                                                className,
                                                                contentClassName,
                                                                style,
                                                                children,
                                                            }) => {
    return (
        <div style={style} className={`content__box ${className}`}>
            {title && <h1 className={"content__box-title"}>
                {title}</h1>}
            <div className={`content__box-content ${contentClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default ContentBox;