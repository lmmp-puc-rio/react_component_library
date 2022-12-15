// Import axios from specific API definition

import axios from "./apis/i3d_MongoAPI";

// GET Method Request for Scenery
/* const  = {
    axiosInstance: axios,
    method: "GET",
    url: "case/1/scenery/",
  };
  
  export { getSceneryRequest };
 */

  export const getScenery = async (id, signal) => {
    let arrayScenery = []
    try {
        const response = await axios.get(`${id}/scenery/`, {
          headers: {
            Authorization : sessionStorage.getItem("Token")
            },
            signal
        })
        arrayScenery.push(response.data.message[0].scenery)
        return arrayScenery

      } catch (error) {
        console.log(error,'Não foi possivel obter o cenário!')
      }
  }

  export const getGeneralInformation = async (id, signal) => {
    let arrayGeneralInfo = []
    try {
        const response = await axios.get(`${id}/general-information/`, {
          headers: {
            Authorization : sessionStorage.getItem("Token")
            },
            signal
        })
        arrayGeneralInfo.push(response.data.message[0].general_information)
        return arrayGeneralInfo

      } catch (error) {
        console.log(error, 'Não foi possivel obter as informações!')
      }
  }

