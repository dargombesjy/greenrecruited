import { d as escape_html, c as attr, j as stringify } from './index2-CFsRFmOn.js';
import { B as BlocksRenderer } from './BlocksRenderer-D5bP6K8c.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tmp = "longtext", menu = tmp.menu;
    let { data } = $$props;
    menu = "video";
    $$renderer2.push(`<div class="mx-auto w-3/4 p-4"><h3>${escape_html(data.data.title)}</h3> <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4"><div class="col-span-3 aspect-[16/9] w-full overflow-y-scroll">`);
    if (menu == "longtext") {
      $$renderer2.push("<!--[-->");
      BlocksRenderer($$renderer2, { content: data.data.long_text });
    } else if (menu == "video") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<iframe class="h-full w-full"${attr("src", `https://youtube.com/embed/${stringify(data.data.video_id)}`)} frameborder="0" title="Test" name="video-01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`);
    } else if (menu == "deepdive") {
      $$renderer2.push("<!--[2-->");
      BlocksRenderer($$renderer2, { content: data.data.deep_dive });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="col-span-1 w-full"><button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">TUJUAN PEMBELAJARAN</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">VIDEO</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">GALI LEBIH DALAM</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">EVALUASI</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">REFLEKSI</button></div> <div class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="aspect-[8/6] w-full p-3"><img src="" alt="" class="h-full w-full object-contain"/></div> <div class="p-6"><hr class="mb-6 border border-gray-300"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div> <div class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="aspect-[8/6] w-full p-3"><img src="" alt="" class="h-full w-full object-contain"/></div> <div class="p-6"><hr class="mb-6 border border-gray-300"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div> <div class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="aspect-[8/6] w-full p-3"><img src="" alt="" class="h-full w-full object-contain"/></div> <div class="p-6"><hr class="mb-6 border border-gray-300"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div> <div class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"><a href="javascript:void(0)" class="block" aria-label="product-wrapper"><div class="aspect-[8/6] w-full p-3"><img src="" alt="" class="h-full w-full object-contain"/></div> <div class="p-6"><hr class="mb-6 border border-gray-300"/> <div><h4>Introduction to Recruitment</h4> <h4>2nd line</h4></div></div></a></div></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B4aFScWV.js.map
