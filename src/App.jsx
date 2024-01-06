import "./App.css";
import Question from "./pages/FAQ/Question";
import Delivery from "./pages/deliver/Deliver";
import Hero from "./pages/hero/Hero";
import Menu from "./pages/menu/Menu";
import Recslider from "./pages/recslider/Recslider";
function App() {
  return (
    <>
      <Hero />
      <Menu />
      <Delivery />
      <Recslider/>
      <Question/>
    </>
  );
}

export default App;
