import React, { Fragment } from 'react';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import TopBar from '../../../../../WebstormProjects/lip-task2/src/components/TopBar';
import SideBar from '../../../../../WebstormProjects/lip-task2/src/components/Sidebar';

const { Header, Content } = Layout;

interface IProps {}

function Page(props: IProps) {
    return (
        <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={80} theme="light">
                    <SideBar />
                </Sider>
                <Layout>
                    <Header>
                        <TopBar />
                    </Header>
                    <Content>main content</Content>
                </Layout>
            </Layout>
        </Fragment>
    );
}

export default Page;
