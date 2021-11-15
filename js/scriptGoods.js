let goods = [];
let bool = false;
if (localStorage.getItem("userL")!=null)
    bool = true;

if(bool==true){
    loginID.style.display = "none";
    registerID.style.display = "none";
}
else
    logoutID.style.display = "none";
    
function addGoods(tovar){
    let jsonArr = localStorage.getItem("goodsInfo");
    if(jsonArr != null)
        goods = JSON.parse(jsonArr); 


    let divP = tovar.parentElement;
    let gName1 = divP.querySelector("#goodsName").innerText;
    let gPrice1 = divP.querySelector("#goodsPrice").innerText;

    let goodsObj = {
        gUser: localStorage.getItem("userL"),
        gName : gName1,
        gPrice : gPrice1
    }

        goods.push(goodsObj);
        console.log(goodsObj);
        localStorage.setItem("goodsInfo", JSON.stringify(goods));
}

function goToBasket(){
    window.location = "basket.html";
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

function logOut(){
    localStorage.removeItem("userL");
}