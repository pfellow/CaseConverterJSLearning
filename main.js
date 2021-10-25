document.getElementById("upper-case").addEventListener("click", function () {
    document.getElementById("text-area").value = document.getElementById("text-area").value.toUpperCase();
})
document.getElementById("lower-case").addEventListener("click", function () {
    document.getElementById("text-area").value = document.getElementById("text-area").value.toLowerCase();
})
document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.getElementById("text-area").value.split(" ");
    let textResult = [];
    for (let i = 0; i < text.length; i++) {
        textResult.push(text[i][0].toUpperCase() + text[i].slice(1).toLowerCase());
    }
    document.getElementById("text-area").value = textResult.join(" ");
})
document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.getElementById("text-area").value.split(". ");
    let textResult = [];
    for (let i = 0; i < text.length; i++) {
        textResult.push(text[i][0].toUpperCase() + text[i].slice(1).toLowerCase());
    }
    document.getElementById("text-area").value = textResult.join(". ");
})

document.getElementById("save-text-file").addEventListener("click", function () {

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById("text-area").value));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
})