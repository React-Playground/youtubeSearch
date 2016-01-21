import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDkDthHccGpB7GyxxwYZTsCvg0yFEg2lW0';

//create a new component. This component should produce some html
// const App = function() {
//   return <div>Hi!</div>;
// }

const App = () => {
  return (
     <div>
      <SearchBar />
    </div>
  );
}


//take this component's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
