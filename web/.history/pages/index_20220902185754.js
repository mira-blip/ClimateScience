import{gql, GraphQLClient} from 'graphql-request';

export default Home = () => {
  return (
    <div>Home</div>
  )
}

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