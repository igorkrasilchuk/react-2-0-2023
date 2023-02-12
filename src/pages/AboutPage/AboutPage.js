import {useContext} from "react";
import {MyContext} from "../../index";
import Button from "../../components/Button/Button";

const AboutPage = () => {
    const context = useContext(MyContext);
    return (
        <div>
            {JSON.stringify(context )}
            <h1>Name: {context.name}</h1>
            <h3>Age: {context.age}</h3>
            <h5>Gender: {context.gender}</h5>
            <Button click={()=> console.log('You press on button click ')}>Click</Button>
        </div>
    );
};

export {AboutPage};