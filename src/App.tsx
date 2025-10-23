import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx"
import Model3D from "./pages/Model3D.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model/:name" element={<Model3D />} />
    </Routes>
  )
}

export default App
