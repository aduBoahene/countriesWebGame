import axios from "axios";

export const GetAllCountries = () => async (dispatch) => {
    
     await axios.get("https://restcountries.eu/rest/v2/all")
      .then(res =>{
        // console.log("all data",res.data)
        dispatch({
          type:"SET_COUNTRY_LIST",
          payload:res.data
        })
      }
      ).catch(err=>{
        console.log("login error",err)
      }); 
  };


