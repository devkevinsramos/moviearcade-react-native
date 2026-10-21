# MovieArcade — React Native

**Aluno:** Kevin Silva Ramos  
**Disciplina:** Programação para Dispositivos Móveis I  
**Aplicativo:** MovieArcade  
**Versão:** 1.0.0

## Sobre o projeto

O MovieArcade começou como um [projeto para web](https://github.com/devkevinsramos/moviearcade) sobre cinema, com filmes, listas e jogos. Nesta atividade, adaptei sua identidade visual para um aplicativo mobile simples, com Login, Home, Sobre e Contato.

O objetivo desta versão é demonstrar a navegação entre telas, o uso da Toolbar, a validação de um login de exemplo e a estilização com `StyleSheet`. Não é uma versão completa do site.

## Tecnologias utilizadas

- JavaScript
- React Native
- Expo (SDK 57)
- React Navigation (Native Stack)
- `StyleSheet` para os estilos

## Como executar

É necessário ter o Node.js e o npm instalados. O aplicativo pode ser aberto em um celular ou emulador compatível com o Expo.

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. No terminal, instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o aplicativo:

   ```bash
   npx expo start
   ```

5. Siga as instruções exibidas no terminal para abrir o aplicativo no celular ou emulador.

## Credenciais de teste

- **Usuário:** `martymauser`
- **Senha:** `tenisdemesa`

O login é apenas uma simulação. As credenciais ficam definidas no arquivo `src/config/access.js`. Não há cadastro, banco de dados, API ou armazenamento de sessão. Ao fechar completamente o aplicativo e abri-lo novamente, a tela inicial será o Login.

## Funcionalidades

- **Login:** campos de usuário e senha, validação de campos vazios, mensagem para credenciais incorretas, opção de mostrar a senha, botão Entrar e botão Limpar campos.
- **Home:** mensagem de boas-vindas, navegação para Sobre e Contato e acesso ao repositório do projeto web.
- **Sobre:** descrição do MovieArcade, missão, visão, valores e informações do projeto.
- **Contato:** telefone, e-mail, endereço e horário de atendimento fictícios.
- **Toolbar:** título da tela, botão Início para retornar à Home e botão Sair para voltar ao Login.

O aplicativo usa fundo escuro, detalhes em laranja e estilos definidos com `StyleSheet`, mantendo a mesma identidade visual nas telas.

## Organização das pastas

```text
MovieArcade_React_Native/
├── App.js
├── index.js
├── app.json
├── package.json
├── README.md
├── assets/             # Logotipo e ícones
├── prints/             # Capturas das quatro telas
└── src/
    ├── components/     # Componentes reutilizados
    ├── config/         # Credenciais de demonstração
    ├── navigation/     # Navegação e Toolbar
    ├── screens/        # Login, Home, Sobre e Contato
    └── theme/          # Cores e estilos compartilhados
```

## Capturas de tela

### Login

![Tela de Login do MovieArcade](prints/login.png)

### Home

![Tela Home do MovieArcade](prints/home.png)

### Sobre

![Tela Sobre do MovieArcade](prints/sobre.png)

### Contato

![Tela Contato do MovieArcade](prints/contato.png)

## Testes da atividade

Os cenários abaixo devem ser conferidos ao executar o aplicativo:

| Teste | Resultado esperado |
| --- | --- |
| Login sem usuário | Exibe a mensagem para preencher o usuário |
| Login sem senha | Exibe a mensagem para preencher a senha |
| Login com dados incorretos | Exibe uma mensagem de erro e permanece no Login |
| Login com dados corretos | Abre a Home |
| Home → Sobre | Abre a tela Sobre com sua Toolbar |
| Sobre → Home | Retorna à Home |
| Home → Contato | Abre a tela Contato com sua Toolbar |
| Contato → Home | Retorna à Home |
| Fechar e abrir novamente | Começa na tela de Login |

## Projeto original

Site: https://devkevinsramos.github.io/moviearcade/index.html  
Repositório: https://github.com/devkevinsramos/moviearcade
