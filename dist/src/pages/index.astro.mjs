export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.02098beb.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const page = () => import('../../chunks/pages/index.astro.c7a2f22e.mjs').then(n => n.i);

export { page };
