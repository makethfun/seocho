import { useState } from 'react';
import './App.css';
import My from './components/My';

const SampleSession = {
    loginUser: { id: 1, name: 'Hong', age: 30 },
    cart: [
        { id: 100, name: '라면', price: 3000 },
        { id: 200, name: '컵라면', price: 2000 },
        { id: 300, name: '파', price: 5000 },
    ],
};

function App() {
    const [session, setSession] = useState(SampleSession);
    const [count, setCount] = useState(0);
    const logout = () => {
        setSession({ ...session, loginUser: null });
    };
    return (
        <>
            <div>
                <My session={session} signOut={logout} />
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
