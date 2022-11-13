# CarbonO

<p align="center">
    <img src="https://raw.githubusercontent.com/Chen-ZhaoXing/CarbonO/main/CarbonOLogo.png" width="50%"/>
</p>

> Project By: SMU CS203 G2T2
> - [Zhao Xing](https://github.com/Newbieshine/)
> - [Yuan Sheng](https://github.com/ChongYuanSheng/)
> - [Novia](http://github.com/noviaantony/)
> - [Ariff](http://github.com/KimmyChanga/)
> - [Alison](https://github.com/alisonhow194) 

Code submission for [SMU CS203]

---
##  Our Solution To Climate Change
CarbonO is an application whereby users can claim e-credits when they consume foods with lower carbon footprints. User can browse a page of dishes and compare the carbon emissions of the various dishes through their "carbon rating" (based on Eaternity: https://eaternity.org/). Users can scan QR codes from a receipt for a dish (from the dishes mentioned in our application) and claim "e-credits". When a dish has a higher carbon-rating (dishes with lower carbon footprint) , users can claim more e-credits for that dish. Lastly, users can convieniently use accumulated e-credits to claim rewards or donate to organizations fighting climate change!

---
## Core Features

***Carbon Footprint Tracker***
> Search from a list of recipes and view their corresponding carbon-emission rating (based on Eaternity)
> Scan QR code on receipt and claim e-credits (the lower the carbon-emission rating of a dish, the more e-credits you can collect!)

***Rewards***
> Users can use e-credits to claim rewards from sustainable brands working towards climate change

***Donation***
> Users can use e-credits to donate to their desired organisation that is fighting climate change
> User can choose to donate to organisations using their credit cards as well

***Dashboard***
> View historical qr scans, totals e-credits, total carbon emissions from food
> Users can easily visualize their carbon emission and summary of data uploaded in the form of pie chart & line graphs
> View historical reward claims and donations made
---
## API Documentation
> Refer to our detailed documentation to properly use the API endpoints for the microservices (https://carbonoapp.docs.apiary.io/)
---

## **Technology Stack**
- [SpringBoot](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org/download/)
- [ReactJs](https://reactjs.org/) 
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://www.axios.com/)
- [Docker](https://www.docker.com/)
- [JUnit 5](https://junit.org/junit5/)

## **Tools Used**
- [VSCode](https://code.visualstudio.com/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
- [Postman](https://www.postman.com/)
- [pgAdmin](https://www.pgadmin.org/)
- [Chart.js](https://www.chartjs.org/)
- [Figma](https://www.figma.com/)
---

## Local Deployment
### Cloning The Repository
```base
$ git clone https://github.com/Chen-ZhaoXing/CarbonO.git 
```
### Spring Boot Microservices
```bash
**Launching the microservices as individual containers locally **
Change directory to where each microservice spring application is located and run the application file.

**Launching the microservices as individual containers using docker **
Change directory to each microservice folder on any IDE and build the image to docker hub.
Example to build user microservice on intellij, in the terminal type the following:
PS C:/(Your Directory)/CarbonO>cd carbonO/user
Edit the pom.xml file, by replacing the docker file maven plugin configuration with <yourDockerName>/user
PS C:/(Your Directory)/CarbonO/carbonO/user>mvn clean package -D dockerfile.useMavenSettingsForAuth=true dockerfile:push

Now on your on your OS command prompt type the following to run the container:
docker run -d -p 8081:8081 --env CARBONO_USERNAME=<STMP_Email> --env CARBONO_PASSWORD=<STMP_password> --name user <yourDockerName>/user:0.0.1-SNAPSHOT 
docker run -d -p 8080:8080 --name api-gateway <yourDockerName>/api-gateway:0.0.1-SNAPSHOT
docker run -d -p 8761:8761 --name eureka-server <yourDockerName>/eureka-server:0.0.1-SNAPSHOT
docker run -d -p 8082:8082 --name carbonTracker <yourDockerName>/carbontracker:0.0.1-SNAPSHOT
docker run -d -p 8083:8083 --name userReward <yourDockerName>/userreward:0.0.1-SNAPSHOT


```
### React Application
```bash
$ cd client
$ npm install
$ npm start
```

## Disclaimer
- We do not own or license any copyrights in the images used in the application. We are also not affiliated to the brands mentioned/used in this application. You may use the Services and the contents contained in the Services solely for your own individual, non-commercial and informational use only
