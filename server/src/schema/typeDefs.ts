import { gql } from "apollo-server-express"

export const typeDefs = gql`
    
    type Query{
        requests:[User!]
    }



    type User{
        id:ID!
        firstName: String!
        lastName: String!
        age : Int!
    }

`