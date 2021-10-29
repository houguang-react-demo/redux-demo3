import React from 'react';
import ProList from '@ant-design/pro-list';
import '@ant-design/pro-list/dist/list.css'
import 'antd/dist/antd.css'
import {Button} from "antd";


const ListComponent = (props) => (
    <ProList
        toolBarRender={() => {
            return [
                <Button key="add" type="primary" onClick={props.getData}>
                    换一换
                </Button>,
            ];
        }}
        style={{width: "1000px"}}
        headerTitle="基础列表"
        tooltip="基础列表的配置"
        dataSource={props.list}
        metas={
            {
                title: {},
                avatar: {},
                description: {},
                actions: {
                    render: (text, row) => [
                        <Button
                            key={row.id}
                            type="danger"
                            onClick={() => props.deleteItem(row.id)}
                        >删除
                        </Button>
                    ],
                },
            }
        }
    />
);

export default ListComponent