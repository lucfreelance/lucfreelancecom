import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.02098beb.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.81d075f8.mjs';
import { $ as $$BaseLayout } from './BaseLayout.astro.84d03604.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index.astro.c7a2f22e.mjs';
import { $ as $$Hero } from './404.astro.c543d665.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                               *//* empty css                                *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                         */
const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work Showcase", "description": "Enhancing lives of people who use my services" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="stack gap-20">
        <main class="wrapper stack gap-8">
            ${renderComponent($$result2, "Hero", $$Hero, { "title": "Explore Some of my Recent Projects", "tagline": "Consistent Results Crafted to Match Unique Requirements." })}
            ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
                            ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}
                        </li>`)}` })}
        </main>
        ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
    </div>
` })}`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/pages/work.astro");

const $$file = "/mnt/d/Codes/front/2023/lucfreelance/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
