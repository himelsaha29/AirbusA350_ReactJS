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
          title="title1"
          desc="desc1"
          descLink=""
          backgroundImg={AirbusSunset}
          leftBtnTxt="Order now"
          leftBtnLink=""
          rightBtnTxt="learn more"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item 
          title="title2"
          desc="desc2"
          descLink=""
          backgroundImg={AirbusCloud}
          leftBtnTxt="Preorder now"
          leftBtnLink=""
          rightBtnTxt="learn here"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="title2"
          desc="desc2"
          descLink=""
          backgroundImg={AirbusEngine}
          leftBtnTxt="Preorder now"
          leftBtnLink=""
          rightBtnTxt="learn here"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="title2"
          desc="desc2"
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