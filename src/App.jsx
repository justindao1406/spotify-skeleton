import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />

        <Route element={<MainLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
