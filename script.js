function checkMood(){
    const mood = document.getElementById("mood-select").value;
    const messageElement = document.getElementById("message");
   
   
    if (mood === "happy") {
        messageElement.textContent = "Yay! Keep smilling ☺️";
    }else if (mood=== "sad") {
        messageElement.textContent = "Aww, it's okay to feel sad sometimes. here's a hug😢";
    }else if (mood === "excited") {
        messageElement.textContent = "woohoo! Enjoy your excitmen 🎉";
    }else if (mood === "tired") {
        messageElement.textContent = "Time to rest! Sweet dreams 😴";
    }else {
        messageElement.textContent = "";
        }
}
