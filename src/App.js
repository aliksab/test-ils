import { Layout } from 'antd';
import SiderPanel from "./components/SiderPanel";
import './App.css';
import Map from './components/Map';


const { Content } = Layout;

function App() {
  return (
    <div className="main" >
      <Layout className="main-app" >
        <SiderPanel />
        <Layout>
          {/* <Header style={{ background: '#fff', width: "100vw" }} /> */}
          <Content className="main-map">
          <Map />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
