import { c as attr, a9 as stringify, aa as ensure_array_like } from './index-CZWhm1pv.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';
import { F as Footer } from './Footer-B9h1FNDN.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div></div> <div class="p10 mx-auto my-8 w-3/4"><div class="relative -z-10 w-full flex-none"><img class="object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.main_image.url)}`)} alt=""/> <div class="absolute top-[75%] px-8 text-4xl font-bold text-white">${escape_html(data.data.title)}</div></div> <!--[-->`);
    const each_array = ensure_array_like(data.data.about_items);
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      let item = each_array[idx];
      if (idx % 2 == 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex w-full"><div class="w-1/2"><img class="h-96 object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt=""/></div> <div class="flex w-1/2 flex-col pr-4 pl-8"><p class="h-1/3 content-center text-3xl font-bold">${escape_html(item.title)}</p> <div class="h-1/3"><span>${escape_html(item.description)}</span></div> <button class="mx-10 mt-2 rounded-3xl bg-primary-50 p-2 text-white">${escape_html(item.button_text)}</button></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex w-full"><div class="flex w-1/2 flex-col pr-4 pl-8"><p class="h-1/3 content-center text-3xl font-bold">${escape_html(item.title)}</p> <div class="h-1/3"><span>${escape_html(item.description)}</span></div> <button class="mx-10 mt-2 rounded-3xl bg-primary-50 p-2 text-white">${escape_html(item.button_text)}</button></div> <div class="w-1/2"><img class="h-96 object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt=""/></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DMJKxOHX.js.map
