import { gql, GraphQLClient } from "graphql-request";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import React from "react";

const Home = ({ homePage }) => {
  const { blocks } = homePage.body;
  const { bigText, smallText, youtube } = blocks[0];
  const { url } = youtube;
  const vidID = url.slice(url.lastIndexOf("/"));

  return (
    <div className="flex flex-col items-center w-full h-screen font-sans">
      <Navbar />
      <HeroPage bigText={bigText} smallText={smallText} url={vidID} />
    </div>
  );
};

export default Home;

const query = gql`
  query {
    homePage {
      name
      body {
        blocks {
          ... on HeroTextRecord {
            bigText
            smallText
            youtube {
              url
              title
              provider
            }
          }
          ... on WhoAreWeRecord {
            bigtext
            littletext
            gallery {
              url
            }
          }
          ... on OurGoalRecord {
            bigtext
            minitext
            goal {
              blocks {
                goaltext
                goalPicture {
                  url
                }
              }
            }
          }
        }
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
  console.log(heroPage, heroPage.homePage);
  return {
    props: heroPage,
  };
}
