import { k as ensure_array_like, c as attr, j as stringify, d as escape_html } from './index2-CFsRFmOn.js';
import './root-CQc8kVgl.js';
import './state.svelte-t4wvsTBZ.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';
import { B as BlocksRenderer } from './BlocksRenderer-D5bP6K8c.js';
import { F as Footer } from './Footer-BnizHvCj.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="p10 mx-auto my-8 w-3/4"><!--[-->`);
    const each_array = ensure_array_like(
      // function gotoItem(par) {
      // 	let dest = '/about/' + par;
      // 	goto(dest);
      // }
      data.data
    );
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      let item = each_array[idx];
      if (idx % 2 == 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex w-full"><div class="w-1/2"><img class="h-96 object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt=""/></div> <div class="flex w-1/2 flex-col pr-4 pl-8"><p class="h-1/3 content-center text-3xl font-bold">${escape_html(item.title)}</p> <div class="h-1/3">`);
        BlocksRenderer($$renderer2, { content: item.description });
        $$renderer2.push(`<!----></div></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex w-full"><div class="flex w-1/2 flex-col pr-4 pl-8"><p class="h-1/3 content-center text-3xl font-bold">${escape_html(item.title)}</p> <div class="h-1/3">`);
        BlocksRenderer($$renderer2, { content: item.description });
        $$renderer2.push(`<!----></div></div> <div class="w-1/2"><img class="h-96 object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt=""/></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-fXA-ym8p.js.map
