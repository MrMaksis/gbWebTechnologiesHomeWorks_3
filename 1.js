function CelsiusToFahrenheit(){
    let celsius = +prompt("Введите градус цельсия: ");
    let fahrenheit = (9 / 5) * celsius + 32;
    alert("Градус цельсия: " + String(celsius) + "; Градус фаренгейта: " + String(fahrenheit));
}

CelsiusToFahrenheit();