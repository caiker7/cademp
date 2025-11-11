import express from 'express';

const host ='0.0.0.0';
const porta =3000;

const server = express();

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
            <form action="/cadastrar-fornecedor" method="POST">
            <h2>Cadastro de Fornecedor</h2>

            <label for="cnpj">CNPJ:</label><br>
            <input type="text" id="cnpj" name="cnpj" required><br><br>

            <label for="razaoSocial">Razão Social / Nome do Fornecedor:</label><br>
            <input type="text" id="razaoSocial" name="razaoSocial" placeholder="Ex: Moraes & Irmãos Ltda" required><br><br>

            <label for="nomeFantasia">Nome Fantasia:</label><br>
            <input type="text" id="nomeFantasia" name="nomeFantasia" placeholder="Ex: Loja do 1,99" required><br><br>

            <label for="endereco">Endereço:</label><br>
            <input type="text" id="endereco" name="endereco" required><br><br>

            <label for="cidade">Cidade:</label><br>
            <input type="text" id="cidade" name="cidade" required><br><br>

            <label for="uf">UF:</label><br>
            <input type="text" id="uf" name="uf" maxlength="2" placeholder="SP" required><br><br>

            <label for="cep">CEP:</label><br>
            <input type="text" id="cep" name="cep" placeholder="00000-000" required><br><br>

            <label for="email">E-mail:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="telefone">Telefone:</label><br>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required><br><br>

            <button type="submit">Cadastrar</button>
        </form>

        

        </body>
        </html>


 `)

});



server.listen(porta,host,  () => {
    console.log(`Servidor escutando em http://` + host +':' + porta);
});
