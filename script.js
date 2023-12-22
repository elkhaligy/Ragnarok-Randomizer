function fetchRandomMonster() {
	let imageContainer = document.getElementById('imageContainer');
	imageContainer.innerHTML = '';
	let randomMonsterId = getRandomNumber(1000,2500);
	console.log(randomMonsterId);
	let path = 'Database/mobs_gifs/';
	let tmp = '.gif';
	let Image_Name = path+randomMonsterId+tmp;
	let Image_Element = document.createElement('img');
	Image_Element.src = Image_Name;
	imageContainer.appendChild(Image_Element);
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