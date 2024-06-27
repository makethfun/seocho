import { useState } from 'react';
import './App.css';
import My from './components/My';

const SmapleSession = {
    loginUser: { id: 1, name: 'Hong', age: 30 },
    cart: [
        { id: 100, name: '라면', price: 3000 },
        { id: 200, name: '컵라면', price: 2000 },
        { id: 300, name: '파', price: 5000 },
    ],
};

function App() {
    const [session, setSession] = useState(SmapleSession);
    const logout = () => {
        setSession({ ...session, loginUser: null });
    };

    console.log(session.loginUser);
    return (
        <>
            <My session={session} signOut={logout}></My>
            <div>hello, world!</div>
        </>
    );
}

export default App;
