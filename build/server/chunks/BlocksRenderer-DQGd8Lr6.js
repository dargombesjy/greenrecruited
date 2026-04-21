import { k as ensure_array_like, d as escape_html, l as derived, c as attr } from './index2-CFsRFmOn.js';

function isTextNode(n) {
  return n?.type === "text";
}
function isLinkNode(n) {
  return n?.type === "link";
}
function getActiveModifiers(n) {
  const m = [];
  if (n.bold)
    m.push("bold");
  if (n.italic)
    m.push("italic");
  if (n.underline)
    m.push("underline");
  if (n.strikethrough)
    m.push("strikethrough");
  if (n.code)
    m.push("code");
  return m;
}
function mergeComponents(def, over) {
  return over ? { ...def, ...over } : def;
}
function ModifierWrapper_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { text, mods, modifiers, index = 0 } = $$props;
    const currentMod = derived(() => mods[index]);
    const Modifier = derived(() => currentMod() ? modifiers[currentMod()] : null);
    const hasMore = derived(() => index < mods.length - 1);
    if (Modifier()) {
      $$renderer2.push("<!--[-->");
      if (Modifier()) {
        $$renderer2.push("<!--[-->");
        Modifier()($$renderer2, {
          children: ($$renderer3) => {
            if (hasMore()) {
              $$renderer3.push("<!--[-->");
              ModifierWrapper_1($$renderer3, { text, mods, modifiers, index: index + 1 });
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`${escape_html(text)}`);
            }
            $$renderer3.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(text)}`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function TextRenderer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, modifiers } = $$props;
    const parts = derived(() => node.text.split("\n"));
    const activeMods = derived(() => getActiveModifiers(node));
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(parts());
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let part = each_array[i];
      ModifierWrapper_1($$renderer2, { text: part, mods: activeMods(), modifiers });
      $$renderer2.push(`<!----> `);
      if (i < parts().length - 1) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<br/>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function InlineRenderer_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { nodes, modifiers } = $$props;
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(nodes);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let node = each_array[i];
      if (isTextNode(node)) {
        $$renderer2.push("<!--[-->");
        TextRenderer($$renderer2, { node, modifiers });
      } else if (isLinkNode(node)) {
        $$renderer2.push("<!--[1-->");
        const Link2 = modifiers.link;
        if (Link2) {
          $$renderer2.push("<!--[-->");
          Link2($$renderer2, {
            url: node.url,
            children: ($$renderer3) => {
              InlineRenderer_1($$renderer3, { nodes: node.children, modifiers });
            },
            $$slots: { default: true }
          });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Paragraph($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, modifiers } = $$props;
    if (node.children.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<br/>`);
    } else if (node.children.length === 1 && node.children[0].type === "text" && node.children[0].text === "") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<br/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Heading($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, modifiers } = $$props;
    if (node.level === 1) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h1>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></h1>`);
    } else if (node.level === 2) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<h2>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></h2>`);
    } else if (node.level === 3) {
      $$renderer2.push("<!--[2-->");
      $$renderer2.push(`<h3>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></h3>`);
    } else if (node.level === 4) {
      $$renderer2.push("<!--[3-->");
      $$renderer2.push(`<h4>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></h4>`);
    } else if (node.level === 5) {
      $$renderer2.push("<!--[4-->");
      $$renderer2.push(`<h5>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></h5>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<h6>`);
      InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
      $$renderer2.push(`<!----></h6>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Quote($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, modifiers } = $$props;
    $$renderer2.push(`<blockquote>`);
    InlineRenderer_1($$renderer2, { nodes: node.children, modifiers });
    $$renderer2.push(`<!----></blockquote>`);
  });
}
function Code$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node } = $$props;
    $$renderer2.push(`<pre><code><!--[-->`);
    const each_array = ensure_array_like(node.children);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let textNode = each_array[i];
      $$renderer2.push(`<!---->${escape_html(textNode.text)}`);
    }
    $$renderer2.push(`<!--]--></code></pre>`);
  });
}
function Image($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node } = $$props;
    $$renderer2.push(`<figure><img${attr("src", node.image.url)}${attr("alt", node.image.alternativeText ?? node.image.name)}${attr("width", node.image.width)}${attr("height", node.image.height)}/> `);
    if (node.image.caption) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<figcaption>${escape_html(node.image.caption)}</figcaption>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></figure>`);
  });
}
function ListItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, modifiers } = $$props;
    $$renderer2.push(`<li><!--[-->`);
    const each_array = ensure_array_like(node.children);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let child = each_array[i];
      if (child.type === "text" || child.type === "link") {
        $$renderer2.push("<!--[-->");
        InlineRenderer_1($$renderer2, { nodes: [child], modifiers });
      } else {
        $$renderer2.push("<!--[!-->");
        BlocksRenderer($$renderer2, { content: [child], blocks: {}, modifiers });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></li>`);
  });
}
function List($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, modifiers } = $$props;
    if (node.format === "ordered") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<ol><!--[-->`);
      const each_array = ensure_array_like(node.children);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let item = each_array[i];
        ListItem($$renderer2, { node: item, modifiers });
      }
      $$renderer2.push(`<!--]--></ol>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<ul><!--[-->`);
      const each_array_1 = ensure_array_like(node.children);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let item = each_array_1[i];
        ListItem($$renderer2, { node: item, modifiers });
      }
      $$renderer2.push(`<!--]--></ul>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Bold($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<strong>`);
  children?.($$renderer);
  $$renderer.push(`<!----></strong>`);
}
function Italic($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<em>`);
  children?.($$renderer);
  $$renderer.push(`<!----></em>`);
}
function Underline($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<u>`);
  children?.($$renderer);
  $$renderer.push(`<!----></u>`);
}
function Strikethrough($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<s>`);
  children?.($$renderer);
  $$renderer.push(`<!----></s>`);
}
function Code($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<code>`);
  children?.($$renderer);
  $$renderer.push(`<!----></code>`);
}
function Link($$renderer, $$props) {
  const { url, children } = $$props;
  $$renderer.push(`<a${attr("href", url)} target="_blank" rel="noopener noreferrer">`);
  children?.($$renderer);
  $$renderer.push(`<!----></a>`);
}
function BlocksRenderer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { content, blocks = {}, modifiers = {} } = $$props;
    const defaultBlocks = {
      paragraph: Paragraph,
      heading: Heading,
      quote: Quote,
      code: Code$1,
      image: Image,
      list: List,
      "list-item": ListItem
    };
    const defaultModifiers = {
      bold: Bold,
      italic: Italic,
      underline: Underline,
      strikethrough: Strikethrough,
      code: Code,
      link: Link
    };
    let resolvedBlocks = derived(() => mergeComponents(defaultBlocks, blocks));
    let resolvedModifiers = derived(() => mergeComponents(defaultModifiers, modifiers));
    if (Array.isArray(content)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(content);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let node = each_array[index];
        if (resolvedBlocks()[node.type]) {
          $$renderer2.push("<!--[-->");
          const Block = resolvedBlocks()[node.type];
          if (Block) {
            $$renderer2.push("<!--[-->");
            Block($$renderer2, { node, index, modifiers: resolvedModifiers() });
            $$renderer2.push("<!--]-->");
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push("<!--]-->");
          }
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div class="blocks-renderer-unknown svelte-r79921">Unknown block type: <code>${escape_html(node.type)}</code></div>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="blocks-renderer-empty svelte-r79921">No content to render.</div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}

export { BlocksRenderer as B };
//# sourceMappingURL=BlocksRenderer-DQGd8Lr6.js.map
