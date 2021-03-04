/* 
// Pour organiser son project tu dois faire ceci:

- "models"  folder est ou tu mets ceci:

schema,model,FunctionAdddata,FunctionDeletedata,......

- "lib/db" folder est ou tu mets ceci:

mongoose.connect(uri,{use.....})

- "controller" folder est ou tu met:

toutes les functions avec req,res,:function(req,res){
blablabla
}
- "midleware" folder est ou tu met toues les middlewares:
validation,veryfytoken,errorhandeln

- "routes" folder est ou tu met:
 tous les route dans ton  site et tu les exportes aussi

 - dans le repository qui contient tous ce que j'ai siter plus haut, tu dois juste mettre le fichier index.js ou tu dois importer tout laba 

*/