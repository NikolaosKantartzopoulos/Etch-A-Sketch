const size_btn_dom = document.getElementById("num_of_divs");
const container_dom = document.getElementById("container");
const clear_btn_dom = document.getElementById("clear_btn");
let all_cells_nodelist = document.getElementsByClassName("cell");
let all_cells_array = Array.from(all_cells_nodelist);

size_of_pad = 0;
let container_width_js = container_dom.clientHeight;

//--------------------Helper functions------------------
function get_size_of_container() {
  do {
    var temp_cell = document.querySelector(".cell");
    while (container_dom.firstChild) {
      temp_cell = document.querySelector(".cell");
      container_dom.removeChild(temp_cell);
    }
    size_of_pad = prompt("How many tiles? Insert 8 or 16");
  } while (size_of_pad !== "8" && size_of_pad != "16");
  return size_of_pad;
}
function clear() {
  all_cells_nodelist.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}
//-------------------END Helper functions------------------
size_btn_dom.addEventListener("click", () => {
  size_of_pad = get_size_of_container();
  let cell_width = `${Math.floor(container_width_js / size_of_pad)}px`;
  for (let i = 0; i < size_of_pad ** 2; i++) {
    const new_div = document.createElement("div");
    new_div.classList.add("cell");
    new_div.style.width = cell_width;
    new_div.style.width = new_div.style.height = cell_width;
    new_div.setAttribute("id", `cell_${i + 1}`);
    new_div.addEventListener(
      "mousedown",
      () => (new_div.style.backgroundColor = "black")
    );
    container_dom.appendChild(new_div);
  }
});
clear_btn_dom, addEventListener("click", clear());
