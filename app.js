function convertText() {
  let keepGoing = true;

  while (keepGoing) {
    let conversionType = prompt(
      "Choose a conversion type:\n" +
        "a) Uppercase to Lowercase\n" +
        "b) Lowercase to Uppercase\n" +
        "c) Capitalize First Letter of Each Word\n" +
        "Enter 'a', 'b', or 'c'"
    );
    let textInput = prompt("Enter the text you want to convert");
    let result;
    switch (conversionType) {
      case "a":
        result = textInput.toLowerCase();
        break;
      case "b":
        result = textInput.toUpperCase();
        break;
      case "c":
        result = textInput
          .toLowerCase()
          .replace(/\b\w/g, (letter) => letter.toUpperCase());
        break;
      default:
        alert("Invalid option! Please choose 'a', 'b', or 'c'.");
        continue;
    }
    alert("Converted Text: " + result);

    let anotherConversion = prompt(
      "Do you want to convert another text? (yes/no)"
    ).toLowerCase();

    if (anotherConversion !== "yes") {
      keepGoing = false;
      alert("Thank you for using the text converter!");
    }
  }
}
convertText();
