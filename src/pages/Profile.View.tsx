import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, FileDoneOutlined, HomeOutlined } from '@ant-design/icons';
import ProfileOne from 'components/profile-one';
import ProfileTwo from 'components/profile-two';
import ProfileThree from 'components/profile-three';

const { Content, Sider, Footer } = Layout;

const ProfileView: React.FunctionComponent = () => {
    const [state, setstate] = useState("1");


    function renderSwitch(param: string) {
        switch (param) {
            case '1':
                return <ProfileOne />;
            case '2':
                return <ProfileTwo />
            case '3':
                return <ProfileThree />

            default:
                return <ProfileOne />;
        }
    }

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                theme="light">
                <div style={{ marginTop: '50px' }}></div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onClick={(value) => setstate(value.key)}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        General
                    </Menu.Item>
                    <Menu.Item key="2" icon={<HomeOutlined size={27} />}>
                        Domicilio
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FileDoneOutlined />}>
                        Representante Legal
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 900 }}>
                        { renderSwitch(state) }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Roger Torres ©2022 </Footer>
            </Layout>
        </Layout>
    );
}

export default ProfileView;