import { k as ensure_array_like, d as escape_html } from './index2-CFsRFmOn.js';
import './root-CQc8kVgl.js';
import './state.svelte-t4wvsTBZ.js';
import { F as Footer } from './Footer-B9h1FNDN.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="mx-auto h-screen w-3/4"><!--[-->`);
    const each_array = ensure_array_like(data.data);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let row = each_array[$$index];
      $$renderer2.push(`<div class="flex justify-around px-10 py-4"><div class="flex w-1/2 flex-col justify-center p-8 text-[28pt]"><p class="text-center">${escape_html(row.title)}</p></div> <div class="flex w-1/2 flex-col items-center p-8"><p class="text-center">${escape_html(row.long_title)}</p> <button class="mt-4 w-48 cursor-pointer rounded-[20px] bg-primary-50 py-4 text-center text-white">Mulai simulasi</button></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BUeZqxlB.js.map
