function Todolist({ title, isOpen, data, depthTodo }) {
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
      <div className="mb-1 rounded-md border">
        <div
          className="w-full bg-gray-200 p-4 text-left transition duration-300 hover:bg-gray-300"
          onClick={depthTodo}
        >
          <div className="border-2">
            <p>{title}</p>
          </div>
        </div>
        <span
          className={`float-right transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
        ></span>
        {isOpen && <div className="bg-white p-4">{data}</div>}
      </div>
    </>
  );
}

export default Todolist;
