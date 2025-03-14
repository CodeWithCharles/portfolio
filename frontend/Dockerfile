# Use official Node.js image for frontend
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the Vue app
COPY . .
RUN npm run build

# Serve the frontend using Nginx
FROM nginx:alpine

# Copy built files to Nginx serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for serving the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
