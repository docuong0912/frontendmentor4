
function CheckValid() {
	var x= document.getElementById("Email");
	if(x.value.length==0){
		x.style.border="solid red";
		document.getElementById("error-mess").style.display="block";
		document.getElementById("error-noti").style.display="block";
	}
}
