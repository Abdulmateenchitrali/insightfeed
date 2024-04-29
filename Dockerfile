FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

COPY . .

#RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 5173

# Command to run the application
CMD ["yarn", "run","dev"]
