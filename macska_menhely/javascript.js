var url = "http://127.0.0.1:5000/view";
var id = "view";

async function generator(url, id) {
  var request = await new XMLHttpRequest()

  request.open('GET', url, true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    view(data, request, id);

  }

  request.send()
}

function view(data, request, id) {
  if (id == "view") {
    if (request.status >= 200 && request.status < 400) {
      data.forEach((query) => {
        console.log(request.status);
        var div = document.createElement("tr");
        var mainContainer = document.getElementById(id);
        div.innerHTML = "<td>" + query.id + "</td><td><input id='neve" + query.id + "' placeholder='" + query.neve + "' value='" + query.neve + "'/></td><td><input id='szine" + query.id + "' placeholder='" + query.szine + "' value='" + query.szine + "'/></td><td><input id='neme" + query.id + "' placeholder='" + query.neme + "' value='" + query.neme + "'/></td><input id='szuletesiido" + query.id + "' placeholder='" + query.szuletesiido + "' value='" + query.szuletesiido + "'/>" + "<button onclick = 'deleterecord(" + query.id + ")' type = 'submit' value='Submit'>Delete</button>" + "<button onclick = 'update(" + query.id + ")'>Update</button>";
        mainContainer.appendChild(div)
      })
    } else {
      console.log('error')
    }
  }
}

async function generate_html() {
  await generator(url, id);
}

function deleterecord(id) {
  const data = JSON.stringify({
    id: parseInt(id)
  });

  navigator.sendBeacon('http://127.0.0.1:5000/deleterecord/', data);
  console.log(data);
}
function update(id) {
  const data = JSON.stringify({
    id: id,
    neve: document.getElementById("neve" + id).value,
    szine: document.getElementById("szine" + id).value,
    neme: document.getElementById("neme" + id).value,
    szuletesiido: document.getElementById("szuletesiido" + id).value

  });

  navigator.sendBeacon('http://127.0.0.1:5000/updatedetails/', data);
  console.log(data);
}

generate_html();