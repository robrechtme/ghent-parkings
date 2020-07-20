
# Stage 1 - the build process
FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html/ghent-parkings
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]