var reveal = function(SwitchDoor) {

	numberofWins = 0;

	var doors = ['A', 'B', 'C'];
	var random = function() {
	return doors[Math.floor(Math.random() * doors.length)] };

	for (i = 1; i <= 1000; i++) {
	var prize = random();
	var choice = random();

		// If you guessed the winning door and didn't switch, you win -- OR -- if you guessed the losing door and switched, you win.
		if ((choice === prize && !SwitchDoor) || (choice !== prize && SwitchDoor)) {
			numberofWins++;
		}
	}
	return numberofWins;
}
	

console.log('Whens when not switching the door: ' + reveal(false));
console.log('Whens when switching the door: ' + reveal(true));
