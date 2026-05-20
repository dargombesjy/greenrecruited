import { c as attr, j as stringify } from './index2-CFsRFmOn.js';

/* empty css                                                                 */
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="mx-auto px-10 w-3/4 p-4"><div class="h-48"><div class="aspect-[16/9] w-full"><iframe class="h-full w-full"${attr("src", `https://youtube.com/embed/${stringify(data.data[0].video_id)}`)} frameborder="0" title="Test" name="video-01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></div> <div>test</div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DSzgwy9l.js.map
