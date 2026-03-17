import { c as attr, a9 as stringify, aa as ensure_array_like } from './index-CZWhm1pv.js';
import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function RightArrow($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 ms-2 h-6 w-6" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="mx-8 flex h-screen pb-8"><div class="my-auto"><h2 class="mb-4 text-[60pt] font-bold text-primary-50 dark:text-primary-500">GreenRecruitED</h2> <div class="text-[28pt]">Sustainable Recruitment Learning Platform</div> <div class="text-[28pt]">${escape_html(data.data.subtitle)}</div></div></div> <div class="mx-8 flex h-screen flex-col"><video class="w-full" muted="" autoplay="" loop="" playsinline="" controls="" disablepictureinpicture=""><source${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.intro_video.url)}`)}/></video></div> <div class="mt-10 grid h-screen grid-cols-3 content-center gap-2"><!--[-->`);
    const each_array = ensure_array_like(data.data.block_1s);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let block1_item = each_array[$$index];
      $$renderer2.push(`<div class="h-96 bg-sky-100/75 hover:bg-sky-500"><div class="m-6"><p class="mb-2 h-32 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">${escape_html(block1_item.title)}</p> <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">${escape_html(block1_item.description)}</p> <button class="inline-flex w-40 items-center justify-center rounded-lg bg-primary-50 px-5 py-2.5 text-center text-sm font-medium text-white focus-within:ring-4 focus-within:ring-primary-300 focus-within:outline-hidden hover:bg-primary-800">Lebih jauh `);
      RightArrow($$renderer2);
      $$renderer2.push(`<!----></button></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-10 grid h-screen grid-cols-3 grid-rows-3 gap-2 content-center text-[20pt]"><div class="rounded-[20px] bg-primary-50 content-center text-center text-white"><p>${escape_html(data.data.block_3s[0].title)}</p></div> <div class="col-start-2 row-start-2 rounded-[20px] bg-primary-50 content-center text-center text-white"><p>${escape_html(data.data.block_3s[1].title)}</p></div> <div class="col-start-3 row-start-3 rounded-[20px] bg-primary-50 content-center text-center text-white"><p>${escape_html(data.data.block_3s[2].title)}</p></div></div> <div class="mx-auto mt-10 flex h-screen flex-col justify-center"><div class="text-center"><p>${escape_html(data.data.lebih_lanjut)}</p> <button class="mt-4 cursor-pointer rounded-[30px] bg-primary-50 px-8 py-4 text-white">Selengkapnya..</button></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CIerJHy7.js.map
