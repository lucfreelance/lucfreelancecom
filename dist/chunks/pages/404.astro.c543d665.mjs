import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent } from '../astro.02098beb.mjs';
/* empty css                         */import { $ as $$BaseLayout } from './BaseLayout.astro.84d03604.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header${addAttribute([["hero stack gap-4", align], "astro-BBE6DXRZ"], "class:list")}>
	<div class="stack gap-2 astro-BBE6DXRZ">
		<h1 class="title astro-BBE6DXRZ">${title}</h1>
		${tagline && renderTemplate`<p class="tagline astro-BBE6DXRZ">${tagline}</p>`}
	</div>
	${renderSlot($$result, $$slots["default"])}
</header>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/Hero.astro");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "Error 404 \u2014 We found this link broken, we'll fix it soon; better go back..." }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Hero", $$Hero, { "title": "Not Found", "tagline": "Not Found" })}
` })}`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/pages/404.astro");

const $$file = "/mnt/d/Codes/front/2023/lucfreelance/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, _404 as _ };
