import { useState } from "react";
import Todolist from "./components/Todolist";
import moment from "moment";
import EnterTodo from "./components/EnterTodo";

function Todo({ todoData }) {
  const [todoList, setTodoList] = useState(todoData);
  const [testCnt, setTestCnt] = useState(0);
  // const depthTodo = (todoKey) => {
  //   const updateDepth = todoList.map((isDepth) => {
  //     if (isDepth.key === todoKey) {
  //       return { ...isDepth, isOpen: !isDepth.isOpen };
  //     } else {
  //       return {
  //         ...isDepth,
  //         isOpen: false,
  //       };
  //     }
  //   });
  //   setTodoList(updateDepth);
  // };

  const addItem = (addingItem) => {
    const key = Math.max(...todoList.map((item) => item.key)) ?? 0;
    const title = addingItem;
    const item = {
      key: key + 1,
      title,
      depth: [],
      categories: null,
      isOpen: false,
      todoDate: moment().format().substring(0, 10),
    };
    setTodoList({ ...todoList, item });
  };
  return (
    <>
      <ul>
        {todoList?.length ? (
          todoList.map((todo) => (
            <li key={todo.key}>
              <Todolist
                title={todo.title}
                isOpen={todo.isOpen}
                data={todo.data}
                // depthTodo={depthTodo}
              />
            </li>
          ))
        ) : (
          <h1>hello</h1>
        )}
      </ul>
      <EnterTodo addItem={addItem} />
    </>
  );
}

export default Todo;
