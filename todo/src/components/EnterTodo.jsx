import { FaPlus } from "react-icons/fa";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
import { useRef } from "react";

function EnterTodo(addItem) {
  const todoTitleRef = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    const todoTitle = todoTitleRef.current.value;
    addItem(todoTitle);
  };
  return (
    <>
      <form className="m-2 flex gap-3 border border-green-300 p-3">
        <Input
          ref={todoTitleRef}
          type="text"
          placeholder="무엇을 해야하나요?"
        />
        {/* <Input ref={priceRef} type="number" placeholder="금액" /> */}
        <Button text={<FaPlus />} onClick={addTodo} size="sm" />
      </form>
    </>
  );
}

export default EnterTodo;
