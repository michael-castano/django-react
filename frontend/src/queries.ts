import React from "react"
import { gql, useQuery } from "@apollo/client"

export const JOB_LISTS_QUERY = gql`
    query joblists{
            joblists{
            title
            members{
                edges{
                    node{
                        title
                    }
                }
            }
        }
    }
`

export default JOB_LISTS_QUERY