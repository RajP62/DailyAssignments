export const loadData = (key)=>{
    try{
        let data = JSON.parse(localStorage.getItem(key));
        return data || {auth:false, token:""}
    }
    catch(e){
        return {auth: false, token: ""};
    }
}

export const saveData = (key, data)=>{
    localStorage.setItem(key, JSON.stringify(data));
}