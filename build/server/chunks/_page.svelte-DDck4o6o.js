import { c as attr, j as stringify, d as escape_html, k as ensure_array_like } from './index2-CFsRFmOn.js';
import { F as Footer } from './Footer-BnizHvCj.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="w-3/4 mx-auto"><div class="relative -z-10 w-full"><img class="w-full object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.main_image.url)}`)} alt=""/> <div class="absolute top-[75%] px-8 text-4xl font-bold text-white">${escape_html(data.data.title)}</div></div> <div class="my-8 flex w-full justify-between"><div class="w-1/2"><img class="w-full"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.forum_image.url)}`)} alt=""/></div> <div class="flex w-1/2 flex-col p-4"><p class="text-[24pt]">${escape_html(data.data.forum_title)}</p> <div><span>${escape_html(data.data.forum_desc)}</span></div> <button class="mt-2 w-40 rounded-3xl bg-primary-50 p-2 text-white">Mulai diskusi</button></div></div> <p class="mt-8 mb-4">APA YANG BISA KITA LAKUKAN ?</p> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
    const each_array = ensure_array_like(data.data.todos);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let todo = each_array[$$index];
      $$renderer2.push(`<div class="relative w-96 flex-none"><img class="h-64 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(todo.todo_image.url)}`)} alt=""/> <div class="absolute top-[70%] px-2 text-bold text-white">${escape_html(todo.title)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DDck4o6o.js.map
