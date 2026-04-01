import React from "react";
import { useState, useDeferredValue } from "react";
import useFetch from "./useFetch";
export default function App11() {
  const [text, setText] = useState();
  const defferredText = useDeferredValue(text);
  const url = "https://jsonplaceholder.typicode.com/photos";
  const bigList = useFetch(url);
  const filtered = bigList.filter((item) => item.title.includes(defferredText));
  // return new Error("Global Error")
  return (
    <div>
      App11
      <p>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </p>
      <p>
        {filtered.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </p>
    </div>
  );
}
