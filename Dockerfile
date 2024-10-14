# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy the static HTML files into the Nginx default directory
COPY ./dist /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]