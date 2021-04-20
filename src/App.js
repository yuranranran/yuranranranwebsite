import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

class App extends React.Component {
  render = () => (
    <Layout>
      <Header className="header-style">
        {'Header'}
      </Header>
      <Layout style={{ padding: '24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            height: 800,
            overflow: 'auto'
          }}
        >
          {'Home'}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;
