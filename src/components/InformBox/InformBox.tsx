import React, {FunctionComponent} from 'react';
import './InformBox.scss';

const InformBox: FunctionComponent = ({children}) => {
    return (
        <div className={"inform-box"}>
            {children}
        </div>
    );
};

export default InformBox;