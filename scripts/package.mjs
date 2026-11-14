import {readFile,writeFile} from 'node:fs/promises';
import {resolve,relative,isAbsolute,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {seal,unseal} from '../crypto.mjs';
if(process.stdin.isTTY)throw Error('Provide configuration using private piped stdin, not terminal input.');
let input='';for await(const chunk of process.stdin)input+=chunk;
const cfg=JSON.parse(input);input='';
if(!['encrypt','decrypt'].includes(cfg.mode)||!cfg.user||!cfg.password||!cfg.input||!cfg.output)throw Error('Required: mode, user, password, input, output');
const root=fileURLToPath(new URL('../',import.meta.url));
const plainPath=resolve(cfg.mode==='decrypt'?cfg.output:cfg.input),rel=relative(root,plainPath);
if(!(rel==='..'||rel.startsWith('..'+sep)||isAbsolute(rel)))throw Error('Plaintext must remain outside the repository.');
if(cfg.mode==='decrypt'){await writeFile(cfg.output,await unseal(JSON.parse(await readFile(cfg.input,'utf8')),cfg.user,cfg.password),{mode:0o600})}
else{const plain=await readFile(cfg.input,'utf8');JSON.parse(plain);const bundle=await seal(plain,cfg.user,cfg.password);if(await unseal(bundle,cfg.user,cfg.password)!==plain)throw Error('Roundtrip failed');await writeFile(cfg.output,JSON.stringify(bundle))}
cfg.password='';console.log('Package operation verified.');
