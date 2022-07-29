import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  // Paramétrage des states
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Content
        search={search}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setData={setData}
        data={data}
      />
      <Footer />
    </div>
  );
}

export default App;
