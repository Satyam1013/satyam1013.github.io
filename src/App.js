import '../src/styles/App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
