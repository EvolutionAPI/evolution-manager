# Imagem Docker do Evolution Manager

Este arquivo README descreve como usar a imagem Docker do Evolution Manager e configurar um domínio utilizando o [Traefik](#configurando-o-domínio-com-o-traefik) ou [NGINX](#configurando-o-domínio-com-o-nginx).

## Usando a Imagem Docker

A imagem Docker do Evolution Manager permite uma instalação e atualização fáceis e automatizadas do sistema. Ao iniciar o container, a versão mais recente do Evolution Manager será baixada e instalada.

### Pré-requisitos

- Docker instalado em sua máquina.
- Conhecimento básico de operações do Docker.

### Executando o Container

Para iniciar o container com o Evolution Manager, execute o seguinte comando:

```sh
docker run -d -p 9615:9615 gabrielpastori1/evolution-manager:latest
```

Este comando executa o container em modo detached e mapeia a porta 9615 do container para a porta 9615 do host.

### Porta Exposta

A imagem expõe a porta `9615`, que deve ser mapeada para a porta correspondente no host.

## Configurando o Domínio com o Traefik

Para configurar um domínio e deixar o Evolution Manager acessível via web, você pode usar o Traefik como um proxy reverso.

### Pré-requisitos

- Ter o Traefik configurado em seu servidor.
- Possuir um domínio apontando para o servidor onde o Traefik está rodando.

### Configuração do Traefik

1. **Crie um arquivo `docker-compose.yml`** no diretório onde você deseja iniciar o Evolution Manager, com o seguinte conteúdo:

```yaml
version: '3'

services:
  evolution-manager:
    image: gabrielpastori1/evolution-manager:latest
    restart: unless-stopped
    ports:
      - "9615:9615"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.evolution-manager.rule=Host(`seu-dominio.com`)"
      - "traefik.http.routers.evolution-manager.entrypoints=web"
    # Adicione outras configurações de labels conforme necessário para o Traefik

networks:
  default:
    external:
      name: traefik_default
```

2. **Substitua** `seu-dominio.com` pelo domínio que você deseja usar.

3. **Certifique-se** de que a rede externa especificada (`traefik_default`) corresponda à rede usada pelo Traefik em sua configuração.

### Iniciando o Serviço

Com o arquivo `docker-compose.yml` configurado, inicie o serviço com o seguinte comando:

```sh
docker-compose up -d
```

O Traefik automaticamente detectará o serviço e aplicará as regras definidas nas labels do container.

## Configurando o Domínio com o NGINX

Se preferir usar o NGINX como um proxy reverso em vez do Traefik, siga os passos abaixo.

### Pré-requisitos

- NGINX instalado no seu servidor.
- Domínio apontando para o IP do seu servidor onde o NGINX está rodando.

### Configuração do NGINX

1. **Crie um Arquivo de Configuração do NGINX**: Para redirecionar as requisições do seu domínio para o container, você precisará criar um arquivo de configuração do NGINX em `/etc/nginx/conf.d/` com o seguinte conteúdo:

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:9615;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

2. **Substitua** `seu-dominio.com` pelo seu domínio real.

3. **Verifique a Configuração do NGINX**: Execute `nginx -t` para verificar se não há erros na configuração.

4. **Recarregue o NGINX**: Após verificar a configuração, recarregue o serviço do NGINX com `service nginx reload` ou `systemctl reload nginx`.

Agora o NGINX redirecionará as requisições do seu domínio para a porta `9615`, onde o seu container Docker está escutando.

## Suporte e Contribuições

Para suporte, dúvidas ou contribuições, abra uma issue ou envie um pull request no [repositório do GitHub](https://github.com/gabrielpastori1/evolution-manager). Sua participação é muito bem-vinda!
