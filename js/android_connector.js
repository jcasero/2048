window.onload = function() {
	var powerUp = Android.getPowerUp();
	if (powerUp <= 0) {
		var element = document.getElementById("power-up");
		element.style.display = 'none'; //or
		element.style.visibility = 'hidden';
	}
    console.log(powerUp);
}
