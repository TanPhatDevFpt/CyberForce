import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const slider = document.querySelector(".swiper-wrapper");
const Api = `${API.Slider}`;
fetchapi(Api).then((data) => {
    let HTML = "";
    data.forEach((result)=>{
        HTML += `
        <div class="swiper-slide">
              <img src="${result.img}">
        </div>
        `;
    });
    slider.innerHTML = HTML;
});
