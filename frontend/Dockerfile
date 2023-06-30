# Use the LTS version of Node.js as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the desired port (e.g., 3000) for the app
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "dev"]
