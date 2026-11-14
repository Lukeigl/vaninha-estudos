# Vaninha · Espaço de estudo

Ambiente de Química Orgânica preparado para Vanessa, inspirado na experiência de estudo da Hanna e mantido em repositório independente.

## Conteúdo e recursos
- Cinco módulos e 30 etapas guiadas, com leitura completa e notas.
- 60 objetivas comentadas, 15 discursivas com roteiro de autoavaliação e flashcards.
- Simulados por assunto, distribuição equilibrada sem repetição, gabarito só após finalizar, histórico e revisão de erros.
- Consulta de 17 funções/famílias, cinco listas originais em Word e 72 imagens ampliáveis, incluindo páginas manuscritas dos anexos.
- Layout para computador e celular. Progresso salvo no navegador, sem sincronização.

Os treinos e comentários são autorais, alinhados ao escopo enviado. Não são gabarito oficial integral das listas. A cópia duplicada de Hidrocarbonetos foi agrupada por SHA-256. As anotações manuscritas não foram tratadas como autoridade.

## Proteção do material
`content.enc.json` é um pacote AES-256-GCM, com chave derivada de usuário e senha via PBKDF2-SHA256, 600.000 iterações, salt e IV aleatórios. As credenciais não ficam em arquivos, código ou armazenamento do navegador. Os documentos, figuras e respostas só são carregados na interface após a descriptografia.

Este é um desbloqueio criptográfico local, não uma conta de servidor. Cópias cifradas podem sofrer tentativas offline, portanto a resistência depende da senha. Trocar as credenciais exige gerar um pacote novo e não revoga cópias antigas. Progresso local permanece legível no navegador usado e deve ser tratado como dado desse dispositivo. Sair recarrega a entrada; não apaga o progresso.

## Desenvolvimento
Site estático sem etapa de compilação. Node.js 20+.

```sh
npm ci
npm test
python -m http.server 8765 --bind 127.0.0.1
```

Use HTTPS na publicação ou localhost no desenvolvimento, necessários para Web Crypto. Dependências npm são apenas de testes; o site usa APIs nativas do navegador. Fontes tipográficas têm fallback local se o provedor externo estiver indisponível.

Os testes usam conteúdo sintético e credenciais fictícias. Dados didáticos e anexos abertos, screenshots após login e senhas nunca devem ser adicionados ao Git.

## Atualizar o conteúdo
`scripts/package.mjs` recebe JSON exclusivamente por stdin: `mode` (`encrypt` ou `decrypt`), `user`, `password`, `input`, `output`. Execute por um processo que forneça stdin privado, sem inserir senha em argumentos, histórico do shell ou arquivo de configuração. O script não imprime conteúdo nem credenciais. O arquivo aberto de entrada/saída deve ficar fora do repositório. Após editar, cifre novamente e publique apenas `content.enc.json`.

O pacote aberto é JSON com `topics`, `questions`, `essays`, `functionsTable`, `sources` e `references`; cada questão deve ter ID estável. Mantenha os IDs existentes para preservar o progresso. O mecanismo de proteção foi reutilizado do projeto de referência `Lukeigl/hannacaradebanana`.
