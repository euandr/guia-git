lucide.createIcons();

const commands = {
  status: {
    title: "git status",
    description:
      "Exibe o estado atual do diretório de trabalho e mostra quais arquivos foram modificados, preparados ou ainda não rastreados.",
    code: `
      <p><span class="path-terminal">$ git status</span></p>
      <p class="color-gray">On branch main</p>
      <p class="color-red">modified: src/app.js</p>
      <p class="color-red">modified: style.css</p>
      <p class="color-green-light">nothing committed yet</p>
    `,
  },
  add: {
    title: "git add .",
    description:
      "Move as alterações escolhidas para a staging area, preparando exatamente o que será incluído no próximo commit.",
    code: `
      <p><span class="path-terminal">$ git add .</span></p>
      <p class="color-gray">Changes to be committed:</p>
      <p class="color-green-light">new file: index.html</p>
      <p class="color-green-light">modified: app.js</p>
    `,
  },
  commit: {
    title: 'git commit -m "mensagem"',
    description:
      "Cria um snapshot permanente das alterações que estão na staging area e adiciona esse ponto ao histórico do projeto.",
    code: `
      <p><span class="path-terminal">$ git commit -m "feat: dashboard"</span></p>
      <p class="color-green-light">[main a81c2e9]</p>
      <p class="color-gray">2 files changed</p>
      <p class="color-green-light">create mode 100644 index.html</p>
    `,
  },
  branch: {
    title: "git branch",
    description:
      "Lista, cria ou remove branches. Branches permitem desenvolver funcionalidades isoladamente sem alterar diretamente a linha principal.",
    code: `
      <p><span class="path-terminal">$ git branch</span></p>
      <p class="color-green-light">* main</p>
      <p class="color-purple">  feature/auth</p>
      <p class="color-purple">  feature/ui</p>
    `,
  },
  push: {
    title: "git push origin main",
    description:
      "Envia seus commits locais para o repositório remoto, como um repositório hospedado no GitHub.",
    code: `
      <p><span class="path-terminal">$ git push origin main</span></p>
      <p class="color-gray">Enumerating objects: 8</p>
      <p class="color-gray">Writing objects: 100%</p>
      <p class="color-green-light">Everything up-to-date.</p>
    `,
  },
  pull: {
    title: "git pull",
    description:
      "Busca as alterações mais recentes do repositório remoto e integra essas mudanças ao seu branch local.",
    code: `
      <p><span class="path-terminal">$ git pull</span></p>
      <p class="color-gray">Updating a81c2e9..f92ab31</p>
      <p class="color-gray">Fast-forward</p>
      <p class="color-green-light">3 files changed</p>
    `,
  },
};

const commandButtons = document.querySelectorAll(".command-button");
const commandTitle = document.getElementById("commandTitle");
const commandDescription = document.getElementById("commandDescription");
const commandCode = document.getElementById("commandCode");

commandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const data = commands[button.dataset.command];
    if (!data) return;

    commandButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    commandTitle.textContent = data.title;
    commandDescription.textContent = data.description;
    commandCode.innerHTML = data.code;
  });
});
