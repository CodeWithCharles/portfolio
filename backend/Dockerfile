FROM php:8.2-cli

# Install dependencies
RUN apt-get update && apt-get install -y git unzip curl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy Symfony project files
COPY . .

# Install PHP dependencies
RUN composer install --no-interaction

# Ensure SQLite database file exists
RUN mkdir -p var && touch var/data.db

# Expose port for Symfony server
EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
