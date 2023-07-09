import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Card} from "antd";
const {Meta} = Card;

const PORCard = (props) => {
    console.log(props.img)
    return (
        <React.Fragment>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt="example"
                        src={props.img.toString()}
                        height={50}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card Title"
                    description="This is the description"
                />
            </Card>
        </React.Fragment>
    )
}

export default PORCard