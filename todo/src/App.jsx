// import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
// import EnterTodo from "./components/EnterTodo";

function App() {
  const defaultData = [
    {
      key: 1,
      title: "팔굽혀펴기",
      depth: [{ depthKey: 1, contents: "10회" }],
      categories: "운동",
      isOpen: false,
      todoDate: "2024-06-20",
    },
    {
      key: 2,
      title: "턱걸이",
      depth: [{ depthKey: 1, contents: "10회" }],
      categories: "운동",
      isOpen: false,
      todoDate: "2024-06-20",
    },
    {
      key: 3,
      title: "윗몸일으키기",
      depth: [{ depthKey: 1, contents: "10회" }],
      categories: "운동",
      isOpen: false,
      todoDate: "2024-06-20",
    },
    {
      key: 4,
      title: "팔굽혀펴기",
      depth: [{ depthKey: 1, contents: "10회" }],
      categories: "운동",
      isOpen: false,
      todoDate: "2024-06-20",
    },
  ];

  // const [todoList, setTodoList] = useState(defaultData);

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

  return (
    <>
      <div className="m-8 p-2">
        <h2 className="mx-auto mb-2 text-2xl text-red-800">To do App</h2>
        <div></div>
        <Todo todoData={defaultData} />
      </div>
    </>
  );
}

export default App;
