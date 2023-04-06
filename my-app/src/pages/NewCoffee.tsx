import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Coffee } from '../components/Coffee';
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
  const [imageUrl, setImageUrl] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [hotOrCold, setHotOrCold] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleServingSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServingSize(event.target.value);
  };

  const handleHotOrColdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHotOrCold(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCoffee: Coffee = {
      name,
      type,
      description,
      imageUrl,
      servingSize,
      hotOrCold,
    };
    try {
      const response = await axios.post('https://api.sampleapis.com/coffee', newCoffee);
      if (response.status === 201) {
        dispatch(addCoffee(newCoffee)); // Adiciona o novo café no estado global
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
    <Link to="/">Voltar para a lista de cafés</Link>
    <h2>Novo Café</h2>
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        required
        label="Nome"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        required
        label="Tipo"
        value={type}
        onChange={handleTypeChange}
      />
      <TextField
        required
        label="Descrição"
        value={description}
        onChange={handleDescriptionChange}
      />
      <TextField
        required
        label="URL da imagem"
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      <TextField
        required
        label="Tamanho da porção"
        value={servingSize}
        onChange={handleServingSizeChange}
      />
      <TextField
        required
        label="Quente ou frio" 
        value={hotOrCold}
        onChange={handleHotOrColdChange}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Adicionar
     </Button>
   </form>
</Container>
);
}

export default NewCoffee;
