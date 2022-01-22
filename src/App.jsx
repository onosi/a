import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["うううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((imcompleteTodo) => {
            return (
              <div key={imcompleteTodo} className="list-row">
                <li>{imcompleteTodo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((completeTodo) => {
            return (
              <div key={completeTodo} className="list-row">
                <li>{completeTodo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
