
const  Country = ({country}) => {
    // console.log(country)
    
    function Click() {
        function eventHandler() {
            console.log("Loading...")
        };
    
        return (
            <div>
                <button 
                type="button"
                onClick={eventHandler}
                >More Info</button>
            </div>
        );
    }
    
    return (
        <dt className="countrys-container">
           <p>Country: {country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p>Flag:
                <br/>
                <br/>
                <img src={country.flags.png} alt=""></img>
            </p>
            <p className="links"><a href= {country.maps.googleMaps}
                  target="_blank"> Map
               </a></p>
               <Click/>
            
        </dt>
        
    );
}

export default Country;