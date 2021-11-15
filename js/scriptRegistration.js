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

let jsonArr = localStorage.getItem("peopleInfo");
		if(jsonArr != null)
        userInfo = JSON.parse(jsonArr);

function registration(){

    if( email1.value != "" && pass.value!= "" && fullName.value!="" &&
    countryName.value!="not_selected" && birthDay.value!=""){
        let emaill = email1.value;
        let password = pass.value;
        let fullname = fullName.value;
        let country = countryName.value;
        let birthday = birthDay.value;   

        let peopleObj = {
            emailP: emaill,
            passwordP: password,
            fullnameP: fullname,
            counryP: country,
            birthdayP: birthday
        };
        userInfo.push(peopleObj);
        console.log(peopleObj);
        email1.value = "";
        pass.value = "";
        fullName.value = "";
        countryName.value = "";
        birthDay.value = "";

        localStorage.setItem("peopleInfo", JSON.stringify(userInfo));
        
        alert("You SUCCESSFULLY REGISTERED, LOGIN to the system");
        
        window.location = "login.html";
    }
    else
        alert("fill in all fields");
}

function showName(){
    if(localStorage.getItem("peopleInfo")!=null &&
    localStorage.getItem("userL")!=null){
    let jsonArr = localStorage.getItem("peopleInfo");
    userInfo = JSON.parse(jsonArr);
    console.log(userInfo);

        for(let i=0; i<userInfo.length; i++){
            if(userInfo[i].emailP == localStorage.getItem("userL")){
                logid.innerText = userInfo[i].fullnameP;
            }
        }
    }
}