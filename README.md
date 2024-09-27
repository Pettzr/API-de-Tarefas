# API de Lista de Tarefas

## Instalação

1. Para instalar esse projeto, baixe o repositório ou execute o comando "git clone https://github.com/Pettzr/API-de-Tarefas.git" em uma pasta
2. Após isso, em seu terminal, instale as dependências com o comando "npm install"
3. Para iniciar o servidor basta rodar o comando "node app.js" ou "npm start"
4. Com a ajuda do Postman ou algum outro aplicativo, envie requisições nas rotas da API

## Como usar

A API possue algumas rotas, cada uma com sua função, a seguir vou explicar cada uma delas e dar um exemplo de utilização e de resposta esperada.

### Rotas POST:

> http://localhost:3000/tasks

Essa rota serve para a criação de novas tarefas.

Formato esperado para o corpo da requisição:

```
{
  "title": "insira seu titulo", (OBRIGATÓRIO)
  "description": "insira sua descrição" (OPCIONAL)
}
```

A resposta de uma requisição bem sucedida deve ser algo como:

![image](https://github.com/user-attachments/assets/93121c90-4fb2-4c49-a33a-89fa33b8bcd4)

______

### Rotas GET:

> http://localhost:3000/tasks

Essa rota retorna todas as tarefas adicionadas na API.

A resposta de uma requisição bem sucedidada deve ser algo como:

![image](https://github.com/user-attachments/assets/07cca9a6-627e-409f-a4f4-78f55241ae83)

______

> http://localhost:3000/tasks/:id

Essa rota retorna a tarefa com o ID especificado no parâmetro da rota.

A resposta de uma requisição bem sucedidada deve ser algo como:

![image](https://github.com/user-attachments/assets/e5fbec13-be5c-4f3e-9031-2a9fe9a9b082)

______

> http://localhost:3000/tasks/search/:title

Essa rota retorna todas as tarefas que em seu título incluem o parâmetro da pesquisa

A resposta de uma requisição bem sucedidada deve ser algo como:

![image](https://github.com/user-attachments/assets/cd6dae4d-ceb9-4a54-8c45-d2491bf5d3a1)

______

### Rotas PATCH:

> http://localhost:3000/tasks/:id

Essa rota serve para alterar alguma informação de uma tarefa, seja seu título ou descrição.
###### OBS: essa rota não serve para alterar o estado de conclusão da tarefa, há uma rota específica para isso.

Formato esperado para o corpo da requisição:

```
{
  "title": "insira seu titulo alterado", (OBRIGATÓRIO)
  "description": "insira sua descrição alterada" (OPCIONAL)
}
```

A resposta de uma requisição bem sucedida deve ser algo como:

![image](https://github.com/user-attachments/assets/c6eba1db-684a-4392-a26b-d7f14db90f28)

______

> http://localhost:3000/tasks/complete/:id

Essa rota serve para alterar o estado de conclusão de uma tarefa.
###### OBS: A função age alternando o estado de cada tarefa entre "true" e "false" (dizendo se a tarefa foi ou não concluída).

Vale ressaltar que, apesar de ser uma rota do tipo PATCH, não é necessário enviar nada no corpo da requisição, pois a função apenas alterna entre os valores 'true' e 'false'. 

A resposta de uma requisição bem sucedida deve ser algo como:

![image](https://github.com/user-attachments/assets/1f6c8ce6-90ba-43ce-ae73-e51cb45f8ec6)

______

### Rotas DELETE:

> http://localhost:3000/tasks/:id

Essa rota serve para excluir uma tarefa do banco de dados.

A resposta de uma requisição bem sucedida deve ser algo como:

![image](https://github.com/user-attachments/assets/2bf7f8bd-edd3-493e-8e4e-55c7d22388ca)

______

## Requisitos do Desafio:

Desafio 

Objetivo:
Desenvolver uma API simples de lista de tarefas utilizando Node.js. A API deve permitir a criação, leitura, atualização e exclusão de tarefas.

Requisitos:

- Utilize o framework Express.js para criar a aplicação.

- Utilize um banco de dados SQLite para armazenar as tarefas. Você pode usar o pacote "sqlite3" para interagir com o SQLite.

Cada tarefa deve ter, no mínimo, os seguintes campos:
- id (identificador único da tarefa)
- descricao (descrição da tarefa)
- concluida (indicador se a tarefa foi concluída ou não)

A API deve suportar as seguintes operações:
- Listar todas as tarefas
- Criar uma nova tarefa
- Obter os detalhes de uma tarefa específica
- Atualizar os detalhes de uma tarefa
- Excluir uma tarefa
- Implemente validações adequadas para garantir que os dados fornecidos na criação e atualização de tarefas sejam válidos.
- Utilize status HTTP apropriados para indicar o sucesso ou falha de uma requisição (por exemplo, 200 OK, 201 Created, 404 Not Found).

Bônus (diferencial):

- Forneça documentação básica sobre como usar a API.

- Implemente a funcionalidade de marcar uma tarefa como concluída.

Lembre-se de incluir comentários no código para explicar seu raciocínio e facilitar a compreensão do projeto por outros desenvolvedores. Este desafio visa avaliar habilidades básicas de desenvolvimento back-end com Node.js e a capacidade de trabalhar com bancos de dados simples.

Prazo do teste: 4 dias para conclusão e envio.
Subir a aplicação no github e enviar link do repositório.

