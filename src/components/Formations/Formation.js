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
import "./Formation.css"
function Formation() {

    const initialFieldValues = {
        Nom: '',
        Domaine: '',
        Type: 'Travail',
        Image: '',
        Duree: '',
        NbPlaces: '',
        DateDebut: '',
        Prix: '',
        Tags: {}

    }
    const [Values, setValues] = useState(initialFieldValues)

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...Values,
            [name]: value
        })
       
    }
    // const handleChange = (e) => {
    //     setValues({
    //         ...Values,
    //         Type: e.target.value
    //     });
    // };


    // const handleChangeselect = (e) => {
    //     setValues({
    //         ...Values,
    //         Domaine: e.target.value
    //     });
    // };

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

    return (
        <div>
            <form autoComplete='off'>
                <fieldset>
                    <legend>Informations Publication</legend>
                    <div className="box">
                        <label for="Nom">Nom de publication : </label>
                        <TextField outlined label="Nom" name="Nom" className="field" value={Values.Nom} onChange={handleInputChange} />
                    </div>
                    <div className="box">
                        <label for="Domaine">Domaine publication : </label>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper-label">Domaine</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                name="Domaine"
                                value={Values.Domaine}
                                color='primary'
                                onChange={handleInputChange}
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
                        <RadioGroup aria-label="gender" name="Type" value={Values.Type} onChange={handleInputChange}>
                            <div className="radio" >
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
                            value={Values.Image}
                            onChange={handleInputChange}
                        />

                    </div>

                </fieldset>
                <fieldset className="fieldformation">
                    <legend>Formation</legend>
                    <div className="box">
                        <label for="Duree">Le durée de la formation :   </label>
                        <TextField outlined label="Durée" name="Duree" className="field2" type="number" value={Values.Duree} onChange={handleInputChange} />
                    </div>
                    <div className="box">
                        <label for="NbPlaces">Le nombre des places :  </label>
                        <TextField outlined label="Nombre des places" name="NbPlaces" className="field2" type="text" value={Values.NbPlaces} onChange={handleInputChange} />
                    </div>
                    <div className="box">
                        <label for="DateDebut">Quel est la date de debut de la formation: </label>
                        <TextField outlined name="DateDebut" label="date" className="fielddate" type="date" value={Values.DateDebut} onChange={handleInputChange} focused style={{ "marginTop": '0px' }} />
                    </div>
                    <div className="box">
                        <label for="Prix">Le prix:</label>
                        <TextField outlined label="Prix" name="Prix" className="field2" type="number" value={Values.Prix} onChange={handleInputChange} />
                    </div>
                    <div className="box">
                        <label for="index">Ajoutez des Tags pour améliorer l'indexation<br /> de la recherche de votre publication:</label>
                        <div className="autocomplete" style={{ "marginTop": '23px' }}>
                            <Autocomplete
                                multiple
                                limitTags={2}
                                id="multiple-limit-tags"
                                options={top100Films}
                                onChange={handleInputChange}
                                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[top100Films[13], top100Films[12]]}
                                renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Tags" placeholder="Ajouter Tags" />
                                )}

                            />

                        </div>
                        {/* <TextField outlined label="séparez les indexes par des espaces" name="index" className="field3" type="text" style={{"marginTop":'12px'}}/> */}
                    </div>
                    <Button variant="contained" color="primary" style={{ 'marginLeft': '350px', 'marginTop': '50px', 'width': '150px' }} type="submit">
                        Postuler  <AiOutlineSend fontSize="large" className='icon' />
                    </Button>
                </fieldset>

            </form>
            <fieldset>
                <h1>Liste Des Formations</h1>
            </fieldset>
        </div>
    )
}

export default Formation
