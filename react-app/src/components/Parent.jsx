import MyComponent from "./MyComponent";

const Parent = () => {
    return (
        <>
            Parent
            <MyComponent name="리액트" />
            <MyComponent name="뷰"/>
            <MyComponent name="앵귤러"/>
        </>
    );
};

export default Parent;