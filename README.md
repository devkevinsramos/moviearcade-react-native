# MovieArcade — React Native

**Aluno:** Kevin Silva Ramos  
**Disciplina:** Programação para Dispositivos Móveis I  
**Aplicativo:** MovieArcade  
**Versão:** 1.0.0

## Descrição

Aplicativo institucional de demonstração do MovieArcade, projeto web autoral sobre cinema. Esta versão mobile apresenta a proposta do site e informações institucionais, sem reproduzir o catálogo ou os minigames da versão web.

## Tecnologias

- JavaScript e React Native.
- Expo SDK 57 (mesma configuração do aplicativo Casa do Bairro já testado).
- React Navigation 7 com Native Stack.
- `StyleSheet`, `useState`, `TextInput`, `Pressable`, `ScrollView`, `Image` e `Linking`.

Não há backend, banco de dados, integração de login ou armazenamento persistente.

## Instalação e execução no Windows

Requisitos: Windows, VS Code ou terminal, Node.js e npm, Expo Go compatível com o Expo SDK do projeto e celular na mesma rede do computador, quando utilizar LAN.

1. Extraia o ZIP.
2. Abra a pasta `moviearcade-react-native` no VS Code.
3. No terminal, entre na pasta que contém o `package.json`.
4. Execute:

```powershell
npm install
npx expo start
```

5. Abra o Expo Go no iPhone e leia o QR Code apresentado no terminal.

Se a conexão local não funcionar, experimente `npx expo start --tunnel`. A conexão usada pelo Expo é apenas para carregar o aplicativo durante o desenvolvimento; não faz parte de um sistema de autenticação.

Para verificar a compatibilidade das dependências instaladas com o Expo:

```powershell
npx expo install --check
```

## Credenciais de teste

- **Usuário:** `martymauser`
- **Senha:** `tenisdemesa`

As credenciais ficam fixas em `src/data/credenciais.js`, para fins acadêmicos. O estado de autenticação existe apenas em memória: ao sair ou reiniciar o aplicativo, o fluxo retorna ao Login.

## Funcionalidades

- Tela inicial de Login, com validação de campos obrigatórios e de credenciais.
- Mensagens de erro, botão para limpar campos e opção de mostrar/ocultar senha.
- Home com boas-vindas e navegação para Sobre e Contato.
- Link para o repositório web original, aberto no navegador via `Linking`.
- Sobre com resumo do site, missão, visão, valores e versão do aplicativo.
- Contato com dados institucionais fictícios.
- Toolbar com título, botão de voltar do React Navigation e opção de Sair na Home.
- Botões entre Sobre e Contato, preservando o histórico da Stack com `navigation.push()`; a seta da Toolbar retorna à tela anterior.
- Estilos em arquivos separados e componentes reutilizáveis.

## Estrutura de diretórios

```text
moviearcade-react-native/
├── App.js
├── index.js
├── app.json
├── package.json
├── .gitignore
├── assets/
│   ├── logo.png
│   ├── icon.png
│   ├── adaptive-icon.png
│   ├── logo-original.svg
│   └── estrelas-originais.svg
├── src/
│   ├── components/
│   │   ├── Botao.js
│   │   └── LinkPagina.js
│   ├── data/
│   │   └── credenciais.js
│   ├── navigation/
│   │   └── Rotas.js
│   ├── pages/
│   │   ├── Login/
│   │   ├── Home/
│   │   ├── Sobre/
│   │   └── Contato/
│   └── styles/
│       ├── cores.js
│       └── global.js
└── capturas/
    └── INSTRUCOES.md
```

As imagens PNG de marca foram produzidas a partir do vetor `logo_m.svg` do projeto MovieArcade original. Os dois SVGs de referência foram preservados na pasta `assets/`.

## Testes antes da entrega

| Teste | Resultado esperado |
| --- | --- |
| Usuário vazio | "Informe o usuário." |
| Senha vazia | "Informe a senha." |
| Dados incorretos | "Usuário ou senha inválidos." e permanece no Login |
| Login correto | Navega para Home |
| Limpar campos | Esvazia os campos e remove mensagens de erro |
| Mostrar/Ocultar | Alterna a visibilidade da senha |
| Home → Sobre / Contato | Abre a tela escolhida com Toolbar correspondente |
| Home → Sobre → Contato → Voltar | Retorna a Sobre |
| Home → Contato → Sobre → Voltar | Retorna a Contato |
| Home → Sobre/Contato → Voltar | Retorna à Home |
| Sair | Volta ao Login |
| Encerrar e reabrir | Abre novamente no Login, sem sessão persistente |
| Botão GitHub | Abre o repositório original no navegador |

Estes testes devem ser executados manualmente no Expo Go antes da entrega. A presença deste checklist não significa que os testes físicos já foram realizados.

## Capturas para a atividade

Após testar no iPhone, salve capturas **reais** das telas em `capturas/`:

- `login.png`
- `home.png`
- `sobre.png`
- `contato.png`

Nenhuma captura foi criada artificialmente. Consulte `capturas/INSTRUCOES.md`.

## Projeto original

Este aplicativo foi adaptado de dois projetos próprios: a estrutura React Native do Casa do Bairro e a identidade visual do site MovieArcade.

Repositório web original: <https://github.com/devkevinsramos/moviearcade>

A atividade exige trabalho autoral e revisão do código. Antes de entregar, leia os arquivos, execute os testes reais, adicione as capturas e siga as orientações da disciplina sobre o uso de ferramentas de IA.
