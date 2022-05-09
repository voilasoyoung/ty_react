import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("너무 먹었다...");
    const onClickLeave = () => setMessage("런데이 뛰자!");

        const [color, setColor] = useState("black");

    return (
        <div>
            <button onClick={onClickEnter}>원인</button>
            <button onClick={onClickLeave}>결과</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{color : "pink"}} onClick={() => setColor=("pink")}>
                핑크
            </button>
            <button style={{color : "aqua"}} onClick={() => setColor=("aqua")}>
                블루
            </button>
            <button style={{color : "yellow"}} onClick={() => setColor=("yellow")}>
                노랑
            </button>
        </div>
    );
};

export default Say;