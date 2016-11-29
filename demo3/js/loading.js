function closeloading(){
	var loading = document.querySelector('.loading');
	loading.style.opacity = 0;
	loading.style.zIndex = -1;
}
window.onload=function(){
	closeloading();
	// alert("11111111111");
}
