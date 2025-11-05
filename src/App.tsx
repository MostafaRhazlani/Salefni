import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";
import { Home } from "./pages/guest/Home"
import { Simulate } from "./pages/guest/Simulate";
import { Contact } from "./pages/guest/Contact";
import { Dashboard } from "./pages/admin/Dashboard";
import { Application } from "./pages/admin/Application";
import { Notification } from "./pages/admin/Notification";
import { Setting } from "./pages/admin/Setting";
import AdminLayout from "./components/layouts/AdminLayout";
import GuestLayout from "./components/layouts/GuestLayout";
function App() {
  const router: RouteObject[] = [
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'application',
          element: <Application />
        },
        {
          path: 'notification',
          element: <Notification />
        },
        {
          path: 'setting',
          element: <Setting />
        },
      ]
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'simulate',
          element: <Simulate />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },
  ];

  return <RouterProvider router={createBrowserRouter(router)} />
}

export default App
