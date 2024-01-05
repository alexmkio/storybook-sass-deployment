This is the minimal reproduction for an issue I am having when deploying the Storybook of a Next.js application that is using Sass. The issue relates to image paths not being accurate in the deployment if they are referenced in the sass modules using relative paths to the public folder; `background-image: url('/assets/images/image.jpg')`.

The ticket can be found here: https://github.com/storybookjs/storybook/discussions/25482

The Storybook deployment can be found here: https://alexmkio.github.io/storybook-sass-deployment/

The Next.js deployment can be found here: https://storybook-sass-deployment.vercel.app/

I am following the documentation for using [Sass](https://storybook.js.org/recipes/sass), [serving static files](https://storybook.js.org/docs/configure/images-and-assets#serving-static-files-via-storybook-configuration), [deploying to GitHub Pages](https://storybook.js.org/docs/sharing/publish-storybook#github-pages), and [deploying to a subpath](https://storybook.js.org/docs/configure/images-and-assets#absolute-versus-relative-paths).

What am I missing?
