let userInfo = [];
let check = false;

let bool = false;
if (localStorage.getItem("userL")!=null)
    bool = true;

if(bool==true){
    loginID.style.display = "none";
    registerID.style.display = "none";
}
else
    logoutID.style.display = "none";

function checkLogin(){
    let jsonArr = localStorage.getItem("peopleInfo");
    userInfo = JSON.parse(jsonArr);

    if (userInfo != null){
        for(let i=0; i<userInfo.length; i++){
            if(emailE.value ==  userInfo[i].emailP && passI.value ==userInfo[i].passwordP){
                check = true;
                let userlogged = userInfo[i].emailP;
                localStorage.setItem("userL", userlogged);
            }     
        }
    }

    if(check == true){
        window.location = "user.html";
    }
    else{
        alert("NO SUCH USER AND PASSWORD, YOU NEED GO TO REGISTRATION");
    }
}

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

