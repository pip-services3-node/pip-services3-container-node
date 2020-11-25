# <img src="https://uploads-ssl.webflow.com/5ea5d3315186cf5ec60c3ee4/5edf1c94ce4c859f2b188094_logo.svg" alt="Pip.Services Logo" width="200"> <br/> IoC container for Node.js

This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

It provides an inversion-of-control component container to facilitate the development of composable services and applications.

The framework provides a light-weight container that can be embedded inside a service or application, or can be run by itself,
as a system process, for example. Container configuration serves as a recipe for instantiating and configuring components inside the container.  
The default container factory provides generic functionality on-demand, such as logging and performance monitoring.

This module contains the following packages:
- **Core** - Component container and container as a system process implementations
- **Build** - Default container factory
- **Config** - Container configuration components
- **Refer** - Inter-container reference management (implementation of the Referenceable pattern inside an IoC container)


<a name="links"></a> Quick links:

* [Data Microservice. Step 6](https://www.pipservices.org/docs/tutorials/data-microservice/container) 
* [Microservice Facade. Step 7](https://www.pipservices.org/docs/tutorials/data-microservice/service) 
* [Your first microservice in Node.js. Step 5](https://www.pipservices.org/docs/quickstart/nodejs) 
* [API Reference](https://pip-services3-node.github.io/pip-services3-container-node/globals.html)
* [Change Log](CHANGELOG.md)
* [Get Help](https://www.pipservices.org/community/help)
* [Contribute](https://www.pipservices.org/community/contribute)

## Use

Install the NPM package as
```bash
npm install pip-services3-container-node --save
```

## Develop

For development you shall install the following prerequisites:
* Node.js 8+
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the code:
```bash
tsc
```

Run automated tests:
```bash
npm test
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

## Contacts

The Node.js version of Pip.Services is created and maintained by:
- **Volodymyr Tkachenko**
- **Sergey Seroukhov**
- **Mark Zontak**

The documentation is written by:
- **Mark Makarychev**
