function handleYesClick() {
  document.querySelector(".button-container").style.display = "none";
  document.getElementById("sushi").style.display = "block";

  document.getElementById("question").textContent = "Lass uns Sushi holen!";
}

function handleNoClick() {
  const noButton = document.getElementById("no");

  const possibleTexts = [
    "Bitte sag ja :-(",
    "Ich flehe dich an! :-(",
    "Komm schon, du bekommst eine Überraschung! :-(",
    "Oh, bitte überlege es dir noch einmal! Es würde die Welt für mich bedeuten. :-(",
    "Ich flehe dich an, nur ein kleines 'Ja' würde meinen Tag machen! :-(",
    "Ich werde so traurig sein, wenn du nein sagst. Kannst du deine Meinung ändern?",
    "Ich werde alles tun! Sag einfach ja und mach mich zum glücklichsten Menschen!",
    "Ich werde im siebten Himmel sein, wenn du ja sagst. Was sagst du dazu?",
  ];

  const randomIndex = Math.floor(Math.random() * possibleTexts.length);

  noButton.textContent = possibleTexts[randomIndex];
}
