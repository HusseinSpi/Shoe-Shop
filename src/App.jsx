import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import { NoMatch } from "./pages/noMatch/NoMatch";
import { ShoePage } from "./pages/ShoePage/ShoePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "shoes/:shoeId",
        element: <ShoePage />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
