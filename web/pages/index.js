import { gql, GraphQLClient } from "graphql-request";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import React from "react";
import WhoAreWe from "../components/WhoAreWe";
import OurGoal from "../components/OurGoal";

const getHeroPageRecord = (blocks) => {
  const heroPageRecord = blocks[0];
  const { bigText, smallText, youtube } = heroPageRecord;
  const { url } = youtube;
  const vidID = url.slice(url.lastIndexOf("/"));

  return {
    bigText,
    smallText,
    url: vidID,
  };
};

const getWhoAreWeRecord = (blocks) => {
  const whoAreWeRecord = blocks[1];
  const { bigText, littleText, gallery } = whoAreWeRecord;
  return {
    title: bigText,
    description: littleText,
    images: gallery,
  };
};

const getOurGoalRecord = (blocks) => {
  const ourGoalRecord = blocks[2];
  const { bigText, miniText, goal } = ourGoalRecord;
  return {
    bigText,
    miniText,
    goals: goal.blocks.map((el) => el),
  };
};

const Home = ({ homePage }) => {
  const { blocks } = homePage.body;

  return (
    <div className="flex flex-col items-center font-sans">
      <Navbar />
      {/* <HeroPage bigText={bigText} smallText={smallText} url={vidID} /> */}
      <WhoAreWe {...getWhoAreWeRecord(blocks)} />
      <OurGoal {...getOurGoalRecord(blocks)} />
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
            bigText
            littleText
            gallery {
              url
            }
          }
          ... on OurGoalRecord {
            bigText
            miniText
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
