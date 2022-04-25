import React from "react"
import Link from "next/link"
import { HomeOutlined } from "@ant-design/icons";
import { Typography, DatePicker } from 'antd';

const { Title } = Typography
export default function details() {
    return (
        <div>
            <Title level={6}>this is jitendra</Title>
            <Link href="/">
                <a > <HomeOutlined /> home page</a>
            </Link>
            <div className="btns">
                select your date of birth : <DatePicker />
            </div>
        </div>
    )
}
