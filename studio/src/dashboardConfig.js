export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614b49c541f2e6f5f914f79b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-abegzcxo",
                  apiId: "afa8ff96-07f6-4b47-860e-76cfa605d7ee",
                },
                {
                  buildHookId: "614b49c5fb9b01f48974d0fd",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7zpdaoze",
                  apiId: "b150a704-5245-4760-b344-73dee885c41e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hpbuddhika/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7zpdaoze.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
