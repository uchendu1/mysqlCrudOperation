//import 'boostrap/dist/css/boostrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './components/Student';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
