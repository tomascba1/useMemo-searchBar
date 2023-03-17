import { useState } from 'react';
import { SearchBar } from './componentes/SearchBar';
import {people, calendar, email} from './data/data'
import './App.css'


function App() { 
  const [data, setData] = useState([...people, ...calendar, ...email])

  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState("all")

  function handleClick(e){
    const op = e.target.name
    switch (op) {
      case "all":
        setData([...people, ...calendar, ...email])
        setCurrentOption("all")
        break;
      case "people":
        setData([...people])
        setCurrentOption("people")
        break;
      case "calendar":
        setData([...calendar])
        setCurrentOption("calendar")
        break;
      case "email":
        setData([...email])
        setCurrentOption("email")
        break;
    
      default:
    }
  }

  function handleItemSelected(item){
    setSelection(item)
  }

  return (
    <div className='container-fluid'>
    <div className="row">
      <div className='col-6 col-md-4'>
      <button className='btn btn-light border' type='text' name='all' onClick={handleClick}>All</button>
      <button className='btn btn-light border' type='text' name='people' onClick={handleClick}>People</button>
      <button className='btn btn-light border' type='text' name='calendar' onClick={handleClick}>Calendar</button>
      <button className='btn btn-light border' type='text' name='email' onClick={handleClick}>Email</button>
      {selection ? <div>You Selected: <span style={{backgroundColor: "yellow", fontWeight: "bold"}}>{selection.title} </span></div> : ""}
      <br/>
      <h3>{currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}</h3>
      {data.map((item) => (<div>• {item.title}</div>))}
      </div>
      <SearchBar items={data} onItemsSelected={handleItemSelected}/>
    </div>
    </div>
  );
}

export default App;
