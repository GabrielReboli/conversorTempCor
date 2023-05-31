function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

function handleSubmit(event) {
    event.preventDefault();

    var temperaturaInput = document.getElementById("temperatura");
    var unidadeOrigemSelect = document.getElementById("unidadeOrigem");
    var unidadeDestinoSelect = document.getElementById("unidadeDestino");
    var resultadoSpan = document.getElementById("resultado");

    var temperatura = parseFloat(temperaturaInput.value);
    var unidadeOrigem = unidadeOrigemSelect.value;
    var unidadeDestino = unidadeDestinoSelect.value;

    if (isNaN(temperatura)) {
        resultadoSpan.textContent = "Temperatura inválida. Por favor, insira um número válido.";
        return;
    }

    var temperaturaConvertida;
    if (unidadeOrigem === "celsius") {
        if (unidadeDestino === "fahrenheit") {
            temperaturaConvertida = celsiusToFahrenheit(temperatura);
        } else if (unidadeDestino === "kelvin") {
            temperaturaConvertida = celsiusToKelvin(temperatura);
        }
    } else if (unidadeOrigem === "fahrenheit") {
        if (unidadeDestino === "celsius") {
            temperaturaConvertida = fahrenheitToCelsius(temperatura);
        } else if (unidadeDestino === "kelvin") {
            temperaturaConvertida = fahrenheitToKelvin(temperatura);
        }
    } else if (unidadeOrigem === "kelvin") {
        if (unidadeDestino === "celsius") {
            temperaturaConvertida = kelvinToCelsius(temperatura);
        } else if (unidadeDestino === "fahrenheit") {
            temperaturaConvertida = kelvinToFahrenheit(temperatura);
        }
    }

    resultadoSpan.textContent = temperatura + " " + unidadeOrigem + " é igual a " + temperaturaConvertida.toFixed(2) + " " + unidadeDestino;
}

function changeBackgroundColor() {
    var rangeInput = document.getElementById("range");
    var backgroundColor = calculateBackgroundColor(rangeInput.value);
    document.body.style.backgroundColor = backgroundColor;
}

function calculateBackgroundColor(value) {
    var hue = 240 - (value / 100) * 240;
    return "hsl(" + hue + ", 100%, 50%)";
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", handleSubmit);

var rangeInput = document.getElementById("range");
rangeInput.addEventListener("input", changeBackgroundColor);
