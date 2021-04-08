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
import firebaseDb from "../../MyFireBase";

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import "./Formation.css"
function Formation(props) {
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
    const top100Films = [
        { title: 'Artificial Intelligence', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'Formation', year: 1974 },
        { title: 'training', year: 2008 },
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
    const initialFieldValues = {
        Nom: '',
        Domaine: '',
        Type: 'Hard',
        Image: '',
        Duree: '',
        NbPlaces: '',
        DateDebut: '',
        Prix: '',
        Description: '',
        others: '',
        Tags: {
            // val1: top100Films[13],
            // val2: top100Films[12]
        }

    }
    const [Values, setValues] = useState(initialFieldValues)


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
    function nombre_occurences_tags(texte) {
        var div = texte.toLowerCase()

        if (div !== "" && div.length > 2) // mots de plus de 3 lettres
        {
            var obj_dico = {};
            for (let index of top100Films) {

                var re = new RegExp(index.title.toLocaleLowerCase(), 'g');
                obj_dico[index.title] = (div.match(re) || []).length;

            }
            return obj_dico
        }

    }
    function search_index(titre) {
        for (let index of top100Films) {
            if (index.title === titre) {
                return top100Films.indexOf(index);

            }

        }
    }
    const handleDescriptionChange = e => {
        var { name, value } = e.target
        setValues({
            ...Values,
            [name]: value,

        })
        var tab = nombre_occurences_tags(value);
        if (typeof tab !== 'undefined') {
            if (Object.keys(tab).length !== 0) {
                // console.log(tab)
                var max = Object.keys(tab).reduce((a, b) => {
                    if (value.trim() !== '') {

                        if (tab[a] > tab[b]) {
                            return a;
                        } else return b;

                    } else return top100Films[2].title;
                }
                );
                var max2 = Object.keys(tab).reduce((a, b) => {
                    if (value.trim() !== '') {
                        if (tab[a] > tab[b]) {
                            if (a === max) {
                                return b;
                            }
                            else
                                return a;
                        } else
                            if (b === max) {
                                return a;
                            } else
                                return b;

                    }
                    else return top100Films[3].title;
                });
                // console.log(max)
                // console.log(max2)
                setValues({
                    ...Values,
                    [name]: value,
                    Tags: {
                        val: top100Films[search_index(max)],
                        val1: top100Films[search_index(max2)],
                    },

                })
            }
        }



    }

    const [FormId, setFormId] = useState('')
    const addOrEdit = obj => {
        if (FormId === '') {
            firebaseDb.child('Formations').push(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    } else {
                        setFormId('')
                    }
                }
            )
        } else {
            firebaseDb.child(`Formations/${FormId}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    } else {
                        setFormId('')
                    }
                }

            )
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(Values);
        addOrEdit(Values)
        setValues(initialFieldValues)
    }
    const onTagsChange = (event, values) => {
        setValues({
            ...Values,
            Tags: values
        });
    }
    const [Formations, setFormations] = useState({});
  
    useEffect(() => {
        firebaseDb.child('Formations').on('value', snapshot => {
            if (snapshot.val() != null) {
                setFormations({
                    ...snapshot.val()
                })
            } else
                setFormations({

                })
        })
        // console.log(.tags)

    }, [])

    const [btnValue, setbtnValue] = useState("Postuler")


    const OnUpdate = (id) => {
        console.log(Formations[id].Type)
        setFormId(id)
        setbtnValue("Editer")
        // console.log(Values.Tags)

        setValues({

            Nom: Formations[id].Nom,
            Domaine: Formations[id].Domaine,
            Type: Formations[id].Type,
            Duree: Formations[id].Duree,
            NbPlaces: Formations[id].NbPlaces,
            DateDebut: Formations[id].DateDebut,
            Prix: Formations[id].Prix,
            others: Formations[id].others,
            Tags: Object.assign({}, Formations[id].Tags)

        })
        console.log(Values.Tags)

    }
    const OnDelete = id => {

        if (window.confirm("etes vous sure de supprimer ce item?")) {
            firebaseDb.child(`Formations/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setFormId('')
                }
            )
        }
    }
    return (
        <div >
            <form autoComplete='off' onSubmit={e => handleFormSubmit(e)} >

                <Grid container spacing={2} direction='column' alignItems="center" justify="space-evenly">
                    <fieldset>
                        <legend>Informations Publication</legend>
                        <Grid item container spacing={2} justify="space-evenly" alignItems="center" >
                            <Grid item container spacing={0} justify="space-evenly"  >
                                <Grid item xs={3} >
                                    <label>Nom de publication : </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField required label="Nom" value={Values.Nom} name="Nom" className="field" onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={0} justify="space-evenly" >
                                <Grid item xs={3} >
                                    <label>Domaine publication : </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormControl required className="field">
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
                                        required
                                        focused
                                        name="Image"
                                        type="file"
                                        label="image"
                                        // value={Values.Image}
                                        onChange={handleInputChange}
                                    />

                                </Grid>
                            </Grid>

                        </Grid>
                    </fieldset>
                    <fieldset>
                        <legend>Formation</legend>
                        <Grid item container spacing={2} justify="space-evenly">

                            <Grid item container xs={12} justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label>Le durée de la formation :   </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField required label="Durée" name="Duree" className="field" value={Values.Duree} type="number" onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >Le nombre des places :  </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField required label="Nombre des places" value={Values.NbPlaces} name="NbPlaces" className="field" type="number" onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >Quel est la date de debut<br /> de la formation: </label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField required name="DateDebut" label="date" value={Values.DateDebut} className="field" type="date" onChange={handleInputChange} focused style={{ "marginTop": '0px' }} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >Le prix:</label>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField required label="Prix" name="Prix" value={Values.Prix} className="field" type="number" onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" >
                                <Grid item xs={4} >
                                    <label >Description</label>
                                </Grid>
                                <Grid item xs={7}>
                                    {/* <TextField required label="Prix" name="Prix" value={Values.Prix} className="field" type="number" onChange={handleInputChange} /> */}
                                    <TextField
                                        required
                                        value={Values.Description}
                                        name="Description"
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={10}
                                        style={{ "width": '350px' }}
                                        onChange={handleDescriptionChange}
                                    />
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
                                            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                            groupBy={(option) => option.firstLetter}
                                            getOptionLabel={(option) => option.title}
                                            value={Object.values(Values.Tags)}
                                            renderInput={(params) => (
                                                <TextField {...params} required={Object.values(Values.Tags).length === 0} label="Tags" placeholder="Ajouter Tags" style={{ "width": '400px' }} />
                                            )}

                                        />
                                        <TextField label="Ajoutez des Tags spécifiques" name="others" value={Values.others} className="field" type="text" style={{ "marginTop": '12px' }} onChange={handleInputChange} />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item container justify="space-evenly" alignItems="center" >
                                <Grid item xs={4} >
                                    <Button variant="contained" color="primary" style={{ 'marginTop': '50px' }} type="submit" value='Postuler' title="Postuler" >
                                        {btnValue} <AiOutlineSend fontSize="large" className='icon' style={{ 'marginLeft': '10px' }} />
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
                            <h3 >Durée</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 >Prix</h3>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} justify="space-evenly">
                        <Grid item xs={12} >
                            <h3 style={{ 'padding': '0px' }}>Places disponibles</h3>
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
                    Object.keys(Formations).map(id => {
                        return (
                            <Grid key={id} container direction='row' spacing={1} alignItems="center" justify="space-evenly" style={{ "marginTop": '10px' }} key={id}>

                                <Grid item container xs={1} justify="space-evenly" alignItems="center" >
                                    <Grid item xs={12} >
                                        <h4 >{Formations[id].Nom}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12}>
                                        <h4 >{Formations[id].Domaine}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Formations[id].Type}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Formations[id].DateDebut}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Formations[id].Duree}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Formations[id].Prix}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <h4 >{Formations[id].NbPlaces}</h4>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={1} justify="space-evenly">
                                    <Grid item xs={12} >
                                        <GridList className={classes.gridList} cols={1} cellHeight={30}>
                                            <h4 >{Formations[id].Image}</h4>
                                        </GridList>
                                    </Grid>
                                </Grid>

                                <Grid item container xs={2} justify="space-evenly" >

                                    <Grid item container direction='column' xs={12}>
                                        <GridList cellHeight={30} cols={1}>
                                            {Formations[id].Tags.map(num => {
                                                return (
                                                    <Grid item xs={12} key={num.id}>
                                                        <h4 style={{ "textAlign": "center" }}>{num.title}</h4>
                                                    </Grid>
                                                )
                                            })}
                                        </GridList>
                                    </Grid>
                                </Grid>

                                <Grid item container xs={1} justify="space-evenly" alignItems="center">
                                    <Grid item spacing={2} container>
                                        <Grid item>
                                            <Button
                                                onClick={() => { OnUpdate(id) }}
                                                size='large'
                                                variant="outlined"
                                                color='default'
                                                className={classes.button2}
                                                startIcon={<EditIcon />}
                                            >

                                            </Button>
                                        </Grid>
                                        <Grid item >
                                            <Button
                                                onClick={() => { OnDelete(id) }}
                                                size='large'
                                                variant="outlined"
                                                color="secondary"
                                                className={classes.button}
                                                style={{ 'fontSize': '30px' }}
                                                startIcon={<DeleteIcon />}
                                            // style={{ 'color': 'red'  }}
                                            >

                                            </Button>
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

export default Formation
