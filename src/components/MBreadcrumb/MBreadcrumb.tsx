import React from 'react';
import {Breadcrumb} from "antd";

const {Item} = Breadcrumb;

export type MBreadcrumbItemType = {
    id: string
    name: string | undefined,
    link: string
}

type MBreadcrumbPropsType = {
    steps: Array<MBreadcrumbItemType>
}

const MBreadcrumb = ({steps}: MBreadcrumbPropsType) => {
    return (
        <div className={"page-bar"}>
            <Breadcrumb className={"page-breadcrumb"}
                        separator=">">
                <Item className={"page-breadcrumb-item"}
                      href={"/"}>
                    Home
                </Item>
                {steps?.map(item => (
                    <Item className={"page-breadcrumb-item"}
                          key={item.id}
                          href={item.link}
                    >{item.name}</Item>
                ))}
            </Breadcrumb>
        </div>
    );
};

export default MBreadcrumb;