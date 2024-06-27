import Login from './Login';
import Profile from './Profile';

function My({ session: { loginUser }, signOut }) {
    return (
        <>
            {loginUser ? (
                <Profile userInfo={loginUser}></Profile>
            ) : (
                <Login></Login>
            )}
            <button onClick={signOut}>signOut</button>
        </>
    );
}

export default My;
