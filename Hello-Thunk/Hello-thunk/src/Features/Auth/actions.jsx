import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, REG_ERROR, REG_LOADING, REG_SUCCESS } from "./actionTypes"

export const loginSuccess = (payload)=>{
    return {type: LOGIN_SUCCESS, payload}
}

export const loginLoading = ()=>{
    return {type: LOGIN_LOADING}
}

export const loginError = (payload)=>{
    return {type: LOGIN_FAILURE, payload}
}

export const regError = (payload)=>{
    return {type: REG_ERROR, payload}
}

export const regLoading = ()=>{
    return {type: REG_LOADING}
}

export const regSuccess = ()=>{
    return {type: REG_SUCCESS}
}

export const register = (regForm)=>{
    return (dispatch)=>{
        dispatch(regLoading());
            fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
                method: "POST",
                body: JSON.stringify(regForm),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json()).then(result=>{dispatch(regSuccess()); console.log(result)}).catch(e=>dispatch(regError(e)))
    }
}

export const login = (loginForm)=>{
    return (dispatch)=>{
        dispatch(loginLoading());
            fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
                method: "POST",
                body: JSON.stringify(loginForm),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json()).then(result=>result.error? dispatch(loginError(result)): dispatch(loginSuccess(result)).catch(e=>dispatch(loginError())));    
    }
}

export const getGithubUsers = (name,page)=>{
    return ()=>{
        // let data = {items: []};
        try{
            return fetch(`https://api.github.com/search/users?q=${name}&page=${page}&per_page=4&sort`).then(res=>res.json()).then(result=>{return result});
        }
        catch(e){
            return {items: []};
        }
    }
}