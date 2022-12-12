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

  export const getSceneryRequest = async (id) => {
    let arrayScenery = []
    try {
        const resposta = await axios.get(`${id}/scenery/`)
        arrayScenery.push(resposta.data.message[0].scenery)
        return arrayScenery

      } catch (error) {
        console.log('Não foi possivel obter o cenário!')
      }
  }

  export const getGeneralInformationRequest = async (id) => {
    let arrayGeneralInfo = []
    try {
        const resposta = await axios.get(`${id}/general-information/`)
        arrayGeneralInfo.push(resposta.data.message[0].general_information)
        return arrayGeneralInfo

      } catch (error) {
        console.log('Não foi possivel obter as informações!')
      }
  }

