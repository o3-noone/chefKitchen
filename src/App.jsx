import "./App.css";
import Question from "./pages/FAQ/Question";
import Delivery from "./pages/deliver/Deliver";
import Hero from "./pages/hero/Hero";
import Menu from "./pages/menu/Menu";
import Recoment from "./pages/recoment/Recomend";
function App() {
  return (
    <>
      <Hero />
      <Menu />
      <Delivery />
      <Recoment/>
      <Question/>
    </>
  );
}

export default App;
