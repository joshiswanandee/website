# swanandee.com

My personal website — art, tech projects, and my blog. Built with [Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages.

## Adding content

- **Art**: add the full-size image to `assets/images/art/` (any way -- GitHub's website, git push, etc; ask Claude to strip GPS/location data from phone photos first). Every deploy automatically generates a thumbnail in `assets/images/art/thumbs/` -- that folder is gitignored, so `main` never ends up with generated files in it. To add a prize or description, add an entry to `_data/art.yml` (see the example in that file).

## How deploys work

Every push to `main` triggers `.github/workflows/deploy.yml`, which generates thumbnails, builds the Jekyll site, and publishes it straight to GitHub Pages -- nothing generated is ever committed back to the repo. Pages must be configured with **Source: GitHub Actions** (Settings -> Pages) for this to work.
- **Tech projects**: add a new card in `tech/index.html`.
- **Blog post**: add a new file to `_posts/` named `YYYY-MM-DD-title.md`. See the comment at the bottom of the first post for the format.

Push to `main` and the live site updates automatically in a minute or two.
