import { useEffect } from "react";

// main hook definition
function useFetch(setData, setErrorMessage, setLoading, setController, controller) {
   
    // Define async axios Fetch Function
    const axiosFetch = async (requestObj) => {
        // Destruct request object
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = requestObj;
    
        try {
            // Sets Loading to true
            setLoading(true);

            // Instanciate new Abort Controller
            const ctrl = new AbortController();
            setController(ctrl);

            //Get Response from axios Instance and inform controller signal
            const response = await axiosInstance[method.toLowerCase()](url,{
                ...requestConfig,
                signal: ctrl.signal
            });

            //Sets Data State
            setData(response.data);
        } catch (error) {

            //Sets error state
            setErrorMessage(error.message);

        } finally {

            // Sets Loading to false
            setLoading(false)

        };
    };

    // Refetch when controller changes
    useEffect(() => {
        //TODO: Figure out why Abort Controller doesn't work
        // console.log(controller);
        //useEffect cleanup function 
        // return () => controller.abort();
    }, [controller])

    return axiosFetch;
}
    
export default useFetch