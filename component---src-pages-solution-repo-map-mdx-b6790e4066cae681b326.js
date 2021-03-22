(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{mbgn:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return l}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},s=n.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(s,o({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Gitops"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-gitops"}),"Gitops repository to manage deployments"),": Each component has its own kustomize yaml file, and different environment configurations are also defined. See repository readme.")),Object(a.b)("h2",null,"Order processing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-mgr"}),"Order management microservice with user interface to enter orders"),". This project illustrates the Transactional OutBox pattern combined with Debezium Change data capture from Postgresql database to Kafka."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-optimizer"}),"Order shipment optimizer with Decision Optimization (CPLEX)"),". This is a python flask application exposing REST API but also consuming events from different topic to maintain internal view of the data needed for the optimization execution. CPLEX runs on Cloud Pak for Data or on IBM Cloud service"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-transport-simulator"}),"Transportation table and simulator")," a simple simulator to present the transportation route and cost to be used by the order optimization component.")),Object(a.b)("h2",null,"Cold chain monitoring"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent"}),"Refrigerator monitoring to assess cold chain and anomaly detection"),": this is a quarkus app, with microprofile and reactive messaging. It use Kafka Streams with Ktable, interactive query to compute the mumber of temperature violation per container. It optionally calls the anomaly detection model deployed on Watson ML.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator"}),"Simulate Refrigerator telemetries"),". The simulator component is a Python-based application for generating anomalous data events for refrigerated containers. It is controlled by a REST API for triggering the cold chain demo.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-freezer-mgr"}),"Freezer manager")," to process alerts and broadcast them to server side events. Support also other operations and Resources for managing the Freezer entity."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-repo-map-mdx-b6790e4066cae681b326.js.map