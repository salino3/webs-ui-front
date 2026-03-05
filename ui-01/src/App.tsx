import { HomeLayout } from "./layouts";
import { Header } from "./common-app";
import "./App.scss";

function App() {
  return (
    <div className="rootApp">
      <Header />
      <HomeLayout />
    </div>
  );
}

export default App;
