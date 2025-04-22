FROM openjdk:17-jdk
ARG JAR_FILE=target/app.jar
RUN mkdir -p /otp/spring-cloud
RUN chmod 600  /otp/spring-cloud
COPY ${JAR_FILE}  /opt/spring-cloud/app.jar
WORKDIR /opt/spring-cloud
ENTRYPOINT ["java","-jar","/opt/spring-cloud/app.jar"]