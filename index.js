import express from 'express';

const host ='0.0.0.0';
const porta =3000;
var listaFornecedores=[];

const server = express();

server.use(express.urlencoded({extended: true}));

server.get('/', (requisicao,resposta) => { 
    resposta.send(`
        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Principal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f7;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu {
            background-color: white;
            padding: 30px 50px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
        }

        a {
            display: inline-block;
            text-decoration: none;
            background-color: #27ae60;
            color: white;
            padding: 12px 25px;
            border-radius: 5px;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #1e8449;
        }
    </style>
</head>
<body>
    <div class="menu">
        <h1>Menu Principal</h1>
        <a href="/cadastroEmpresa">Cadastrar Empresa</a>
    </div>
</body>
</html>

            
    `)
});

server.get('/cadastroEmpresa', (requisicao,resposta) => {

        resposta.send(`
                    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
                <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f6f7;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            form {
                background-color: #ffffff;
                padding: 25px 35px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                width: 400px;
            }

            h2 {
                text-align: center;
                color: #2c3e50;
                margin-bottom: 20px;
            }

            label {
                display: block;
                font-weight: bold;
                color: #34495e;
                margin-top: 10px;
                margin-bottom: 5px;
            }

            input {
                width: 100%;
                padding: 8px 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 14px;
                box-sizing: border-box;
            }

            input:focus {
                outline: none;
                border-color: #27ae60;
                box-shadow: 0 0 5px rgba(39, 174, 96, 0.4);
            }

            button {
                width: 100%;
                background-color: #27ae60;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px;
                font-size: 16px;
                margin-top: 15px;
                cursor: pointer;
                transition: background-color 0.3s;
            }

            button:hover {
                background-color: #1f8e50;
            }
        </style>
        </head>
        <body>
            <form method="POST" action="/adicionarFornecedor">
            <h2>Cadastro de Fornecedor</h2>

            <label for="cnpj">CNPJ:</label><br>
            <input type="text" id="cnpj" name="cnpj"><br><br>

            <label for="razaoSocial">Razão Social / Nome do Fornecedor:</label><br>
            <input type="text" id="razaoSocial" name="razaoSocial" placeholder="Ex: Moraes & Irmãos Ltda"><br><br>

            <label for="nomeFantasia">Nome Fantasia:</label><br>
            <input type="text" id="nomeFantasia" name="nomeFantasia" placeholder="Ex: Loja do 1,99"><br><br>

            <label for="endereco">Endereço:</label><br>
            <input type="text" id="endereco" name="endereco"><br><br>

            <label for="cidade">Cidade:</label><br>
            <input type="text" id="cidade" name="cidade"><br><br>

            <label for="uf">UF:</label><br>
            <input type="text" id="uf" name="uf" maxlength="2" placeholder="SP"><br><br>

            <label for="cep">CEP:</label><br>
            <input type="text" id="cep" name="cep" placeholder="00000-000"><br><br>

            <label for="email">E-mail:</label><br>
            <input type="email" id="email" name="email"><br><br>

            <label for="telefone">Telefone:</label><br>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000"><br><br>

            <button type="submit">Cadastrar</button>
        </form>

        

        </body>
        </html>


 `)

});

server.post('/adicionarFornecedor', (requisicao,resposta) => {
    const cnpj = requisicao.body.cnpj;
    const razaoSocial = requisicao.body.razaoSocial
    const nomeFantasia = requisicao.body.nomeFantasia;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;
    const cep = requisicao.body.cep;
    const email = requisicao.body.email;
    const telefone = requisicao.body.telefone;

    listaFornecedores.push({cnpj, razaoSocial, nomeFantasia, endereco, cidade, uf, cep, email, telefone});
    resposta.redirect("/listarUsuarios");

});

server.get("/listarUsuarios", (requisicao, resposta) => {
    let conteudo = `
                    <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lista de Fornecedores</title>
        </head>
        <body>
                <div>
                    <h1 class="text-center m-3 p-3 bg-light"> </h1>

                    <table class="table table-striped">
                    <thead>
                    <tr> 
                        <th>Cnpj</th>
                        <th> Razao social </th>
                        <th> Nome fantasia </th>
                        <th> Endereco </th>
                        <th> Cidade </th>
                        <th> UF </th>
                        <th> Cep </th> 
                        <th> Email </th>
                        <th> Telefone </th>
                    </tr>
                    </thead>
                    <tbody> `;

            for(let i =0; i<listaFornecedores.length; i++){

                conteudo +=`
                    <tr>
                        <td>` +listaFornecedores[i].cnpj` </td>
                        <td>` +listaFornecedores[i].razaoSocial` </td>
                        <td>` +listaFornecedores[i].nomeFantasia` </td>
                        <td>` +listaFornecedores[i].endereco` </td>
                        <td>` +listaFornecedores[i].cidade`  </td>
                        <td>` +listaFornecedores[i].uf` </td>
                        <td>` +listaFornecedores[i].cep` </td>
                        <td>` +listaFornecedores[i].email` </td>
                        <td>` +listaFornecedores[i].telefone` </td>
                        <td> </td>
                    </tr>

                
                `;
            }
                conteudo +=`<tbody>
                </table>
                </div>`


                resposta.send(conteudo);
       
    
    
})



server.listen(porta,host,  () => {
    console.log(`Servidor escutando em http://` + host +':' + porta);
});
