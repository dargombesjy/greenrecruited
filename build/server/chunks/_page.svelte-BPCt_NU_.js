import { d as getContext, a9 as attributes, aa as clsx, c as attr, a4 as derived, ab as clsx$1 } from './index-DhcPt0gQ.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { t as twMerge } from './bundle-mjs-CIVy3b_A.js';

function cn(...inputs) {
  return twMerge(clsx$1(inputs));
}
function ArrowRightOutline($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getContext("iconCtx") ?? {};
    const sizes = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    };
    let {
      size,
      width,
      height,
      color = ctx.color || "currentColor",
      title,
      strokeWidth = ctx.strokeWidth || 2,
      desc,
      class: className,
      ariaLabel,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const effectiveSize = derived(() => width === void 0 && height === void 0 ? size ?? ctx.size ?? "md" : "md");
    const sizeClass = derived(() => width === void 0 && height === void 0 ? sizes[effectiveSize()] : void 0);
    const ariaDescribedby = derived(() => `${title?.id || ""} ${desc?.id || ""}`.trim());
    const hasDescription = derived(() => !!(title?.id || desc?.id));
    const isLabeled = derived(() => !!ariaLabel || hasDescription());
    $$renderer2.push(`<svg${attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color,
        width,
        height,
        ...restProps,
        class: clsx(cn("shrink-0", sizeClass(), className)),
        viewBox: "0 0 24 24",
        role: isLabeled() ? "img" : void 0,
        "aria-label": ariaLabel,
        "aria-describedby": hasDescription() ? ariaDescribedby() : void 0,
        "aria-hidden": !isLabeled()
      },
      void 0,
      void 0,
      void 0,
      3
    )}>`);
    if (title?.id && title.title) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<title${attr("id", title.id)}>${escape_html(title.title)}</title>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (desc?.id && desc.desc) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg>`);
  });
}
function _page($$renderer) {
  $$renderer.push(`<div class="mx-8 flex h-screen pb-8"><div class="my-auto"><h2 class="mb-4 text-[60pt] font-bold text-primary-50 dark:text-primary-500">GreenRecruitED</h2> <div class="text-[28pt]">Sustainable Recruitment Learning Platform</div> <div class="text-[28pt]">"Learning Recruitment for a Sustainable Future"</div></div></div> <div class="mx-8 flex h-screen flex-col"><video class="w-full" src="/videos/sample01.mp4" controls=""><track kind="captions"/></video></div> <div class="mt-10 grid h-screen grid-cols-3 content-center gap-2"><div class="bg-sky-100/75 hover:bg-sky-500 h-96"><div class="m-6"><p class="h-32 mb-2 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">LESSON PLAN</p> <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Penjelasan Lesson Plan</p> <button class="text-center font-medium inline-flex items-center justify-center text-white bg-primary-50 hover:bg-primary-800 focus-within:ring-primary-300 px-5 py-2.5 text-sm focus-within:ring-4 focus-within:outline-hidden rounded-lg w-40">Lebih jauh `);
  ArrowRightOutline($$renderer, { class: "ms-2 h-6 w-6 text-white" });
  $$renderer.push(`<!----></button></div></div> <div class="bg-sky-100/75 hover:bg-sky-500 h-96"><div class="m-6"><p class="h-32 mb-2 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">WEBSITE GUIDELINE</p> <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Panduan penggunaan website</p> <button class="text-center font-medium inline-flex items-center justify-center text-white bg-primary-50 hover:bg-primary-800 focus-within:ring-primary-300 px-5 py-2.5 text-sm focus-within:ring-4 focus-within:outline-hidden rounded-lg w-40">Lebih jauh `);
  ArrowRightOutline($$renderer, { class: "ms-2 h-6 w-6 text-white" });
  $$renderer.push(`<!----></button></div></div> <div class="bg-sky-100/75 hover:bg-sky-500 h-96"><div class="m-6"><p class="h-32 mb-2 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">DEVELOPER &amp; CONTACT</p> <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Hubungi Developer</p> <button class="text-center font-medium inline-flex items-center justify-center text-white bg-primary-50 hover:bg-primary-800 focus-within:ring-primary-300 px-5 py-2.5 text-sm focus-within:ring-4 focus-within:outline-hidden rounded-lg w-40">Lebih jauh `);
  ArrowRightOutline($$renderer, { class: "ms-2 h-6 w-6 text-white" });
  $$renderer.push(`<!----></button></div></div></div> <div class="mt-10 grid h-screen grid-cols-3 grid-rows-3 gap-2"><div>Leftmost</div> <div class="col-start-2 row-start-2">Center</div> <div class="col-start-3 row-start-3">Rightmost</div></div> <div class="mx-auto mt-10 h-screen flex flex-col justify-center"><div class="text-center"><p>Pelajari lebih lanjut tentang rekrutmen berbasis keberlanjutan</p> <button class="mt-4 cursor-pointer rounded-[30px] bg-primary-50 py-4 px-8 text-white">Selengkapnya..</button></div></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BPCt_NU_.js.map
