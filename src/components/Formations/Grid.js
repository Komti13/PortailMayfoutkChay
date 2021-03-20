import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
function grid() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
            // backgroundColor: theme.palette.secondary.main,
        },
    }));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid container spacing={3} md direction="row"
                justify="space-evenly"
                alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="row"
                justify="space-evenly"
                alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>

        </div>

    )
}

export default grid
