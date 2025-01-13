//Reham Wahbi , Francis Muzalbat
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Welcome from './components/Welcome';
import FilterList from './components/FilterList';
import StyleedText from './components/StyleedText';
import ColorBlock from './components/ColorBlock';
import ActionButton from './components/ActionButton';
import ImageWithCaption from './components/ImageWithCaption';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="App">
      {/* <Welcome name="Dan"/>
      <Welcome/>
      <Header/>
      <ItemList/>
      <Footer/> 
       <FilterList words={["React","francis", "JSX", "JavaScript", "UI"]} minLength={5} />
      <FilterList/>
      
      <StyleedText isHighlighted={true}>This is highlighted text</StyleedText>
      <StyleedText isHighlighted={false}>Normal text</StyleedText>
      */}
      <h1>React Components Exercise</h1>
      <h2>ColorBlock Component</h2>
      <ColorBlock colors="blue" />
      <ColorBlock />

      <h2>ActionButton Component</h2>
      <ActionButton label="Click me" onAction={handleButtonClick} />

      <h2>ImageWithCaption Component</h2>
      <ImageWithCaption 
        src="https://via.placeholder.com/150" 
        caption="Sample Image" 
      />
      <ImageWithCaption caption="No Image" />
    </div>
  );
   
}

export default App;
