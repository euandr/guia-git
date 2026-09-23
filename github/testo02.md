# GITHUB: 
## Seu Trabalho em Equipe na Nuvem

O GitHub é a plataforma web na nuvem onde os seus repositórios Git ganham vida colaborativa. Enquanto o Git cuida do histórico de versões no seu computador local, o GitHub centraliza o projeto na nuvem, permitindo que múltiplas pessoas trabalhem juntos, revisem o código dos colegas, organizem tarefas e evitem conflitos.

---

## 1. Ambiente Remoto e Segurança

Antes de enviar a primeira linha de código para o grupo, é preciso preparar o terreno: criar sua conta no servidor remoto e configurar as chaves de acesso.

### Criando sua Conta e Interface Web
  1. Acesse github.com e crie uma conta (dica: utilize seu e-mail acadêmico se tiver um).
  2. Explore a interface principal:
    * Dashboard: Onde aparecem seus projetos e atualizações da equipe.
    * Repositories (Repositórios): Onde ficam guardados os arquivos e o histórico de commits do seu grupo.
### Autenticação Segura (Personal Access Tokens ou SSH)
  Por razões de segurança, o GitHub não permite usar sua senha tradicional para enviar comandos pelo terminal. Você deve configurar uma destas opções:
    * Token de Acesso Pessoal (PAT): Uma senha gerada pelo site (Settings > Developer Settings > Personal Access Tokens) usada na hora de autenticar no terminal.
    * Chave SSH (Recomendado): Um par de chaves criptográficas que conecta seu computador ao GitHub de forma transparente e permanente.
### Gerenciamento de Colaboradores
  Para que todo o grupo possa alterar o mesmo repositório:
    1. Vá até o repositório do projeto no site do GitHub.
    2. Clique em Settings > Collaborators.
    3. Clique em Add people e insira o nome de usuário ou e-mail dos colegas de grupo.
    4. Cada membro receberá um convite por e-mail e precisará aceitá-lo para ter permissão de escrita.

---

## 2. Sincronização de Código (Local ⇆ Nuvem)

Com a equipe cadastrada, o próximo passo é conectar o computador de cada membro ao servidor do GitHub.
img = git-vs-github,svg
[Seu Computador (Local)]  <--- git pull / git push --->  [GitHub (Nuvem)]

### Comandos Fundamentais de Sincronização

#### A. Clonando um repositório existente
  Se o projeto já foi criado no GitHub por um colega, você traz uma cópia completa para o seu PC: 
    git clone https://github.com/usuario/nome-do-projeto.git

#### B. Vinculando uma pasta local nova à nuvem
  Se você começou o trabalho localmente e quer enviá-lo ao GitHub pela primeira vez: 
    git remote add origin https://github.com/usuario/nome-do-projeto.git

#### C. Enviando atualizações para a nuvem (git push)
  Depois de fazer o git commit das suas alterações locais, envie-as para o GitHub: 
    git push origin main

#### D. Atualizando seu código local (git pull)
  Antes de começar a trabalhar no dia, sempre baixe as alterações mais recentes enviadas pelos seus colegas:
    git pull origin main

Uma boa prática é sempre dar git pull no início do seu expediente de trabalho para evitar trabalhar em uma versão desatualizada do código!

---

## 3. Fluxo de Trabalho em Equipe

Para evitar que duas pessoas alterem a versão principal (main) ao mesmo tempo e estraguem o projeto, adotamos o GitHub Flow.

### A. Trabalhando em Branches
Nunca faça edições diretas na branch main. Crie uma branch para cada tarefa (ex: feature-login, ajuste-relatorio):
git checkout -b feature-login

### B. Pull Requests (PR)
Quando terminar sua parte e fizer o push da sua branch para o GitHub, você abrirá um Pull Request:
• O PR é um pedido formal para "juntar" (merge) o seu código novo com a branch principal (main).
• Nele, você descreve o que fez e marca seus colegas de grupo para analisarem.

### C. Code Review (Revisão de Código)
O processo em que a equipe analisa o trabalho do colega direto pela interface do GitHub:
• É possível deixar comentários em linhas específicas do código.
• Solicitar correções ou aprovar a alteração.
• Isso garante que pelo menos duas pessoas viram o código antes dele ir para a versão final do trabalho.

### D. Resolução de Conflitos de Merge
Se você e um colega alterarem exatamente as mesmas linhas do mesmo arquivo em branches diferentes, o GitHub alertará um Conflito:
1. O GitHub indicará quais arquivos estão em conflito.
2. Você pode usar a interface visual do próprio site ou o seu editor (como VS Code) para escolher qual versão manter (Accept Current, Accept Incoming ou Accept Both).
3. Após resolver o conflito, basta realizar o commit e finalizar o merge do PR.

---

## 4. Gerenciamento de Projetos Acadêmicos

Além de hospedar código, o GitHub funciona como um centro de gerenciamento de tarefas para organizar prazos e entregas do grupo.

### 🐛 GitHub Issues (Lista de Tarefas e Bugs)
As Issues funcionam como cadernos de anotações e entregas do projeto.
• Crie uma Issue para cada tarefa (ex: "Criar introdução do relatório", "Ajustar gráfico de dados").
• Atribua a Issue ao integrante responsável.
• Adicione etiquetas (labels) como bug, documentation ou enhancement.

### 📑 GitHub Projects (Quadro Kanban)
Para visualizar o progresso geral do trabalho em equipe:
• Crie um painel Project integrado ao seu repositório.
• Utilize a visualização em colunas Kanban:
  - To Do (A Fazer): Tarefas pendentes.
  - In Progress (Em Andamento): O que está sendo feito no momento.
  - Done (Concluído): O que já foi revisado e aprovado.
• Conecte as Issues ao quadro para ter uma divisão justa e transparente do trabalho do grupo.