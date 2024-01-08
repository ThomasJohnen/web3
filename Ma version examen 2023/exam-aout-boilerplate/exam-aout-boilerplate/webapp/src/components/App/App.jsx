import React from 'react';

import { Layout, Menu } from 'antd'
import { Route, Routes, useNavigate } from 'react-router-dom';
import ListJokes from 'components/ListJokes/ListJokes';
import Joke from 'components/Joke/Joke';
import About from 'components/About/About';
const { Header, Content } = Layout



const App = () => {
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item key="1" onClick={() => navigate('/')}>Jokes</Menu.Item>
          <Menu.Item key="2" onClick={() => navigate('/about')}>About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <Routes>
          <Route path="/" element={<ListJokes />} />
          <Route path="/" element={<Joke />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
