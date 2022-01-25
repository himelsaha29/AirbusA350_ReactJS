import './App.css';
import Header from './components/Header';
import Item from './components/Items';
import AirbusBlue from './assets/a350-1.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item 
          title="title1"
          desc="desc1"
          descLink=""
          backgroundImg={AirbusBlue}
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