import "./App.css";
import Banner from "./Pages/Banner";
import Features from "./Pages/Features";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Notifications from "./Pages/Notifications";
import Saving from "./Pages/Saving";
import Subnav from "./Pages/Subnav";
import Tools from "./Pages/Tools";
import Transactions from "./Pages/Transactions";

function App() {
  return (
    <div className="App mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Features></Features>
      <Transactions></Transactions>
      <Saving></Saving>
      <Notifications></Notifications>
      <Tools></Tools>
      <Footer></Footer>
      <Subnav></Subnav>
    </div>
  );
}

export default App;
