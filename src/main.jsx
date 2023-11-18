import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<Router>
<App />
</Router>
);
