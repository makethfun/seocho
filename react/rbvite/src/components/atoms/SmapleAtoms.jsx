import Button from "./Button";
import Input from "./Input";

function SampleAtoms() {
  return (
    <>
      <div>
        <button className="btn btn-primary text-sm">BTN</button>
        <button className="btn-primary text-xs">BTN-PRIMARY</button>
        <button className="btn-danger text-lg">BTN-DANGER</button>
      </div>
      {/* <div><input type="text" /></div> */}
      <Input />

      <Button
        text="상품수정"
        type="primary"
        size="xs"
        className="mx-5 font-semibold"
      />
      <Button text="상품삭제" size="2xl" type="danger" />
    </>
  );
}

export default SampleAtoms;
