var openInbox = document.getElementById("myBtn");
openInbox.click();

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-orange";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-orange", "");
    }
}

openMail("Borge")
function openMail(personName) {
    var i;
    var x = document.getElementsByClassName("person");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
       x[i].className = x[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(personName).style.display = "block";
    event.currentTarget.className += " w3-light-grey";
}

var app = angular.module("app", []);

var contacts = [{
		username: "Jake",
		img: "http://s13.postimg.org/ih41k9tqr/img1.jpg",
    status: "online"
	},{
	  username: "Wolf",
		img: "http://s3.postimg.org/yf86x7z1r/img2.jpg",
    status: "offline"
	},{
		username: "Weird Guy",
		img: "http://s3.postimg.org/h9q4sm433/img3.jpg",
    status: "online"
	},{
		username: "Drake",
		img: "http://s30.postimg.org/kwi7e42rh/img6.jpg",
    status: "offline"
	}];

var chats=[{
		name: "Room 1"
	},{
		name: "Room 2"
	},{
		name: "Room 0"
	},{
		name: "Room 5"
	}];

  var currentUser=[{
  		name: "Jorge",
      username: "jlopez",
      img: "src"
  	}];

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function addRoom(){
	var newRoom = document.getElementById("nameRoom").value
	console.log(rooms[0].name)
	rooms[0].name = "G"
	rooms.push({name: newRoom})
}

app.controller("ListController", ["$scope",function($scope){
	$scope.users = users;

	$scope.rooms = rooms;
}]);
