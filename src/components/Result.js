import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

    return(
        <div>
            <div className = {grid.root}>
                <Grid container spacing={3}>
                    <Grid item xs ={12}>
                        <Paper className={grid.paper}> 
                        <Grid container item xs={12} spacing={1}>
                            <Paper className={grid.paper}><h1>What is your starting point?</h1></Paper>
                        </Grid>
                        <h2><b>YOUR IDEA IS A NEW PRODUCT!</b>
                            <Button variant="contained" size="medium" color="primary" className={button.margin} onClick={onToggle}>
                                Edit description
                            </Button>
                        </h2>
                        <div>
                            <Button variant="contained" size="medium" color="primary" className={button.margin}>
                                Show Competitors
                            </Button>
                            <Button variant="contained" size="medium" color="primary" className={button.margin}>
                                Show Customers
                            </Button>
                            <Button variant="contained" size="medium" color="primary" className={button.margin}>
                                Show Technologies
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" size="medium" color="primary" className={button.margin}>
                                Print Report
                            </Button>
                        </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    
    );
}

export default Result;
