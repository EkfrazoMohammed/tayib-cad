import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import UploadDxfView from "../views/UploadDxfView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <UploadDxfView /> }
    ],
  },
]);

export default router;