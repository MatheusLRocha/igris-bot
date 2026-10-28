# igris-bot

🤖 Bot de Boas-vindas para Discord

    Bot desenvolvido em JavaScript para Discord, com o objetivo de automatizar mensagens de entrada e saída de integrantes de um servidor. Podendo futuramente receber novas funcionalidades.

📌 Sobre o projeto

    O projeto consiste em um bot simples para Discord capaz de identificar quando um integrante entra ou deixa o servidor, enviando uma mensagem sobre o acontecimento.

    O projeto foi desenvolvido com o objetivo de praticar a criação de bots para Discord utilizando JavaScript e a biblioteca Discord.js.

✨ Funcionalidades

    👋 Mensagem de boas-vindas quando um integrante entra no servidor.

    👋 Mensagem de despedida quando um integrante sai do servidor.

    📩 Envio automático das mensagens em um canal definido.

    ⚙️ Configuração do bot por meio de variáveis de ambiente.

    🪿 Imagem aleatória de um pato através de uma API externa.

🛠️ Tecnologias

    JavaScript

    Node.js

    Discord.js

⚙️ Configuração

Antes de executar o projeto, é necessário criar um arquivo .env na raiz: 

    DISCORD_TOKEN=seu_token_aqui

🚀 Como executar

1. Clone o repositório
    git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instale as dependências
    npm install

3. Configure o .env
    DISCORD_TOKEN=seu_token_aqui
    CLIENT_ID=seu_clientid_aqui
    MEMBER_ROLE=cargoid_aqui
    WELCOME_CHANNEL=seu_canalid_aqui
    GUILD=seu_servidorid_aqui

🔧 Configuração do bot

    Para que o bot consiga detectar a entrada e saída de integrantes, é necessário configurar as permissões e intents correspondentes no Discord Developer Portal.

    O bot também precisa estar adicionado ao servidor desejado com as permissões necessárias para enviar mensagens no canal configurado.

📄 Licença

    Este projeto está disponível para fins de estudo e portfólio.