import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Result.css'

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
                    <div className="divider"/>
                    <Button variant="contained" size="medium" color="primary" className={button.margin}>
                        Show Customers
                    </Button>
                    <div className="divider"/>
                    <Button variant="contained" size="medium" color="primary" className={button.margin}>
                        Show Technologies
                    </Button>
                        
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
