let ad = prompt("Ad giriniz : ");
console.log(ad);
let myName = document.querySelector("#myName");
let currentTime_Day = document.querySelector("#myClock");

myName.innerHTML = ad;
showTime();
function showTime(){
   let time = new Date();
   let dayName=time.getDay();
   console.log(dayName);
    const dayWeek = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
   currentTime_Day.innerText = time.toLocaleTimeString("en-US", { hour12: false }) + " " + dayWeek[dayName];
   setTimeout(showTime, 1000);
   
}
