# Northern Hemisphere Tech & Consulting website

This folder is the production-ready static website for `northconsult.ca`.

## Publish with GitHub Pages

1. Upload all files in this folder to the root of the repository used for `northconsult.ca`.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, then select the branch and `/ (root)` folder.
4. The included `CNAME` file preserves `northconsult.ca` as the custom domain. Confirm the same value under **Custom domain** if needed.

The site uses only HTML, CSS, and JavaScript. No build step or server is required.

## Google Search setup

After publishing, confirm these URLs open successfully:

- `https://northconsult.ca/robots.txt`
- `https://northconsult.ca/sitemap.xml`

In Google Search Console, submit `sitemap.xml` under **Sitemaps**, then use **URL inspection** to request indexing for the home page and the three secondary pages.
