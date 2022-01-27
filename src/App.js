import './App.css';
import Header from './components/Header';
import Item from './components/Items';
import AirbusSunset from './assets/a350-1.jpg';
import AirbusCloud from './assets/a350-2.jpg';
import AirbusEngine from './assets/a350-3.jpg';
import AirbusBlue from './assets/a350-4.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item 
          title="A350 Family"
          desc="Shaping the future of air travel"
          descLink=""
          backgroundImg={AirbusSunset}
          leftBtnTxt="All variants"
          leftBtnLink=""
          rightBtnTxt="Learn more"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item 
          title="Cutting-edge Aerodynamics"
          desc="Wing design that morphs in flight for optimal efficiency"
          descLink=""
          backgroundImg={AirbusCloud}
          leftBtnTxt="Preorder now"
          leftBtnLink=""
          rightBtnTxt="learn here"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="Truly Innovative"
          desc="Airframe composed of more than 70% advanced materials"
          descLink=""
          backgroundImg={AirbusEngine}
          leftBtnTxt="Preorder now"
          leftBtnLink=""
          rightBtnTxt="learn here"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="Sustainability"
          desc="Less Weight. Less Fuel. More Sustainable."
          descLink=""
          backgroundImg={AirbusBlue}
          leftBtnTxt="Preorder now"
          leftBtnLink=""
          rightBtnTxt="learn here"
          rightBtnLink=""
          twoButtons="true"
        />

      </div>
      
    </div>
  );
}

export default App;