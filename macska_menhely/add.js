function sendPost() {
  const data = JSON.stringify({
    neve: document.getElementById("neve").value,
    szine: document.getElementById("szine").value,
    neme: document.getElementById("neme").value,
    szuletesiido: document.getElementById("szuletesiido").value
  });
  navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
  console.log(data);

}