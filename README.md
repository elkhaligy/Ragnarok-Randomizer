# Ragnarok Randomizer

Ragnarok Randomizer is a very simple web-based application that generates a random monster from the Ragnarok Online game. The application displays the monster's image and name when the user clicks the "Get Random Monster" button.

# Screenshot
![Image](https://i.imgur.com/OFKq2m4.png)

## Project Structure

- **Database_V2**
  - **Data**: Contains data files related to the monsters.
  - **Image**: Contains images of the monsters in GIF format.
- **index.html**: The main HTML file that structures the web page.
- **script.js**: The JavaScript file that contains the logic for generating and displaying random monsters.
- **style.css**: The CSS file that styles the web page.

## How to Use
Use [Link](https://elkhaligy.github.io/Ragnarok-Randomizer/) or

1. **Open the Application**: Open the `index.html` file in your web browser.
2. **Generate Random Monster**: Click the "Get Random Monster" button to generate a random monster. The monster's image and name will be displayed on the screen.

## File Descriptions

### `index.html`

This file sets up the basic structure of the web page. It includes the following sections:

- **Head Section**: Contains metadata and links to the CSS and JavaScript files.
- **Body Section**: Contains a container div with a heading, a button to generate a random monster, and divs to display the monster's image and name.

### `script.js`

This file contains the JavaScript code for the application. Key functions include:

- `printMonster()`: Called when the button is clicked. It generates a random monster ID, retrieves the monster's image and name, and displays them on the page.
- `getMonsterName(ID)`: Retrieves the name of the monster based on its ID. (Currently returns a placeholder name 'Fabre').
- `getRandomNumber(min, max)`: Generates a random number between `min` and `max`.

### `style.css`

This file contains the CSS styles for the application, including:

- Basic styling for the body and container div.
- Styling for the heading and button.
- Styling for the image and text containers to ensure proper alignment and presentation.

## Dependencies

The application does not have any external dependencies and relies solely on standard HTML, CSS, and JavaScript.

## Future Enhancements

- **Dynamic Monster Names**: Update the `getMonsterName` function to retrieve actual monster names from the `mob_db.txt` file.
- **Additional Features**: Add functionality to fetch random items or other in-game entities.
- **Improved UI**: Enhance the user interface with more styling and animations.


