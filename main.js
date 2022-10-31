const hamb = document.querySelector("#hamb__field");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector(".menu").cloneNode(2);

hamb.addEventListener("click", hambHandler);

function hambHandler(){
   hamb.classList.toggle("active");
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
};

function renderPopup(){
   popup.appendChild(menu);
};

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
};


