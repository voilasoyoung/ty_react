//아마 useState란 이렇게 생겼을 것... 이해를 위한 파일!

const useState = (init) => {
    let state = init;
    const setState = (val) => {
        state = val;
        //렌더랑 작업
    };

    return [state, setState];
};