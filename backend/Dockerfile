# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the NestJS app
COPY . .
RUN npm run build

# Stage 2: Run (Production)
FROM node:18-alpine

WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app /app

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the application port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/main.js"]
