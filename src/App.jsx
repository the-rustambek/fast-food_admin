
 
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
 
function App() {  
  return(
    <div className="app">
      <div className="app-top">
      <Dashboard />
      <div className="app-main">
      <Header />
      <Main />
      </div>
      </div>
    </div>
  )
}

export default App;






