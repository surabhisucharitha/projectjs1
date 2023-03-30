
function clock() {
    var a = document.getElementById('Hour');
    var b = document.getElementById('Min');
    var c = document.getElementById('Sec');
    var a1 = document.getElementById('AAM')
    var d = new Date().getHours();
    var e = new Date().getMinutes();
    var f = new Date().getSeconds();

    a.innerHTML = d;
    b.innerHTML = e;
    c.innerHTML = f;
    if (d >= 12) {
        a1.innerHTML = ('PM')
    }
}
var interval = setInterval(clock, 1000)
//let msg=document.getElementById("time")
//if(hours>8&&hours<12){
  //  msg.innerText="wakeup good morning"
//}
//else if(hours>12 && hours<17){
  //  msg.innerHtml="have lunch,good afternoon"
//}
// else if(hours>17 && hours<24){
//     msg.innerHtml="good evening,go club and do party"
// }
// else{
//     msg.innerText="have dinner,good night"
// }
// a.innerHtml=hours;
// b.innerHtml=minutes;
// c.innerHtml=secomds;
// }
// let wake=document.getElementById("wakeup")
// let lunch=document.getElementById("lunch")
// let button=document.getElementById("setalarm")
// let msg2=document.getElementById("gud")
// let img=document.getElementById("image")
// button.addEventListener("click"() = > {
    
//     if(hours === parseInt(wake.value)){
//       console.log("GOOD MORNING");
//       msg2.innerHTML="have coffee"
//       img.style.backgroundimage="url('./messi.jpg')";
//     }
//     else if(hrs2===parseInt(lunch.value)){
//         console.log("HAVE LUNCH");
//         msg.innerHTML="HAD A DECILOUS LUNCH"

//     }
// })
function surabhi(){
    let wake=document.getElementById("wake");
    let suchi=document.getElementById("suchi");
    let msg=document.getElementById("msg");
    let night=document.querySelector("#night");
    let lunch=document.querySelector("#lunch");
    let evng=document.querySelector("#evng");
    let img=document.querySelector(".image");

    let time=new Date();
    let hrs=time.getHours();
    if(hrs==parseInt(wake.value)){
       suchi.innerText="GOOD MORNING!! WAKE UP !!"; 
       msg.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
    }
    else if(hrs==parseInt(lunch.value)){
        suchi.innerText="GOOD AFTERNOON!!TAKE SOME SLEEP";
        msg.innerText="LET'S HAVE SOME LUNCH";
        img.style.backgroundImage=("url(./lunch.svg)");
    }
    else if(hrs==parseInt(evng.value)){
        suchi.innerText="GOOD EVENING";
        msg.innerText="STOP YAWNING,GET SOME TEA...ITS JUST EVENING!";
        img.style.backgroundImage=("url(./evng.png)");
    }
    else if(hrs==parseInt(night.value)){
          suchi.innerText="GOOD NIGHT !!";
          msg.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
          img.style.backgroundImage=("url(./goodnight.svg)");
    }
}