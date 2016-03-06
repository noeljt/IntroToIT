/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements
  
  if (formObj.firstName.value == "") {
    alert("You must enter a first name");
    formObj.firstName.focus();
    return false;
  }
  if (formObj.lastName.value == "") {
    alert("You must enter a last name");
    formObj.lastName.focus();
    return false;
  }
  if (formObj.title.value == "") {
    alert("You must enter a title");
    formObj.title.focus();
    return false;
  }
  if (formObj.org.value == "") {
    alert("You must enter a org");
    formObj.org.focus();
    return false;
  } 
  if (formObj.pseudonym.value == "") {
    alert("You must enter a pseudonym");
    formObj.pseudonym.focus();
    return false;
  }
  if (formObj.pseudonym.value == "") {
    alert("You must enter a pseudonym");
    formObj.pseudonym.focus();
    return false;
  }
  if (formObj.comments.value == "") {
    alert("You must enter a comment(s)");
    formObj.comments.focus();
    return false;
  }
  alert("Form successfully submitted");
  return true;
}
function clearField() {
	if(comments.value=='Please enter your comments') {
    comments.counter = 1;
    comments.value = '';
  } else {
    if(comments.value=='Please enter your comments') {comments.value='';}
    comments.counter++;
  }
}
function isItEmpty() {
  if (comments.value=='') {
    comments.value = 'Please enter your comments';
  }
}