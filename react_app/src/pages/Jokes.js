// # Main Import
import { useState, useEffect } from "react";

//# Local Imports
import useFetch from "../services/useFetch";
import { getDadJokesRequest } from "../services/DadJokes";

function Jokes() {


    //Define States
    const [joke, setJoke ] = useState([]);
    const [error, setError ] = useState('');
    const [loading, setLoading ] = useState(false);
    const [controller, setController ] = useState();

    // Get axios Fetch Object
    const axiosFetch = useFetch(setJoke, setError, setLoading, setController, controller);

    // Define Get Dad Jokes Function
    const getDadJokes = () => {
        axiosFetch(getDadJokesRequest);
    };

    // Only fetch when page is Mounted
    useEffect(() => {
        getDadJokes();
    },[]);

    // Page Renderization
    return (
        <article>
            <h2>Ramdom Dad Jokes </h2>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && joke && <p>{joke?.joke}</p>}
            {!loading && !error && !joke && <p>No dad joke to display.</p>}
        </article>
    );
};

export default Jokes;
