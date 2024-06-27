import { useEffect, useRef } from "react";
// import { useState } from "react";
import Button from "./atoms/Button";
import Input from "./atoms/Input";

function Login({ signIn }) {
  // const [name, setName] = useState("XX");
  // console.log("**************", name);

  const nameRef = useRef();
  const passwdRef = useRef();

  const login = (evt) => {
    evt.preventDefault();
    // evt.stopPropagation();
    // console.log("nameRef.current.value", nameRef.current.value);
    // signIn(name);
    const name = nameRef.current.value;
    const passwd = passwdRef.current.value;
    if (!name || !passwd) {
      alert("이름과 패스워드를 정확히 입력하세요!");
      if (!name) nameRef.current.focus();
      else passwd.current.focus();
      return;
    }
    signIn(nameRef.current.value);
  };

  useEffect(() => {
    if (nameRef.current) nameRef?.current.focus();
  }, [nameRef]);

  return (
    <form className="border border-red-300 p-5">
      <h2 className="text-center text-3xl font-semibold leading-7 text-green-900">
        Sign-in
      </h2>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input label="Name" ref={nameRef} />
          {/* <input
            type="text"
            // value={name}
            ref={nameRef}
            className="px-2 ring-1 ring-inset"
            // onChange={(evt) => setName(evt.target.value)} // ** 이거 span에 안잡힘 - Input components가 아님, 그냥 input임
          />
          name: <span className="text-red-300">{name}</span> */}
        </div>
        <div className="sm:col-span-3">
          <Input label="Password" type="password" ref={passwdRef} />
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        {/* <button className="justify-center">Sign In</button> */}
        {/* <Button
          onClick={(evt) => {
            evt.preventDefault();
            // evt.stopPropagation();
            signIn("xxx");
          }}
          text="로그인"
          type="primary"
          size="lg"
          className="px-5 py-2"
        /> */}
        <Button
          onClick={login}
          text="로그인"
          type="primary"
          size="lg"
          className="px-5 py-2"
        />
      </div>
    </form>
  );
}

export default Login;
