function handleAlignmentChange() {
    var selectedAlign = document.getElementById("alignment").value;
    const h1Element = document.querySelector('h1');
    h1Element.style.textAlign = selectedAlign;
  }

  document.getElementById("alignment").addEventListener("change", handleAlignmentChange);
