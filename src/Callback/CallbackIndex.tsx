import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Callback } from "./Callback";

// props
// hooks
// render props
const test = 'ok';
const CallbackIndex: React.FC = () => {
  return (
    <div>
      <Callback>
        {(test:any) => (
            <h2>Pathan</h2>
        )}
      </Callback>
    </div>
  );
};

export default CallbackIndex;
