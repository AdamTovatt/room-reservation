import "./App.css";
import { Helmet } from "react-helmet";
import DisplayText, { VerticalSpacing } from "./Components/DisplayText";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lediga Salar KTH</title>
      </Helmet>
      <header className="App-header">
        <DisplayText
          header="KTH har stängt ner sitt API 😔"
          body="Det gör tyvärr att den här sidan inte kan existera längre."
          subBody={
            <>
              De hänvisar istället till{" "}
              <a href="https://www.kth.se/schema">www.kth.se/schema</a>
              <VerticalSpacing height={2} />
              Tack för den tid vi haft tillsammans, och ett extra tack till er
              som brydde er nog för att maila och fråga varför sidan inte
              fungerade.
            </>
          }
        />
      </header>
    </div>
  );
}

export default App;
