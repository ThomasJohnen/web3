import GoodButton from "components/Button/GoodButton";
import OkButton from "components/Button/OkButton";
import BadButton from "components/Button/BadButton";
import ResetButton from "components/Button/ResetButton";
import { useContext } from "react";

import {Context as countersContext} from "contexts/countersContext "







const App = () => {
    const { goodCounter, okCounter, badCounter } = useContext(countersContext);
    return (
      <div>
        <ul>
          <li>
            <span>Good : {goodCounter}</span> <GoodButton />
          </li>
          <li>
            <span>Ok : {okCounter}</span> <OkButton />
          </li>
          <li>
            <span>Bad : {badCounter}</span> <BadButton />
          </li>
        </ul>
        <ResetButton />
      </div>
    );
  };
  
  export default App;
  