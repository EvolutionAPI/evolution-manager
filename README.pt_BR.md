# Evolution Manager

## Introdução

O Evolution Manager é uma ferramenta de gerenciamento open-source para a Evolution API, projetada para facilitar a administração e monitoramento de instâncias. Pode ser acessada online em [Evolution Manager](https://github.com/gabrielpastori1/evolution-manager).

## Funcionalidades

- **Gerenciamento de Instâncias**: Criação, gerenciamento e exclusão de instâncias.
- **Configurações de Instância**: Personalização das configurações de comportamento (por exemplo, desativar chamadas, modo sempre online), integração com webhook, RabbitMQ, WebSocket, Chatwoot e configurações do Typebot.
- **Utilitários para Usuários**: Verificação de números de usuários, busca por conversas e grupos.

## Limitações

- A versão hospedada na Vercel requer que o servidor tenha um certificado SSL.

## Tecnologia

- O projeto é desenvolvido usando Vue.js v3 e Vuetify.

## Evolution-Manager CLI - Documentação

Para informações detalhadas sobre como usar o Evolution-Manager CLI, consulte a documentação disponível nos seguintes links:

🔗 Documentação completa: [Documentação em Português](https://github.com/gabrielpastori1/evolution-manager/blob/main/docs/pt_br/cli.md)

## Imagem Docker - Documentação

Para obter informações detalhadas sobre como usar a imagem Docker, incluindo configurações e exemplos, acesse a nossa documentação completa. Você encontrará instruções passo a passo, bem como dicas úteis para maximizar o uso da imagem Docker do Evolution Manager.

🔗 Documentação completa: [Documentação em Português](https://github.com/gabrielpastori1/evolution-manager/tree/main/docs/pt_br/docker.md)

---

## Auto-Hospedagem - CLI e PM2 do Evolution Manager

### Direto ao Ponto: Configuração Rápida com PM2

Para instalar rapidamente o Evolution Manager globalmente e configurá-lo com o PM2, siga estes comandos:

1. **Instalar o Evolution Manager Globalmente**:

   ```bash
   npm install -g evolution-manager
   ```

2. **Configurar PM2 para o Evolution Manager**:

   ```bash
   evolution-manager pm2 setup
   ```

Estes dois passos instalarão o CLI do Evolution Manager globalmente em seu sistema e o configurarão para funcionar com o PM2, um gerenciador de processos poderoso.

### Instalação e Configuração

Esses dois passos instalarão o CLI do Evolution Manager globalmente em seu sistema e o configurarão para funcionar com o PM2, um gerenciador de processos poderoso.

1. **Instalar o Evolution Manager Globalmente**:
   - Certifique-se de ter o Node.js e o NPM instalados em seu sistema.
   - Instale o Evolution Manager globalmente usando o NPM para acessar o CLI (Interface de Linha de Comando):

     ```bash
     npm install -g evolution-manager
     ```

2. **Usando o CLI**:
   - Após a instalação, acesse os comandos do CLI digitando `evolution-manager` em seu terminal.
   - Os comandos disponíveis incluem:
     - `help`: Exibe uma lista de comandos disponíveis e suas descrições.
     - `server`: Operações relacionadas ao servidor.
       - `start [--port=9615]`: Inicia o servidor na porta especificada (padrão: 9615).
       - `build`: Constrói o projeto.
     - `pm2`: Gerencia o processo com o PM2.
       - `setup`: Configura o PM2 para o projeto.
       - `start`: Inicia o serviço com o PM2.
       - `stop`: Para o serviço no PM2.
       - `restart`: Reinicia o serviço no PM2.
       - `delete`: Remove o serviço do PM2.

3. **Executando o Projeto com o PM2**:
   - Para configurar e gerenciar o serviço com o PM2, comece com o comando de configuração:

     ```bash
     evolution-manager pm2 setup
     ```

   - Em seguida, você pode iniciar, parar, reiniciar ou excluir o serviço usando os respectivos comandos `pm2` no CLI.

Estas instruções fornecem um método simplificado para gerenciar o Evolution Manager em vários sistemas, utilizando o PM2 para um eficiente início de serviço

## Configuração para Desenvolvimento

1. **Pré-requisitos**: Certifique-se de ter o `yarn` instalado no seu sistema.
2. **Clonar o Repositório**:

   ```bash
   git clone https://github.com/gabrielpastori1/evolution-manager.git
   cd evolution-manager
   ```

3. **Instalar Dependências**:

   ```bash
   yarn install
   ```

4. **Executar o Servidor de Desenvolvimento**:

   ```bash
   yarn dev
   ```

   Isso iniciará um servidor de desenvolvimento local. Você pode acessar o aplicativo em `localhost:8080`.

## Construção do Projeto

Para construir o projeto para produção, execute:

```bash
yarn build
```

Isso criará uma pasta `dist` com os ativos compilados.

## Contribuindo

As contribuições são uma parte essencial do projeto Evolution Manager. Seja contribuindo com código, sugestões ou feedback, sua participação é inestimável. Para facilitar as contribuições, incluímos um meio direto para doações:

### Fazendo uma Doação

Se desejar apoiar o projeto financeiramente, disponibilizamos um QR code para doações via Pix. Sua generosidade ajuda na manutenção e evolução desta ferramenta de código aberto.

<img src="https://github.com/gabrielpastori1/evolution-manager/blob/main/src/assets/pix.svg" width="300" alt="QR Code para Doação Pix">

### Contribuindo com Código ou Ideias

Também recebemos contribuições de código e ideias inovadoras. Se você tem interesse em contribuir dessa forma, por favor, leia nossas diretrizes de contribuição para mais informações sobre como começar.

Seu apoio, de qualquer forma, faz uma grande diferença e é muito apreciado. Obrigado por fazer parte da comunidade Evolution Manager!

## Licença

Este projeto é de código aberto e está disponível sob a [Licença MIT](LICENSE.md).
