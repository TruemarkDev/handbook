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
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ],
};
