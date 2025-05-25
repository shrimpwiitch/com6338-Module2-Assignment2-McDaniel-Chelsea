function greet () {
    let name = prompt("What is your name?");
    alert("Hello, " + name);

    let age = prompt("How old are you?");
    age = parseInt(age);

    let hadBirthday = confirm("Have you had a birthday yet this year?");

    let currentYear = new Date().getFullYear();
    let birthYear;

    if (hadBirthday) {
        birthYear = currentYear - age;
    } else {
        birthYear = currentYear - (age + 1);
    }

    alert("You were born in " + birthYear + ".");
}