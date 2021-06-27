
if('geolocation' in navigator) {
  console.log("hi")
navigator.geolocation.getCurrentPosition(     async position => {
  var lat = position.coords.latitude 
  var lon = position.coords.longitude 
  document.getElementById("lat").textContent = lat;
  document.getElementById("lon").textContent = lon;
  const data ={lat, lon} 
  const options={
    headers: {
      'Content-Type': 'application/json'
  }, 
      method: 'POST', 
        body: JSON.stringify(data)
  } 
 const response =await fetch("/api", options);
  const json=await response.json();
    console.log(json) 
  
});
} else {
  /* geolocation IS NOT available */
}
