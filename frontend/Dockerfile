FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy Vue.js project files
COPY . .

# Build Vue app
RUN npm run build

# Use Nginx as the web server
FROM nginx:alpine

# Copy built Vue app to Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
