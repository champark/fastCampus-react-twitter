import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Router from "./components/Router";

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
