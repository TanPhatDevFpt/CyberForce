import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const swiper = document.querySelector(".title__category .video");
const Api = `${API.Videotiktok}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
            <blockquote
              class="tiktok-embed"
              cite="https://www.tiktok.com/@tinhocngoisao/video/${result.dataid}"
              data-video-id="${result.dataid}"
              style="max-width: 325px"
            >
              <section></section>
            </blockquote>
        `;
  });
  swiper.innerHTML = HTML;
    const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
});