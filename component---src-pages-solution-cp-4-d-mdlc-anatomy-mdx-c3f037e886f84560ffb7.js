(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{mTgX:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return r})),o.d(t,"default",(function(){return d}));o("91GP"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("q1tI");var a=o("7ljp"),n=o("013z");o("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var r={},i={_frontmatter:r},s=n.a;function d(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["components"]);return Object(a.b)(s,l({},i,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this section has step by step guidance on how to develop and deploy a model using a simple Model Development Lifecycle Workflow with Governance in Cloud Pak For Data. We show here a very basic workflow. The workflow can be made as complex as needed with sub-workflow with more manual and system controlled gates as needed by a customer."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 1 : Initiate Model Development Lifecycle")),Object(a.b)("p",null,"Role - ModelManager"),Object(a.b)("p",null,"a. Login to OpenPages. Create a Model in OpenPages and assign it Proposed stage\nb. Provide Description with Model’s details. Additional Description with Model purpose, Data Sources to be used.\nc. Select Yes for the fields Machine Learning Model, Monitored With OpenScale. Select Yes for Usability Status\nd. Create a Catalog for the model in Watson Knowledge Catalog. Provide the name and link of the Catalog in the respective fields.\ne. Save the Model Workflow."),Object(a.b)("p",null,"Role - ModelOwner"),Object(a.b)("p",null,"f. Login to OpenPages. Go to the Model. Review the Model Deatils\ng. Change the model status to Approved for Data Acquisition. Save the Model Workflow."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 2 : Data Acquizition, Feature Engineering and Model Development")),Object(a.b)("p",null,"Role - ModelDataEnginner"),Object(a.b)("p",null,"a. Login to OpenPages. Get Model details. Get Catalog name. Get Data Asset name.\nb. Create a Analytics Project in Cloud Pak For Data\nc. To the project add the Notebook provided for acquiring Data from Kafka in Clous Pak For Integration\nd. Run the Notebook. It will generate the data in a csv file.\ne. Publish the CSV file to Catalog designated for the Model - give the Data Asset an appropriate name. Also publish the Notebook to the Catalog.\nf. Go to the OpenPages. Update the name of the Raw Data Asset published to the Catalog to the appropriate field of the Catalog. Change the Model Status to Data Acquisition Completed."),Object(a.b)("p",null,"Role - ModelOwner"),Object(a.b)("p",null,"g. Login to OpenPages. Go to the Model. Check the name of the Data Asset for model development. Go to the Catalog. Review the Raw Data Asset.\nh. Change the model status to Approved for Feature Engineering. Save the Model Workflow."),Object(a.b)("p",null,"Role - ModelDeveloper"),Object(a.b)("p",null,"a. Login to OpenPages. Get Model details. Get Catalog name.\nb. Create a Analytics Project in Cloud Pak For Data\nc. To the project add the Data Asset from the Catalog.\nd. Use Refinery to do the feature engineering as provided in the Solution section. Add the Anomaly Flag. Alyternatively one can use Notebooks or SPSS Modleer for the Feature Engineering.\ne. Publish the Feature Engineered Data to Catalog. Give the Data Asset an appropriate name and tag it appropriately. Also publish the Data Refinery Flow (export from project and import as data asset) to the Catalog.\nf. Go to the OpenPages. Update the name of the Featured Engineered Data Asset published to the Catalog to the appropriate field of the Catalog. Change the Model Status to Feature Engineering Completed."),Object(a.b)("p",null,"Role - ModelOwner"),Object(a.b)("p",null,"g. Login to OpenPages. Go to the Model. Check the name of the Feature Engineered Data Asset for model development. Go to the Catalog. Review the Data Asset\nh. Change the model status to Approved for Development. Save the Model Workflow."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-cp-4-d-mdlc-anatomy-mdx-c3f037e886f84560ffb7.js.map