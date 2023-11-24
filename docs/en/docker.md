# Docker Image of Evolution Manager

This README file describes how to use the Evolution Manager Docker image and set up a domain using [Traefik](#configuring-the-domain-with-traefik) or [NGINX](#configuring-the-domain-with-nginx).

## Using the Docker Image

The Evolution Manager Docker image provides an easy and automated setup and updating of the system. When the container is started, the latest version of the Evolution Manager will be downloaded and installed.

### Prerequisites

- Docker installed on your machine.
- Basic knowledge of Docker operations.

### Running the Container

To start a container with the Evolution Manager, execute the following command:

```sh
docker run -d -p 9615:9615 gabrielpastori1/evolution-manager:latest
```

This command runs the container in detached mode and maps port 9615 of the container to port 9615 of the host.

### Exposed Port

The image exposes port `9615`, which should be mapped to the corresponding port on the host.

## Configuring the Domain with Traefik

To configure a domain and make the Evolution Manager accessible via the web, you can use Traefik as a reverse proxy.

### Prerequisites

- Traefik configured on your server.
- A domain pointing to the server where Traefik is running.

### Traefik Configuration

1. **Create a `docker-compose.yml` file** in the directory where you want to start the Evolution Manager, with the following content:

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
      - "traefik.http.routers.evolution-manager.rule=Host(`your-domain.com`)"
      - "traefik.http.routers.evolution-manager.entrypoints=web"
    # Add other label configurations as necessary for Traefik

networks:
  default:
    external:
      name: traefik_default
```

2. **Replace** `your-domain.com` with the domain you want to use.

3. **Ensure** that the specified external network (`traefik_default`) matches the network used by Traefik in its setup.

### Starting the Service

With the `docker-compose.yml` file configured, start the service with the following command:

```sh
docker-compose up -d
```

Traefik will automatically detect the service and apply the rules defined in the container's labels.

## Configuring the Domain with NGINX

If you prefer using NGINX as a reverse proxy instead of Traefik, follow the steps below.

### Prerequisites

- NGINX installed on your server.
- A domain pointing to your server's IP where NGINX is running.

### NGINX Configuration

1. **Create an NGINX Configuration File**: To redirect requests from your domain to the container, you need to create a configuration file in `/etc/nginx/conf.d/` with the following content:

```nginx
server {
    listen 80;
    server_name your-domain.com;

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

2. **Replace** `your-domain.com` with your actual domain.

3. **Check the NGINX Configuration**: Run `nginx -t` to ensure there are no errors in the configuration.

4. **Reload NGINX**: After verifying the configuration, reload the NGINX service with `service nginx reload` or `systemctl reload nginx`.

Now NGINX will redirect requests from your domain to port `9615`, where your Docker container is listening.

## Support and Contributions

For support, questions, or contributions, open an issue or send a pull request on the [GitHub repository](https://github.com/gabrielpastori1/evolution-manager). Your participation is very welcome!