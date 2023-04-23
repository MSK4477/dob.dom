var div=document.createElement("div")
div.style.textAlign="center"
div.style.marginTop="150px"
var inputdate=document.createElement("input")
inputdate.setAttribute("type","date")
inputdate.id="dob"
inputdate.setAttribute("id","dob")
inputdate.style.width="400px"
 
var button=document.createElement("button")
button.classList.add("type","btn", "btn-primary");
button.textContent = "Click me!";
button.style.padding="10px"
button.style.marginLeft="20px"
button.style.height="80px"
button.style.width="100px"
div.append(inputdate,button)
document.body.append(div)

 button.addEventListener("click",()=>{

var input=document.getElementById("dob").value
console.log(typeof(input))

var birthdate=new Date(input)
console.log(birthdate)

var currentdate=new Date()
console.log(currentdate)

var milsec=parseInt(currentdate.getTime())-parseInt(birthdate.getTime())
console.log(milsec)
var sec=Math.floor(milsec/1000)
console.log(sec)

var min=Math.floor(sec/60)
console.log(min)


var hour=Math.floor(min/60)
console.log(hour)
var days=Math.floor(hour/24)
console.log(days)

var year=currentdate.getFullYear()-birthdate.getFullYear()
console.log(year)
 var month=year*12+(currentdate.getMonth())-(birthdate.getMonth())
 console.log(month)

var final=document.createElement("div")
final.style.textAlign="center"
final.style.marginTop="0px"
final.style.fontWeight="bold"
 var ms=document.createElement("div")
 ms.textContent=`milliSecond:${milsec}`
 var s=document.createElement("div")
 s.textContent=`Second:${sec}`
 var mi=document.createElement("div")
 mi.textContent=`Minuites:${min}`
 var hr=document.createElement("div")
hr.innerText=`Hour:${hour}`
var da=document.createElement("div")
hr.innerText=`Days:${days}`
var mn=document.createElement("div")
mn.innerText=`Months:${month}`
var yr=document.createElement("div")
yr.innerText=`Year:${year}`

 final.append(ms,s,mi,hr,da,mn,yr)
 document.body.append(final)
})