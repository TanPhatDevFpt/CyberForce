import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const swiper = document.querySelector(".ProductsVGA");
const Api = `${API.ProductsVGA}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
                      <div class="swiper-slide">
                        <div class="item__swiper">
                          <div class="img__swiper">
                            <a href="./HTML/infomation/infomation.html">
                              <img
                                src="${result.img}"
                              />
                            </a>
                            <div class="sale__swiper">
                              <p>Giảm 6%</p>
                            </div>
                          </div>
                          <div class="title__swiper">
                            <a href="./HTML/infomation/infomation.html"
                              >${result.title}
                            >
                          </div>
                          <div class="price">
                            <span>${result.price}</span>
                            <del>${result.delprice}</del>
                          </div>
                          <div class="Configuration">
                            <div class="taginfo">
                              <img
                                src="https://cdn.hstatic.net/files/200000420363/file/vram.png"
                              />
                              <span>${result.vram}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://cdn.hstatic.net/files/200000420363/file/cuda.png"
                              />
                              <span>${result.cuda}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://cdn.hstatic.net/files/200000420363/file/pssu-1.png"
                              />
                              <span>${result.power}</span>
                            </div>
                          </div>
                        </div>
                      </div>
        `;
  });
  swiper.innerHTML = HTML;
});