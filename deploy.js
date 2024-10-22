var ghpages = require('gh-pages');

ghpages.publish('dist/portfolio/browser', {
    branch: 'gh-pages',
    repo: 'https://github.com/Eusti420/portfolio.git',
    cname: "feusterholz.de",
    history: false,
}, function(err) {
    console.log(err);
});