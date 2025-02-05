import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
