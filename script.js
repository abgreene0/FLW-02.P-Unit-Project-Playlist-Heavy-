// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = [ "265c395325f22e75d5e6c2f34ec770f2.png","artworks-bN8jtCyNwEIQxJy7-EBBoSQ-t500x500.jpg", "artworks-000641314855-o1r35r-t500x500.jpg","https://rnbmain-thisisrnb.netdna-ssl.com/wp-content/uploads/2018/04/Ella-Mai-Bood-Up-Vid.jpg" ]
let songNames = ["After The Storm" , "Get Along Better","Session 32", "Boo'd Up "]
let artist = [ "Kali Uchis"," Drake", "Summer Walker", "Ella Mai"]
let songLinks = [ "https://www.youtube.com/watch?v=9f5zD7ZSNpQ", "https://www.youtube.com/watch?v=84y-jaEiFZU","https://www.youtube.com/watch?v=tyxJYWvQIbY","https://www.youtube.com/watch?v=6YNZlXfW6Ho"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
let songNames = ["After the storm", "Get Along Better", "Session 32", "Boo'd Up"];   
songNames.forEach(function(song) {
songNames.insertAdjacentHTML("<p>" + song + "</p>");
});

  let artist = ["Kali Uchis", "Drake", "Summer Walker", "Ella Mai"];   
artist.forEach(function(art) {
artist.insertAdjacentHTML("<p>" + art + "</p>");
});

   let images = ["", "Drake", "Summer Walker", "Ella Mai"];   
artist.forEach(function(art) {
artist.insertAdjacentHTML("<p>" + art + "</p>");
});




}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
