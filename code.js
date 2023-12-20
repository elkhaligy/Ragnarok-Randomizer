function showPhoto() {
    // Get the entered number
    const numberInput = document.getElementById('numberInput').value;

    // Determine the photo URL based on the number
    const photoUrl = getPhotoUrl(numberInput);

    // Display the photo
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.innerHTML = `<img src="${photoUrl}" alt="Photo">`;
}

function getPhotoUrl(number) {
    // You can define your own logic to map numbers to photo URLs
    // For example, a simple mapping for demo purposes:
    const photoMapping = {
        1: 'photo1.jpg',
        2: 'photo2.jpg',
        // Add more mappings as needed
    };

    // Return the corresponding photo URL or a default if not found
    return photoMapping[number] || 'defaultPhoto.jpg';
}
