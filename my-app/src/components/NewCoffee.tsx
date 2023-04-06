import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Coffee } from '../types/Coffee'; 

import { addCoffee } from '../models/coffeeActions';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  button: {
    width: 'max-content',
    alignSelf: 'flex-end',
  },
}));

const NewCoffee = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleIngredientsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(event.target.value.split(','));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCoffee: Coffee = {
      id: 0,
      name,
      type,
      description,
      imageURL: '',
      ingredients: [],
    };
    try {
      const response = await axios.post('https://api.sampleapis.com/coffee', newCoffee);
      if (response.status === 201) {
        const newCoffeeWithId: Coffee = {
          ...newCoffee,
          id: response.data.id,
        };
        dispatch(addCoffee(newCoffeeWithId)); // Adiciona o novo café no estado global
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={handleNameChange} />
        <TextField label="Type" value={type} onChange={handleTypeChange} />
        <TextField label="Description" value={description} onChange={handleDescriptionChange} />
        <TextField label="Ingredients" value={ingredients.join(', ')} onChange={handleIngredientsChange} />
        <Button variant="contained" color="primary" type="submit" className={classes.button}>
          Save
        </Button>
        <Button component={Link} to="/" variant="contained" color="default">
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default NewCoffee;