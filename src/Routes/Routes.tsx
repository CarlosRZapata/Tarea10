import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import Collections from "../Pages/Collections/Collections";
import UsuariosCollections from "../Pages/Collections/Usuarios/UsuariosCollections";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{
				path: "collections",
				element: <Collections />,
				children: [
          { path: "usuarios", element: <UsuariosCollections /> }
        ],
			},
		],
	},
]);