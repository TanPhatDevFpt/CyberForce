import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const list_category = document.querySelector(".list__category ul");
const Api = `${API.Category}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
        <li>
             <a href="${result.title}">${result.title}</a>
        </li>
        `;
  });
  list_category.innerHTML = HTML;
});
