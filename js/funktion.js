$(document).ready(function(){
	//Ta fram
	$("#äpplen").hover(function(){
		$("#päron").show(500);
	});

	$("#päron").hover(function(){
		$("#apelsin").show(500);
	});

	$("#apelsin").hover(function(){
		$("#äpplen").show(500);
	});

	//Ta bort
	$("#äpplen").click(function(){
		$("#äpplen").hide(500);
	});

	$("#päron").click(function(){
		$("#päron").hide(500);
	});

	$("#apelsin").click(function(){
		$("#apelsin").hide(500);
	});		
});
  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyBxA_HLVoBTbOPzQZCmwOdY5-r3xEWqwys",
  	authDomain: "kommentarer-61647.firebaseapp.com",
  	databaseURL: "https://kommentarer-61647.firebaseio.com",
  	projectId: "kommentarer-61647",
  	storageBucket: "kommentarer-61647.appspot.com",
  	messagingSenderId: "719593213200"
  };
  firebase.initializeApp(config);
  var app = angular.module("app", ["firebase"]);
  app.factory("kommentarer", function($firebaseArray) {
  	var ref = firebase.database().ref().child("kommentarer");
  	return $firebaseArray(ref);
  }
  );
// Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
app.controller("KommentarCtrl", function($scope, kommentarer) {
	$scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
    	text: "",
    	skribent: ""
    };
$scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.

    var filterWords = ["fuck", "shit", "couch potato"];

    if ($scope.kommentar.text.indexOf(filterWords[0]) >= 0) {
    	alert('Don\'t swear');
    }
    else if ($scope.kommentar.text.indexOf(filterWords[0]) == -1) {
    	$scope.kommentarer.$add($scope.kommentar);
    }    

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
}
);
