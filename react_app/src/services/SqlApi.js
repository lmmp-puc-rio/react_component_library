import axios from "./apis/i3d_sqlAPI";

function Login (user)  {

    
  // Envia uma requisição post
 axios({
    method: "post",
    url: "login/",
    data:{ "username" : user.name,
    "password" : user.password}
  }).then(function (response) {
     return response.data.token;
  });

}



export default Login


