import "./styles.css";
import myFun from "./myFun";
import MyFun from "./MyFun";

export default function App() {
  return (
    <div className="App">
      <h1>Javascript Function Inspiration</h1>
      {myFun()}
      <MyFun />
    </div>
  );
}
