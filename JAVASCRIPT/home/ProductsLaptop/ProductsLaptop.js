import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const swiper = document.querySelector(".ProductsLaptop");
const Api = `${API.ProductsLaptop}`;
fetchapi(Api).then((data) => {
  let HTML = "";
  data.forEach((result) => {
    HTML += `
                      <div class="swiper-slide">
                        <div class="item__swiper">
                          <div class="img__swiper">
                            <a href="#123">
                              <img
                                src="${result.img}"
                              />
                            </a>
                            <div class="sale__swiper">
                              <p>Giảm 9%</p>
                            </div>
                          </div>
                          <div class="title__swiper">
                            <a href="#2"
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
                                src="https://file.hstatic.net/200000420363/file/cpu_551f76bd6d4c43b2a335cf4a67ab1a07_03efcd66e6ec49889f9142e57e6db8ab.png"
                              />
                              <span>${result.cpu}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/graphic-card_73a0ff25813f47b58d4c25090110bc35_bde6a2d13cc7446083d0d732839f04ed.png"
                              />
                              <span>${result.gpu}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://cdn.hstatic.net/files/200000420363/file/ram_7213f45398e8468c98ff28af253fba1f.png"
                              />
                              <span>${result.ram}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/server-storage_a275b171a0724dd7b1698c1adcc09f2b_ee2a778f06ad44da94e8b16328dcd6d5.png"
                              />
                              <span>${result.ssd}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/television_ba983c33e8954aa1922dd373b5879a65.png"
                              />
                              <span>${result.display}</span>
                            </div>
                          </div>
                        </div>
                      </div>
        `;
  });
  swiper.innerHTML = HTML;
});
