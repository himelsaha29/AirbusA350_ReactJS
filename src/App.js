import './App.css';
import Header from './components/Header';
import Item from './components/Item';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item 
          title="title"
          desc="desc"
          descLink=""
          backgroundImg={}
          leftBtnTxt="Order now"
          leftBtnLink=""
          rightBtnTxt="learn more"
          rightBtnLink=""
          twoButtons="true"
        />





      </div>
      
    </div>
  );
}

export default App;