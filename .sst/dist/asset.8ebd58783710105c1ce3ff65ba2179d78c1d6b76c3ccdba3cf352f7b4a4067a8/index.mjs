globalThis.openNextDebug = false;globalThis.openNextVersion = "2.3.8";
import{BatchWriteItemCommand as i,DynamoDBClient as C}from"@aws-sdk/client-dynamodb";import{readFileSync as d}from"fs";var m=()=>{let e=process.env.DYNAMO_BATCH_WRITE_COMMAND_CONCURRENCY,n=e?parseInt(e):void 0;return n&&!isNaN(n)?n:4};function s(e,n){return e.reduce((r,a,o)=>{let t=Math.floor(o/n);return r[t]=[...r[t]??[],a],r},new Array)}var p="dynamodb-cache",N=new C({});async function M(e){switch(e.RequestType){case"Create":case"Update":return h();case"Delete":return E()}}async function h(){let e=process.env.CACHE_DYNAMO_TABLE,n=d("dynamodb-cache.json","utf8"),u=JSON.parse(n),a=s(u,25).map(t=>({RequestItems:{[e]:t.map(c=>({PutRequest:{Item:c}}))}})),o=s(a,m());for(let t of o)await Promise.all(t.map(c=>N.send(new i(c))));return{PhysicalResourceId:p,Data:{}}}async function E(){return{PhysicalResourceId:p,Data:{}}}export{M as handler};
