# Pretty P5 TypeScript Template

**Motivation:**
I quite often want to create things using p5.js, and so far I've usually
created them over on my [codepen](https://codepen.io/collection/MgLKdx), which is a great place to write small sketches with p5. I recommend setting up a project there if you're doing something small too. There isn't a great place to get started with larger projects though.

If you want something that is going to be a little more than a sketch, and you want to split your code up to keep it maintainable, this might be for you. It is the environment I would want to work in for any P5 project larger than a sketch.

![P5 _ Typescript](https://github.com/WilliamIPark/pretty-p5-typescript/assets/445688/4d681a23-17cf-459e-a851-ed51e9bf4b52)

## Installation

- Pull this repo down.
- Run `npm install` to download the dependancies.
- Run `npm run dev` to load up the webpage.

## Benifits of this template

- Uses [Vite](https://vitejs.dev/) for its environment which:
  - Provides TypeScript support out of the box.
  - Allows you to split up your code into modules.
- Provides optional, but useful defaults for things like:
  - Code organisation
  - Easy importing with aliasing
- Uses P5.js in instance mode, allowing you to create many instances of P5.
- I've tried to make the page with your canvas minimal but cosy.

## Get started

- The root typescript file is `src/main.ts`, this is where you will find the template's default P5 instance being created and mounted to the page.
- By default (and completely optional), the P5 life cycle methods are split into their own files: `src/lifecycle/setup.ts` & `src/lifecycle/draw.ts`.
- Utility functions can be created and accessed easily in `src/utils`, and one is provided as an example.
- If you care to modify the page's styles, look in `src/style.css`

## Aliases

Aliases are a way to have easy access to certain files in your directory, when doing an import. 4 Aliases are set up by default:

`@` points to `src/`
`@lifecycles` points to `src/lifecycles`
`@utils` points to `src/utils`
`@types` points to `src/types`

Examples of usage can be found in the code, but as a reference an import from one of this directories would look like:
`import { lerpWithSin } from "@utils/lerp-with-sin";`
