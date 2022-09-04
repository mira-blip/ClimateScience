import { gql, GraphQLClient } from "graphql-request";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import React from "react";
import Navbar from "../components/Navbar";

const Home = ({ heroPage }) => {
  console.log(heroPage);
  const hex1 = heroPage?.gradientColor1.hex;
  const hex2 = heroPage?.gradientColor2.hex;
  const bigText = heroPage?.header[0].bigText;
  const smallText = heroPage?.header[0].smallText;
  const urlIndex = heroPage?.youtubeLink.url.lastIndexOf("/");
  const vidID = heroPage?.youtubeLink.url.slice(urlIndex);
  return (
    <div className="w-full h-screen font-sans">
      {/* <Navbar/> */}
      <HeroPage
        hex1={hex1}
        hex2={hex2}
        bigText={bigText}
        smallText={smallText}
        url={vidID}
      />
    </div>
  );
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
