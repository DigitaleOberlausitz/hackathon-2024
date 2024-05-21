import type { GatsbyConfig } from "gatsby"
import path from "node:path"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Hackathon 2024`,
        siteUrl: `https://hackathon2024.digitale-oberlausitz.eu`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: path.resolve("content/images/doev-logo.png"),
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "content/images",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "content/pages",
            },
            __key: "pages",
        },
    ],
}

export default config
