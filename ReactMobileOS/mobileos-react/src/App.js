import logo from './logo.svg';
import './App.css';
import TitledBox from './titledBox'

function App() {
  let lists = [{title:"Android",style:"disc"},{title:"Blackberry",style:"disc"},{title:"iPhone",style:"disc"},{title:"Windows Phone",style:"disc"}];
  let title = "Mobile Operating System"
  // ---------------------
  let lists2 = [{title:"Samsung",style:"square"},{title:"HTC",style:"square"},{title:"Micromax",style:"disc"},{title:"Apple",style:"circle"}];
  let title2 = "Mobile Manufacturers"

  return (
    <>
    <TitledBox title={title} lists={lists}/>
    <TitledBox title={title2} lists={lists2}/>
    </>
  );
}

export default App;
