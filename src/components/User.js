import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //API calls
  }, []);
  async function getDatUSerInfo() {
    const data = await fetch();
  }
  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      {/* <h1>Count={count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location:Pune</h3>
      <button onClick={() => setCount(count + 1)}>Clicked mi</button>
      <h4>Contact:poonamugale1997@gmail.com</h4>
    </div>
  );
};
export default User;
