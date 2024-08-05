import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(){

const [ipAddress, setIpAddress] = useState('');
const [city, setCity]= useState('');

useEffect(() => {
    const url = 'https://api.ipify.org?format=json';
    
    axios.get(url).then((response) => {
        setIpAddress(response.data.ip);
        let geoUrl = `https://ipinfo.io/${ipAddress}/geo`;
            axios.get(geoUrl).then((response) => {
            setCity(response.data.city);
        });
    });

    
});

    return (
        <>
            <h1>Home Page</h1>
            <p>Your IP Address is {ipAddress}</p>
            <p>You are located in {city}</p>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </>
    )
}