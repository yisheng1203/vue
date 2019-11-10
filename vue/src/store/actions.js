import axios from 'axios';

let actions={
  
  USER:({state,commit},payload)=>{
    return axios({
      url:'http://localhost:3008/api/login',
      params:{
        username:payload.username,
        password:payload.password
      }
    }).then(
      res => {
        commit('USER',res.data);
        return res.data
      }
    )
  },
};

export default actions;