import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const CoffeeForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Salvar
        </Button>
        <Link to="/" className={classes.button}>
          Voltar
        </Link>
      </form>
    </Container>
  );
};

export default CoffeeForm;