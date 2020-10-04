import React, {Component} from "react"
import { gql, useQuery } from "@apollo/client"
import { Grid } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import JOB_LISTS_QUERY from "../queries"
import JobResults from "./JobResults"
import { render } from "@testing-library/react";


class HomePage extends React.Component {
    state = {
        grouping:""
    }

    handleChange = (e: { target: { value: any; }; }) => {
        this.setState({grouping: e.target.value})
    }

    render(){
        return(
            <>
                <div>
                <body>

                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid xs={3}>
                    <Paper elevation={3}> 
                    
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Grouping:</FormLabel>
                    <RadioGroup aria-label="joblistgroups" name="jobgroups" onChange={this.handleChange}>
                    <FormControlLabel value="big-time" control={<Radio />} label="Big Time Sales" />
                    <FormControlLabel value="breaking-into" control={<Radio />} label="Breaking Into: Product Management" />
                    <FormControlLabel value="tech-giants" control={<Radio />} label="Tech Giants" />
                    <FormControlLabel value="tech-rising" control={<Radio />} label="Tech Rising" />
                    </RadioGroup>
                    </FormControl>
                    </Paper>
                    </Grid>
                    

                    <Grid item xs={7}>       
                    <JobResults dataFromParent = {this.state.grouping}/>
                    </Grid>

                    <Grid><div></div></Grid>
                
                </Grid>  
                
                </body>
                </div>
            </>
        )
    }
}

export default HomePage
