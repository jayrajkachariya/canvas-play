import "./styles.css";

let selectedElementRef;

function onSelectElement(event) {
  selectedElementRef = event.currentTarget;
  console.log(selectedElementRef);
}

function makeBold() {
  selectedElementRef.classList.add("bold");
}

function makeItalic() {
  selectedElementRef.classList.add("italic");
}

function makeUnderline() {
  selectedElementRef.classList.add("underline");
}
