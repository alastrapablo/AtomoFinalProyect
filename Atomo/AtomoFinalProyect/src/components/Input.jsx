import { useState } from "react";

const  Input = () => {
    const [text, setText] = useState('');

    const inputHandler = (event) => {
        input = event.target.value;
        setText(text)
        
  console.log(filter(countrys, input));
    };

    return (
        <div>
            <input
                name="nombre"
                type="text"
                placeholder="Write"
                onChange={inputHandler} />
                <br/>
                <br/>

                {text &&( <p>Hola {input}!</p>)}
        </div>
    );
}

export default Input;