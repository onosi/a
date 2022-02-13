import React from "react";

export const IncompleteTodos = ({
  incompleteTodos,
  onClickComplete,
  onClickDelete
}) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((incompleteTodo, index) => {
          return (
            <div key={incompleteTodo} className="list-row">
              <li>{incompleteTodo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
