import axios from "./apis/i3d_sqlAPI";

function Login (user,password)  {

    
  // Envia uma requisição post
 axios({
    method: "post",
    url: "login/",
    data:{ "username" : user,
    "password" : password}
  }).then(function (response) {
   return sessionStorage.setItem("Token","Token " + response.data.token);
  });

}



export default Login


