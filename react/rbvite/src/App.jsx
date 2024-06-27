import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import My from "./components/My";

// mock
const SampleSession = {
  loginUser: { id: 1, name: "Hong", age: 30 },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 200, name: "컵라면", price: 2000 },
    { id: 300, name: "파", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);
  const [count, setCount] = useState(() => 0);
  // const [didLogin, setDidLogin] = useState(true);
  const plusCount = () => setCount((curr) => curr + 1);
  const removeItem = (itemId) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });
  };

  const addItem = (name, price) => {
    const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
    const item = { id: id + 1, name, price };
    setSession({
      ...session,
      cart: [...session.cart, item],
    });
  };

  const saveItem = (id, name, price) => {
    const editingItem = { id, name, price };
    setSession({
      ...session,
      cart: [
        ...session.cart.map((item) => (item.id === id ? editingItem : item)),
      ],
    });
  };
  // const toggleLogin = () => {
  //     setDidLogin(!didLogin);
  // };

  // logout : session의 loginUser를 null로 변경해줌
  const logout = () => {
    // SampleSession.loginUser = null;
    setSession({ ...session, loginUser: null });
  };

  const login = (name) => {
    // const loginUser = session.loginUser;
    const id = 1;
    const age = 33;
    const x = {
      ...session,
      loginUser: { ...session.loginUser, id, name, age },
    };
    console.log("x: ", x);
    setSession(x);
  };

  return (
    <>
      <div>
        {session.loginUser && (
          <Hello
            name={session.loginUser.name}
            age={session.loginUser.age}
            plusCount={plusCount}
          />
        )}
        {/* {didLogin && (
                    <Hello name="Yunki" age={30} plusCount={plusCount} />
                )} */}
      </div>

      {/* <button onClick={plusCount}>plus count</button> */}
      {/* <button onClick={toggleLogin}>
                Toggle {didLogin ? 'Logined' : 'Not Logined'}
                </button> */}
      {/* <button onClick={logout} className="ml-3">
                Signout
            </button> */}

      <My
        session={session}
        signOut={logout}
        signIn={login}
        removeItem={removeItem}
        addItem={addItem}
        saveItem={saveItem}
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
