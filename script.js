function validateForm() {
	if(document.myForm.name.value == ""){
		alert("You must fill in properly!")
		return false;
	}
	else if(document.myForm.email.value =="" ){
		alert("Enter correct email address")
		return false;
	}
	else if(document.myForm.title.value ==""){
		alert("Enter correct title")
		return false;
	}
	else if (document.myForm.message.value == "") {
		alert("Message text is too short")
		return false;
	}
	alert("Your submission was successful")

}