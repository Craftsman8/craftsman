import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Home/>
      <div className="content">
        <h2 style={{
          color: "red",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "2%",
          textShadow: "0px 2px 2px grey",
        }}><i>This is App component</i></h2>

        
<h6 style={{
                fontWeight: "lighter",
                textAlign: "center",
                marginTop: "0%",
            }}><a href="https://smartshopngonline-my.sharepoint.com/personal/samuel_fanibi_smartshopng_online/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsamuel%5Ffanibi%5Fsmartshopng%5Fonline%2FDocuments%2FRecordings%2FCoding%20Training%20Class%2D20240108%5F181044%2DMeeting%20Recording%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" target="blank">click here to watch last class recording </a>
                </h6>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
