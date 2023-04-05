import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
    setIngredients(event.target.value.split(',').map((ingredient) => ingredient.trim()));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCoffee = {
      name,
      type,
      description,
      ingredients,
    };
    try {
      const response = await axios.post('https://api.sampleapis.com/coffee', newCoffee);
      if (response.status === 201) {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField label="Nome" variant="outlined" required value={name} onChange={handleNameChange} />
        <TextField label="Tipo" variant="outlined" required value={type} onChange={handleTypeChange} />
        <TextField label="Descrição" variant="outlined" multiline required value={description} onChange={handleDescriptionChange} />
        <TextField label="Ingredientes (separados por vírgula)" variant="outlined" required value={ingredients.join(', ')} onChange={handleIngredientsChange} />
        <Button variant="contained" color="primary" type="submit" className={classes.button}>
          Salvar
        </Button>
        <Link to="/" className={classes.button}>
          Voltar
        </Link>
      </form>
    </Container>
  );
};

export default NewCoffee;