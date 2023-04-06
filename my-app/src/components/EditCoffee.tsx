import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Coffee } from './Coffee';

interface Props {
  onSave: (coffee: Coffee) => void;
}

interface RouteParams {
  id: string
}

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

const EditCoffee: React.FC<Props> = ({ onSave }) => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchCoffee = async () => {
      const endpoint = `https://api.sampleapis.com/coffee/${id}`;
      const response = await axios.get<Coffee>(endpoint);
      const coffee = response.data;
      setName(coffee.name);
      setType(coffee.type);
      setDescription(coffee.description);
    };
    fetchCoffee();
  }, [id]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = `https://api.sampleapis.com/coffee/${id}`;
    const coffee = { name, type, description };
    const response = await axios.put<Coffee>(endpoint, coffee);
    onSave(response.data);
    history.push('/');
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          required
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Tipo"
          variant="outlined"
          required
          value={type}
          onChange={handleTypeChange}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          required
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Salvar
        </Button>
      </form>
    </Container>
  );
};

export default EditCoffee;