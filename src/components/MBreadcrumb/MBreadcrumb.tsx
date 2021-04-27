import React from 'react';
import {Breadcrumb} from "antd";
import {HomeFilled, RightOutlined} from "@ant-design/icons";

const {Item} = Breadcrumb;

export type MBreadcrumbItemType = {
    id: string
    name: string,
    link: string
}

type MBreadcrumbPropsType = {
    steps: Array<MBreadcrumbItemType>
}

const MBreadcrumb = ({steps}: MBreadcrumbPropsType) => {
    return (
        <div className={"page-bar"}>
            <Breadcrumb className={"page-breadcrumb"}
                        separator={<RightOutlined style={{fontSize: "8px"}} />}>
                <Item className={"page-breadcrumb-item"}
                      href={"#"}>
                    <HomeFilled className={"page-breadcrumb-icon"}/>
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