import { useState } from "react";

const EventPractice = () => {
    // const [message, setMessage] = useState("");
    // const [username, setUsername] = useState("");
    const [form, setForm] = useState( { username : "", message: ""});
    const { username, message } = form;

    const handleClick = () => {
        alert(`${username}`+" "+`${message}`);
        setForm({ username : "", message : "" });
    };

    const handleKeyUp = (e) =>{
        if(e.key === "Enter"){
            handleClick();
        }
    };

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        const newForm = { ...form, [name]:value};//[]안에 해주면 대괄호 안의 값이 key 값이 된다?? 잘 못들음
        setForm(newForm);
    }

    return (
        <div>
            <h1> 이벵트 연습</h1>
            <input name="username"
                    type="text" 
                    placeholder="userName 입력하기"
                    onChange={handleChange}
                    value = {username}
                />
            <input 
                type="text" 
                name = "message" 
                placeholder="아무거나 입력하기"
                onChange={handleChange}
                value = {message} // 양방향 바인딩
            />
            <button onClick={handleClick}>확인</button>
        </div>
    );
};

export default EventPractice;