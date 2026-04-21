import { c as attr, j as stringify, d as escape_html, k as ensure_array_like } from './index2-CFsRFmOn.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';
import './root-CQc8kVgl.js';
import './state.svelte-t4wvsTBZ.js';
import { B as BlocksRenderer } from './BlocksRenderer-DQGd8Lr6.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
    $$renderer2.push(`<div class="mx-auto flex h-screen w-3/4 flex-col p-8">`);
    if (data.data[0].image) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data[0].image.url)}`)} class="h-40 w-40 self-center rounded-full object-cover" alt=""/>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="mt-8 mb-4 text-center text-2xl">${escape_html(data.data[0].title)}</div> <div class="my-4 self-center text-xl">`);
    BlocksRenderer($$renderer2, { content: data.data[0].description });
    $$renderer2.push(`<!----></div> <div class="self-center text-lg"><!--[-->`);
    const each_array = ensure_array_like(data.data[0].choices);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let path = each_array[$$index];
      $$renderer2.push(`<div class="flex gap-2"><input${attr("id", slugify(path.choice_name))} type="radio" name="choices" class="peer"/> <label${attr("for", slugify(path.choice_name))} class="peer-checked:bg-red-200">${escape_html(path.choice_text)}</label></div>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="mt-4 w-48 cursor-pointer self-center rounded-[20px] bg-primary-50 py-4 text-center text-white">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Reset`);
    }
    $$renderer2.push(`<!--]--></button></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-jHFAkToe.js.map
