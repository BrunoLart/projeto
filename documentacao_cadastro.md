# 📋 Documentação - Formulário de Cadastro para ONG

## O que é este projeto?

É um formulário de cadastro para uma ONG que cuida de cachorros e gatos. As pessoas podem se cadastrar para adotar um animal.

**ONG:** Patinhas Felizes 🐾  
**O que faz:** Formulário para pessoas que querem adotar pets  
**Cores:** Verde e branco  

---

## O que o formulário faz?

- ✅ Coleta dados da pessoa (nome, CPF, endereço, etc.)
- ✅ Verifica se os dados estão corretos
- ✅ Formata CPF e CEP automaticamente
- ✅ Funciona no celular e computador
- ✅ Tem visual bonito com tema de animais

---

## Arquivos do projeto

```
projeto_teste/
├── css/cadastro.css       # Cores e visual
├── js/cadastro.js         # Funcionalidades
├── pages/cadastro.html    # Página principal
└── documentacao/          # Esta pasta
```

---

## Visual do formulário

### Cores usadas:
- **Verde:** Cor principal (tema natureza)
- **Branco:** Cor secundária (limpeza)
- **Verde claro:** Para detalhes e hover

### Coisas bonitas:
- 🐾 Patinhas no título
- Bordas arredondadas
- Campos que brilham quando clicados
- Botões que sobem quando passa o mouse

---

## Campos do formulário

### Dados pessoais:
- **Nome completo** (obrigatório)
- **Data de nascimento** (obrigatório)
- **CPF** (obrigatório) - formata automaticamente
- **Gênero** (obrigatório)
- **Nome da mãe** (opcional)

### Contato:
- **Telefone** (obrigatório)
- **WhatsApp** (opcional)
- **Email** (obrigatório)

### Endereço:
- **Rua** (obrigatório)
- **Número** (obrigatório)
- **Bairro** (obrigatório)
- **CEP** (obrigatório) - formata automaticamente
- **Cidade** (obrigatório)

---

## Como funciona a validação?

O formulário verifica se os dados estão no formato correto usando "receitas" chamadas de Regex.

### Exemplos de validação:

#### CPF:
- **Formato correto:** `123.456.789-00`
- **Formato errado:** `12345678900`

#### CEP:
- **Formato correto:** `12345-678`
- **Formato errado:** `12345678`

#### Número da casa:
- **Formato correto:** `123` ou `1234`
- **Formato errado:** `abc` ou `123456`

---

## O que o JavaScript faz?

### Funcionalidades principais:

1. **Verifica se os campos estão preenchidos**
   - Se faltar algo, mostra erro em vermelho
   - Se estiver tudo certo, permite enviar

2. **Formata CPF automaticamente**
   - Digite: `12345678900`
   - Vira: `123.456.789-00`

3. **Formata CEP automaticamente**
   - Digite: `12345678`
   - Vira: `12345-678`

4. **Mostra mensagens de erro**
   - Campo vazio = "Preencha este campo"
   - Formato errado = "Formato incorreto"

---

## Efeitos visuais

### Animações:

1. **Campo com erro**
   - Campo treme (shake) para chamar atenção
   - Fica com borda vermelha

2. **Página carregando**
   - Formulário aparece deslizando de baixo para cima

3. **Botão quando passa o mouse**
   - Botão sobe um pouco
   - Fica com sombra verde

### Responsividade (funciona em qualquer tela):

- **Celular:** Botões em coluna, campos menores
- **Tablet:** Layout ajustado
- **Computador:** Layout completo com todos os efeitos

---

## Como usar

### Passo a passo:

1. **Abrir o formulário**
   - Abra o arquivo `pages/cadastro.html`

2. **Preencher os dados**
   - Campos com * são obrigatórios
   - CPF e CEP se formatam sozinhos

3. **Enviar**
   - Clique em "Enviar"
   - Se der erro, corrija e tente novamente

4. **Limpar tudo**
   - Clique em "Limpar" para apagar tudo

---

## Tecnologias usadas

- **HTML:** Estrutura da página
- **CSS:** Cores e visual
- **JavaScript:** Funcionalidades e validação

---

## Problemas comuns

### Se algo não funcionar:

1. **Campos não validam**
   - Verifique se o arquivo JS está carregando

2. **Visual estranho**
   - Verifique se o arquivo CSS está carregando

3. **Formulário não envia**
   - Verifique se todos os campos obrigatórios estão preenchidos

---

## Ideias para o futuro

### Funcionalidades que poderiam ser adicionadas:

- [ ] Upload de foto da pessoa
- [ ] Escolher tipo de animal (cachorro/gato)
- [ ] Histórico de adoções
- [ ] Envio de email de confirmação
- [ ] Chat com a ONG
- [ ] Agendar visita aos animais

### Melhorias técnicas:

- [ ] Validar CPF real (não só formato)
- [ ] Buscar endereço pelo CEP
- [ ] Salvar formulário automaticamente
- [ ] Modo escuro
- [ ] Melhorar acessibilidade

---

## Navegadores testados

- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge

---

## Sobre este projeto

Este é um projeto para aprender desenvolvimento web.  
**ONG Patinhas Felizes** - Formulário de Cadastro para Adoção 🐾

---

*Documentação simples para iniciantes em programação web.*
