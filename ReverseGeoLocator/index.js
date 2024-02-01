
if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude, position.coords.longitude);
      window.location.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    });
} else {
  /* geolocation IS NOT available */
}
