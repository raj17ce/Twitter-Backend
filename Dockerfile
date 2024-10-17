# Use Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 8000 to make the app accessible
EXPOSE 8000

# Start the Node.js application
CMD ["npm", "run", "start"]