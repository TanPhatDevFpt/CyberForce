import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const img = document.querySelector(".inner__img");
const Api = `${API.imgPc}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
        <img src="${result.img}"/>
        `;
  });
  img.innerHTML = HTML;
});
