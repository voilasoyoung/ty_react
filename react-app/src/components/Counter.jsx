import { useState } from "react";//1. useState를 import 한다.

const Counter = () => {
    const [number, setNumber] = useState(5);//2. userState 선언 방식 - number의 초기값을 세팅한다.
    //변수가 화면에 나오면서 변하는 값일 때 useState를 사용한다.
    // let number = 5;

    const handleClick = () =>{
        setNumber (number+1);
        console.log(number);
    };

    return(
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default Counter;