import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  outDir: './dist/static',
  routes: {
    '/posts/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
  }
};
