import React from 'react';
import { Divider, Menu } from 'antd';
import { FileAddOutlined, HomeOutlined, EditOutlined, DownloadOutlined, FilePdfOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
const items = [
    {
        label: 'Home',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: 'Your Documents',
        key: 'details',
        icon: < FilePdfOutlined />,
        // disabled: true,
    },
    {
        label: 'Create Your',
        key: 'create_your',
        icon: < FileAddOutlined />,
    },
    {
        label: 'Settings',
        key: 'settings',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Modification Section',
                children: [
                    {
                        label: 'Change Profile',
                        key: 'setting:1',
                        icon: <EditOutlined />,
                    },
                    {
                        label: 'Modified Your Resume',
                        key: 'setting:2',
                        icon: <EditOutlined />,
                    },
                ],
            },
            {
                type: 'group',
                label: 'Download Section',
                children: [
                    {
                        icon: <DownloadOutlined />,
                        label: 'Download Your Resume',
                        key: 'setting:3',
                    },
                    // {
                    //     label: 'Option 4',
                    //     key: 'setting:4',
                    // },
                ],
            },
        ],
    },
    // {
    //     label: (
    //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //             Navigation Four - Link
    //         </a>
    //     ),
    //     key: 'alipay',
    // },

];

const App = () => {
    const router = useRouter()
    const [current, setCurrent] = React.useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        router.push(e.key)
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;