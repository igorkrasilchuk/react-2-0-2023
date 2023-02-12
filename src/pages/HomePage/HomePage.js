import {useContext} from "react";
import {MyContext} from "../../index";

const HomePage = () => {
  const context =useContext(MyContext);
    context.gender = 'male';
    return (
        <div>
            HomePage
        </div>
    );
};

export {HomePage};