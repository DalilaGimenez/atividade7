import React from 'react';
import { Box, Input, Button, List, ListItem, ButtonGroup } from "@chakra-ui/react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

import Layout from '../components/Layout';

const Tarefas = () => {
  return (
    <>
    <Layout>
    <Box p={4}>
      <h1>Lista de Tarefas</h1>
      <p>Inserir nova tarefa</p>

      <Box my={2}>
        <div>
          <Input placeholder="Digite o título da tarefa" mb={2} />
          <Button colorScheme="blue">Inserir</Button>
          <MdCheckBoxOutlineBlank />
          <p>Realizada?</p>
        </div>
      </Box>

      <List spacing={3}>
        <ListItem backgroundColor={'#ddd'} borderRadius={10}>
          Tarefa 1
          <Button colorScheme="red" ml={2}>Pendente</Button>
          <Button colorScheme="red" ml={2}>Excluir</Button>
        </ListItem>
        <ListItem backgroundColor={'#ddd'} borderRadius={10}>
          Tarefa 2
          <Button colorScheme="red" ml={2}>Pendente</Button>
          <Button colorScheme="red" ml={2}>Excluir</Button>
        </ListItem>

      </List>
    </Box>
    </Layout>
    </>
  );
};

export default Tarefas;