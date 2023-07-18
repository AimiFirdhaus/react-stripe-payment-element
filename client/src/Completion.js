import { useNavigate } from "react-router-dom";

function Completion(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>Thank you! 🎉</h1>
      <button onClick={() => navigate("/")}>Back to homepage</button>
    </>
  );
}

export default Completion;
