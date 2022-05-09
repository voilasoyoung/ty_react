const IterationSample = () => {
     const names =["딸기", "복숭아", "수박", "체리"];
    // const nameList = names.map((e)=> <li>{e}</li>);//map함수를 이용

    return (
        // <ul>
        //     {[<li>딸기</li>, <li>복숭아</li>, <li>수박</li>, <li>체리</li>]}
        // </ul>
        <ul>
            {names.map((e)=> (
            <li key={e}>{e}</li>
            ))}
        </ul>
    );
};

export default IterationSample;