# 🗂️ Guia Prático — Aula 06
## Organizando o Board da Squad no GitHub Projects

**Disciplina:** Projeto Aplicado I — Ibmec 2026.1  
**Professor:** Cristiano de Macedo Neto, M.Sc.  
**Data:** 01/04/2026  

---

> **Como usar este guia**  
> Siga os passos na ordem. Cada seção indica quem executa a ação — o **Líder** (uma pessoa age, todos veem) ou a **Squad inteira** (todos executam ao mesmo tempo). Não pule etapas: cada passo depende do anterior.

---

## Sumário

1. [Antes de Começar](#1-antes-de-começar)
2. [Criar o GitHub Project](#2-criar-o-github-project)
3. [Configurar as Colunas do Board](#3-configurar-as-colunas-do-board)
4. [Criar as Labels](#4-criar-as-labels)
5. [Criar as Issues de Demandas](#5-criar-as-issues-de-demandas--coluna-done)
6. [Criar as Issues de User Stories](#6-criar-as-issues-de-user-stories--coluna-done)
7. [Criar as Issues de Implementação](#7-criar-as-issues-de-implementação-html-css-js)
8. [Distribuir as Issues e Definir Branches](#8-distribuir-as-issues-e-definir-branches)
9. [Issues de Wireframe e Prototipação](#9-issues-de-wireframe-e-prototipação)
10. [Verificação Final](#10-verificação-final)
11. [Erros Comuns](#11-erros-comuns)

---

## 1. Antes de Começar

**Quem:** Squad inteira  
**Tempo estimado:** 5 minutos

Antes de tocar no GitHub, a squad precisa ter em mãos:

- [ ] O link do **repositório da squad** no GitHub
- [ ] A lista final das **Demandas** levantadas (D-01, D-02…)
- [ ] A lista final das **User Stories** escritas (US-01, US-02…)
- [ ] Todos os membros com acesso de **Collaborator** no repositório

> **Como verificar acesso de Collaborator:**  
> Repositório → **Settings** → **Collaborators** → confirme que todos os membros aparecem com status `Accepted`.  
> Se alguém ainda estiver como `Pending`, peça que aceite o convite no e-mail ou em `github.com/notifications`.

---

## 2. Criar o GitHub Project

**Quem:** Líder da Squad  
**Tempo estimado:** 5 minutos

### 2.1 Acessar a aba Projects

1. Abra o repositório da squad no GitHub.
2. Clique na aba **Projects** (entre "Pull requests" e "Actions").
3. Clique no botão **Link a project**.
4. No menu que aparece, clique em **New project**.

### 2.2 Escolher o template

1. Na tela de seleção de templates, escolha **Board**.  
   > ⚠️ Não escolha "Table" nem "Roadmap" — o Board é o formato Kanban que usaremos.
2. No campo **Project name**, digite:
   ```
   Bulbe Energia — Squad Name
   ```
3. Clique em **Create project**.

### 2.3 Vincular o Project ao repositório

O Project é criado na sua conta pessoal do GitHub, mas precisa estar vinculado ao repositório da squad.

1. Dentro do Project recém-criado, clique em **⚙️ Settings** (canto superior direito).
2. No menu lateral, clique em **Manage access**.
3. Em **Base role**, mantenha como `Write` para que todos da squad possam mover cards.
4. Volte ao repositório e repita: aba **Projects** → **Link a project** → selecione o project que acabou de criar.

> **✅ Como confirmar que funcionou:**  
> A aba Projects do repositório deve exibir o board "Bulbe Energia — Sprint 1". Todos os membros da squad devem conseguir abri-lo pelo link do repositório.

---

## 3. Configurar as Colunas do Board

**Quem:** Líder da Squad  
**Tempo estimado:** 5 minutos

O template Board cria três colunas por padrão: *Todo*, *In Progress* e *Done*. Precisamos de cinco.

### 3.1 Colunas que precisam ser criadas

| Ordem | Nome | Significado |
|---|---|---|
| 1 | 📋 Backlog | Itens levantados mas fora da sprint atual |
| 2 | 🔲 To Do | Comprometido para esta sprint, ainda não iniciado |
| 3 | ⚙️ In Progress | Em desenvolvimento agora |
| 4 | 👁 In Review | Pull Request aberto, aguardando revisão da squad |
| 5 | ✅ Done | Mergeado na `main` e testado |

### 3.2 Adicionar "Backlog"

1. No board, clique em **+ Add column** (geralmente aparece à direita das colunas existentes ou no menu de configurações do board).
2. Digite o nome: `📋 Backlog`
3. Arraste a coluna para a **primeira posição** (mais à esquerda).

### 3.3 Adicionar "In Review"

1. Clique em **+ Add column** novamente.
2. Digite: `👁 In Review`
3. Arraste para a **quarta posição** — entre *In Progress* e *Done*.

### 3.4 Renomear as colunas existentes (se necessário)

Se o template gerou nomes em inglês sem emoji, renomeie:

- `Todo` → `🔲 To Do`
- `In Progress` → `⚙️ In Progress`
- `Done` → `✅ Done`

Para renomear: clique nos **três pontos `···`** no cabeçalho da coluna → **Edit column**.

> **✅ Resultado esperado:**  
> O board deve ter exatamente 5 colunas na ordem: Backlog → To Do → In Progress → In Review → Done.

---

## 4. Criar as Labels

**Quem:** Squad inteira (cada membro cria ao menos uma)  
**Tempo estimado:** 10 minutos

Labels são etiquetas coloridas que identificam o tipo de cada issue. Elas tornam o board visualmente escaneável.

### 4.1 Acessar o gerenciador de Labels

```
Repositório → aba Issues → botão "Labels" (ao lado de "Milestones")
```

Clique em **New label** para criar cada uma abaixo.

### 4.2 Labels obrigatórias

Crie cada label com exatamente o nome e a cor indicados:

| Label | Cor (hex) | Para que serve |
|---|---|---|
| `HTML` | `#FBBF24` | Issues de estrutura e marcação semântica |
| `CSS` | `#60A5FA` | Issues de estilização e responsividade |
| `JavaScript` | `#4ADE80` | Issues de lógica e interatividade |
| `user-story` | `#FED7AA` | Issues que representam uma User Story |
| `demanda` | `#E2E8F0` | Issues que representam uma Demanda do cliente |
| `documentação` | `#E9D5FF` | Issues de documentação do projeto |

### 4.3 Como criar cada label

1. No campo **Label name**, digite o nome exato da tabela acima.
2. Clique no quadrado de cor e cole o código hex.
3. No campo **Description**, escreva uma frase curta (ex: `Issues de estrutura HTML semântica`).
4. Clique em **Create label**.

> **✅ Resultado esperado:**  
> A tela de Labels deve listar as 6 labels com as cores corretas. Peça que um colega acesse e confirme que estão visíveis para toda a squad.

---

## 5. Criar as Issues de Demandas — Coluna Done

**Quem:** Squad inteira (dividam as demandas entre os membros)  
**Tempo estimado:** 15 minutos

As demandas já foram levantadas e documentadas. Agora criamos uma Issue para cada uma no GitHub — como **registro histórico** do processo de descoberta — e as movemos direto para **Done**.

### 5.1 Estrutura de uma Issue de Demanda

Siga o modelo abaixo para cada demanda:

**Título:**
```
[D-01] Opacidade do período de espera de 90 dias
```

**Labels:** `demanda` + `documentação`

**Corpo da issue** (copie e preencha):

```markdown
## Descrição da Demanda

[Descreva a dor ou necessidade que o cliente expressou, com suas próprias palavras.]

## Evidência

> "[Trecho literal de fala do cliente ou dado coletado que justifica esta demanda.]"
> — Entrevista realizada em [data], com [cargo do contato na Bulbe]

## Classificação MoSCoW

- [ ] Must Have
- [ ] Should Have
- [ ] Could Have
- [ ] Won't Have

## Impacto no Negócio

[Descreva em 1–2 frases como esta demanda afeta churn, conversão, satisfação ou receita da Bulbe.]
```

### 5.2 Passo a passo para criar cada Issue

1. No repositório, clique em **Issues** → **New issue**.
2. Preencha o **título** no padrão `[D-0X] Título da demanda`.
3. Cole o modelo de corpo acima e preencha cada campo.
4. À direita, clique em **Labels** e selecione `demanda` e `documentação`.
5. Clique em **Submit new issue**.
6. Abra o **board** do Project (aba Projects do repositório).
7. Localize a issue recém-criada (ela deve aparecer automaticamente — se não, use **+ Add item** na coluna Backlog e pesquise pelo título).
8. **Arraste o card para a coluna ✅ Done.**

> ⚠️ Issues de Demandas ficam em Done porque representam trabalho **já concluído** — a fase de descoberta. Elas servem como âncora de rastreabilidade para tudo que vem depois.

### 5.3 Verificação rápida

Ao final, o board deve ter uma issue Done para cada demanda:

| Issue | Título | Coluna |
|---|---|---|
| #1 | [D-01] Opacidade do período de espera | ✅ Done |
| #2 | [D-02] Créditos acumulados antes da ativação | ✅ Done |
| #3 | [D-03] Educação financeira durante a espera | ✅ Done |
| … | … | ✅ Done |

---

## 6. Criar as Issues de User Stories — Coluna Done

**Quem:** Squad inteira  
**Tempo estimado:** 15 minutos

Mesmo raciocínio das demandas: as US já foram escritas, agora registramos no GitHub e movemos para Done.

### 6.1 Estrutura de uma Issue de User Story

**Título:**
```
[US-01] Acompanhar o progresso da instalação
```

**Labels:** `user-story`

**Corpo da issue:**

```markdown
## User Story

**Como** [persona],
**quero** [ação que o usuário deseja realizar],
**para que** [benefício ou objetivo alcançado].

## Demanda relacionada

Closes #[número da issue da demanda correspondente]

## Critérios de Aceitação

- [ ] [Critério 1: condição verificável e objetiva]
- [ ] [Critério 2]
- [ ] [Critério 3]

## Estimativa de Esforço

[P / M / G]

## Issues de implementação relacionadas

<!-- Preencher após criar as issues técnicas nos passos 7 e 8 -->
- HTML: #
- CSS: #
- JS: #
```

### 6.2 Passo a passo

1. **Issues** → **New issue**.
2. Título no padrão `[US-0X] Título da user story`.
3. Cole e preencha o corpo acima.
4. **Importante:** no campo `Closes #N`, coloque o número da issue da **demanda correspondente**. Isso cria o vínculo automático no GitHub.
5. Aplique a label `user-story`.
6. **Submit new issue**.
7. No board, arraste para **✅ Done**.

> **💡 Dica:** Depois de criar todas as US, volte às issues de Demanda e verifique se o GitHub criou automaticamente a seção "Linked issues" em cada uma. Isso confirma que a rastreabilidade está funcionando.

### 6.3 Verificação rápida

| Issue | Título | Vinculada à | Coluna |
|---|---|---|---|
| #7 | [US-01] Acompanhar progresso | #1 (D-01) | ✅ Done |
| #8 | [US-02] Créditos acumulados | #2 (D-02) | ✅ Done |
| #9 | [US-03] Educação financeira | #3 (D-03) | ✅ Done |
| … | … | … | ✅ Done |

---

## 7. Criar as Issues de Implementação (HTML, CSS, JS)

**Quem:** Squad inteira  
**Tempo estimado:** 20 minutos

Esta é a etapa central. Cada User Story da Sprint 1 gera **exatamente 3 issues técnicas**: uma para HTML, uma para CSS e uma para JavaScript.

### 7.1 Por que 3 issues por US?

| Camada | O que cobre | Entrega esperada |
|---|---|---|
| **HTML** | Estrutura semântica, elementos, acessibilidade básica | Arquivo `.html` funcional sem estilo |
| **CSS** | Estilização, layout responsivo, design system da Bulbe | Tela com aparência finalizada em mobile e desktop |
| **JavaScript** | Lógica de interação, carregamento de mock JSON, manipulação do DOM | Tela funcional com dados dinâmicos |

> A divisão em camadas permite que dois membros trabalhem **em paralelo** na mesma US sem gerar conflitos de merge — cada um trabalha em um arquivo diferente em um branch diferente.

### 7.2 Ordem de dependência

```
HTML  →  CSS  →  JavaScript
```

Não faz sentido estilizar o que não existe, nem adicionar lógica a elementos sem estrutura. Respeite essa ordem ao mover issues para *In Progress*.

### 7.3 Estrutura da Issue HTML

**Título:**
```
[US-01][HTML] Estrutura da tela de acompanhamento
```

**Labels:** `HTML` + `user-story`

**Corpo:**

```markdown
## Objetivo

Criar a estrutura HTML semântica da tela referente à US-01.

## Escopo desta issue

- [ ] [Elemento ou componente 1 — ex: componente de linha do tempo]
- [ ] [Elemento 2 — ex: card de estimativa de data]
- [ ] [Elemento 3 — ex: indicadores de status: pendente / ativo / concluído]
- [ ] Atributos de acessibilidade: `alt`, `aria-label`, `role` onde necessário

## Fora do escopo

- Estilização (será feita na issue CSS)
- Lógica de dados (será feita na issue JS)

## User Story relacionada

Ref: #[número da issue US-01]

## Branch

`feat/us01-html-[descrição-curta]`
```

### 7.4 Estrutura da Issue CSS

**Título:**
```
[US-01][CSS] Estilização e responsividade da tela de acompanhamento
```

**Labels:** `CSS` + `user-story`

**Corpo:**

```markdown
## Objetivo

Estilizar a estrutura HTML criada na issue #[número da issue HTML].

## Escopo desta issue

- [ ] Aplicar paleta de cores da Bulbe Energia
- [ ] Layout mobile-first (base: 375px)
- [ ] [Componente específico — ex: estados visuais da timeline: pendente / ativo / concluído]
- [ ] Media query para tablet (≥ 768px) e desktop (≥ 1024px)
- [ ] Testar em Chrome DevTools: iPhone SE (375px) e Desktop (1280px)

## Dependência

Esta issue só pode ir para **In Progress** após a issue HTML (#N) ter um PR aberto.

## User Story relacionada

Ref: #[número da issue US-01]

## Branch

`feat/us01-css-[descrição-curta]`
```

### 7.5 Estrutura da Issue JavaScript

**Título:**
```
[US-01][JS] Lógica de status e carregamento de dados mockados
```

**Labels:** `JavaScript` + `user-story`

**Corpo:**

```markdown
## Objetivo

Implementar a lógica de interação e carregamento de dados da US-01.

## Escopo desta issue

- [ ] Criar arquivo `data/pedido.json` com mock de dados (ao menos 3 cenários: início, meio, fim do período)
- [ ] Carregar o mock via `fetch()` e tratar erros de carregamento
- [ ] Renderizar as etapas dinamicamente no DOM
- [ ] [Lógica específica — ex: calcular e exibir dias restantes para ativação]
- [ ] [Evento de interação — ex: clique para expandir detalhes de uma etapa]

## Estrutura do mock esperada

```json
{
  "etapa_atual": 2,
  "etapas": [
    { "id": 1, "titulo": "Contrato assinado", "status": "concluida", "data": "2026-01-10" },
    { "id": 2, "titulo": "Análise técnica", "status": "ativa", "data": null },
    { "id": 3, "titulo": "Homologação", "status": "pendente", "data": null },
    { "id": 4, "titulo": "Ativação", "status": "pendente", "data": null }
  ],
  "previsao_ativacao": "2026-04-10"
}
```

## Dependência

Esta issue só pode ir para **In Progress** após a issue HTML (#N) estar mergeada.

## User Story relacionada

Ref: #[número da issue US-01]

## Branch

`feat/us01-js-[descrição-curta]`
```

### 7.6 Criar as issues no GitHub

Para cada User Story da Sprint 1, repita o processo três vezes:

1. **Issues** → **New issue**
2. Preencha título, corpo e labels conforme os modelos acima
3. **Submit new issue**
4. No board, arraste para **📋 Backlog** (por ora) — a distribuição é feita no próximo passo

> **💡 Dica de produtividade:** Dividam o trabalho. Se a Sprint 1 tem 3 User Stories (= 9 issues técnicas), cada membro pode ficar responsável por criar as 3 issues de uma US diferente.

---

## 8. Distribuir as Issues e Definir Branches

**Quem:** Squad inteira (decisão coletiva)  
**Tempo estimado:** 10 minutos

### 8.1 Regras de distribuição

- **Equilíbrio:** nenhum membro deve ter mais de 2 issues em *In Progress* simultaneamente.
- **Rotação de camadas:** ao longo do projeto, cada membro deve ter trabalhado em HTML, CSS e JS pelo menos uma vez. Evite que uma pessoa fique presa sempre na mesma camada.
- **Interdisciplinaridade:** alunos de Ciência de Dados devem pegar ao menos uma issue de HTML ou CSS durante o semestre.

### 8.2 Tabela de distribuição — preencha agora

Copie esta tabela para o corpo da Issue da User Story ou para o `README.md` da squad:

| User Story | Issue HTML | Assignee | Issue CSS | Assignee | Issue JS | Assignee |
|---|---|---|---|---|---|---|
| US-01 | #__ | @membro | #__ | @membro | #__ | @membro |
| US-02 | #__ | @membro | #__ | @membro | #__ | @membro |
| US-03 | #__ | @membro | #__ | @membro | #__ | @membro |

### 8.3 Atribuir Assignee no GitHub

Para cada issue técnica:

1. Abra a issue.
2. No painel direito, clique em **Assignees**.
3. Selecione o membro responsável.

### 8.4 Mover as issues de Backlog para To Do

As issues da **Sprint 1** saem do Backlog e vão para **To Do**. Issues de sprints futuras ficam no Backlog.

1. No board, arraste as issues HTML, CSS e JS de cada US da Sprint 1 da coluna **Backlog** para **🔲 To Do**.

### 8.5 Convenção de nomes de branch

Todo membro deve criar o branch antes de começar a codar. Padrão obrigatório:

```
feat/us[N]-[camada]-[descrição-curta]
```

**Exemplos:**

```bash
feat/us01-html-timeline
feat/us01-css-timeline
feat/us01-js-timeline
feat/us02-html-creditos
feat/us02-css-creditos
fix/us01-css-mobile-overflow   # para correções
```

**Regras do nome:**
- Sempre em **letras minúsculas**
- Use **hífens** como separador — nunca espaços, underscores ou acentos
- O número da US deve estar presente para rastreabilidade

**Como criar o branch corretamente:**

```bash
# Sempre parta da main atualizada
git checkout main
git pull origin main

# Crie o branch com o nome padronizado
git checkout -b feat/us01-html-timeline
```

---

## 9. Issues de Wireframe e Prototipação

**Quem:** Squad inteira (design e desenvolvimento em paralelo)  
**Tempo estimado:** 20 minutos para criar as issues + tempo extraclasse para executar

Wireframe e protótipo são **artefatos de design rastreáveis** — cada um vira uma issue no board, com Assignee, branch e entrega definidos. Eles não são opcionais: o wireframe aprovado é o pré-requisito para abrir a issue HTML, e o protótipo aprovado é o pré-requisito para abrir a issue CSS.

### 9.1 A escala de fidelidade

Antes de criar as issues, a squad precisa entender a diferença entre os dois artefatos:

| Artefato | Ferramenta | Pergunta que responde | Quando fica Done |
|---|---|---|---|
| **Wireframe** (baixa fidelidade) | Papel, quadro branco ou Excalidraw | *"Quais elementos existem e onde ficam?"* | Foto ou arquivo anexado na issue e aprovado pela squad |
| **Protótipo** (alta fidelidade) | Figma | *"É isso que o cliente vai ver?"* | Link do Figma público no corpo da issue, telas mobile e desktop concluídas |

> **Regra de ouro:** wireframe é feito em minutos — não horas. Se estiver colorido e detalhado, não é wireframe, é protótipo. São etapas diferentes com propósitos diferentes.

### 9.2 O que cada wireframe deve mostrar

Para cada User Story, o wireframe precisa representar todos os elementos que a issue HTML vai implementar:

| User Story | Elementos obrigatórios no wireframe |
|---|---|
| US-01 — Progresso da instalação | Linha do tempo com etapas numeradas, estado atual destacado, estimativa de data de ativação |
| US-02 — Créditos acumulados | Card de saldo (kWh e R$), área de gráfico com eixos e legenda |
| US-03 — Educação financeira | Seção de texto explicativo, campos de simulador, resultado calculado, alerta de vencimento |
| US-04 — FAQ | Campo de busca, lista de categorias, componente pergunta/resposta (accordion), link de contato |

> 💡 **Dica:** Tire uma foto do esboço em papel com boa iluminação e anexe diretamente no corpo da issue no GitHub. Isso é evidência de processo e conta na avaliação.

### 9.3 Duas novas labels para criar

Antes de criar as issues, adicione estas labels ao repositório:

| Label | Cor (hex) | Para que serve |
|---|---|---|
| `wireframe` | `#E2E8F0` | Issues de esboço estrutural de telas |
| `protótipo` | `#FAE8FF` | Issues de alta fidelidade no Figma |

### 9.4 Estrutura da Issue de Wireframe

**Título:**
```
[US-01][WIREFRAME] Esboço da tela de acompanhamento de pedido
```

**Labels:** `wireframe` + `user-story`

**Corpo:**

```markdown
## Objetivo

Produzir o esboço estrutural (wireframe) da tela da US-01 antes da implementação HTML.

## Entrega

- [ ] Esboço com todos os elementos da tela identificados (caixas, títulos, botões, listas)
- [ ] Representação mobile (375px) e desktop (1280px)
- [ ] Foto do papel ou arquivo do Excalidraw anexado abaixo
- [ ] Todos os elementos dos critérios de aceitação da US-01 estão visíveis no esboço

## Elementos obrigatórios (conforme US-01)

- [ ] Linha do tempo com etapas numeradas
- [ ] Indicador visual do estado atual (pendente / ativo / concluído)
- [ ] Área de estimativa de data de ativação
- [ ] [Adicione outros elementos identificados pela squad]

## Anexo

<!-- Cole aqui a imagem do esboço ou o link do Excalidraw -->

## User Story relacionada

Ref: #[número da issue US-01]
```

**Coluna no board:** To Do → Done **antes** de abrir a issue HTML

---

### 9.5 Estrutura da Issue de Protótipo

**Título:**
```
[US-01][PROTOTIPO] Alta fidelidade no Figma — tela de acompanhamento
```

**Labels:** `protótipo` + `user-story`

**Corpo:**

```markdown
## Objetivo

Produzir o protótipo de alta fidelidade da US-01 no Figma, aplicando o design system da Bulbe Energia.

## Entrega

- [ ] Frame mobile configurado: iPhone 14 (390×844px)
- [ ] Frame desktop configurado: 1440×1024px
- [ ] Cores do design system aplicadas (azul #003366, amarelo #FFCC00)
- [ ] Tipografia consistente com a identidade da Bulbe
- [ ] Todos os elementos do wireframe (#N) implementados com estilo final
- [ ] Link de compartilhamento público colado abaixo

## Link do Figma

<!-- Cole aqui o link → Share → Anyone with the link can view -->
[Link do Figma]()

## Dependência

Esta issue só pode ir para **In Progress** após o wireframe (#N) estar na coluna Done.

## User Story relacionada

Ref: #[número da issue US-01]
```

**Coluna no board:** To Do → Done **antes** de abrir a issue CSS

---

### 9.6 Ordem completa de dependências por User Story

Com wireframe e protótipo incluídos, o fluxo completo de cada US é:

```
🖊️ WIREFRAME  →  🎨 PROTÓTIPO  →  🟨 HTML  →  🟦 CSS  →  🟩 JAVASCRIPT  →  ✅ DONE
```

Nenhuma etapa começa sem a anterior estar **In Review ou Done**. Total de issues por US: **5** (wireframe + protótipo + HTML + CSS + JS).

---

## 10. Verificação Final

**Quem:** Squad inteira  
**Tempo:** 5 minutos

Execute este checklist antes de chamar o professor:

### Board

- [ ] O Project está vinculado ao repositório da squad
- [ ] O board tem exatamente 5 colunas: Backlog, To Do, In Progress, In Review, Done
- [ ] As colunas estão na ordem correta da esquerda para a direita

### Labels

- [ ] As 8 labels foram criadas com as cores corretas: `HTML`, `CSS`, `JavaScript`, `user-story`, `demanda`, `documentação`, `wireframe`, `protótipo`

### Issues de Demandas (coluna Done)

- [ ] Há uma issue para cada demanda levantada pela squad
- [ ] Cada issue usa as labels `demanda` e `documentação`
- [ ] Todas estão na coluna ✅ Done

### Issues de User Stories (coluna Done)

- [ ] Há uma issue para cada User Story da squad
- [ ] Cada issue usa a label `user-story`
- [ ] Cada issue referencia a demanda correspondente com `Closes #N`
- [ ] Todas estão na coluna ✅ Done

### Issues de Wireframe

- [ ] Há uma issue de wireframe para cada US da Sprint 1
- [ ] Cada issue usa a label `wireframe`
- [ ] Cada issue tem Assignee definido
- [ ] O esboço (foto ou Excalidraw) está anexado ou o link está no corpo da issue

### Issues de Protótipo

- [ ] Há uma issue de protótipo para cada US da Sprint 1
- [ ] Cada issue usa a label `protótipo`
- [ ] O link do Figma (público) está colado no corpo da issue
- [ ] O arquivo Figma contém frames mobile e desktop com as cores da Bulbe

### Issues de Implementação (To Do / Backlog)

- [ ] Cada US da Sprint 1 tem exatamente 3 issues técnicas (HTML, CSS, JS)
- [ ] Cada issue técnica tem Assignee definido
- [ ] Cada issue técnica menciona o nome do branch no corpo
- [ ] Issues da Sprint 1 estão em **To Do**; demais estão em **Backlog**

### Entrega

- [ ] O link do GitHub Project foi compartilhado no canal da disciplina

---

## 11. Erros Comuns

Evite os problemas que mais aparecem em turmas anteriores:

---

**❌ Issue sem título padronizado**  
`arrumar o css da página`  
**✅ Correto:** `[US-02][CSS] Estilização do card de créditos acumulados`

---

**❌ Commit direto na `main`**  
`git push origin main` sem PR  
**✅ Correto:** todo código entra via Pull Request revisado por pelo menos um colega

---

**❌ Issue sem Assignee**  
"Qualquer um pode pegar depois"  
**✅ Correto:** toda issue tem um responsável nomeado antes de ir para To Do

---

**❌ Mover issue para Done antes do merge**  
Issue marcada como Done enquanto o PR ainda está aberto  
**✅ Correto:** Done = PR mergeado na `main` e comportamento testado no navegador

---

**❌ Branch com espaço ou acento**  
`feat/US 01 timeline` ou `feat/us01-configuração`  
**✅ Correto:** `feat/us01-html-timeline` — tudo minúsculo, sem espaços, sem caracteres especiais

---

**❌ CSS antes do HTML estar mergeado**  
Estilizar elementos que ainda não existem no repositório  
**✅ Correto:** respeite a ordem HTML → CSS → JS. A issue CSS só vai para In Progress após o PR de HTML estar aberto

---

**❌ Usar `Closes #N` errado**  
Colocar o número errado ou esquecer o campo — o vínculo entre issues não é criado  
**✅ Correto:** verifique na issue de Demanda se a seção "Linked issues" aparece após criar a US correspondente

---

**❌ Abrir a issue HTML sem wireframe aprovado**  
A squad começa a implementar sem ter definido o que vai construir  
**✅ Correto:** o wireframe precisa estar na coluna Done antes da issue HTML ir para In Progress

---

**❌ Link do Figma sem permissão de visualização pública**  
Colar o link com a configuração "Only invited people" — o professor não consegue acessar  
**✅ Correto:** em Share → selecione **Anyone with the link can view** antes de copiar o link

---

**❌ Protótipo no Figma sem cores e tipografia da Bulbe**  
Usar o estilo padrão do Figma (azul Material, fonte Inter genérica)  
**✅ Correto:** aplique desde o início: `#003366` para o azul principal e `#FFCC00` para o amarelo de destaque

---

**❌ Pular o wireframe e ir direto para o Figma**  
O protótipo de alta fidelidade demora muito mais quando a estrutura não foi pensada antes  
**✅ Correto:** 10 minutos de esboço no papel economizam horas de retrabalho no Figma

---

## Referências

RUBIN, Kenneth S. **Essential Scrum: A Practical Guide to the Most Popular Agile Process**. Boston: Addison-Wesley, 2012.

GITHUB. **About projects**. GitHub Docs. Disponível em: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects. Acesso em: fev. 2026.

GITHUB. **Linking a pull request to an issue**. GitHub Docs. Disponível em: https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue. Acesso em: fev. 2026.

FIGMA. **Figma for Education**. Disponível em: https://www.figma.com/education/. Acesso em: fev. 2026.

BROWN, Dan. **Communicating Design: Developing Web Site Documentation for Design and Planning**. 2. ed. Berkeley: New Riders, 2010.

BUXTON, Bill. **Sketching User Experiences: Getting the Design Right and the Right Design**. San Francisco: Morgan Kaufmann, 2007.

---

*Guia Prático — Aula 06 · Projeto Aplicado I · Ibmec 2026.1*  
*Professor: Cristiano de Macedo Neto, M.Sc.*
