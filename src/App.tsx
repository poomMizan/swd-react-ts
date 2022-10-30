import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import "./App.css";
import MenuBox from './components/MenuBox';
import Boxes from './components/Boxes';
import { useTranslation } from 'react-i18next';
import i18n from './react-i18next';
import { Routes, Route, Outlet } from "react-router-dom";

const App = () => {

  const { t } = useTranslation();
  const menu = (
    <Menu
      items={[
        {
          label: t('lang_en'),
          key: '1',
          onClick: () => i18n.changeLanguage('en'),
        },
        {
          label: t('lang_th'),
          key: '2',
          onClick: () => i18n.changeLanguage('th'),
        },
      ]}
    />
  );
  return(
    <div className="App">
      <div className="m025">
        <Space className="space"> 
          <Dropdown overlay={menu} >
            <Button>
              <Space>
                {t('current_lang')}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <Routes>
        <Route path="/" element={<MenuBox />} />
        <Route path="/box" element={<Boxes />} />
      </Routes>
      <Outlet />
    </div>
  )};
export default App;