import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const swiper = document.querySelector(".swiper-company");
const Api = `${API.SliderCompany}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
            <div class="swiper-slide">
              <img
                src="${result.img}"
              />
            </div>
        `;
  });
  swiper.innerHTML = HTML;
});