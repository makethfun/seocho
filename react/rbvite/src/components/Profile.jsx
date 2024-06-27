import Button from "./atoms/Button";

function Profile({ name, signOut }) {
  return (
    <>
      <div>
        <strong className="text-green-500">{name} logined</strong>
        {/* <button onClick={signOut} className="m-3">
          SignOut
        </button> */}
        <Button onClick={signOut} text="Sign Out" size="xs" />
      </div>
    </>
  );
}

export default Profile;
