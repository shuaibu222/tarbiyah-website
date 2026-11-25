# Attarbiyah Community College website

React + Vite site.

```bash
npm install
npm run dev     # local dev server
npm run build   # production build in dist/
```

Shared school content and the gallery collection live in `src/content.js`.
The gallery appears on the home page and at `/gallery`, with category filters,
keyboard navigation, swipe navigation, and a full-screen photo viewer.

Base layout styles live in `src/styles.css`; the editorial design and gallery
styles live in `src/design.css`. Continuous squircle corners progressively
enhance rounded fallbacks, and animations respect reduced-motion preferences.

Headings use Newsreader, body text uses DM Sans, and the brand wordmark keeps
Fraunces. Font files are served locally from `public/fonts`, alongside their
SIL Open Font License notices.

The home-page school explorer links directly to the corresponding school
section at `/schools#<school-id>`. School descriptions and subjects live in
`src/content.js`.

Gallery photography is illustrative stock imagery. Replace the image URLs,
alternative text, and captions in `src/content.js` with approved school photos.
