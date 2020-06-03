import React, {useState} from 'react';
//import IdeaCard from './IdeaCard';
import './Idea.css'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';


const Idea = ({textState, boolState, setTextState, setBoolState, onToggle}) => {
    const classes = useStyles();
    const grid = gridStyle();
    const button = buttonStyle();
    return(
            <div className = 'main-body'>
                <div className = 'header'>
                    <h1>What is your starting point?</h1>
                </div>
                <div className = 'body-form'>
                  <FormControl component="fieldset">
                      <RadioGroup aria-label="startPoint" name="startPoint" onChange={e => setBoolState(e.target.value)} value={boolState}>
                          <FormControlLabel value="idea" control={<StyledRadio />} label="I will describe my product idea below." />
                          <FormControlLabel value="technology" control={<StyledRadio />} label="I will describe a technology I want to commercialize below." />
                      </RadioGroup>
                  </FormControl>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                     <TextField
                         id="outlined-multiline-static"   
                         multiline
                         rows={10}
                         defaultValue=""
                         variant="outlined"
                         color = "secondary"
                         value={textState}
                         onChange = {e => setTextState(e.target.value)}
                     />
                  </form>
                  <div>
                  <Button variant="contained" size="medium" color="primary" className={button.margin} onClick= {onToggle}>
                      Get Market Intel
                  </Button>
                  </div>
                  <div>
                      *Note: All information you enter is treated as confidential and will not be saved.
                  </div>
            </div>
    
    )
}

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
    subHead: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#325ea8',
        padding: theme.spacing(2)
        
    }
}));

const buttonStyle = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

const radioStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
});

function StyledRadio(props) {
    const classes = radioStyles();
    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />  
    );
}

export default Idea;