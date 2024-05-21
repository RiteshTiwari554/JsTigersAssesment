import './App.css';
import Dashboard from './components/Dashboard';
import AppLayout from './components/AppLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Script from './Script';

const routes = [
  {
    path: "/",
    element: <Script />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/applayout", element: <AppLayout /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      {/* Other components */}
      <RouterProvider router={appRouter} >
            <Script/>
        </RouterProvider>
    </div>
  );
}

export default App;
