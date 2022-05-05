import Adress from "./components/Adress";
import FullName from "./components/FullName";
import ProfilePhoto from "./components/ProfilePhoto";
import "./style/style.css";

function App() {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
