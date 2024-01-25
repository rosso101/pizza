import './App.css'; 
import PizzaList from './components/PizzaList';



function App() {
  return (
    <div  class="p-3 mb-2 bg-warning text-dark">
 <h1 className="d-flex justify-content-center">HEY!</h1>
 <h1 className="d-flex justify-content-center">Looking for pizza?</h1>
 <h1 className="d-flex justify-content-center">WE GOTCHU!</h1>
 <h2>This is what we have today, dear customer.</h2>

 <PizzaList/>

    </div>
    
    
  );
}

export default App;
