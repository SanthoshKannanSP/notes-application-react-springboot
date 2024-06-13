FROM maven:3.8.3-eclipse-temurin-17 AS builder
WORKDIR /backend
COPY pom.xml /backend/pom.xml

COPY src /backend/src
RUN mvn install -DskipTests

CMD ["mvn", "spring-boot:run"]