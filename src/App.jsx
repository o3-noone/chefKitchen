import "./App.css";
import Question from "./pages/FAQ/Question";
import Delivery from "./pages/deliver/Deliver";
import Hero from "./pages/hero/Hero";
import Menu from "./pages/menu/Menu";
import RecSlider from "./pages/recSlider/RecSlider";
function App() {
  return (
    <>
      <Hero />
      <Menu />
      <Delivery />
      <RecSlider/>
      <Question/>
    </>
  );
}

export default App;
