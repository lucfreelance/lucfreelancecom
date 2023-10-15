import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent } from '../astro.02098beb.mjs';
import { a as $$Icon, $ as $$BaseLayout } from './BaseLayout.astro.84d03604.mjs';
import { $ as $$Hero } from './404.astro.c543d665.mjs';
/* empty css                           *//* empty css                           *//* empty css                               */
// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/nested/work-1-cali-vip-tours.md": () => import('../work-1-cali-vip-tours.9ff19c32.mjs'),"/src/content/work/work-2-positiva-cali.md": () => import('../work-2-positiva-cali.60d9fcee.mjs'),"/src/content/work/work-3-ultra-spaces.md": () => import('../work-3-ultra-spaces.54c0cdae.mjs'),"/src/content/work/work-4-pragma-studios.md": () => import('../work-4-pragma-studios.9abf33ce.mjs'),"/src/content/work/work-5-lucfreelance.md": () => import('../work-5-lucfreelance.75396e83.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"work-5-lucfreelance":"/src/content/work/work-5-lucfreelance.md","work-4-pragma-studios":"/src/content/work/work-4-pragma-studios.md","work-3-ultra-spaces":"/src/content/work/work-3-ultra-spaces.md","work-2-positiva-cali":"/src/content/work/work-2-positiva-cali.md","nested/work-1-cali-vip-tours":"/src/content/work/nested/work-1-cali-vip-tours.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/nested/work-1-cali-vip-tours.md": () => import('../work-1-cali-vip-tours.fec2d8db.mjs'),"/src/content/work/work-2-positiva-cali.md": () => import('../work-2-positiva-cali.378e82e2.mjs'),"/src/content/work/work-3-ultra-spaces.md": () => import('../work-3-ultra-spaces.07400238.mjs'),"/src/content/work/work-4-pragma-studios.md": () => import('../work-4-pragma-studios.470f7d22.mjs'),"/src/content/work/work-5-lucfreelance.md": () => import('../work-5-lucfreelance.ca03e927.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$3 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} class="astro-BALV45LP">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/CallToAction.astro");

const $$Astro$2 = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead($$result)}<div class="pill astro-2QEYWK4B">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/Pill.astro");

const $$Astro$1 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead($$result)}<aside class="astro-RCDZUQ3A">
	<h2 class="astro-RCDZUQ3A">Contact me on</h2>
	${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "https://api.whatsapp.com/send?phone=yourPhoneNumber&text=Hello,%20I%20come%20from%20lucfreelance.com%20and%20I%20am%20contacting%20you%20regarding:%20", "class": "astro-RCDZUQ3A" }, { "default": ($$result2) => renderTemplate`
		WhatsApp
		${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2rem", "class": "astro-RCDZUQ3A" })}
	` })}
</aside>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/ContactCTA.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "class": "astro-QWEKCIQP" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-QWEKCIQP">
		<div class="stack gap-15 astro-QWEKCIQP">
			<header class="astro-QWEKCIQP">
				<div class="wrapper stack gap-2 astro-QWEKCIQP">
					<a class="back-link astro-QWEKCIQP" href="/work/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-QWEKCIQP" })} Work</a>
					${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "class": "astro-QWEKCIQP" }, { "default": ($$result3) => renderTemplate`
						<div class="details astro-QWEKCIQP">
							<div class="tags astro-QWEKCIQP">
								${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-QWEKCIQP" }, { "default": ($$result4) => renderTemplate`${t}` })}`)}
							</div>
							<p class="description astro-QWEKCIQP">${entry.data.description}</p>
						</div>
					` })}
				</div>
			</header>
			<main class="wrapper astro-QWEKCIQP">
				<div class="stack gap-10 content astro-QWEKCIQP">
					${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} class="astro-QWEKCIQP">`}
					<div class="content astro-QWEKCIQP">
						${renderComponent($$result2, "Content", Content, { "class": "astro-QWEKCIQP" })}
					</div>
				</div>
			</main>
		</div>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-QWEKCIQP" })}
	</div>
` })}`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/pages/work/[...slug].astro");

const $$file = "/mnt/d/Codes/front/2023/lucfreelance/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, $$Pill as a, $$CallToAction as b, getCollection as g };
