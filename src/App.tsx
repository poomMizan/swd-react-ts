import { useState } from "react";
import "./App.css";

const App = () => {
  type objectType = {
    id: number;
    // jsx: JSX.Element | null
  };
  let [arr, setArr] = useState<objectType[]>([
    { id: 1},
    { id: 2},
    { id: 3}, 
    { id: 4},
    { id: 5},
    { id: 6}
  ]);

  const moveLeft = (): void => {
    const copyArr: objectType[] = arr;
    const firstIndex: objectType = copyArr[0];
    copyArr.shift();
    setArr([...copyArr, firstIndex]);
  }
  const moveRight = (): void => {
    const copyArr: objectType[] = arr;
    const lastIndex: objectType = copyArr[copyArr.length - 1];
    copyArr.pop();
    setArr([lastIndex, ...copyArr]);
  }
  const shuffle = (): void => {
    let copyArr: objectType[] = arr;
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }
    // console.log(copyArr);
    setArr([...copyArr]);
  }
  const Shape = (props: { id: number; }) : JSX.Element => {
    let className: string = "";
    if (props.id === 1) {
      className = "square";
    }
    else if (props.id === 2) {
      className = "circle";
    }
    else if (props.id === 3) {
      className = "ellipse";
    }
    else if (props.id === 4) {
      className = "trapezoid";
    }
    else if (props.id === 5) {
      className = "rectangle";
    }
    else if (props.id === 6) {
      className = "rhombus";
    }
    return(
      <div className="white-box" onClick={() => shuffle()}>
        <div className={className}></div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>swd test</h1>
      <div>
        <div className="white-box">        
          <div className="arrow-btn arrow-left" onClick={() => moveLeft()}></div>
        </div>
        <div className="white-box">
          <div className="arrow-btn arrow-up"></div>
        </div>
        <div className="white-box">
          <div className="arrow-btn arrow-down"></div>
        </div>
        <div className="white-box">
          <div className="arrow-btn arrow-right" onClick={() => moveRight()}></div>
        </div>
      </div>
      <div>
        {arr.map(a => <Shape id={a.id} key={a.id}/>)}
      </div>
    </div>
  );
}
export default App;
