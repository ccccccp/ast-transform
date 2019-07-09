const esprima = require("esprima")
const estraverse = require("estraverse")
const escodegen = require("escodegen")
const fs = require("fs");
const code = fs.readFileSync("./ec.js","utf-8")


let treeData = esprima.parseModule(code)
var importDeclarationNameRge = /\w+\d$/;


function waliIn(tree){
  let cache = {}//待替换对象{userHtml3:integral}
  estraverse.traverse(tree,{
    enter:(node)=>{
      chooseImportDeclarationName(node);//替换import变量并保存cache
      chooseDeclarationName(node);
    }
  });
  function chooseImportDeclarationName(node){
    if(
      node.type === 'ImportDeclaration' &&
      node.specifiers.length > 0 && 
      node.specifiers[0].type === 'ImportDefaultSpecifier' &&
      importDeclarationNameRge.test(node.specifiers[0].local.name)
    ){
      var newName = getDeclarationName(node.source.value)
      cache[node.specifiers[0].local.name] = newName
      node.specifiers[0].local.name = newName
    }
  }
  function addParse(node){
    if(node.type === 'CallExpression' && node.callee.name === "parseInt" && node.arguments.length ===1){
      node.arguments.push({
        type:"Literal",
        value:10,
        raw:"10"
      })
    }
  }
  function getDeclarationName(path){
    let fileArr = path.split("/")
    let fileName =  fileArr[fileArr.length-1];
    if(/\.html?$/.test(fileName)){
      // 转驼峰
      fileName = fileName.replace(/-\w{1}/g,function($1,$2,$3){return $1.slice(1,2).toUpperCase()});
      return fileName.replace(/\.html?$/,'Html')
    }
    if(/\.js$/.test(fileName)){
      // 转驼峰
      fileName = fileName.replace(/-\w{1}/g,function($1,$2,$3){return $1.slice(1,2).toUpperCase()});
      //controller.js转Ctrl
      fileName = fileName.replace(".controller","Ctrl");
      //去除.js
      fileName = fileName.replace(".js","");
      return fileName;
    }
    return fileName
  }
  function chooseDeclarationName(node){
    if(
      (node.type === 'Identifier' && cache[node.name])
    ){
      node.name = cache[node.name]
    }
  }
}

//转换json
waliIn(treeData)

//生成目标代码
const transformedCode = escodegen.generate(treeData);

fs.writeFileSync("./output-ec.js",transformedCode)
