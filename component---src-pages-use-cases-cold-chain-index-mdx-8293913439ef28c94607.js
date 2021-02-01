(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"01cS":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c={_frontmatter:r},l=i.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(l,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The vaccine lots need to be kept at a constant temperature for a period of time. The sensor telemetry data coming from the refrigerated shipping containers is processed to assess cold-chain violations."),Object(n.b)("p",null,"The solution for this use case includes streaming telemetry events, a stateful microservice to implement aggregation & alarm generation, and integration with a microservice to log issues against the refrigerated shipping container."),Object(n.b)("h2",null,"Components involved in this use case"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator"}),"Vaccine Refrigerator container Simulator")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent"}),"Vaccine Reefer Monitoring Agent")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://ibm.github.io/event-streams/"}),"IBM Event Streams")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"/vaccine-solution-main/analyze/ws-ml-dev/"}),"Anomaly detection scoring service")," with WatsonML and anomaly detection built in Cloud Pak for Data")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACH0lEQVQoz22SzUtUYRTGZxntoz8jcBXUMtpFe1v0N4TtbBEtg7LIoJWIiwwEg6IM0kWakZaJA+Zops6Hzsydb++d9368H7/OvVOC1YFz3/se3vOc5zzn5HAJJBHZGYc41T/xuHdM1B24CQIIB3Hjy7+cez/KLK9s8flLgVXxQN7nbo/PMTa9xMjjN+R3j0jNitfrPs+n8sxMbzI1scHHxSLWOaJIo8Ikezf6dI4Lw2NcG5lkaPghhcIBufNX73H91gTnrtzl5fwaOgxJYk275fNqNs/8u63sXFs9wGiNMUaAbQbotbvsFquUqg129w+Jj4Vhud6i6rWo1Jtoa1FKCYs4S3DC1aVfAej3A3qSkJqxBi3A/1ioyJ26RyHFUoWjozqJTqQ1hddoSJGIKI7RwjAt8LcZKWjkvRVdc+Y3gySJ6YrYC183WRctUlMC8nZ5Xdi3s3uiB8zL9Q7bRS/zUq096MNoARSGqRopoHOGXl/x+tMGK1t7WKvx+31mF79R8poUay26QUgURly8+YQzl0Y5e/kOQzceEQlzQRwwtFkLjr7o1guUJCn2y4d8L+ywWdimLIL7YcxOpYPXUTQbTZ7NLHF/8j0PphYYf/GBOAW0J4ADU9pyLCsRyIQPDmsyOY+fAlypVPE7PoGsSqTtfxQki1kBTHc092eJU3QjkzTSJrI66cQQDV2thtkuYLpdnMScCtDBaU9zXeDjZKi/AIgq4ryKFqh9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cc components",title:"cc components",src:"/vaccine-solution-main/static/9ae6b01995a56cbae62949c479a4d6ad/3cbba/cc-components.png",srcSet:["/vaccine-solution-main/static/9ae6b01995a56cbae62949c479a4d6ad/7fc1e/cc-components.png 288w","/vaccine-solution-main/static/9ae6b01995a56cbae62949c479a4d6ad/a5df1/cc-components.png 576w","/vaccine-solution-main/static/9ae6b01995a56cbae62949c479a4d6ad/3cbba/cc-components.png 1152w","/vaccine-solution-main/static/9ae6b01995a56cbae62949c479a4d6ad/0b124/cc-components.png 1728w","/vaccine-solution-main/static/9ae6b01995a56cbae62949c479a4d6ad/3fef4/cc-components.png 1808w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"The reefer manager is not done yet")),Object(n.b)("h2",null,"Understand the components"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The Reefer simulator is a python  Flask app, which supports simple API to control the Refrigerator container simulation . It is described in ",Object(n.b)("a",o({parentName:"li"},{href:"/vaccine-solution-main/solution/reefer-iot/"}),"this note"),", also see next section to deploy it on OpenShift."),Object(n.b)("li",{parentName:"ul"},"The Monitoring Agent is a Quarkus app, with Kafka Streams, reactive messaging to monitor the cold chain with stateful operations. It also call the Anomaly detection service. Implementation details can be read in ",Object(n.b)("a",o({parentName:"li"},{href:"/vaccine-solution-main/solution/cold-monitoring/"}),"this note"),"."),Object(n.b)("li",{parentName:"ul"},"The model to assess if the refrigerator container has issue. To develop the model we need to ",Object(n.b)("a",o({parentName:"li"},{href:"/vaccine-solution-main/solution/cp4d/"}),"get the telemetry data")," in Cloud Pak for data, and then perform feature engineering and use AutoAI for developing the model as described in ",Object(n.b)("a",o({parentName:"li"},{href:"/vaccine-solution-main/analyze/ws-ml-dev/"}),"this note"),". As an alternate to collect the data, it is possible to directly ",Object(n.b)("a",o({parentName:"li"},{href:"/vaccine-solution-main/solution/cp4d/eventStream/"}),"integrate with Kafka topic")," and then save then as csv or in a datalake.")),Object(n.b)("h2",null,"Run on OpenShift"),Object(n.b)("h3",null,"Pre-requisites"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create the following artifacts in the ",Object(n.b)("inlineCode",{parentName:"p"},"eventstreams")," namespace on your OpenShift cluster:"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Create an EventStreams instance ",Object(n.b)("em",{parentName:"li"},"(via the ",Object(n.b)("a",o({parentName:"em"},{href:"https://ibm.github.io/event-streams/installing/installing/#install-an-event-streams-instance"}),"Event Streams Custom Resource"),")"),"."),Object(n.b)("li",{parentName:"ol"},"Create a ",Object(n.b)("a",o({parentName:"li"},{href:"https://ibm.github.io/event-streams/security/managing-access/#managing-access-to-kafka-resources"}),"Kafka User with SCRAM-based credentials"),", as required by the ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator#application-deployment"}),"Vaccine Reefer Simulator"),"."),Object(n.b)("li",{parentName:"ol"},"Create a ",Object(n.b)("a",o({parentName:"li"},{href:"https://ibm.github.io/event-streams/security/managing-access/#managing-access-to-kafka-resources"}),"Kafka User with TLS-based credentials"),", as required by the ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent#create-a-tls-user"}),"Vaccine Monitoring Agent"),"."),Object(n.b)("li",{parentName:"ol"},"Create two ",Object(n.b)("a",o({parentName:"li"},{href:"https://ibm.github.io/event-streams/getting-started/creating-topics/"}),"Kafka Topics"),". This tutorial will assume the names of ",Object(n.b)("inlineCode",{parentName:"li"},"coldchain-telemetry")," and ",Object(n.b)("inlineCode",{parentName:"li"},"coldchain-reefers")," respectively."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a new project named ",Object(n.b)("inlineCode",{parentName:"p"},"coldchain")," that will be used for the deployment of all other components.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift?topic=openshift-openshift-cli"}),"OpenShift CLI")," on your local environment.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",o({parentName:"p"},{href:"https://stedolan.github.io/jq/"}),"jq")," on your local environment.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get a cloud pak for data deployed on OpenShift Cluster")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use a Terminal and the oc cli. If you want to access the code source you can clone the two main repositories of this solution:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator\ngit clone https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent\n")))),Object(n.b)("h3",null,"Deploy the Vaccine Reefer Simulator"),Object(n.b)("p",null,"To get more detail of this Python Flask application ",Object(n.b)("a",o({parentName:"p"},{href:"/vaccine-solution-main/solution/reefer-iot/"}),"read this note"),"."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Ensure you are working inside the correct project via the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"export PROJECT_NAME=coldchain\noc project ${PROJECT_NAME}\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Export the value of your Event Streams cluster name into an environment variable:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"export CLUSTER_NAME=development\nexport EVENTSTREAMS_NS=eventstreams\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"To check what the name of your Event Streams cluster name is do:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"$ oc get eventstreams -n ${EVENTSTREAMS_NS}\nNAME           STATUS\ndevelopment    Ready\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a ConfigMap named ",Object(n.b)("inlineCode",{parentName:"p"},"reefer-simul-cm")," with the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc create configmap reefer-simul-cm \\\n--from-literal=KAFKA_CERT=/app/certs/ca.crt \\\n--from-literal=KAFKA_MAIN_TOPIC=${PROJECT_NAME}-telemetry \\\n--from-literal=KAFKA_BROKERS=___kafka-kafka-bootstrap-eventstreams.cluster.appdomain.cloud:443___\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Replacing the value of ",Object(n.b)("inlineCode",{parentName:"li"},"KAFKA_BROKERS")," above with the ",Object(n.b)("strong",{parentName:"li"},"External")," cluster bootstrap address presented to you during the creation of your SCRAM-based KafkaUser."),Object(n.b)("li",{parentName:"ul"},"This value can be accessed via the following ",Object(n.b)("inlineCode",{parentName:"li"},"oc")," command:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'oc get route -n ${EVENTSTREAMS_NS} ${CLUSTER_NAME}-kafka-bootstrap -o jsonpath="{.status.ingress[0].host}:443"\n'))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a Secret named ",Object(n.b)("inlineCode",{parentName:"p"},"reefer-simul-secret")," with the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc create secret generic reefer-simul-secret \\\n--from-literal=KAFKA_USER=___your-scram-based-kafka-user-name___ \\\n--from-literal=KAFKA_PASSWORD=___your-scram-based-kafka-user-password___\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Replacing the values above with the values generated during the creation of your SCRAM-based KafkaUser."),Object(n.b)("li",{parentName:"ul"},"If you need to get the password do the following command:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get secret <YOUR_KAFKAUSER_NAME> -n ${EVENTSTREAMS_NS} -o jsonpath='{.data.password}' && echo \"\"\n"))),Object(n.b)("li",{parentName:"ul"},"If you dont remember the name of your KafkaUser when you created the SCRAM credentials:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"$ oc get kafkausers -n integration\nNAME                CLUSTER         AUTHENTICATION   AUTHORIZATION\napp-scram           development     scram-sha-512    simple\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy the server-side public certificate of the Event Streams instance to your local project:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get secret ${CLUSTER_NAME}-cluster-ca-cert -n ${EVENTSTREAMS_NS} -o json | jq -r '.metadata.name=\"kafka-cluster-ca-cert\"' |jq -r '.metadata.namespace=\"coldchain\"' | oc apply -f -\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Note that we are copying and renaming the certificate in a single command to minimize the need for editing deployment documents."),Object(n.b)("li",{parentName:"ul"},"You should have two secrets."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Deploy the microservice components via the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc apply")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/vaccine-reefer-simulator/master/config/app-deployment.yaml\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"note if you want to build, clone ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator"}),"the repository")," and follows the readme."),Object(n.b)("p",{parentName:"li"},"You can verify the deployment state with the following:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get pods -w\n")))),Object(n.b)("p",{parentName:"li"},"or the via the Openshift console:"),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1137px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABWElEQVQ4y51Ti27DIBDL/3/nKrVJSQghvALxMCsTbdat60lWOOUwPnx0cpKQUsI5hzb2fX8LnVoNrDHYtg3ee1hrEYJHjPGlAxisJQphP45QSmGeZ6hFQ84LFq2xrmsuSt/Fz0gZ7I4ohK4oCkh5k3I7hE5wPmS1DiYrN8ZmcoOU0lNUcq67STuMUhUM05yhEeKOsCVscf/3nXar9VhvLYpM+DEo2JCgbYRx8WWiGpnQQaxblntvwruOd8P1CjFOxeUD0Y3sr7hTyBlkuz6EMjYV4Zb3fY9rPnQYBizLUoxiPcE1jWi76IQQGPPofDl6xPl8LmSsmaapPAJ+67olLApPpxMul0uZRSpoQRUk5H/mOpvX/md+IKRCnlbbaMFXw5arQip6iZDqfmuZCknMWpJW8HUd7pAX3l52S0aFJCO4mXU8vIL5QSGd5Mj8BL5hful4zR/xOIef4x6UxRG94hMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/66ed6/simul-app-ocp.png",srcSet:["/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/7fc1e/simul-app-ocp.png 288w","/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/a5df1/simul-app-ocp.png 576w","/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/66ed6/simul-app-ocp.png 1137w"],sizes:"(max-width: 1137px) 100vw, 1137px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get the route for running the demo: ",Object(n.b)("inlineCode",{parentName:"p"},"oc get routes"),"\nSee the ",Object(n.b)("a",o({parentName:"p"},{href:"#generate_vaccine_container_telemetry_events"}),"demo section")," to trigger telemetries generation."))),Object(n.b)("h3",null,"Deploy the Vaccine Monitoring Agent"),Object(n.b)("p",null,"To get more detail of this Java Quarkus microprofile application ",Object(n.b)("a",o({parentName:"p"},{href:"/vaccine-solution-main/solution/cold-monitoring/"}),"read this note"),". The project repository is ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent"}),"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Ensure you are working inside the correct project via the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc project coldchain\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If not done so already, copy the server-side public certificate of the Event Streams instance to your local project:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get secret ${CLUSTER_NAME}-cluster-ca-cert -n ${EVENTSTREAMS_NS} --export -o json | jq -r '.metadata.name=\"kafka-cluster-ca-cert\"' |jq -r '.metadata.namespace=\"coldchain\"' | oc apply -f -\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Note that we are copying and renaming the certificate in a single command to minimize the need for editing deployment documents."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy your TLS-based KafkaUser’s credentials to the local namespace with the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get secret -n ${EVENTSTREAMS_NS} ${TLS_USER} -o json | jq -r '.metadata.name=\"${TLS_USER}\"' |jq -r '.metadata.namespace=\"coldchain\"' | oc apply -f -\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Note that we are copying and renaming the credentials in a single command to minimize the need for editing deployment documents."),Object(n.b)("li",{parentName:"ul"},"If you dont remember your tls Kafka User:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"$ oc get kafkausers -n ${EVENTSTREAMS_NS}\nNAME                     CLUSTER         AUTHENTICATION   AUTHORIZATION\nkafka-tls-user           development     tls              simple\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Export the value of your Event Streams cluster name and TLS-based KafkaUser into environment variables. The tls-based-kafka-user-name is our previous setting is ",Object(n.b)("inlineCode",{parentName:"p"},"kafka-tls-user"),", if you changed this name, ensure it matches"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"export CLUSTER_NAME=development\nexport TLS_USER=__your-tls-based-kafka-user-name__\nexport YOUR_SUFFIX=___a_unique_identifier_for_your_application___\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you use the Anomaly detection service deployed in Watson ML:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Get user credential to access to cloud pack for data, with the API key."),Object(n.b)("li",{parentName:"ul"},"Get the ANOMALY_DETECTION_URL"),Object(n.b)("li",{parentName:"ul"},"Get the CP4D_AUTH_URL used to get access token")),Object(n.b)("p",{parentName:"li"},"You will use those values in the secrets of this application.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a ConfigMap named ",Object(n.b)("inlineCode",{parentName:"p"},"agent-cm")," (see exising one ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent/blob/master/src/main/kubernetes/configmap.yaml"}),"here"),") with the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"})," # USE this if you do not use the anomaly detection service\n oc create configmap agent-cm \\\n --from-literal=REEFER_TOPIC=${PROJECT_NAME}-reefers \\\n --from-literal=TELEMETRY_TOPIC=${PROJECT_NAME}-telemetry \\\n --from-literal=KAFKA_BOOTSTRAP_SERVERS=${CLUSTER_NAME}-kafka-bootstrap.eventstreams.svc:9093 \\\n --from-literal=QUARKUS_KAFKA_STREAMS_APPLICATION_ID=cold-chain-agent-${YOUR_SUFFIX} \\\n --from-literal=KAFKA_SECURITY_PROTOCOL=SSL\n # USE the command below if you USE the anomaly detection service\n oc create configmap agent-cm \\\n --from-literal=REEFER_TOPIC=${PROJECT_NAME}-reefers \\\n --from-literal=TELEMETRY_TOPIC=${PROJECT_NAME}-telemetry \\\n --from-literal=KAFKA_BOOTSTRAP_SERVERS=${CLUSTER_NAME}-kafka-bootstrap.eventstreams.svc:9093 \\\n --from-literal=QUARKUS_KAFKA_STREAMS_APPLICATION_ID=cold-chain-agent-${YOUR_SUFFIX} \\\n --from-literal=KAFKA_SECURITY_PROTOCOL=SSL \\\n --from-literal=PREDICTION_ENABLED=true\n\n")),Object(n.b)("p",{parentName:"li"}," The value of ",Object(n.b)("inlineCode",{parentName:"p"},"TELEMETRY_TOPIC")," should match the value used in the creation of the ",Object(n.b)("inlineCode",{parentName:"p"},"reefer-simul-cmap")," ConfigMap above.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Define a secret for the agent, according to the option you selected:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"# without anomaly detection\noc create secret generic agent-secrets \\\n--from-literal=KAFKA_USER=${TLS_USER} \\\n")),Object(n.b)("p",{parentName:"li"},"For anomaly detection you need a user and an api_key, the anonmaly detection URL and the CP4D IAM authorization API to get the token, then do:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"# For anomaly detection\noc create secret generic agent-secrets \\\n--from-literal=ANOMALY_DETECTION_URL=https://zen-cpd-ze.../predictions?version=2021-01-28 \\\n--from-literal=KAFKA_USER=${TLS_USER} \\\n--from-literal=CP4D_USER=<cp4d user>   \\\n--from-literal=CP4D_APIKEY=<apikey>  \\\n--from-literal=CP4D_AUTH_URL=<cp4d url>\\\n--from-literal=CP4D_USER=<cp4d user> \\\n--from-literal=CP4D_AUTH_URL=<cp4d API to get user token>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Deploy the microservice components. You have two choices depending of the fact you have cloned the repository or not."),Object(n.b)("p",{parentName:"li"},"If you have clone the repository use:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"./mvnw clean package -Dquarkus.kubernetes.deploy=true -DskipTests\n")),Object(n.b)("p",{parentName:"li"},"If not try this deployment config:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/vaccine-monitoring-agent/master/src/main/kubernetes/deployment.yml\n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("em",{parentName:"p"},"The deployment.yaml is created using the ",Object(n.b)("inlineCode",{parentName:"em"},"application.properties")," and with the following command: ",Object(n.b)("inlineCode",{parentName:"em"},"./mvnw clean package")," and placed under ",Object(n.b)("inlineCode",{parentName:"em"},"target/kubernetes"),". We have copied this generated file for convenience and update the container image to download from Docker Hub.")))),Object(n.b)("h2",null,"Scenario script"),Object(n.b)("p",null,"Once the solution is up and running, execute the following steps to present an end-to-end demonstration:"),Object(n.b)("h3",null,"Generate vaccine container telemetry events"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Access the Vaccine Reefer Simulator’s Flasgger UI via the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'oc get route vaccine-reefer-simulator -o jsonpath="http://{.status.ingress[0].host}"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In your web browser got the above URL and expand the ",Object(n.b)("strong",{parentName:"p"},"POST ",Object(n.b)("inlineCode",{parentName:"strong"},"/control"))," and click ",Object(n.b)("strong",{parentName:"p"},"Try it out"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In the ",Object(n.b)("strong",{parentName:"p"},"Edit Value")," text box, update the values of the records accordingly:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"containerID"),": ",Object(n.b)("inlineCode",{parentName:"li"},"C01")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"nb_of_records"),": ",Object(n.b)("inlineCode",{parentName:"li"},"500")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"product_id"),": ",Object(n.b)("inlineCode",{parentName:"li"},"covid-19")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"simulation"),": ",Object(n.b)("inlineCode",{parentName:"li"},"temperature")))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Execute"),"."))),Object(n.b)("h3",null,"Analyze simulated reefer telemetry data"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Access the Event Streams Console UI via the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'oc get route -n eventstreams ${CLUSTER_NAME}-ibm-es-ui -o jsonpath="https://{.status.ingress[0].host}"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Topics")," from the left navigation menu and select the topic that matches the ",Object(n.b)("inlineCode",{parentName:"p"},"TELEMETRY_TOPIC")," values.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Explore the messages tab and the individual telemetry records emitted by the Vaccine Reefer Simulator component."))),Object(n.b)("h3",null,"Analyze generated cold-chain violations"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Topics")," from the left navigation menu and select the topic that matches the ",Object(n.b)("inlineCode",{parentName:"p"},"reefer-topic")," value.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Explore the messages tab and the observed vaccine cold-chain violation alert events.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The reefer container information contained in this topic have been identified as having observed temperatures outside the allowable range more than the allowable number of times, as determined to preserve the state of the vaccine doses contained.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get the service routes with ",Object(n.b)("inlineCode",{parentName:"p"},'oc get route reefer-monitoring-agent -o jsonpath="http://{.status.ingress[0].host}"'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"You may go to the service API at the ",Object(n.b)("inlineCode",{parentName:"p"},"<URL>/swagger-ui/")," and use the interactive query to see the state of the container ",Object(n.b)("inlineCode",{parentName:"p"},"C10"),":"),Object(n.b)("p",{parentName:"li"}," ",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.166666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA2UlEQVQY042Qy2oCQRBF+/8/xYjJxoUbP8AkmwiCuBSVhOl3z3T19AzX6jYDSUgwi0MVxa3XFfPlGm+7A5zzaKSCUhqSiZHQ9z1SSvcpuhiRrIXQPsK2hHEcMQwDD8nI+UYZ+C+KlvgAKSFO5wu8VnUDJULTNAgh8EAW8vbpSuKGu7BWlPfa0H42TY3fX6I/Bv62SOxOHWbPBo+vGosXjSeOq62peaHUHzYK+6NBFxysdey3gzGGv5E1/4r4kAbvysPHAbbr4bqMlnKNE5ahlKvHxdspFjt+1q6TUc0TE/CmYwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3",title:"3",src:"/vaccine-solution-main/static/aca97b068746e55db8da6b4ff92f06c5/3cbba/test-iquery.png",srcSet:["/vaccine-solution-main/static/aca97b068746e55db8da6b4ff92f06c5/7fc1e/test-iquery.png 288w","/vaccine-solution-main/static/aca97b068746e55db8da6b4ff92f06c5/a5df1/test-iquery.png 576w","/vaccine-solution-main/static/aca97b068746e55db8da6b4ff92f06c5/3cbba/test-iquery.png 1152w","/vaccine-solution-main/static/aca97b068746e55db8da6b4ff92f06c5/b5ea2/test-iquery.png 1318w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",{parentName:"li"}," The response may look like:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'{\n "alreadyReportedColdChainViolation": false,\n "maxRecordToKeep": 25,\n "maxTemperature": -9,\n "maxTemperatureRegistered": -20,\n "maxViolationAllowed": 10,\n "reeferID": "C10",\n "temperatureList": [\n   -49.92182102,\n   -49.22471643,\n   -50.9776016,\n   -31.07841667,\n   -28.75859987,\n   -32.18018047,\n   -31.04312727,\n   -28.70898255,\n   -32.03926825,\n   -31.86666432,\n   -30.40963273,\n   -49.07404188\n ],\n "tooManyViolations": false,\n "violatedTemperatureCount": 0\n}\n')))),Object(n.b)("h3",null,"Anomaly detection"),Object(n.b)("p",null,"If you have deployed the anomaly detection model to Watson ML and configured the monitoring agent to call this entity, then the reefer topic will contain new message about potential issue on this refrigerator container. The downstream ",Object(n.b)("inlineCode",{parentName:"p"},"reefer manager service")," will assess the number of time this refrigerator was flagged as adnormal, and will trigger a business process in BPM. See ",Object(n.b)("a",o({parentName:"p"},{href:"/vaccine-solution-main/solution/bpm/"}),"this note")," for the process application implementation detail."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"note that the process application needs to be updated and the reefer manager service implemented to get the end to end scenario covered")),Object(n.b)("h3",null,"Clearing the project"),Object(n.b)("p",null,"To delete the different resources do the following:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc delete cm agent-cm\noc delete cm reefer-simul-cm\noc delete secret agent-secrets\noc delete secret reefer-simul-secret\noc delete deployment vaccine-reefer-simulator\noc delete deploymentconfig reefer-monitoring-agent\noc delete project coldchain\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-cold-chain-index-mdx-8293913439ef28c94607.js.map