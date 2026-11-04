---
name: publish-news
description: Publish a News & Insights post on tijori.me (event, partnership/MOU, customer story or insight/blog) from photos and a few notes. Use when the user says "publish this", "post about", "add a news item", shares event photos, or wants to turn a draft or blog into a post.
---

# Publish a News & Insights post

The user is not a developer. Ask only for what is missing, in plain language, and do the rest.

## 1. Gather the facts (never invent them)

Each post needs:
- **Type**: `announcement` (company news such as listings, offices, launches), `event`, `partnership`, `customer` or `insight`
- **Date** (YYYY-MM-DD) and, for events, the **location**
- **What happened**: two or three lines from the user is enough
- **Photos** (optional): file paths the user gives, or attached images
- **Permission**: for customer or partner names, logos or people in photos, confirm the user has their OK. If not, leave them out or keep the post as a draft.

If a fact is missing, ask. Do not make up quotes, numbers, attendee counts or outcomes. Quotes must come from the user.

## 2. Write the post

Create `src/content/news/<slug>/en.md` (slug: short, lowercase, hyphens, e.g. `cfo-summit-ksa-2026`). Check `src/content/news/` first: there may already be a draft for this post to fill in.

```markdown
---
title: Tijori at the CFO Summit KSA
summary: One or two sentences shown on cards and in link previews (under 160 characters).
type: event
date: 2026-03-12
location: Riyadh, Saudi Arabia
cover: cover.jpg
gallery:
  - photo-1.jpg
  - photo-2.jpg
draft: false
---

Body in Markdown. 150–400 words. Short paragraphs, `##` subheadings for longer pieces.
```

Then write `ar.md` in the same folder with `title`, `summary`, `location` and the body in Modern Standard Arabic (same structure; shared fields come from `en.md`). Tell the user the Arabic should be checked by a native speaker.

Style: factual and specific, no hype words ("revolutionary", "leading", "world-class"). Spell the brand **Tijori**. Use "GCC & Asia" for the region. Match claims to what the site already states; don't add new statistics.

## 3. Photos

Copy images to `public/news/<slug>/`. Resize so the long side is at most 1600px and save as JPEG quality 80 (PowerShell `System.Drawing` works on this machine); keep product screenshots as PNG so text stays sharp. Name the cover `cover.jpg`. Banks, entities and figures in Tijori product screenshots are fictitious demo data, so they need no redaction. The user (Shyam) is happy for his name to appear in product screenshots. Crop out anyone in event photos who did not agree to appear.

## Videos

Never put video files in the repo (Cloudflare rejects files over 25 MB). Ask the user to upload the video to YouTube and send the link, then add `video: https://youtu.be/<id>` to `en.md`. The post page plays it in place of the cover. Still give the post a `cover`: download the video's thumbnail from `https://i.ytimg.com/vi/<id>/maxresdefault.jpg` (fall back to `hqdefault.jpg`, cropping its black bars to 16:9) and save it as `cover.jpg`, so cards and link previews have an image.

## 4. Check it

- `npm run build` must pass (Node is at `C:\Program Files\nodejs`).
- Start or reuse the dev server and open `/en/news/<slug>` and `/ar/news/<slug>` in the preview. Check the homepage "Latest from Tijori" strip and `/en/news`.
- Show the user the page and wait for their OK.

## 5. Publish (only after the user approves)

1. Branch from the latest `main`: `news/<slug>`.
2. Commit only the post folder and its images.
3. Push and open a pull request titled `News: <title>`.
4. Tell the user: merging the pull request on GitHub publishes it. If automatic deploys are not set up yet, the developer needs to deploy after merging.

Commit, push and open the pull request only when the user says so.

## Drafts

`draft: true` posts show only on the local preview (with a "Draft" badge) and are never built into the live site. Use drafts to stage posts that are waiting on dates, photos or permission.
