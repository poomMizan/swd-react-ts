import { Col, Row } from "antd";
import { useState } from "react";
import "../App.css";
import { useTranslation } from 'react-i18next';

const Boxes = () => {

  const { t } = useTranslation();
  const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const copyArr = arr;
  const first3 = copyArr.slice(0, 3)
  const last3 = copyArr.slice(-3);
  const [output, setOutput] = useState([0, ...first3, 41, ...last3, 72]);
  const [line, setLine] = useState(true);
  let copyLine = line;

  const setOutputBox = (): void => {
    console.log('line', line)
    console.log('arr ', arr);
    console.log('output ', output);
    if (copyLine) {
    setOutput([0, ...first3, 41, ...last3, 72]);
    } else {
      setOutput([ 41, ...first3, 72, 0, ...last3]);
    }
  }

  const changeLine = () :void => {
    setLine(currentLine => !currentLine);
    setOutputBox();
  }

  const moveLeft = (): void => {
    const firstIndex: number = copyArr[0];
    copyArr.shift();
    setArr([...copyArr, firstIndex]);
    setOutputBox()
  }

  const moveRight = (): void => {
    const lastIndex: number = copyArr[copyArr.length - 1];
    copyArr.pop();
    setArr([lastIndex, ...copyArr]);
    setOutputBox()
  }

  const shuffle = (): void => {
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }
    setArr([...copyArr]);
    setOutputBox()
  }

  const checkStyle = (id: number) :  {xl: number, xxl: number, className: string} => {
    let className = "white-box";
    if (id === 41 || id === 72) { 
      return {xl: 3, xxl: 2, className : `${className} hidden` };
    }
    if (id === 0) {
      return {xl: 6, xxl: 6, className : `${className} hidden` };
    }
    return { xl: 6, xxl: 6, className} ;
  }

  const Shape = (props: { position: number; }) : JSX.Element => {
    let style = checkStyle(props.position);
    let className: string = "inside ";
    switch (props.position) {
      case 1: className += "square"; break;
      case 2: className += "circle"; break;
      case 3: className += "ellipse"; break;
      case 4: className += "trapezoid"; break;
      case 5: className += "rectangle"; break;
      case 6: className += "rhombus";
    }
    return(
      <Col className={style.className} xxl={style.xxl} xl={style.xl} key={props.position} onClick={() => shuffle()}>
        <div className={className}></div>
      </Col>
    );
  }
  return (
    <div className="App">
      <Row>
        <h1 className="boxes-title">{t('test_1_desc')}</h1>
      </Row>
      <Row justify="center">
        <div  className="white-box relative" onClick={() => moveLeft()}>       
          <div className="arrow-btn arrow-left" ></div>
          <div className="pos-absolute move-title move-shape">{t('move_shape')}</div> 
        </div>

        <div className="big-white-box" onClick={()=> changeLine()}>
          <div className="white-box pos-absolute arrow-box arrow-box-left" >
            <div className="arrow-btn arrow-up"></div>
          </div>

          <div className="white-box pos-absolute arrow-box arrow-box-right">
            <div className="arrow-btn arrow-down" ></div>
          </div>
          <div className="pos-absolute move-title move-position">{t('move_position')}</div> 
        </div>

        <div className="white-box relative"  onClick={() => moveRight()}>
          <div className="arrow-btn arrow-right"></div>
          <div className="pos-absolute move-title move-shape">{t('move_shape')}</div> 
        </div>
      </Row>
      <br></br>
      <Row justify="center">
        <Col xl={22} xxl={14}>
          {output.map(el => <Shape  position={el} key={el}/>)}
        </Col>
      </Row>
    </div>
  );
}
export default Boxes;
