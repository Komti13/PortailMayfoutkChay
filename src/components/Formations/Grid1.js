import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { AiOutlineSend } from "react-icons/ai";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
function Grid1(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'blue'
        },
    }));
    const classes = useStyles();
    return (
        <div>

            <Grid container direction='row' alignItems="center" justify="space-evenly">

                <Grid item container xs={1} justify="space-evenly" alignItems="center" >
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Nom</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Domaine</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Type</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Date Debut</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Durée</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Prix</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Places dispo</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Image</Paper>
                    </Grid>
                </Grid>

                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Tags</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Tags supp</Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justify="space-evenly">
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>Actions</Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction='row' alignItems="center" justify="space-evenly">
                Object.keys(Formations)
            </Grid>
        </div>

    )
}

export default Grid1
//  <Grid item container xs={12} justify="space-evenly" >
//                     <Grid item  >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container xs={12} justify="space-evenly" >
//                     <Grid item  >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container xs={12} justify="space-evenly" >
//                     <Grid item  >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container xs={12} justify="space-evenly" >
//                     <Grid item  >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container xs={12} justify="space-evenly" >
//                     <Grid item  >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container xs={12} justify="space-evenly" alignItems="center" >
//                     <Paper className={classes.paper}>xs=12</Paper>
//                 </Grid> 
//                  <Grid item container spacing={0} xs={12} justify="space-evenly"  >
//                     <Grid item xs={3} >
//                         <Paper className={classes.paper}>xs=12</Paper>

//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container spacing={0} xs={12} justify="space-evenly" >
//                     <Grid item xs={3} >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container spacing={0} xs={12} justify="space-evenly" >
//                     <Grid item xs={3} >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid item container spacing={0} xs={12} justify="space-evenly" >
//                     <Grid item xs={3} >
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Paper className={classes.paper}>xs=12</Paper>
//                     </Grid>
//                 </Grid> 

