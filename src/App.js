import "./styles.css";
import React from "react";
export default function App() {
  const [res, setRes] = React.useState([]);
  const [dir] = React.useState(["/a", "/a/j", "/c/d/e", "/c/d", "/b"]);
  React.useEffect(() => {
    let response = new Array(0);
    dir.sort();
    response.push(dir[0]);
    for (let i = 0; i < dir.length; i++) {
      let cur = dir[i].split("/");
      let pre = response[response.length - 1];
      pre = pre.split("/");
      if (pre[1] === cur[1]) {
        continue;
      }
      response.push(dir[i]);
    }
    setRes(response);
  }, []);
  return <div className="App">{JSON.stringify(res)}</div>;
}
