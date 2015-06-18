function	validation()	{
	var nameProject	=	document.forms["add-project"]["name-project"].value;
	var fileProject	=	document.forms["add-project"]["img-progect-file"].value;
	var urlProject	=	document.forms["add-project"]["url-project"].value;
	var descProject	=	document.forms["add-project"]["add-description-project"].value;
	if	(nameProject.length == 0)	{
		document.getElementById("name-project-tooltip").innerHTML="<div id=name-triangle-tooltip class=triangle-tooltip></div>введите название";
		document.getElementById('name-project').style.background = '#fad6d4';
	}
	if	(fileProject.length == 0)	{
		document.getElementById("file-project-tooltip").innerHTML="<div id=file-triangle-tooltip class=triangle-tooltip></div>изображение";
		document.getElementById('file-project').style.background = '#fad6d4';
	}
	if	(urlProject.length == 0)	{
		document.getElementById("url-project-tooltip").innerHTML="<div id=url-triangle-tooltip class=triangle-tooltip></div>ссылка на проект";
		document.getElementById('url-project').style.background = '#fad6d4';
	}
	if	(descProject.length == 0)	{
		document.getElementById("desc-project-tooltip").innerHTML="<div id=desc-triangle-tooltip class=triangle-tooltip></div>описание проекта";
		document.getElementById('desc-project').style.background = '#fad6d4';
	}
	return false;
}
function	nameReset()	{
	document.getElementById("name-project-tooltip").innerHTML="";
	document.getElementById('name-project').style.background = '#ffffff';
}
function	fileReset()	{
	document.getElementById("file-project-tooltip").innerHTML="";
	document.getElementById('file-project').style.background = '#ffffff';
}
function	urlReset()	{
	document.getElementById("url-project-tooltip").innerHTML="";
	document.getElementById('url-project').style.background = '#ffffff';
}
function	descReset()	{
	document.getElementById("desc-project-tooltip").innerHTML="";
	document.getElementById('desc-project').style.background = '#ffffff';
}

function	validationContact()	{
	var nameContact	=	document.forms["feedback"]["name"].value;
	var mailContact	=	document.forms["feedback"]["mail"].value;
	var messageContact	=	document.forms["feedback"]["message"].value;
	var capchaContact	=	document.forms["feedback"]["capcha"].value;
	if	(nameContact.length == 0)	{
		document.getElementById("name-tooltip").innerHTML="<div id=nameContact-triangle-tooltip class=triangle-tooltip></div>Вы не ввели имя";
		document.getElementById('name').style.background = '#fad6d4';
	}
	if	(mailContact.length == 0)	{
		document.getElementById("mail-tooltip").innerHTML="<div id=mailContact-triangle-tooltip class=triangle-tooltip-l></div>Вы не ввели email";
		document.getElementById('mail').style.background = '#fad6d4';
	}
	if	(messageContact.length == 0)	{
		document.getElementById("message-tooltip").innerHTML="<div id=messageContact-triangle-tooltip class=triangle-tooltip></div>Ваш вопрос";
		document.getElementById('message').style.background = '#fad6d4';
	}
	if	(capchaContact.length == 0)	{
		document.getElementById("capcha-tooltip").innerHTML="<div id=capchaContact-triangle-tooltip class=triangle-tooltip-l></div>Вы не ввели код";
		document.getElementById('capcha').style.background = '#fad6d4';
	}
	return false;
}
function	nameResetContact()	{
	document.getElementById("name-tooltip").innerHTML="";
	document.getElementById('name').style.background = '#ffffff';
}
function	mailResetContact()	{
	document.getElementById("mail-tooltip").innerHTML="";
	document.getElementById('mail').style.background = '#ffffff';
}
function	messageResetContact()	{
	document.getElementById("message-tooltip").innerHTML="";
	document.getElementById('message').style.background = '#ffffff';
}
function	capchaResetContact()	{
	document.getElementById("capcha-tooltip").innerHTML="";
	document.getElementById('capcha').style.background = '#ffffff';
}