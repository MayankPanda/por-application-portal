import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Card} from "antd";
import {Link} from "react-router-dom";
const {Meta} = Card;

const PORCard = ({title, applicationObject, type, userObject, props}) => {

    return (
        <React.Fragment>
            <Card
                style={{
                    width: 300,
                }}
                actions={[
                    <Link to="/form" state={{applicationObject, userObject}}><SettingOutlined key="setting" /></Link>,
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