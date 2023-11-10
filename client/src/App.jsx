import { RouterProvider } from "react-router-dom";
import router from "./router";
import ParticleBg from "./components/Particle";

function App() {
  return (
    <>
      <ParticleBg />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
