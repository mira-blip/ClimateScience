import{gql, GraphQLClient} from 'graphql-request';

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home;

const query = gql`
  query {
    hero_page {
      id
      header {
        big text
        small text
      }
      youtube link
      gradient color 1
      gradient color 2
    }
  }
`
export async function getStaticPrompts () {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY
    }
  });
  const hero_page = await graphQLClient.request(query);
  console.log(hero_page);
  return {
    props: hero_page
  }
}