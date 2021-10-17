//https://youtu.be/LlvBzyy-558
import axios from "axios";
import React, {useState, useMemo, useEffect} from "react";

const UseMemoVsUseEffectIndex: React.FC = () => {

  const [toggle, setToogle] = useState(false);

  const [data, setData] = useState(null) as any;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongName = (comments:any) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This was called");

    return longestName;
  }

  const getLongName = useMemo(() => findLongName(data), [data]);

  return (
    <div>
        <h1>{getLongName}</h1>
        <button onClick={() => {
            setToogle(!toggle)
        }

        }>
            {""}
            Toogle
        </button>
        {toggle && <h1>Toogle Text Showed</h1>}
    </div>
  );
};

export default UseMemoVsUseEffectIndex;


