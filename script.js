function notify(time) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      var path = window.location.pathname.split("/")
      var notify = new Notification("NY PASSTID TILLGÄNGLIG!", {
        body: "Ny tid " + new Date(parseInt(time)).toLocaleDateString() + " i " + path[path.length - 1]
      });
    }
    else
      alert("NY PASSTID TILLGÄNGLIG: " + new Date(parseInt(time)).toLocaleDateString() + " i " + path[path.length - 1])
  })
}

console.log("STARTAR...")
Notification.requestPermission()
console.log("SENASTE TILLGÄNGLIGA DATUM:", new Date(parseInt(localStorage.currentTime)).toLocaleDateString())
var currentTime = new Date(document.getElementById("datepicker").value).getTime()

if (localStorage.currentTime && localStorage.currentTime > currentTime) {
  notify(currentTime)
  console.log("Ny tid hittad", new Date(parseInt(currentTime)).toLocaleDateString())
}
else 
  console.log("Inget nytt.")

localStorage.currentTime = currentTime;

var fat = document.getElementsByName("TimeSearchFirstAvailableButton")[0];
const interval = 1000 * 60;
var check = setInterval( () => {
	fat.click()
  console.log("Clicked TimeSearchFirstAvailableButton")
}, interval)