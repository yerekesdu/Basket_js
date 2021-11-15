let bool = false;
if (localStorage.getItem("userL")!=null)
    bool = true;

if(bool==true){
    loginID.style.display = "none";
    registerID.style.display = "none";
}
else
    logoutID.style.display = "none";

function showName(){
    let jsonArr = localStorage.getItem("peopleInfo");
        userInfo = JSON.parse(jsonArr);
        console.log(userInfo);

    for(let i=0; i<userInfo.length; i++){
        if(userInfo[i].emailP == localStorage.getItem("userL")){
            logid.innerText = userInfo[i].fullnameP;
        }
    }
}

function logOut(){
    localStorage.removeItem("userL");
}