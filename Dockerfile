# Dockerfile
FROM nginx:alpine-slim

EXPOSE 8080/tcp

ARG APP_NAME
ARG BOOTSTRAP_VERSION

LABEL name=$APP_NAME

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

# Create asset dirs
RUN mkdir -p /usr/share/nginx/html/css /usr/share/nginx/html/js /usr/share/nginx/html

COPY docs/ /usr/share/nginx/html/

COPY vendor/bootstrap/dist/css/bootstrap.min.css* /usr/share/nginx/html/css/
COPY vendor/bootstrap/dist/js/bootstrap.min.js* /usr/share/nginx/html/js/

COPY vendor/jquery/dist/jquery.slim.min.* /usr/share/nginx/html/js/

CMD ["nginx", "-g", "daemon off;"]
