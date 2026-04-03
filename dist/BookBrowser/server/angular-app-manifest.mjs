
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/books",
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/books"
  },
  {
    "renderMode": 0,
    "route": "/books/add"
  },
  {
    "renderMode": 0,
    "route": "/books/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/books/*"
  },
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "route": "/signup"
  },
  {
    "renderMode": 0,
    "redirectTo": "/books",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12819, hash: '369230a2803addbfbbb0961d0831c9cad0f5fa4321cebc06c372915ac955de9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4135, hash: 'e57a32b3733ae0ecbc8d521343b00aa5ca15e90a6725e2b5e3181f3ee83541c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LRCFW7PU.css': {size: 383804, hash: 'nVlaWagb55g', text: () => import('./assets-chunks/styles-LRCFW7PU_css.mjs').then(m => m.default)}
  },
};
