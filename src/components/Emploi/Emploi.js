import React from 'react'
import Publication from '../Publicationform/Publication'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { Autocomplete } from '@material-ui/lab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { AiOutlineSend } from "react-icons/ai";
import "./Emploi.css"
function Emploi() {

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
    const [value, setValue] = React.useState('Complet');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
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
    const [contrat, setContrat] = React.useState('');

    const handleChangeselect = (event) => {
        setContrat(event.target.value);
    };
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <div>
            <form>
                <Publication></Publication>
                <fieldset className="fieldemploi">
                    <legend>Offre d'emploi</legend>
                    <div className="box">
                        <label for="exp">L'experience requise : </label>
                        <TextField outlined label="Experience" name="exp" className="field2" type="number" />
                    </div>
                    <div className="box">
                        <label for="ddb">La date de debut : </label>
                        <TextField outlined name="date" label="date" className="fielddate" type="date" focused style={{ "marginTop": '0px' }} />
                    </div>
                    <div className="box">
                        <label for="type">Type de contrat: </label>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper-label">Contrat</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                name="typeContrat"
                                value={contrat}
                                color='primary'
                                onChange={handleChangeselect}
                            >
                                <MenuItem value="">
                                    <em>...</em>
                                </MenuItem>
                                <MenuItem value={"Contrat d’apprentissage (alternance)"}>Contrat d’apprentissage (alternance)</MenuItem>
                                <MenuItem value={"Contrat de professionnalisation (alternance)"}>Contrat de professionnalisation (alternance)</MenuItem>
                                <MenuItem value={"CUI – Contrat unique d’insertion"}>CUI – Contrat unique d’insertion</MenuItem>
                                <MenuItem value={"CAE - Contrat d’accompagnement dans l’emploi"}>CAE - Contrat d’accompagnement dans l’emploi</MenuItem>
                                <MenuItem value={"CIE - Contrat initiative emploi"}>CIE - Contrat initiative emploi</MenuItem>
                            </Select>
                            <FormHelperText>selectionner une type</FormHelperText>
                        </FormControl>
                        {/* <TextField outlined label="Exmple :CDD,CDI,CTT.." name="type" className="field2" type="text" /> */}
                    </div>
                    <div className="box">
                        <label for="travail">Type de travail:</label>
                        <RadioGroup aria-label="gender" name="typeTravail" value={value} onChange={handleChange}>
                            <div className="radio">
                                <FormControlLabel value="Complet" control={<Radio color="primary" />} label="Complet" className="radioitem" labelPlacement="end" />
                                <FormControlLabel value="Partiel" control={<Radio color="primary" />} label="Partiel" className="radioitem" labelPlacement="end" />
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="box">
                        <label for="index">Ajoutez des Tags pour améliorer l'indexation<br /> de la recherche de votre publication:</label>
                        <div className="autocomplete" style={{ "marginTop": '23px' }} >

                            <Autocomplete
                                multiple
                                limitTags={2}
                                name="Tags"
                                onChange={(event, value) => console.log(value)}
                                options={top100Films}
                                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[top100Films[13], top100Films[12]]}
                                renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Tags" placeholder="Ajouter Tags" />
                                )}

                            />
                            <TextField outlined label="Ajoutez des Tags spécifiques" name="index" className="field3" type="text" style={{ "marginTop": '12px' }} />
                        </div>

                    </div>

                    <Button variant="contained" color="primary" style={{ 'marginLeft': '350px', 'marginTop': '50px', 'width': '150px' }} type="submit">
                        Postuler  <AiOutlineSend fontSize="large" className='icon' />
                    </Button>

                </fieldset>
            </form >
        </div >
    )

}

export default Emploi
