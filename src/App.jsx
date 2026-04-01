import Footer from "./components/Footer";
import Header from "./components/Header";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";
import App10 from "./components/App10";
import App11 from "./components/App11";
import App12 from "./components/App12";
import App13 from "./components/App13";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import ErrorPageGlobal from "./components/ErrorPageGlobal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPageGlobal />,
      children: [
        {
          index: true,
          element: <App1 />,
        },
        {
          path: "/App2",
          element: <App2 />,
        },
        {
          path: "/App3",
          element: <App3 />,
        },
        {
          path: "/App4",
          element: <App4 />,
        },
        {
          path: "/App5",
          element: <App5 />,
        },
        {
          path: "/App6",
          element: <App6 />,
        },
        {
          path: "/App7",
          element: <App7 />,
        },
        {
          path: "/App8",
          element: <App8 />,
        },
        {
          path: "/App9",
          element: <App9 />,
        },
        {
          path: "/App10",
          element: <App10 />,
        },
        {
          path: "/App11",
          element: <App11 />,
        },
        {
          path: "/App12",
          element: <App12 />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/App13",
          element: <App13 />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route index element={<App1 />} />
//         <Route path="app2" element={<App2 />} />
//         <Route path="app3" element={<App3 />} />
//         <Route path="app4" element={<App4 />} />
//         <Route path="app5" element={<App5 flag={2} />} />
//         <Route path="app6" element={<App6 />} />
//         <Route path="app7" element={<App7 />} />
//         <Route path="app8" element={<App8 />} />
//         <Route path="app9" element={<App9 />} />
//         <Route path="app10" element={<App10 />} />
//         <Route path="app11" element={<App11 />} />
//         <Route path="app12" element={<App12 />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }
// export default App;
