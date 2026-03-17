import { fetchapi } from "../setapi.js";
import { API, ApiBase } from "../contain.js";
const swiper = document.querySelector(".section3 .swiper-wrapper");
const Api = `${API.ProductsPc}`;
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
                              <p>Giảm 9%</p>
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
                                src="https://file.hstatic.net/200000420363/file/cpu_551f76bd6d4c43b2a335cf4a67ab1a07_03efcd66e6ec49889f9142e57e6db8ab.png"
                              />
                              <span>${result.chip}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/graphic-card_73a0ff25813f47b58d4c25090110bc35_bde6a2d13cc7446083d0d732839f04ed.png"
                              />
                              <span>${result.card}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/motherboard__1__ac8c2c4e00414491a71cc302db2aedf5_e2e68cc51358421fa94bdf23a0cb611d.png"
                              />
                              <span>${result.main}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/ram-memory_e390926d200142c1b16f7f7bf9a23aea_acb0a12141f24319ba1169b0b29e3c0b.png"
                              />
                              <span>${result.ram}</span>
                            </div>
                            <div class="taginfo">
                              <img
                                src="https://file.hstatic.net/200000420363/file/server-storage_a275b171a0724dd7b1698c1adcc09f2b_ee2a778f06ad44da94e8b16328dcd6d5.png"
                              />
                              <span>${result.ssd}</span>
                            </div>
                          </div>
                        </div>
                      </div>
        `;
  });
  swiper.innerHTML = HTML;
});
