import React, { useEffect, useState , Component } from 'react'


export default function Whether() {
  
        const [city, setCity] = useState(null);
        const [weather,setweather] = useState(null);
        const [search, setSearch] = useState("Kolkata");
        const apikey="Open Api Key"
        useEffect(() => {
            const fetchApi = async () => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apikey}`
                const response = await fetch(url);
                const resJSON = await response.json();
                setCity(resJSON.main)
                setweather(resJSON.whether)
                console.log(resJSON.whether)

            }

            fetchApi();
        },[search])

    
    


    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper blue">
                    <form>
                        <div className="input-field">
                            <input type="search" placeholder="Enter City Name" onChange={(event)=>{setSearch(event.target.value)}} />
                            <label className="label-icon" ><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>


            <div className="row">
                <div className="col xl4 l4 m3 s1"></div>
                <div className="col center card xl4 l4 m6 s10">
                  {!city ?(
                      <p>No Data Found</p>
                  ) : (
                    <section>
                     <img src="https://openweathermap.org/img/wn/50n@2x.png" alt="" />


                    <h1>{search}</h1>
                     <p>{}</p>
                     <br />
                     <h1>{city.temp}°C</h1>
                     <p className="grey-text">Feels Like:{city.feels_like}°C | Temp-min:{city.temp_min}°C | Temp-max:{city.temp_max}°C | Humidity:{city.humidity}%</p>
                     <p></p>
                    </section>

                  )
    
                  }
                   
                    
                </div>
                <div className="col xl4 l4 m3 s1"></div>

            </div>
        </React.Fragment>

    )
}

