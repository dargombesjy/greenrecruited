import { k as ensure_array_like, c as attr, j as stringify, d as escape_html } from './index2-CFsRFmOn.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="w-3/4 p-4 mx-auto"><div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8"><!--[-->`);
    const each_array = ensure_array_like(data.data);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"><a${attr("href", `/modules/${stringify(item.documentId)}`)} class="block" aria-label="product-wrapper"><div class="w-full aspect-[8/6] p-3"><img${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt="" class="w-full h-full object-fill"/></div> <div class="p-6"><hr class="border border-gray-300 mb-6"/> <div><h4>${escape_html(item.title)}</h4></div></div></a></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CJPnaz3G.js.map
