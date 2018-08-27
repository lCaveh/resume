var displayLongText = false;
var longTextSelector =document.querySelectorAll('.longText li');
function showFirst10 (longTextSelector){
	for (i=0;i<10;i++){
		longTextSelector[i].style.display = 'inline';
	}
	for (i=10;i<longTextSelector.length;i++){
		longTextSelector[i].style.display = 'none';
	}
}
function showAll (longTextSelector){
	for (i=0;i<longTextSelector.length;i++){
		longTextSelector[i].style.display = 'inline';
	}
}
showFirst10(longTextSelector);
document.querySelector('.showMoreButton').addEventListener('click', function(){
	if (!displayLongText) {
		displayLongText = true;
		this.innerHTML = 'Show Less';
		showAll(longTextSelector)
		document.querySelector('.showMoreButton').scrollIntoView({ 
			behavior: 'smooth' 
		});
	} else {
		displayLongText = false;
		this.innerHTML = 'Show More';
		showFirst10(longTextSelector);
		document.querySelector('.showMoreButton').scrollIntoView({ 
			behavior: 'smooth' 
		});	
	}
});
