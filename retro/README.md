# Retro variation (one visitor in twenty)

A second face for the portfolio: a 1997 personal homepage. Frame set, beveled menu on
the left, content in tables, Times New Roman at browser default size, blue underlined
links, a banner ad, a hit counter, an under construction bar and an 88x31 button row.

It lives in `public/retro`, so `vite build` copies it to `dist/retro` and it is served
from `https://anilokay.com/retro/` on the real site. Nothing links to it from the
proper site except the roll below.

## How people land on it

`index.html` carries a small inline script in the head: one visitor in twenty is sent
to `retro/index2.htm` before anything paints. The roll happens once per tab, never for
crawlers, never on localhost, and never when the visitor arrives from `/retro/` itself,
so the link back to the proper site works.

Two switches for showing it on purpose:

```
https://anilokay.com/?retro=1   always show the retro page
https://anilokay.com/?retro=0   never show it this time
```

## Look at it

```
cd ~/portfolio
pnpm dev
# http://localhost:5173/retro/index1.htm   (frame set)
# http://localhost:5173/retro/index2.htm   (no frames, what the roll lands on)
```

Open it through the dev server, not as a `file://` path: the menu highlight and the
counter use storage and cross-frame messaging, which some browsers restrict on file
URLs. The roll stays quiet on localhost, so use `?retro=1` in dev if you want to see
the real entry point.

## Files

| file             | what it is                                                |
|------------------|-----------------------------------------------------------|
| `index1.htm`     | the frame set, and the no-frames fallback                  |
| `menu.htm`       | left frame: beveled nav buttons, side notes, badges, counter |
| `index2.htm`     | welcome page: greeting, what's new, quick facts, side boxes |
| `about.htm`      | the longer about text, fact table, likes and dislikes      |
| `experience.htm` | one box per role, dates on the right of the bar            |
| `work.htm`       | projects, the design system featured, under construction   |
| `skills.htm`     | skill chips, career row, opinions, things i am bad at      |
| `offscreen.htm`  | Last.fm numbers, Strava numbers, photo album               |
| `contact.htm`    | contact table, guestbook form, cool links                  |
| `retro.css`      | all of the styling, gray tile included as inline SVG       |
| `retro.js`       | clock, visitor counter, frame nav                          |

Content is copied from `src/content.ts` by hand. If the real site's copy changes,
this folder does not follow it.

## Notes

- The page background is a two-tone gray tile in an SVG data URI, so the folder needs
  no binary background images.
- The portrait and the ride photos come from `/portrait.jpg` and `/photos/`, the same
  files the proper site uses. No copies live here.
- Below 760px wide, `index1.htm` sends the browser to `index2.htm`. A frame set is
  unreadable on a phone, and the plain pages carry their own nav row at the top.
- Inside the frame set `retro.js` hides that nav row, since the menu frame already has
  the links.
- The visitor counter counts visits in `localStorage`, not on a server. It is a joke,
  but an honest one.
- The guestbook form posts to a `mailto:` address, which is what 1997 would have done
  without a CGI script.
- The under construction bar and the blinking tags are CSS animations, not GIFs. The
  rest of the furniture is text and tables, which is how it was made the first time.
- Light theme only. A gray page with a sunken white content field is the whole point.
