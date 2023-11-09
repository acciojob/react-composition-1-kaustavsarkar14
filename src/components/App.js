
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[selectedTab, setSelectedTab] = useState('Tab 1')
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li onClick={()=>setSelectedTab('Tab 1')} >Tab 1</li>
          <li onClick={()=>setSelectedTab('Tab 2')} >Tab 2</li>
          <li onClick={()=>setSelectedTab('Tab 3')} >Tab 3</li>
        </ul>
        <p>This is the content for {selectedTab}</p>
    </div>
  )
}

export default App
