# build environment
FROM node:14.19.1 as build
WORKDIR /app
COPY . .
RUN npm install && \
    npm rebuild node-sass && \
    npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

