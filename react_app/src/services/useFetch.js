import { useState, useEffect } from "react";

// main hook definition
function useFetch() {
    const [data, setData ] = useState([]);
    const [errorMessage, setErrorMessage ] = useState('');
    const [loading, setLoading ] = useState(false);
    const [controller, setController ] = useState();


    const axiosFetch = async (configObj) => {
        // Destruct configObj
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;
    
        try {
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            //Define axios Intance and prepare controller to abort request
            const response = await axiosInstance[method.toLowerCase()](url,{
                ...requestConfig,
                signal: ctrl.signal
            });
            //Sets Response State
            console.log(response)
            setData(response.data);
        } catch (error) {
            //Sets error state
            setErrorMessage(error.message);
        } finally {
            setLoading(false)
        };
    };

    useEffect(() => {
        // console.log(controller);
        //useEffect cleanup function
        // return () => controller.abort();
    }, [controller])

    return [data, errorMessage, loading, axiosFetch];
}
    
export default useFetch