/**
	 * Gives a response to a user statement
	 *
	 * @param statement
	 *            the user statement
	 * @return a response based on the rules given
	 */
function getResponse(message){
  var response = "";
  if (message.toLowerCase().includes("weather")){
    response = "Really! The weather has been really nice where I'm from.";
  } else if (message.toLowerCase().includes("dog") || message.toLowerCase().includes("cat")){
    response = "Oh, tell me more about your pets!";
  } else if (message.toLowerCase().includes("mom") || message.toLowerCase().includes("dad") || message.toLowerCase().includes("sister") || message.toLowerCase().includes("brother")){
    response = "Oh tell me more about your family!";
  } else if (message.toLowerCase().includes("school")){
    response = "Oh man, that reminds me. I have a lot of homework this week :(";
  } else if (message.toLowerCase().includes("games")){
    response = "Oh I love games. What's your favorites";
  } else {
    response = getRandomResponse();
  }
  return response;
}


	/**
	 * Pick a default response to use if nothing else fits.
	 * @return a random string
	 */
function getRandomResponse(){
  var response = "";
  var random = Math.round(Math.random() * 5);
  if (random == 1){
    response = "Oh that's really interesting tell me more!!";
  } else  if(random == 2) {
    response = "That's crazy. I feel the same way!";
  } else if (random == 3) {
    response = "Do you really think so?";
  } else if (random == 4) {
    response = "oh. wow.";
  } else {
    response = "I love it if you love it!!";
  }
  return response; 
}

//starts and continues the conversation
var message = prompt("Hi! What do you want to talk about? \n (type bye to end chat)");

while (message.toLowerCase() != ("bye") || message.toLowerCase() != "goodbye"){
  console.log(getResponse(message));
  message = prompt("");
}

console.log("Ok, goodbye!");

