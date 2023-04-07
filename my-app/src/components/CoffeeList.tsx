import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, MenuItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import axios from "axios";


interface Coffee {
  id: number;
  name: string;
  type: string;
  description: string;
  ingredients: string [];
}

interface Option {
  value: string;
  label: string;
}

const CoffeeList = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [type, setType] = useState<string>("Hot");
  const types: Option[] = [
    { value: "Hot", label: "Hot" },
    { value: "Iced", label: "Iced" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://api.sampleapis.com/coffee/${type.toLowerCase()}`;
      const response = await axios.get<Coffee[]>(endpoint);
      setCoffees(response.data);
    };
    fetchData();
  }, [type]);

  const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  return (
    <div>
      <h1>Listagem de Cafés</h1>
      <Select value={type} onChange={handleChangeType}>
        {types.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coffees.map((coffee) => (
              <TableRow key={coffee.id}>
                <TableCell>{coffee.id}</TableCell>
                <TableCell>
                  <Link to={`/coffee/${coffee.id}`}>{coffee.name}</Link>
                </TableCell>
                <TableCell>{coffee.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Link to="/new-coffee">Novo café</Link>
    </div>
  );
};

export default CoffeeList;