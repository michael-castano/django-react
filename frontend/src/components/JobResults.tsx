import React from 'react'
import { gql, useQuery } from "@apollo/client"
import JOB_LISTS_QUERY from "../queries"
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

const JobResults = (props: any) => {
    const { loading, error, data } = useQuery(JOB_LISTS_QUERY)

    if (props.dataFromParent ==="big-time"){
        return (<div>
            <p><h1>{data.joblists[0].title}</h1></p>
            <p><h3>{data.joblists[0].members.edges[0].node.title}</h3></p>
            </div>)
    }
    if (props.dataFromParent ==="breaking-into"){
        return (<div>
            <p><h1>{data.joblists[1].title}</h1></p>
            <p><h3>{data.joblists[1].members.edges[0].node.title}</h3></p>
            </div>)
    }
    if (props.dataFromParent ==="tech-giants"){
        return (<div>
            <p><h1>{data.joblists[2].title}</h1></p>
            <p><h3>{data.joblists[2].members.edges[0].node.title}</h3></p>
            <p><h3>{data.joblists[2].members.edges[1].node.title}</h3></p>
            <p><h3>{data.joblists[2].members.edges[2].node.title}</h3></p>
            <p><h3>{data.joblists[2].members.edges[3].node.title}</h3></p>
            </div>)
    }
    if (props.dataFromParent ==="tech-rising"){
        return (<div>
            <p><h1>{data.joblists[3].title}</h1></p>
            <p><h3>{data.joblists[3].members.edges[0].node.title}</h3></p>
            <p><h3>{data.joblists[3].members.edges[1].node.title}</h3></p>
            <p><h3>{data.joblists[3].members.edges[2].node.title}</h3></p>
            </div>)
    }
    return(
        <>
        <div>Please select a job group.</div>
        </>
    )
}

export default JobResults