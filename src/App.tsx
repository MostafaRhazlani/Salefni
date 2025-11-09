import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";
import { Home } from "./pages/guest/Home"
import { Simulate } from "./pages/guest/Simulate";
import { Contact } from "./pages/guest/Contact";
import { Dashboard } from "./pages/admin/Dashboard";
import { Application } from "./pages/admin/Application";
import { Notification } from "./pages/admin/Notification";
import { Setting } from "./pages/admin/Setting";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import AdminLayout from "./components/layouts/AdminLayout";
import GuestLayout from "./components/layouts/GuestLayout";
import { Authorized } from "./pages/auth/authorized";
import { RoleProtectedRoute } from "./components/RoleProtectedRoute";
function App() {
  const router: RouteObject[] = [
    { path: '/authorized', element: <Authorized /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    
    {
      element: <RoleProtectedRoute allowedRoles={['admin']} />,
      children: [
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
              path: 'applications',
              element: <Application />
            },
            {
              path: 'notifications',
              element: <Notification />
            },
            {
              path: 'settings',
              element: <Setting />
            },
            {
              path: 'profile',
              element: <Setting />
            },
          ]
        }
      ]
    },

    {
      element: <RoleProtectedRoute allowedRoles={['guest']} />,
      children: [
        {
          path: '/',
          element: <GuestLayout />,
          children: [
            {
              index: true,
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
      ]
    }
  ];

  return <RouterProvider router={createBrowserRouter(router)} />
}

export default App
