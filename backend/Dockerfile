FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose NestJS port
EXPOSE 4000

# Start NestJS app
CMD ["npm", "run", "start:prod"]
