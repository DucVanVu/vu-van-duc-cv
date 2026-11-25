# Vu Van Duc — CV & portfolio

A framework-free, single-page CV site. All resume content lives in the `cvData` object in `script.js`; edit it there to update the page. The language switch, theme preference, and print action work in the browser without a backend.

## Run locally

Open `index.html` directly, or start a small local server from this directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The layout and content work offline; Google Fonts are an optional online enhancement and fall back to system fonts when unavailable.

## Publish with GitHub Pages

1. Push these files to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

## Publish with Vercel

Import the GitHub repository into Vercel. Choose **Other** as the framework preset and leave the build command and output directory empty (or use `.` as the output directory), then deploy. No build step is required.

## Resume source

The content combines `Vu Van Duc - Fullstack Engineer.pdf` and `SPHINX_Vu Van Duc_Fullstack.pdf`. Where the two versions differ, the concise engineer CV is used for the public profile. The education years (2018–2023) are taken from the Sphinx CV; the engineer CV confirms the degree and honors.
