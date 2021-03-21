import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { AiOutlineSend } from "react-icons/ai";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import firebaseDb from "../../firebase";
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import "../Formations/Formation.css"
function Test(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        h3: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'red'
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
    }));
    const classes = useStyles();
    const initialFieldValues = {
        Nom: '',
        Domaine: '',
        Type: '',
        Image: '',
        Experience: '',
        Contrat: '',
        DateDebut: '',
        TypeTravail: '',
        others: '',
        Tags: {}

    }
    const [Values, setValues] = useState(initialFieldValues)
    var [CurrentId, setCurrentID] = useState('')
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
        if (e.target === 'DateDebut') {
            setValues({
                ...Values,
                [name]: value.toString()
            })
        }

        else
            setValues({
                ...Values,
                [name]: value
            })

    }


    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(Values);
        props.addOrEdit(Values)
        setValues(initialFieldValues)
    }
    const onTagsChange = (event, values) => {
        setValues({
            ...Values,
            Tags: values
        });
    }
    const [Offres, setOffres] = useState({});

    useEffect(() => {
        firebaseDb.child('OffresEmploi').on('value', snapshot => {
            if (snapshot.val() != null) {
                setOffres({
                    ...snapshot.val()
                })
            }
            else setOffres({
                
            })
        })

    }, [])
    // useEffect(() => {
    //     if (CurrentId === '') {
    //         setValues({
    //             ...initialFieldValues
    //         })

    //     } else
    //         setValues({
    //             ...Formations[CurrentId]
    //         })
    //     // console.log(Formations.Domaine)
    // }, [CurrentId])
    const OnDelete = id => {

        if (window.confirm("etes vous sure de supprimer ce item?")) {
            firebaseDb.child(`OffresEmploi/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                }
            )
        }
    }
    return (
        <div >
            <form autoComplete='off'>

                <Grid container spacing={2} direction='column' alignItems="center" justify="space-evenly">
                    <fieldset>
                        <legend>Informations Publication</legend>
                        <Grid item container spacing={2} justify="space-evenly" alignItems="center" >
                            <Grid item container spacing={0} justify="space-evenly"  >
                                <Grid item xs={3} >
                                    <label>Nom de publication : </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField label="Nom" value={Values.Nom} name="Nom" className="field" onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={0} justify="space-evenly" >
                                <Grid item xs={3} >
                                    <label>Domaine publication : </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormControl className="field">
                                        <InputLabel id="demo-simple-select-helper-label">Domaine</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            name="Domaine"
                                            color='primary'
                                            value={Values.Domaine}
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
                                </Grid>
                            </Grid>
                            <Grid item container spacing={0} justify="space-evenly" >
                                <Grid item xs={3} >
                                    <label>Type de  publication: </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <RadioGroup aria-label="gender" name="Type" value={Values.Type} onChange={handleInputChange}>
                                        <div className="radio" >
                                            <FormControlLabel value="Hard" control={<Radio color="primary" />} label="Hard" className="radioitem" labelPlacement="end" />
                                            <FormControlLabel value="Soft" control={<Radio color="primary" />} label="Soft" className="radioitem" labelPlacement="end" />
                                        </div>
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={0} justify="space-evenly" >
                                <Grid item xs={3} >
                                    <label>Importer une image:</label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField
                                        focused
                                        name="Image"
                                        type="file"
                                        label="image"
                                        value={Values.Image}
                                        onChange={handleInputChange}
                                    />

                                </Grid>
                            </Grid>

                        </Grid>
                    </fieldset>
                    <fieldset>
                        <legend>Offre d'emploi</legend>
                        <Grid item container spacing={2} justify="space-evenly">

                            <Grid item container xs={12} justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >L'experience requise : </label>
                                </Grid>
                                <Grid item xs={7}>

                                    <TextField label="exp" name="Experience" className="field" value={Values.Experience} type="number" onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >La date de debut : </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField name="DateDebut" label="date" value={Values.DateDebut} className="field" type="date" onChange={handleInputChange} focused style={{ "marginTop": '0px' }} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >Type de contrat: </label>

                                </Grid>
                                <Grid item xs={7}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-helper-label">Contrat</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            name="Contrat"
                                            value={Values.Contrat}
                                            color='primary'
                                            onChange={handleInputChange}
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
                                </Grid>
                            </Grid>

                            <Grid item container justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label>Type de travail:</label>
                                </Grid>
                                <Grid item xs={7}>
                                    <RadioGroup aria-label="gender" name="TypeTravail" value={Values.TypeTravail} onChange={handleInputChange}>
                                        <div className="radio" >
                                            <FormControlLabel value="Complet" control={<Radio color="primary" />} label="Complet" className="radioitem" labelPlacement="end" />
                                            <FormControlLabel value="Partiel" control={<Radio color="primary" />} label="Partiel" className="radioitem" labelPlacement="end" />
                                        </div>
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >Ajoutez des Tags pour <br />améliorer l'indexation <br />de la recherche de votre <br />publication:</label>
                                </Grid>
                                <Grid item xs={7}>
                                    <div className="autocomplete" style={{ "marginTop": '23px' }}>
                                        <Autocomplete

                                            multiple
                                            limitTags={2}
                                            id="multiple-limit-tags"
                                            name="Tags"
                                            options={top100Films}
                                            onChange={onTagsChange}
                                            // eslint-disable-next-line react/jsx-no-duplicate-props
                                            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                            groupBy={(option) => option.firstLetter}
                                            getOptionLabel={(option) => option.title}
                                            defaultValue={[top100Films[13], top100Films[12]]}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Tags" placeholder="Ajouter Tags" style={{ "width": '400px' }} />
                                            )}

                                        />
                                        <TextField label="Ajoutez des Tags spécifiques" name="others" className="field" type="text" style={{ "marginTop": '12px' }} onChange={handleInputChange} />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" alignItems="center" >
                                <Grid item xs={4} >
                                    <Button variant="contained" color="primary" style={{ 'marginTop': '50px' }} type="submit" onClick={handleFormSubmit}>
                                        Postuler  <AiOutlineSend fontSize="large" className='icon' />
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </fieldset>
                </Grid>
            </form>
            <fieldset style={{ "width": '100%', 'padding': '10px', 'border': '1px black' }}>
                <h1>Liste Des Formations</h1>
                <Grid container direction='row' spacing={1} alignItems="center" justify="space-evenly" style={{ "backgroundColor": 'red', 'color': 'white' }}>

                    <Grid item container xs={1} justify="space-evenly" alignItems="center" >
                        <Grid item xs={12} >
                            <h3  >Nom</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12}>
                            <h3 >Domaine</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Type</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Date Debut</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Experience requise</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Type de Travail</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 style={{ 'padding': '0px' }}>Contrat</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Image</h3>
                        </Grid> 
                    </Grid>

                    <Grid item container xs={2} >
                        <Grid item xs={12} >
                            <h3 style={{ "textAlign": "center" }}>Tags</h3>
                        </Grid>
                    </Grid>

                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Actions</h3>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container direction='row' alignItems="center" justify="sp</Grid>ace-evenly"> */}
                {
                    Object.keys(Offres).map(id => {
                        return (
                            <Grid container direction='row' spacing={1} alignItems="center" justify="space-evenly" style={{ "marginTop": '10px' }}>

                                <Grid item container xs={1} justify="space-evenly" alignItems="center" >
                                    <Grid item xs={12} >
                                        <h4 >{Offres[id].Nom}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12}>
                                        <h4 >{Offres[id].Domaine}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Offres[id].Type}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Offres[id].DateDebut}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Offres[id].Experience}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Offres[id].TypeTravail}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Offres[id].Contrat}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <GridList className={classes.gridList} cols={1} cellHeight={30}>
                                            <h4 >{Offres[id].Image}</h4>
                                        </GridList>
                                    </Grid>
                                </Grid>

                                <Grid item container xs={2} justify="space-evenly" >

                                    <Grid item container direction='column' xs={12}>
                                        <GridList cellHeight={30} cols={1}>
                                            {Offres[id].Tags.map(num => {
                                                return (
                                                    <Grid item xs={12}>
                                                        <h4 style={{ "textAlign": "center" }}>{num.title}</h4>
                                                    </Grid>
                                                )
                                            })}
                                        </GridList>
                                    </Grid>
                                </Grid>

                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item spacing={2} container>
                                        <Grid item xs={6} >
                                            <button onClick={() => { setCurrentID(id) }}> <EditIcon style={{ 'color': 'blue' }}></EditIcon></button>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <button onClick={() => { OnDelete(id) }}><DeleteIcon style={{ 'color': 'red' }}></DeleteIcon></button>
                                        </Grid>


                                    </Grid>
                                </Grid>
                            </Grid>

                        )


                    })
                }
                {/* </Grid> */}
            </fieldset>
        </div>
    )
}

export default Test
