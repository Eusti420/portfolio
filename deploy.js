var ghpages = require('gh-pages');

ghpages.publish('portfolio\dist\portfolio\browser', {
    branch: 'gh-pages',
    repo: 'https://github.com/Eusti420/portfolio.git',
    cname: "feusterholz.de",
    history: false,
}, function(err) {
    if (err) {
        console.error("Fehler beim Veröffentlichen:", err);
    } else {
        console.log("Deployment erfolgreich!");
    }
});
