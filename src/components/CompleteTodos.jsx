import React from "react";

export const CompleteTodos = ({ completeTodos, onClickBack }) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((completeTodo, index) => {
          return (
            <div key={completeTodo} className="list-row">
              <li>{completeTodo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
