// Function that is called from HTML button
function printMonster() {
	// Let JS Read HTML Content
	let imageContainer = document.getElementById('imageContainer');
	let textContainer = document.getElementById('textContainer');
	imageContainer.innerHTML = '';
	textContainer.textContent = '';

	// Generate The Random Monster ID
	let randomMonsterId = getRandomNumber(1001, 2308);
	console.log(randomMonsterId);

	// Monster GIF Printing
	let imagePath = `Database_V2/Image/Mob/${randomMonsterId}.gif`;
	let imageEelement = document.createElement('img');
	imageEelement.src = imagePath;

	// Monster Name Printing
	textContainer.textContent = getMonsterName(randomMonsterId);
	imageContainer.appendChild(imageEelement);
}

// Function used to get the monster name using its nominal ID
function getMonsterName(ID) {
	const monsterNameFilePath = 'Database_V2/Data/PRE/mob_db.txt';

	return 'Fabre';


}
function getMonsterGif(ID) {

}
function getRandomNumber(min, max) {
	// Ensure that the provided values are numbers
	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new Error('Both arguments must be numbers');
	}
	// Swap values if min is greater than max
	if (min > max) {
		[min, max] = [max, min];
	}
	// Generate a random number within the range [min, max)
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

