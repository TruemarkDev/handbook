const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Truemark Technology Handbook",
        description:
          "Handbook is a living document guiding our team members to work together and fulfill our mission.",
        siteUrl: "https://handbook.truemark.dev",
        sections: ["Handbook", "Company", "Benefits", "Guidelines"],
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Greg Bergé',
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: 'neoziro',
        githubRepositoryURL: 'https://github.com/gregberge/smooth-doc/',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          appId: 'J2LYQ9877O',
          apiKey: '9295224c1474afa9f75f7d4772a1f713',
          indexName: 'smooth-doc',
        },
      },
    }
  ],
};
