# MovieArcade — React Native

**Aluno:** Kevin Silva Ramos  
**Disciplina:** Programação para Dispositivos Móveis I  
**Aplicação:** MovieArcade  
**Versão:** 1.0.0

## O que é

O MovieArcade nasceu como um [projeto web de cinema](https://github.com/devkevinsramos/moviearcade), com catálogo de filmes e experiências interativas. Este aplicativo apresenta o projeto em quatro telas: Login, Home, Sobre e Contato. Não é uma versão completa do site.

A interface usa fundo escuro, textos claros e o logotipo do MovieArcade. O layout é simples, sem animações ou cards decorativos.

## Tecnologias

- JavaScript e React Native
- Expo (SDK 57)
- React Navigation (Native Stack)
- React Hooks (`useState`)
- `StyleSheet` para os estilos

## Como executar

É necessário ter Node.js compatível com o Expo SDK 57 (Node 22.13 ou superior é uma opção), npm e um dispositivo ou emulador compatível.

1. Abra esta pasta no VS Code (a pasta que contém o arquivo `package.json`).
2. No terminal, execute:

   ```powershell
   npm install
   npx expo start
   ```

3. Abra no dispositivo usando uma opção compatível com o SDK 57 (Expo Go ou uma build de desenvolvimento). Consulte as opções indicadas pelo terminal do Expo.

No PowerShell, caso o comando `npm` esteja bloqueado pela política de execução, use `npm.cmd` e `npx.cmd`.

> **Observação:** a instalação e a execução devem ser verificadas no seu ambiente. Este pacote contém o código-fonte, sem a pasta `node_modules`.

## Credenciais de teste

- **Usuário:** `martymauser`
- **Senha:** `tenisdemesa`

As credenciais estão definidas em `src/config/access.js`. O login é uma simulação. Não usa API, banco de dados, `localStorage` nem salva sessão. Ao sair ou reiniciar o aplicativo, o usuário volta à tela de Login.

## Funcionalidades

- **Login:** campos de usuário e senha, senha oculta, opção de mostrar/ocultar, validação, botão Entrar e botão Limpar campos.
- **Home:** mensagem de boas-vindas, opções Sobre e Contato e link para o GitHub do projeto web.
- **Sobre:** origem do projeto, missão, visão, valores, versão e informações acadêmicas.
- **Contato:** telefone, e-mail, endereço e horário de atendimento fictícios.
- **Toolbar:** título de cada tela, retorno às telas anteriores, opção Início nas telas internas e Sair na Home.

## Organização do projeto

```text
MovieArcade_React_Native/
├── App.js
├── index.js
├── app.json
├── package.json
├── README.md
├── assets/             # Ícone e logotipo
├── prints/             # Capturas das telas para a entrega
└── src/
    ├── components/     # Botão, navegação e textos reutilizados
    ├── config/         # Credenciais do login de demonstração
    ├── navigation/     # Rotas e Toolbar
    ├── screens/        # Telas Login, Home, Sobre e Contato, com seus estilos
    └── theme/          # Cores e estilos em comum
```

## Testes antes da entrega

Execute os testes abaixo no aplicativo. O resultado esperado está indicado em cada item.

| Teste | Ação | Resultado esperado |
| --- | --- | --- |
| 1 | Informar apenas a senha | Mensagem "Informe o usuário." |
| 2 | Informar apenas o usuário | Mensagem "Informe a senha." |
| 3 | Informar credenciais incorretas | Mensagem de erro, sem sair do Login |
| 4 | Informar as credenciais corretas | Abre a Home |
| 5 | Home → Sobre | Abre Sobre com sua Toolbar |
| 6 | Sobre → Home | Retorna para Home (Voltar ou Início) |
| 7 | Home → Contato | Abre Contato com sua Toolbar |
| 8 | Contato → Home | Retorna para Home (Voltar ou Início) |
| 9 | Fechar completamente e reabrir o aplicativo | Começa novamente em Login |

Teste também os botões **Limpar campos**, **Mostrar/Ocultar senha**, **Sair** e o link do GitHub. Confira a aparência em um celular real ou emulador.

## Capturas para a entrega

Após testar a versão final, salve capturas reais das seguintes telas na pasta `prints/`:

- `login.jpg` (preferencialmente com os campos de teste preenchidos);
- `home.jpg`;
- `sobre.jpg`;
- `contato.jpg`.

**As capturas não acompanham este ZIP.** As imagens antigas foram retiradas porque mostram uma interface anterior. Adicione os quatro prints atualizados ao repositório antes de entregar o trabalho.

## Observação acadêmica

Este aplicativo é uma adaptação mobile do meu projeto web MovieArcade para o exercício de navegação e Toolbar. Antes de entregar, revise o código, execute os testes e siga as orientações da instituição sobre autoria e uso de ferramentas de IA.
