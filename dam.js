// Press circle, it fades away & place circles everywhere and let another circle fade in

// elke circle unieke id -> fade in bij getal minus zoveel -> dan moet ik 100 functies hebben

stenen = [];
// alert("test");


function one() {
    // document.getElementById('6-1').style.opacity = '1';
    document.getElementById('target').style.opacity = '0';
}

function movestone(i, x){
    var cel = document.getElementById(x);
    console.log(x);
    console.log(cel);

    cel.appendChild(i);
}

function nieuw() {
    for (var i=0;i<40;i++) {
        stenen[i] = document.createElement("div");
        if (i<20) {
            stenen[i].setAttribute("class", "circlewhite");
        } else
        {
            stenen[i].setAttribute("class", "circleblack");
        }
        stenen[i].setAttribute("id", "steen" + i);
        stenen[i].addEventListener("click",function () {
            alert("Klik op steen ");
        });
        var n = 2* i;
        movestone(stenen[i], n.toString());         
    }
}


