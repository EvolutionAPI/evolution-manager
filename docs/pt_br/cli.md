[title]: \\ "CLI"

# Evolution-Manager CLI

## Instalação

Para instalar o Evolution-Manager CLI, execute o seguinte comando:

```
npm install -g evolution-manager
```

## Comandos Disponíveis

### Geral

- `help`: Exibe uma lista de comandos disponíveis. Para mais detalhes sobre cada comando, consulte este documento.

### Server

- `server start [--port=9615]`: Inicia um servidor temporário no terminal, ideal para execução local. O parâmetro `--port` define a porta do servidor, sendo `9615` o valor padrão.
- `server build`: Realiza o build do servidor, mas não o executa. (Atualmente sem uso específico).

### PM2

O CLI interage com o PM2 para gerenciar processos do Evolution Manager.

- `pm2 setup`: Configura o PM2 para hospedar o Evolution Manager. Se o PM2 não estiver instalado, o CLI o instalará automaticamente.
- `pm2 start`: Inicia o processo do Evolution Manager no PM2.
- `pm2 stop`: Para o processo do Evolution Manager no PM2.
- `pm2 restart`: Reinicia o processo do Evolution Manager no PM2.
- `pm2 delete`: Remove o processo do Evolution Manager do PM2.

## API

A seção API do Evolution-Manager CLI inclui várias funções para gerenciar a instalação e as versões do Evolution Manager na API. Os comandos disponíveis são:

- `setup` ou `install`: Instala o manager dentro da Evolution API no caminho `/manager`. Este comando também pode ser acessado usando a abreviação `i`.
- `uninstall`: Desinstala o manager da Evolution API.
- `changeVersion` ou `cv`: Altera para uma versão específica da Evolution API, seja ela mais nova ou mais antiga. Exemplo de uso: `changeVersion --v=1.5.0`.

Esses comandos fornecem uma interface de linha de comando flexível e poderosa para gerenciar as versões e a configuração do manager na sua instalação da Evolution API.

## Fluxo de Uso Típico

1. Instale o CLI globalmente.
2. Utilize o comando `help` para ver a lista de comandos disponíveis.
3. Para hospedar o Evolution Manager, use os comandos sob `PM2`.
4. Use o comando `server start` para rodar um servidor temporário localmente.
5. Utilize `api setup` para interagir com o projeto "evolution-api" e configurar o manager.
