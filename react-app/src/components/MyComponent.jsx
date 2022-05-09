const MyComponent = (props) => {
    // const {name, children, name2} = props;
    return (
        <div>
            {props.children}
            안녕하세요 제 이름은 {props.name} 입니다. {props.name2}
            {props.children}
        </div>
    );
};
    export default MyComponent;