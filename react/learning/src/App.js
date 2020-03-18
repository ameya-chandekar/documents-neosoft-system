import React from 'react';  
import './App.css';
// import ClickCounter from './components/Clickcounter'
// import HoverCounter from './components/HoverCounter'
// import Hookcounter from './components/hooks/Hookcounter';
// import Usestatewithobj from './components/hooks/Usestatewithobj';
import Useeffect from './components/hooks/Useeffect'
function App() {
  return (
    <div className="App">
      {/* hoc
      <ClickCounter/>
      <HoverCounter/> */}
  {/* <Hookcounter/> */}
      {/* <Usestatewithobj/> */}

      <Useeffect/>
    </div>
  );
}

export default App;
