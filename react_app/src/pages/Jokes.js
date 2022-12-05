// # Main Import
import useFetch from "../services/useFetch";
import axios from "../apis/dadJokes";
import { useEffect } from "react";


function Jokes() {

    const [joke, error, loading, axiosFetch] = useFetch();

    const getDadJokes = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'GET',
            url: '/',
            requesConfig: {
                headers: {
                    'Content-Language': 'en-US'
                }
            }
        });
    };

    useEffect(() => {
        getDadJokes();
    },[]);

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
