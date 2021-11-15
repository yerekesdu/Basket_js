let goodsArr = [];
let goodsArrCopy = [];
let bool = false;
if (localStorage.getItem("userL")!=null)
    bool = true;

if(bool==true){
    loginID.style.display = "none";
    registerID.style = "none";
}
else
    logoutID.style.display = "none";

function showGoods(){
    let jsonArr = localStorage.getItem("goodsInfo");
    let arr = JSON.parse(jsonArr);
    goodsArr = JSON.parse(jsonArr);
    
    for(let i=0; i<arr.length; i++){
        if(arr[i].gUser == localStorage.getItem("userL") && localStorage.getItem("userL")!=null) {
            let divM1 = document.createElement("div");
            divM1.className = "main";
            let div1 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = arr[i].gName;
            let div2 = document.createElement("div");
            let span2 = document.createElement("span");
            span2.innerText = arr[i].gPrice;
            div1.className = "divka";
            div2.className = "divka";

            div1.appendChild(span1);
            div2.appendChild(span2);

            divM1.appendChild(div1);
            divM1.appendChild(div2);

            cont.appendChild(divM1);

            let button1 = document.createElement("button");
            let divB = document.createElement("div");
            let span3 = document.createElement("span");
            span3.innerText = i;
            span3.className = "counter";
            divB.className = "divka";
            button1.className = 'removeB '+ i;
            button1.innerText = "-REMOVE";

            console.log(span3.innerText);

            divB.appendChild(button1);
            divB.appendChild(span3);

            divM1.appendChild(divB);

            button1.addEventListener('click', deleteGoods);
        }
    }
}

function deleteGoods(gEvent){
    let some = gEvent.target.nextElementSibling.innerText;
    console.log(some);
        
    for(let i=0; i<goodsArr.length; i++) {
        if(i != some)
            goodsArrCopy.push(goodsArr[i]);
    }

    localStorage.removeItem("goodsInfo");
    localStorage.setItem("goodsInfo" , JSON.stringify(goodsArrCopy));
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

function goToGoods(){
    window.location = "goods.html";
}

function logOut(){
    localStorage.removeItem("userL");
}