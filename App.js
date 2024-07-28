import logo from "./logo.svg";
import "./App.css";
import Jsx_Expression from "./components/Jsx-expression"; // eslint-disable-next-line
import FunComp from "./components/FunComp";
import FunComp1 from "./components/FunComp1";
import ClassComp from "./components/ClassComp";
import ClassCompState from "./components/ClassCompState";

function App() {
  return (
    <div className="container border my-3">
      <header className="header">
        <img src={logo} alt="React js" />
      </header>
      <hr></hr>
      <h2>Biểu thức jsx</h2>
      <Jsx_Expression />
      <FunComp renderFullName="Đức Nam" renderCompany="TMA VN" />
      <FunComp1 renderData="Đây là data" renderStudents="students list" />
      <ClassComp renderFullName="Đức Nam" renderCompany="TMA VN" />
      <ClassCompState />
    </div>
  );
}

export default App;
