import { useEffect } from "react";
import "./App.css";
import Axios from "axios";
import CourseList from "./components/CourseList";

function App() {
  const getMsg = () => {
    Axios.get(`/api/msg`).then((res) => console.log(res.data));
  };

  useEffect(() => {
    getMsg();
  }, []);

  return <CourseList />;
}

export default App;
