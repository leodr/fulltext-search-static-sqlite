```md
# Unsuccessful project

I thought it might be possible to do full-text search with SQLite in the browser
without loading the entire database, by using HTTP range requests, as shown in
[this article](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/).

Turns out this does not really work for queries that use the `LIKE` keyword. The
querying does indeed work, but the whole database is loaded. Then SQL is not
really all that helpful, we could easily load a JSON file that contains all the
data we want to search through and use something like
[Fuse.js](https://fusejs.io/) to perform the search.
```
