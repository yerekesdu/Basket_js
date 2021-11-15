let userInfo = [];
let bool = false;
if (localStorage.getItem("userL")!=null)
    bool = true;

if(bool==true){
    loginID.style.display = "none";
    registerID.style.display = "none";
}
else
    logoutID.style.display = "none";
    
function showPerson(){
    // email1.innerText = "asd";
    // alert(localStorage.getItem("userL") ); 
    
    let jsonArr = localStorage.getItem("peopleInfo");
    userInfo = JSON.parse(jsonArr);
    console.log(userInfo);

    for(let i=0; i<userInfo.length; i++){
        if(userInfo[i].emailP == localStorage.getItem("userL")){
            logid.innerText = userInfo[i].fullnameP;
            name1.innerText = userInfo[i].fullnameP;
            email1.innerText = userInfo[i].emailP;
            fullName1.innerText = userInfo[i].fullnameP;
            countryName1.innerText = userInfo[i].counryP;
            birthDay1.innerText = userInfo[i].birthdayP;
        }

    }

}
function funcByGoods(){
    window.location = "goods.html";
}

function logOut(){
    localStorage.removeItem("userL");
}