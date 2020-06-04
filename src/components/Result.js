import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Result.css'
import { Graph } from 'react-d3-graph';

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(8),
        width: '100ch',
      },
    },
  }));

const gridStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#000000',
      backgroundColor: '#ccc'
      
    },
}));

const buttonStyle = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));


const Result = ({onToggle}) => {
    const classes = useStyles();
    const grid = gridStyle();
    const button = buttonStyle();

    const data = {
        nodes: [
            { id: "Your idea", color: "#325ea8" }, 
            { id: "Company 1" }, 
            { id: "Company 2" }, 
            { id: "Company 3" }, 
            { id: "Company 4" }
        ],
        links: [
            { source: "Company 1", target: "Your idea" }, 
            { source: "Company 2", target: "Your idea" },
            { source: "Company 3", target: "Your idea" },
            { source: "Company 4", target: "Your idea" }
        ],
    };
     
    // the graph configuration, you only need to pass down properties
    // that you want to override, otherwise default ones will be used
    const myConfig = {
        nodeHighlightBehavior: true,
        automaticRearrangeAfterDropNode: true,
        staticGraph: false,
        maxZoom: 1,
        minZoom: 1,
        width: 600,
        panAndZoom: false,
        node: {
            color: "white",
            size: 2000,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
            color: 'black'
        },
        d3: {
            gravity: -1000,
        }
    };

    return(
        <div className = 'main-body'>
            <div className = 'header'>
                <h1>Results: Market Intelligence</h1>
            </div>
            <div className = 'body'>
                    <h2><b>YOUR IDEA IS A NEW PRODUCT!</b>
                        <div className="divider-mini"/>
                        <Button variant="contained" size="medium" color="primary" className={button.margin} onClick={onToggle}>
                            Edit description
                        </Button>
                    </h2>
                    <Button variant="contained" size="medium" color="primary" className={button.margin}>
                        Show Competitors
                    </Button>
                    <Button variant="contained" size="medium" color="primary" className={button.margin}>
                        Show Customers
                    </Button>
                    <Button variant="contained" size="medium" color="primary" className={button.margin}>
                        Show Technologies
                    </Button>

                    <Graph
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        data={data}
                        config={myConfig}
                    />

                    <div className = 'bottom-button'>
                        <Button variant="contained" size="medium" color="primary" className={button.margin}>
                            Print Report
                        </Button>
                    </div>
                </div>
        </div>

    );
}

export default Result;
