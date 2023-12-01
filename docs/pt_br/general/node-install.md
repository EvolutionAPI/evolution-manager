[title]: \\ "Instalar Node usando NVM"

# Instalando Node.js com NVM

Este guia fornece instruções passo a passo sobre como instalar o Node.js no Linux usando o NVM (Node Version Manager).

## Pré-requisitos

- Acesso a um terminal no Linux.
- Permissões para executar comandos de instalação (geralmente como usuário root ou com `sudo`).

## Passo 1: Instalar NVM

NVM é uma ferramenta que permite gerenciar múltiplas versões do Node.js. Para instalá-lo, execute o seguinte comando no seu terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

*Nota: Você pode verificar a versão mais recente do NVM na [página do GitHub](https://github.com/nvm-sh/nvm).*

Após a instalação, feche e reabra o terminal, e então execute o seguinte comando para verificar se o NVM foi instalado corretamente:

```bash
nvm --version
```

## Passo 2: Instalar Node.js

Com o NVM instalado, você pode instalar o Node.js. Para instalar a versão mais recente, use o comando:

```bash
nvm install node
```

Para instalar uma versão específica do Node.js, você pode fazer:

```bash
nvm install 18 # substitua 18 pela versão que você quer instalar
```

Após a instalação, verifique a versão do Node.js com:

```bash
node -v
```

## Passo 3: Usar uma Versão Específica do Node.js

Você pode alternar entre as versões instaladas do Node.js com o comando `nvm use`:

```bash
nvm use 18 # substitua 18 pela versão que você quer usar
```

## Conclusão

Agora você tem o NVM instalado no seu sistema Linux, permitindo que você instale e gerencie múltiplas versões do Node.js. Isso é especialmente útil para desenvolvedores trabalhando em múltiplos projetos que podem requerer diferentes versões do Node.js.
