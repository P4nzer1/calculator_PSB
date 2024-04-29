let input = document.getElementById("result");

function insert(value) {
    input.value += value;
}

function clearAll() {
    input.value = "";
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = "Ошибка";
    }
}

function copyToClipboard() {
    input.select();
    document.execCommand("copy");
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/^[\d\+\-\*\/\(\)\.]$/.test(key)) {
        insert(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    }
});
