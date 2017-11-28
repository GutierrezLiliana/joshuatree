// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp

function resetAll(){

}

function showText(elem){
	elem.innerHTML = "JavaScriptSorcery";
}

function toggleBlueBackground(elem){
	document.getElementById("jtree-background").classList.toggle("tan");
}
function box(elem){
	document.getElementById("smallboxblue").classList.toggle("tan");
}
