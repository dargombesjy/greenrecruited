import { k as ensure_array_like, c as attr, j as stringify } from './index2-CFsRFmOn.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';
import { F as Footer } from './Footer-B9h1FNDN.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="mx-auto w-3/4"><p>VIDEO</p> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
    const each_array = ensure_array_like(data.data.videos);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let video = each_array[$$index];
      $$renderer2.push(`<div class="relative w-80 flex-none"><img class="h-48 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(video.thumbnail.url)}`)} alt=""/></div>`);
    }
    $$renderer2.push(`<!--]--></div> <p>ARTIKEL</p> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
    const each_array_1 = ensure_array_like(data.data.articles);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let article = each_array_1[$$index_1];
      $$renderer2.push(`<div class="relative w-80 flex-none"><img class="h-48 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(article.thumbnail.url)}`)} alt=""/></div>`);
    }
    $$renderer2.push(`<!--]--></div> <p>BERITA</p> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
    const each_array_2 = ensure_array_like(data.data.news);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let news = each_array_2[$$index_2];
      $$renderer2.push(`<div class="relative w-80 flex-none"><img class="h-48 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(news.thumbnail.url)}`)} alt=""/></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C-veBkRb.js.map
