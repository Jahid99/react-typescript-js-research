import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Callback } from "./Callback";

const CallbackIndex: React.FC = () => {
  return (
    <div>
      <Callback>
        {(test:any) => (
            <h1>Pathan</h1>
        )}
      </Callback>
    </div>
  );
};

export default CallbackIndex;
