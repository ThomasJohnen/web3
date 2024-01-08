
import { Layout, Menu } from 'antd'
import FilterChildren from 'Children/FilterChildren';
import ListChildren from 'Children/ListChildren'

import Help from 'Help/Help';

import { Route, Routes } from 'react-router'
import {Link} from 'react-router-dom';
const { Header, Content } = Layout

const App = () => {
 
 

  return (
    <Layout className="layout">
    <Header>
    
    
    
      
      
      <Menu key="Menu" theme="dark" mode="horizontal" selectedKeys={[]}>
     <Menu.Item key="Menu enfant" > <Link to="/childrens">Enfant</Link></Menu.Item>
        <Menu.Item key="Menu aide">   <Link  to="/aide">Aide</Link></Menu.Item>
      </Menu>
    </Header>
    
    <Content style={{ padding: '30px 50px' }}>
    < Routes>
    
    <Route path="/childrens" element={<ListChildren />} />
    <Route path="/childrens/:id" element={<FilterChildren  />}
/>
    <Route path="/aide" element={<Help />} />
     
      </Routes>
    
 
      
      
    </Content>
  </Layout>
  )
}

export default App
