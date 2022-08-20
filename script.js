const size_btn_dom = document.getElementById("num_of_divs");
const container_dom = document.getElementById("container");
const clear_btn_dom = document.getElementById("clear_btn");
let all_cells_nodelist = document.getElementsByClassName("cell");
let all_cells_array = Array.from(all_cells_nodelist);

let win_mousedown = false;
document.body.onmousedown = () => (win_mousedown = true);
document.body.onmouseup = () => (win_mousedown = false);

size_of_pad = 0;
let container_width_js = container_dom.clientHeight;

//--------------------Helper functions------------------

function clear() {
  console.log("clear clicked");
  Array.from(document.getElementsByClassName("cell")).forEach(function (node) {
    node.style.backgroundColor = "white";
  });
}
//-------------------END Helper functions------------------
function create_grid(size_of_pad) {
  //clear grid if already formed
  while (container_dom.firstChild) {
    temp_cell = document.querySelector(".cell");
    container_dom.removeChild(temp_cell);
  }
  let cell_width = `${Math.floor(container_width_js / size_of_pad)}px`;
  //create cells
  for (let i = 0; i < size_of_pad ** 2; i++) {
    const new_div = document.createElement("div");
    new_div.classList.add("cell");
    new_div.style.width = cell_width;
    new_div.style.width = new_div.style.height = cell_width;
    new_div.setAttribute("id", `cell_${i + 1}`);
    new_div.addEventListener("mouseover", () => {
      if (win_mousedown == true) {
        new_div.style.backgroundColor = "black";
      }
    });
    container_dom.appendChild(new_div);
  }
}

clear_btn_dom.addEventListener("click", clear);
