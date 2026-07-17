# swanandee.com

My personal website — art, tech projects, and my blog. Built with [Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages.

## Adding content

- **Art**: add the full-size image to `assets/images/art/` (any way -- GitHub's website, git push, etc). A GitHub Action automatically resizes it, strips hidden photo metadata (like GPS location), and generates a thumbnail in `assets/images/art/thumbs/`. It shows up in the gallery within a minute or two. To add a prize or description, add an entry to `_data/art.yml` (see the example in that file).
- **Tech projects**: add a new card in `tech/index.html`.
- **Blog post**: add a new file to `_posts/` named `YYYY-MM-DD-title.md`. See the comment at the bottom of the first post for the format.

Push to `main` and the live site updates automatically in a minute or two.
