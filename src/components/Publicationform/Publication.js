import React from 'react'
import { useState } from 'react';
import './Publication.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Fileinput from "./Fileinput";

function Publication() {
    const [value, setValue] = React.useState('Travail');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const fieldstyle = {
        width: '150px',
        padding: '2px',
        margin_bottom: '-10px'
    }
    

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [domaine, setDomaine] = React.useState('');

    const handleChangeselect = (event) => {
        setDomaine(event.target.value);
    };
    return (
        <div>

            <fieldset>
                <legend>Informations Publication</legend>
                <div className="box">
                    <label for="Nom">Nom de publication : </label>
                    <TextField outlined label="Nom" name="Nom" className="field" />
                </div>
                <div className="box">
                    <label for="Domaine">Domaine publication : </label>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Domaine</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            name="Domaine"
                            value={domaine}
                            color='primary'
                            onChange={handleChangeselect}
                        >
                            <MenuItem value="">
                                <em>...</em>
                            </MenuItem>
                            <MenuItem value={"Informatique"}>Informatique</MenuItem>
                            <MenuItem value={"Mecanique"}>Mecanique</MenuItem>
                            <MenuItem value={"Electrique"}>Electrique</MenuItem>
                            <MenuItem value={"Litteraire"}>Litteraire</MenuItem>
                            <MenuItem value={"Mathematique"}>Mathematique</MenuItem>
                        </Select>
                        <FormHelperText>domaine d'application</FormHelperText>
                    </FormControl>
                    {/* <TextField outlined label="Domaine" name="domaine" className="field" /> */}
                    <br /><br />
                </div>
                <div className="box">
                    <label for="Type">Type de  publication: </label>
                    <RadioGroup aria-label="gender" name="Type" value={value} onChange={handleChange}>
                        <div className="radio">
                            <FormControlLabel value="Travail" control={<Radio color="primary" />} label="Travail" className="radioitem" labelPlacement="end" />
                            <FormControlLabel value="Stage" control={<Radio color="primary" />} label="Stage" className="radioitem" labelPlacement="end" />
                        </div>
                    </RadioGroup>
                    <br /><br />
                </div>
                <div className="box">
                    <label for="Image">Importer une image:</label>
                    <TextField
                        focused
                        outlined
                        name="Image"
                        type="file"
                        label="image"
                    />

                </div>

            </fieldset>


        </div>

    )
}

export default Publication
