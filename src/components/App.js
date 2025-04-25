
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default App
