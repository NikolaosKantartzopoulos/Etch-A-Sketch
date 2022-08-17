const size_btn_dom = document.getElementById("num_of_divs");
const container_dom = document.getElementById("container");

size_of_pad = 0;
let container_width_js = container_dom.clientHeight;

size_btn_dom.addEventListener("click", () => {
  size_of_pad = get_size_of_container();
  let cell_width = `${Math.floor(container_width_js / size_of_pad)}px`;
  for (let i = 0; i < size_of_pad ** 2; i++) {
    const new_div = document.createElement("div");
    new_div.classList.add("cell");
    new_div.style.width = cell_width;
    new_div.style.width = new_div.style.height = cell_width;
    container_dom.appendChild(new_div);
  }
});

//--------------------Helper functions------------------
function get_size_of_container() {
  do {
    var temp_cell = document.querySelector(".cell");
    while (container_dom.firstChild) {
      temp_cell = document.querySelector(".cell");
      container_dom.removeChild(temp_cell);
    }
    size_of_pad = prompt("How many tiles? Insert a number from 2 to 8");
  } while (size_of_pad > 8 || size_of_pad < 2);
  return size_of_pad;
}
