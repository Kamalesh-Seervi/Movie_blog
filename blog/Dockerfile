FROM ubuntu:latest
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /var/movie_blog
RUN apt update
RUN apt upgrade -y
RUN apt install apache2 -y
RUN apt install -y nano git 
# RUN apt install mysql-server -y  
# (it is not good practice to use mysql in this container because docker can run only application in one container)
# RUN rm /var/www/html/index.html
# COPY ./taxservice /var/www/html/

# RUN rm -rf /var/www/html
COPY . .
# RUN chmod +x /var/photogram/main.sh
# VOLUME [ "var/www/html" ]  
# CMD /var/photogram/main.sh
# RUN systemctl restart apache2