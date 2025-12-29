# lwf-global (static landing page)

This is a static HTML/CSS/JS project that reproduces the landing page in your screenshots and implements the hero transition slides (the third and fourth images).

How to use
1. Create this folder structure:
   - lwf-global/
     - index.html
     - css/styles.css
     - js/main.js
     - assets/ (create this folder and add the images listed below)
     - README.md

2. Add the images you provided to the `assets/` folder with these filenames:
   - `hero-pyramids.jpg` — the main hero background (your first image with pyramids)
   - `hero-transition-1.jpg` — transition slide 1 (your third image: "READY TO BEGIN YOUR JOURNEY?")
   - `hero-transition-2.jpg` — transition slide 2 (your fourth image: "From every corner of creation...")
   - `card1.jpg`, `card2.jpg`, `card3.jpg`, `card4.jpg` — images used in the about/cards and mosaic. You may use crops of the images from the second screenshot or similar photos.

3. Open `index.html` in your browser to view the page.

Notes & behaviour:
- The hero is a 3-slide slideshow: the pyramids (main), the "Ready to begin..." starry slide, and the "From every corner..." galaxy slide. Slides auto-transition every ~6s with a fade. Hovering the hero pauses the auto-advance.
- The "Continue" button on the "Ready to begin..." slide advances the slideshow immediately and briefly pauses auto-advance.
- The page is responsive; adjust CSS if you want pixel-perfect tweaks for mobile breakpoints.

If you want, I can:
- Replace the placeholder card images with exact crops you provide.
- Convert this to a React/Vue project or add a deploy config (Netlify/Vercel/GitHub Pages).
- Tweak fonts, spacing, or colors to be even closer to the screenshots — share any exact font sizes or color HEXs if you have them.

Enjoy — tell me if you'd like any refinements or a GitHub repo with these files pushed for you.
