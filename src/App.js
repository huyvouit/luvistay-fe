import "./App.scss";
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import AppRoutes from "./routes/routes";

library.add(fas);

function App() {
  return <AppRoutes />;
}

export default App;
