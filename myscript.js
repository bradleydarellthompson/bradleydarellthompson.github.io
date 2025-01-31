function handleAlignmentChange() {
    var selectedAlign = document.getElementById("alignment").value;
    const h1Element = document.querySelector('h1');
    h1Element.style.textAlign = selectedAlign;
}

document.getElementById("alignment").addEventListener("change", handleAlignmentChange);

function handlePColorChange() {
    var selectedColor = document.getElementById("paragraphcolor").value;
    const pElements = document.querySelectorAll('p');
    pElements.forEach(pElement => {
        pElement.className = selectedColor;
    });
}

document.getElementById("paragraphcolor").addEventListener("change", handlePColorChange);
