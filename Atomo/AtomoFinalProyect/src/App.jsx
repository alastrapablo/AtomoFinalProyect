import { useState, useEffect} from 'react'
import './App.css'
import Logo from './components/Logo';
import Title from './components/Title';
import Country from './components/Country';
import filter from '@mcabreradev/filter';

function App() {
 const [countrys, setCountrys] = useState([]);
 const [input, setInput] = useState('');

 const fetchApi = async () => {
  try{
    const req = await fetch("https://restcountries.com/v3.1/all");
    const json = await req.json();
    const data = json.sort((last, next) => last.name.common > next.name.common ? 1 : -1);
    const filtered = filter(json, input);
    setCountrys(filtered);
    // console.log(json)
  } catch (error) {
    console.log("No funciona pa", error);
  }
};

  useEffect(()=>{
    fetchApi()
  });

    const inputHandler = (event) => {
       const input = event.target.value;
        setInput(input);
    };

  return (
    <div>
      <Logo />
      <Title />
      <input
        className="countrys-container"
        type="text"
        placeholder="Write"
        onChange={inputHandler} 
      />
      
      <dl>
        {countrys.length > 0 && countrys.map(country =>
        <Country 
        key={country.name.common}
        country={country}
        />)}
      </dl>
    </div>
  )
};

export default App