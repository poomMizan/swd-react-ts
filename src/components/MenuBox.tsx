import { Col, Row } from 'antd';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate   } from 'react-router-dom';
import "../App.css";
const MenuBox = () => {
  const { t } = useTranslation();
  const navigate = useNavigate ();
  const handleClick = () => {
    navigate("/box");
  }

  const RowTitle = (props: { text: string }) => (
    <Row>
      <Col style={{textAlign:'left', marginLeft: '20px', marginBottom: '30px', fontWeight: 'bold'}}>
        <p>{props.text}</p>
      </Col>
    </Row>
  );
  const RowDesc = (props: { text: string }) => (
    <Row>
      <Col style={{textAlign:'left', marginLeft: '20px'}}>
        <p>{props.text}</p>
      </Col>
    </Row>
  );
  
  return(
    <Row justify="center" className="big-box-menu">
      <Col className="white-box-menu grab" onClick={handleClick}>
        <RowTitle text={t('test_1')} />
        <RowDesc text={t('test_1_desc')} />
      </Col>
  
      <Col className="white-box-menu">
        <RowTitle text={t('test_2')} />
        <RowDesc text={t('test_2_desc')} />
      </Col>

      <Col className="white-box-menu">
        <RowTitle text={t('test_3')} />
        <RowDesc text={t('test_3_desc')} />
      </Col>

      <Outlet />
    </Row>
  );
}
export default MenuBox;