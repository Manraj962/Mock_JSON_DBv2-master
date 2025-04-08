# use the official node.js image
FROM node:18-alpine

#setup the working directory in container
WORKDIR /

# copy the package.json & dependencies
COPY package*.json ./

# copy all the app files
COPY . . 

# expose the port the app is running on
EXPOSE 3000

#run our app with command
CMD ["node", "app.js"]

