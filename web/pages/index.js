import { gql, GraphQLClient } from "graphql-request";

import React from "react";

const Home = ({ heroPage }) => {
  console.log(heroPage);
  return <h1 className="text-3xl font-bold">Hello world!</h1>;
};

export default Home;

const query = gql`
  query {
    heroPage {
      id
      gradientColor1 {
        hex
      }
      gradientColor2 {
        hex
      }
      header {
        ... on HeroTextRecord {
          bigText
          smallText
        }
      }
      youtubeLink {
        url
        title
        height
        width
        provider
        thumbnailUrl
      }
    }
  }
`;
export async function getStaticProps() {
  console.log(process.env.DATOCMS_API_KEY);
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const heroPage = await graphQLClient.request(query);
  console.log(heroPage);
  return {
    props: heroPage,
  };
}
