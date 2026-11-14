import test from 'node:test';
import assert from 'node:assert/strict';
import {seal,unseal} from '../crypto.mjs';
test('protected content opens only with matching credentials and intact bytes',async()=>{const b=await seal('conteúdo de teste','Example','test-only-password');assert.equal(await unseal(b,' example ','test-only-password'),'conteúdo de teste');await assert.rejects(()=>unseal(b,'other','test-only-password'));await assert.rejects(()=>unseal(b,'Example','wrong'));await assert.rejects(()=>unseal({...b,data:'AAAA'+b.data.slice(4)},'Example','test-only-password'));await assert.rejects(()=>unseal({...b,iterations:1},'Example','test-only-password'))});
