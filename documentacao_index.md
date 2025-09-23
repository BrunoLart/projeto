# 📋 Documentação - Página Principal da ONG Patinhas Felizes

## O que é este projeto?

É a página principal (homepage) de uma ONG que cuida de cachorros e gatos. A página mostra animais para adoção, permite fazer doações e se inscrever na newsletter.

**ONG:** Patinhas Felizes 🐾  
**Página:** index.html (página principal)  
**Cores:** Verde e branco (tema natureza)  

---

## O que a página faz?

- ✅ Mostra animais disponíveis para adoção
- ✅ Permite fazer doações para a ONG
- ✅ Newsletter para receber notícias
- ✅ Informações sobre a ONG
- ✅ Funciona no celular e computador
- ✅ Design bonito com tema de animais

---

## Estrutura da página

```
index.html
├── Cabeçalho (menu de navegação)
├── Seção principal (hero)
├── Sobre a ONG
├── Animais para adoção
├── Doações
├── Newsletter
└── Rodapé (contato)
```

---

## Seções da página

### 1. **Cabeçalho**
- Logo da ONG
- Menu com links (Sobre, Animais, Doações, Contato)
- Fica fixo quando rola a página

### 2. **Seção Principal (Hero)**
- Título grande da ONG
- Texto explicativo
- Botões principais (Adotar, Doar)
- Foto de animal fofo

### 3. **Sobre a ONG**
- Missão da organização
- 3 cards explicativos:
  - 🐾 Resgate com amor
  - 🏠 Lares responsáveis  
  - 👥 Comunidade unida

### 4. **Animais para Adoção**
- Cards com fotos dos animais
- Nome, idade, raça
- Botão "Quero Adotar"

### 5. **Doações**
- Por que doar?
- Valores pré-definidos (R$ 25, 50, 100, 200)
- Campo para valor personalizado
- Formulário de doação

### 6. **Newsletter**
- Benefícios de se inscrever
- Campo de email
- Checkbox de aceite

### 7. **Rodapé**
- Contato da ONG
- Redes sociais
- Horário de funcionamento

---

---

## Cores usadas

### Paleta de cores verde e branco:

```css
:root {
    --verde-principal: #2E8B57;     /* Verde mar - principal */
    --verde-claro: #3CB371;         /* Verde médio */
    --verde-escuro: #228B22;        /* Verde floresta */
    --verde-suave: #E8F5E8;         /* Verde bem claro */
    --branco: #FFFFFF;              /* Branco puro */
    --branco-suave: #F8F9FA;        /* Branco com toque de cinza */
    --cinza-texto: #4A4A4A;         /* Cinza para textos */
    --sombra-verde: rgba(46, 139, 87, 0.1); /* Sombra verde suave */
}
```

### Como usar as cores:
- **Verde principal:** Botões, títulos, links importantes
- **Verde claro:** Hover, detalhes, destaques
- **Verde escuro:** Textos importantes, bordas
- **Branco:** Fundos, espaços em branco
- **Verde suave:** Fundos de seções, cards

---

---

## Funcionalidades principais

### 1. **Sistema de Doações**
- Botões com valores fixos (R$ 25, 50, 100, 200)
- Campo para valor personalizado
- Validação de dados obrigatórios
- Feedback visual quando seleciona valor

### 2. **Newsletter**
- Campo de email obrigatório
- Validação de formato de email
- Checkbox de aceite obrigatório
- Mensagem de sucesso/erro

### 3. **Navegação**
- Menu fixo no topo
- Links que levam para seções da página
- Scroll suave entre seções

### 4. **Responsividade**
- **Celular:** Layout empilhado, menu simplificado
- **Tablet:** Layout ajustado
- **Computador:** Layout completo com duas colunas

---

## Validações

### Email:
- **Formato correto:** `usuario@exemplo.com`
- **Formato errado:** `usuario@` ou `@exemplo.com`

### Telefone:
- **Formato correto:** `(11) 99999-9999` ou `11 99999-9999`
- **Formato errado:** `99999` ou `abc`

### Doação:
- Valor mínimo: R$ 10
- Valor máximo: R$ 1000
- Campos obrigatórios: Nome, email, valor

---

## Efeitos visuais

### Animações:

1. **Cards de animais**
   - Sobem quando passa o mouse
   - Sombra verde aparece

2. **Botões**
   - Mudam de cor quando passa o mouse
   - Sobem um pouco (efeito 3D)

3. **Scroll da página**
   - Elementos aparecem suavemente
   - Menu fica fixo no topo

4. **Formulários**
   - Campos ficam verdes quando corretos
   - Campos ficam vermelhos quando errados
   - Mensagens de erro aparecem

---

## Como usar

### Para desenvolvedores:

1. **Abrir o arquivo**
   - Edite `index.html`
   - Use `style.css` para cores e layout
   - Use `script.js` para funcionalidades

2. **Testar responsividade**
   - Redimensione a janela do navegador
   - Teste em celular e tablet

3. **Validar formulários**
   - Teste com dados corretos e incorretos
   - Verifique se as mensagens aparecem

### Para usuários finais:

1. **Navegar na página**
   - Use o menu para ir para seções
   - Role a página para ver tudo

2. **Fazer doação**
   - Escolha um valor ou digite o seu
   - Preencha os dados
   - Clique em "Doar"

3. **Se inscrever na newsletter**
   - Digite seu email
   - Marque a opção de aceite
   - Clique em "Inscrever"

---

## Tecnologias usadas

- **HTML:** Estrutura da página
- **CSS:** Cores, layout e animações
- **JavaScript:** Validações e interações

---

## Checklist de implementação

### HTML:
- [ ] Estrutura semântica correta
- [ ] Links funcionando
- [ ] Formulários com labels
- [ ] Meta tags para SEO

### CSS:
- [ ] Cores verde e branco aplicadas
- [ ] Layout responsivo
- [ ] Animações suaves
- [ ] Estados de hover

### JavaScript:
- [ ] Validação de email
- [ ] Validação de telefone
- [ ] Sistema de doações
- [ ] Newsletter funcionando
- [ ] Navegação suave

---

## Ideias para o futuro

### Funcionalidades que poderiam ser adicionadas:

- [ ] Galeria de fotos dos animais
- [ ] Chat online com a ONG
- [ ] Mapa mostrando onde está a ONG
- [ ] Histórico de adoções
- [ ] Sistema de login para usuários
- [ ] Integração com redes sociais
- [ ] Blog de notícias
- [ ] Loja virtual (produtos para pets)

### Melhorias técnicas:

- [ ] Integração com banco de dados
- [ ] Sistema de pagamento real
- [ ] Envio de emails automático
- [ ] Painel administrativo
- [ ] Métricas de uso
- [ ] Modo escuro

---

## Navegadores testados

- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge

---

## Sobre este projeto

Este é um projeto para aprender desenvolvimento web moderno.  
**ONG Patinhas Felizes** - Página Principal para Adoção de Animais 🐾

---

*Documentação simples para iniciantes em programação web.*
