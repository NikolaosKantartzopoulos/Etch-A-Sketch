size_of_pad = 0;
container_dom.style = "width: 480px; height: 480px;";

const size_btn_dom = document.getElementById("num_of_divs");
const container_dom = document.getElementById("container");

size_btn_dom.addEventListener("click", () => {
  do {
    size_of_pad = prompt("How many tiles? Insert a number from 2 to 8");
  } while (size_of_pad > 8 || size_of_pad < 2);

  for (let i = 0; i < size_of_pad; i++) {
    const new_div = document.createElement("div");
    new_div.classList.add("cell");
    cell_width = new_div.style = "width";
    container_dom.appendChild(new_div);
  }
});
