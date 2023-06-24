

export const getRequest = async(url,callback) => {
    let response = await fetch(url,{
        method:"GET",
        headers:{
            Accpet:"application/json",
            "Content-Type":"application/json"
        }
    });
    let content = await response.json();
    callback(content);
}

export const postRequest = async(url,body,callback) => {
    let response = await fetch(url,{
        method:"POST",
        headers:{
            Accpet:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(body)
    });
    let content = await response.json();
    callback(content);
}