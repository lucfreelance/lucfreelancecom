import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent } from '../astro.02098beb.mjs';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './_...slug_.astro.81d075f8.mjs';
import { a as $$Icon, $ as $$BaseLayout } from './BaseLayout.astro.84d03604.mjs';
/* empty css                           */import { $ as $$Hero } from './404.astro.c543d665.mjs';
/* empty css                           */
const $$Astro$4 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/Grid.astro");

const $$Astro$3 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead($$result)}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/PortfolioPreview.astro");

const $$Astro$2 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section with-background bg-variant astro-AADLZISC">
  <header class="section-header stack gap-2 lg:gap-4 astro-AADLZISC">
    <h2 class="astro-AADLZISC">Testimonials</h2>
    <h5 class="astro-AADLZISC">
      What Clients <br class="astro-AADLZISC">
      Are Saying ↓
    </h5>
  </header>

  <div class="gallery astro-AADLZISC">
    <ul class="testimonial-list astro-AADLZISC">
      <li class="astro-AADLZISC">
        <article class="astro-AADLZISC">
          <div class="testimonial astro-AADLZISC">
            <div class="testimonial-image astro-AADLZISC">
              <img src="/assets/imaginery/client-1.jpg" alt="Satisfied Client 1" class="astro-AADLZISC">
            </div>
            <p class="astro-AADLZISC">Other developers I had quoted gave me various excuses and delays, but this dev addressed my requirements with accurate results and a nice website.</p>
            <p class="author astro-AADLZISC">~ Julian - Cali VIP Tours [Hugo]</p>
          </div>
        </article>
      </li>
      <li class="astro-AADLZISC">
        <article class="astro-AADLZISC">
          <div class="testimonial astro-AADLZISC">
            <div class="testimonial-image astro-AADLZISC">
              <img src="/assets/imaginery/client-2.jpg" alt="Satisfied Client 2" class="astro-AADLZISC">
            </div>
            <p class="astro-AADLZISC">I highly recommend Lucfreelance's services. They have shown a high level of expertise, and their attention to detail is appreciated. Thank you for the excellent work doing my store!</p>
            <p class="author astro-AADLZISC">~ Maria - Sacred Collective [WordPress + Woocommerce]</p>
          </div>
        </article>
      </li>
    </ul>
    <ul class="testimonial-list astro-AADLZISC">
      <li class="astro-AADLZISC">
        <article class="astro-AADLZISC">
          <div class="testimonial astro-AADLZISC">
            <div class="testimonial-image astro-AADLZISC">
              <img src="/assets/imaginery/client-3.jpg" alt="Satisfied Client 3" class="astro-AADLZISC">
            </div>
            <p class="astro-AADLZISC">I am satisfied with Luc team and they were always professional and completed the project on time and within the budget. Solving problems and patiente will always be a plus that I appreciate.</p>
            <p class="author astro-AADLZISC">~ Wilman - Pragma [WordPress + Elementor]</p>
          </div>
        </article>
        </li>
        <li class="astro-AADLZISC">
        <article class="astro-AADLZISC">
          <div class="testimonial astro-AADLZISC">
            <div class="testimonial-image astro-AADLZISC">
              <img src="/assets/imaginery/client-4.jpg" alt="Satisfied Client 4" class="astro-AADLZISC">
            </div>
            <p class="astro-AADLZISC">Competent and trustable designer and data base integrator in this company. They exceeded my expectations and met my guidelines. I will definitely contact them for further future projects.</p>
            <p class="author astro-AADLZISC">~ Daniel - El Patio + Corredor Cultural [Hugo]</p>
          </div>
         </article>
          </li>
          <li class="astro-AADLZISC">
          <article class="astro-AADLZISC">
          <div class="testimonial astro-AADLZISC">
            <div class="testimonial-image astro-AADLZISC">
              <img src="/assets/imaginery/client-5.jpg" alt="Satisfied Client 5" class="astro-AADLZISC">
            </div>
            <p class="astro-AADLZISC">I had the pleasure of working with Lucfreelance and their team for Komensales. Their competence and reliability make them a top choice for any future endeavors. Highly recommend!</p>
            <p class="author astro-AADLZISC">~ Jovanny - Komensales [Astro]</p>
          </div>
       </article>
      </li>
    </ul>
  </div>
</section>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/Testimonials.astro");

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead($$result)}<section class="box skills astro-AB4IHPZS">
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Frontend Developer</h2>
		<p class="astro-AB4IHPZS">Master modern frontend technologies and frameworks like JAM stack and MERN stack. Craft responsive and interactive user interfaces that captivate users.</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">WordPress Designer</h2>
		<p class="astro-AB4IHPZS">Proficient in customing WordPress themes and plugins to transform ideas into functional and user-friendly solutions using Elementor, Woocommerce.</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Prompt Engineer</h2>
		<p class="astro-AB4IHPZS">Creating piece of work and code empowered with AI tools in Code made, advance Copy, Text to Image-Video and more features for improve projects.</p>
	</div>
</section>`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/components/Skills.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
        <div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
            <header class="hero astro-J7PV25F6">
                ${renderComponent($$result2, "Hero", $$Hero, { "title": "Frontend Web Developer with Backend Basis", "tagline": "With tailored skills to make meaningful contributions to both new and ongoing projects.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
				<div class="roles astro-J7PV25F6">
					${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "terminal-window", "size": "1.33em", "class": "astro-J7PV25F6" })} Web Development` })}
					${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "strategy", "size": "1.33em", "class": "astro-J7PV25F6" })} Hard Working` })}
					${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "class": "astro-J7PV25F6" })} Creativity` })}
				</div>
                ` })}

                <img alt="Frontend Web Developer with a Backend Foundation." width="480" height="620" src="/assets/imaginery/portrait.jpg" class="astro-J7PV25F6">
            </header>

            ${renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" })}
        </div>

        <main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
            <section class="section with-background with-cta astro-J7PV25F6">
                <header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
                    <h3 class="astro-J7PV25F6">Recent Works</h3>
						<p class="astro-J7PV25F6">I have been building websites for entrepreneurs, using on top technologies to meet client needs. This may include modern paradigms to dicrease server resources, improving speed and security, or build advanced WordPress solutions for marketing oriented businesses. Here some of my recent samples:</p>
						
                </header>

                <div class="gallery astro-J7PV25F6">
                    ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
                                    ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
                                </li>`)}` })}
                </div>

                <div class="cta astro-J7PV25F6">
                    ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
                        View more details
                        ${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
                    ` })}
                </div>
            </section>

			<section class="section with-background bg-variant astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Education</h3>
					<p class="astro-J7PV25F6">
						With a Computer Science approach, previously in digital marketing and advertising. Recently I've been enrolling education programs to grow my skills; from technical training to development. Here's an approach to my educational background: 
					</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${["MOOC by Helsinki University", "Platzi", "Udemy", "SAYA at Hotmart", "Academia de Dibujo"].map((brand) => renderTemplate`<li class="mention-card astro-J7PV25F6">
									<p class="astro-J7PV25F6">${brand}</p>
								</li>`)}` })}
				</div>
			</section>

            ${renderComponent($$result2, "Testimonials", $$Testimonials, { "class": "astro-J7PV25F6" })}
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
	</div>
` })}`;
}, "/mnt/d/Codes/front/2023/lucfreelance/src/pages/index.astro");

const $$file = "/mnt/d/Codes/front/2023/lucfreelance/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
