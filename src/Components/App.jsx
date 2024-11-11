import '../App.css';
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </>,
    errorElement: <p>error</p>,
  },
  {
    path: "/about",
    element: <>
      <p>om</p>
    </>,
    errorElement: <p>error</p>,
  },
  {
    path: ":/*",
    errorElement: <p>error</p>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
