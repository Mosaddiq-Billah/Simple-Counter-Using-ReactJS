import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h3>Counter App</h3>
            <div className='my-5'>
              <h2 className='my-5'>{count}</h2>
                <button className='btn btn-success mx-3' onClick={()=> setCount(count+1)}>Add</button>
                <button className='btn btn-danger mx-3' onClick={()=> setCount(count-1)}>Subtract</button>
                <button className='btn btn-secondary mx-3' onClick={()=> setCount(0)}>Reset</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
