export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.02098beb.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const page = () => import('../../chunks/pages/404.astro.c543d665.mjs').then(n => n._);

export { page };
