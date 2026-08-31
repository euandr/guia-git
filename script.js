lucide.createIcons();

function codeHTML(lines) {
  return lines
    .map(([cls, text]) =>
      cls === "path-terminal"
        ? `<p><span class="path-terminal">${text}</span></p>`
        : `<p class="${cls}">${text}</p>`,
    )
    .join("");
}

const commands = {
  status: {
    title: "git status",
    description:
      "Exibe o estado atual do diretório de trabalho e mostra quais arquivos foram modificados, preparados ou ainda não rastreados.",
    code: [
      ["path-terminal", "$ git status"],
      ["color-gray", "On branch main"],
      ["color-red", "modified: src/app.js"],
      ["color-red", "modified: style.css"],
      ["color-green-light", "nothing committed yet"],
    ],
  },
  add: {
    title: "git add .",
    description:
      "Move as alterações escolhidas para a staging area, preparando exatamente o que será incluído no próximo commit.",
    code: [
      ["path-terminal", "$ git add ."],
      ["color-gray", "Changes to be committed:"],
      ["color-green-light", "new file: index.html"],
      ["color-green-light", "modified: app.js"],
    ],
  },
  commit: {
    title: 'git commit -m "mensagem"',
    description:
      "Cria um snapshot permanente das alterações que estão na staging area e adiciona esse ponto ao histórico do projeto.",
    code: [
      ["path-terminal", '$ git commit -m "feat: dashboard"'],
      ["color-green-light", "[main a81c2e9]"],
      ["color-gray", "2 files changed"],
      ["color-green-light", "create mode 100644 index.html"],
    ],
  },
  branch: {
    title: "git branch",
    description:
      "Lista, cria ou remove branches. Branches permitem desenvolver funcionalidades isoladamente sem alterar diretamente a linha principal.",
    code: [
      ["path-terminal", "$ git branch"],
      ["color-green-light", "* main"],
      ["color-purple", "  feature/auth"],
      ["color-purple", "  feature/ui"],
    ],
  },
  push: {
    title: "git push origin main",
    description:
      "Envia seus commits locais para o repositório remoto, como um repositório hospedado no GitHub.",
    code: [
      ["path-terminal", "$ git push origin main"],
      ["color-gray", "Enumerating objects: 8"],
      ["color-gray", "Writing objects: 100%"],
      ["color-green-light", "Everything up-to-date."],
    ],
  },
  pull: {
    title: "git pull",
    description:
      "Busca as alterações mais recentes do repositório remoto e integra essas mudanças ao seu branch local.",
    code: [
      ["path-terminal", "$ git pull"],
      ["color-gray", "Updating a81c2e9..f92ab31"],
      ["color-gray", "Fast-forward"],
      ["color-green-light", "3 files changed"],
    ],
  },
};

const buttons = document.querySelectorAll(".command-button");
const title = document.getElementById("commandTitle");
const description = document.getElementById("commandDescription");
const code = document.getElementById("commandCode");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const data = commands[button.dataset.command];
    if (!data) return;

    document.querySelector(".command-button.active")?.classList.remove("active");
    button.classList.add("active");

    title.textContent = data.title;
    description.textContent = data.description;
    code.innerHTML = codeHTML(data.code);
  });
});

