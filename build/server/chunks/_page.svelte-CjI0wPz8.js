import { d as escape_html, c as attr, j as stringify } from './index2-CFsRFmOn.js';
import { B as BlocksRenderer } from './BlocksRenderer-DQGd8Lr6.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tmp = "longtext", menu = tmp.menu;
    let { data } = $$props;
    menu = "video";
    $$renderer2.push(`<div class="w-3/4 p-4 mx-auto"><h3>${escape_html(data.data.title)}</h3> <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8"><div class="col-span-3 w-full aspect-[16/9] overflow-y-scroll">`);
    if (menu == "longtext") {
      $$renderer2.push("<!--[-->");
      BlocksRenderer($$renderer2, { content: data.data.long_text });
    } else if (menu == "video") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<iframe class="w-full h-full"${attr("src", `https://www.youtube.com/embed/${stringify(data.data.video_id)}`)} frameborder="0" title="Test" name="test-01"></iframe>`);
    } else if (menu == "deepdive") {
      $$renderer2.push("<!--[2-->");
      BlocksRenderer($$renderer2, { content: data.data.deep_dive });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="col-span-1 w-full"><button class="block px-10 py-2 text-[20pt] cursor-pointer text-left">TUJUAN PEMBELAJARAN</button> <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left">VIDEO</button> <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left">GALI LEBIH DALAM</button> <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left">EVALUASI</button> <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left">REFLEKSI</button></div> <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="w-full aspect-[8/6] p-3"><img src="" alt="" class="w-full h-full object-contain"/></div> <div class="p-6"><hr class="border border-gray-300 mb-6"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div> <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="w-full aspect-[8/6] p-3"><img src="" alt="" class="w-full h-full object-contain"/></div> <div class="p-6"><hr class="border border-gray-300 mb-6"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div> <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="w-full aspect-[8/6] p-3"><img src="" alt="" class="w-full h-full object-contain"/></div> <div class="p-6"><hr class="border border-gray-300 mb-6"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div> <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="w-full aspect-[8/6] p-3"><img src="" alt="" class="w-full h-full object-contain"/></div> <div class="p-6"><hr class="border border-gray-300 mb-6"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CjI0wPz8.js.map
