// var triangle = Array("triangle-up","triangle-down");
// var messageIcons = document.querySelectorAll('.message-icon');
var messageHolders = document.querySelectorAll('.messageHolder');
var container = document.querySelector('.container');

container.onclick=function(e){
	var elem = e.target;
	if( elem.getAttribute("data-index")== undefined || elem.getAttribute("data-index")== null ) return;
	else{
		var index = parseInt(elem.getAttribute("data-index"));
		if( elem.className == "message-icon triangle-up" ){
			elem.className = "message-icon triangle-down";
			messageHolders[ index-1 ].style.height = 80+"px";
			messageHolders[ index-1 ].style.visibility = "visible";
		}
		else {
			elem.className = "message-icon triangle-up";
			messageHolders[ index-1 ].style.height = 0+"px";
			messageHolders[ index-1 ].style.visibility = "hiddden";
		}
	}	

}
