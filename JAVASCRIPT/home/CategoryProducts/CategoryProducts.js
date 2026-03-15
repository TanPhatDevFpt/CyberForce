import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const swiper = document.querySelector(".section4 .category");
const Api = `${API.CategoryProducts}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
        <a href="#" class="item">
            <img
              src="${result.img}"
            />
            <p>${result.title}</p>
          </a>
        `;
  });
  swiper.innerHTML = HTML;
});
