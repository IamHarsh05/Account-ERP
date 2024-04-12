import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/side-logo-icon.svg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

import logo1 from '@/style/images/logo1.png';
import logo2 from '@/style/images/logo2.png';
import logo3 from '@/style/images/logo3.png';
import logo4 from '@/style/images/logo4.png';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  const langDirection = useSelector(selectLangDirection)

  return (
    <Content
      style={{
        padding: '0 30px 0',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="erp ERP CRM"
          style={{ margin: '0 auto', display: 'block' }}
          height={250}
          width={350}
        />
        <div className="space40"></div>
        <Title level={3}>{translate('Manage your company with')} :</Title>

        <div className="space20"></div>
        <ul className="list-checked" style={{ paddingRight: 0 }}>
          <li className={`list-checked-item ${langDirection === "rtl" ? "list-checked-item-right" : "list-checked-item-left"}`}>
            <Space direction="vertical">
              <Text strong>{translate('All-in-one tool')}</Text>

              <Text>{translate('Run and scale your ERP CRM Apps')}</Text>
            </Space>
          </li>

          <li className={`list-checked-item ${langDirection === "rtl" ? "list-checked-item-right" : "list-checked-item-left"}`}>
            <Space direction="vertical">
              <Text strong>{translate('Easily add and manage your services')}</Text>
              <Text>{translate('It brings together your invoice clients and leads')}</Text>
            </Space>
          </li>
        </ul>
        <Divider />
      </div>
    </Content>
  );
}
