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
           <p><b>Country :</b> {country.name.common}</p>
           <p><b>Capital :</b> {country.capital}</p>
           <p><b>Flag</b> <br/><br/>
                <img 
                className="image"
                src={country.flags.png}
                alt="Image Not Fount"
                ></img>
            </p>
            <p className="links"><a href= {country.maps.googleMaps}
                  target="_blank"> Map
               </a></p>
               <Click/>
        </dt>
    );
};

export default Country;