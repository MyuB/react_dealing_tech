import useInputs from "./useInput";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input value={name} onChange={onChange} />
        <input value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>name: </b> {name}
        </div>
        <div>
          <b>nickname: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
