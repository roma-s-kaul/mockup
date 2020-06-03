import React from 'react';
//import IdeaCard from './IdeaCard';

import { makeStyles } from '@material-ui/core/styles';
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


/*const Idea = ({title}) => {
    const classes = useStyles();
    const grid = gridStyle();
    const button = buttonStyle();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <div>
            <div className = {grid.root}>
                <Grid container spacing={3}>
                    <Grid item xs ={12}>
                        <Paper className={grid.paper}> 
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="startPoint" name="startPoint">
                                    <FormControlLabel value="idea" control={<StyledRadio />} label="I will describe my product idea below." />
                                    <FormControlLabel value="technology" control={<StyledRadio />} label="I will describe a technology I want to commercialize below." />
                                </RadioGroup>
                            </FormControl>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField
                                    id="outlined-multiline-static"   
                                    multiline
                                    rows={10}
                                    defaultValue=""
                                    variant="outlined"
                                    color = "secondary"
                                />
                            </form>
                            <Button variant="contained" size="medium" color="primary" className={button.margin}>
                                Get Market Intel
                            </Button>
                            <div>
                                *Note: All information you enter is treated as confidential and will not be saved.
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    
    )
}*/

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
        margin: theme.spacing(1),
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
      color: theme.palette.text.secondary,
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

class Idea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {radioVal: 'idea', description: ' '}

        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRadioChange(event) {
        this.setState({radioVal: event.target.value});
    }

    handleDescChange(event) {
        this.setState({description: event.target.value});
    }

    /*handleSubmit(event) {

    }*/

    render() {
        const classes = useStyles();
        const grid = gridStyle();
        const button = buttonStyle();
        
        return(
            <div className = {grid.root}>
                <Grid container spacing={3}>
                    <Grid item xs ={12}>
                        <Paper className={grid.paper}> 
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="startPoint" name="startPoint" onChange={this.handleRadioChange}>
                                    <FormControlLabel value="idea" control={<StyledRadio />} label="I will describe my product idea below."/>
                                    <FormControlLabel value="technology" control={<StyledRadio />} label="I will describe a technology I want to commercialize below." />
                                </RadioGroup>
                            </FormControl>
                            <form className={classes.root} noValidate autoComplete="off" onChange={this.handleDescChange}>
                                <TextField
                                    id="outlined-multiline-static"   
                                    multiline
                                    rows={10}
                                    defaultValue=""
                                    variant="outlined"
                                    color = "secondary"
                                />
                            </form>
                            <Button variant="contained" size="medium" color="primary" className={button.margin}>
                                Get Market Intel
                            </Button>
                            <div>
                                *Note: All information you enter is treated as confidential and will not be saved.
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Idea;