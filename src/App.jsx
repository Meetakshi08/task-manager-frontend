import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./LandingPage.jsx/NavBar";
import First from "./LandingPage.jsx/First";
import Dash from "./DashBoard/Dash";
import RightSide from "./DashBoard/RightSide";
import AddTask from "./component/AddTask";
import MyTask from "./component/MyTask";
import Setting from "./component/Setting";

function Layout({ children }) {
  return (
    <div className="flex w-full">
      <Dash />
      <div className="flex-1">{children}</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

     <Routes>

  <Route path="/" element={
    <>
      <NavBar />
      <First />
    </>
  } />



  <Route path="/dashboard" element={
    <Layout>
      <RightSide />
    </Layout>
  } />

  <Route path="/tasks" element={
    <Layout>
      <MyTask />
    </Layout>
  } />

  <Route path="/add" element={
    <Layout>
      <AddTask />
    </Layout>
  } />

  <Route path="/setting" element={
    <Layout>
      <Setting />
    </Layout>
  } />

</Routes>
    </BrowserRouter>
  );
}

export default App;