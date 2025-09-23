# 📋 Documentação - Página Informativa da ONG Patinhas Felizes

## O que é este projeto?

É uma página informativa completa sobre a ONG Patinhas Felizes, mostrando nossa história, missão, equipe, instalações e como ajudar. É como um "sobre nós" mais detalhado.

**ONG:** Patinhas Felizes 🐾  
**Página:** informativo.html  
**Cores:** Verde e branco (tema natureza)  

---

## O que a página faz?

- ✅ Conta a história da ONG
- ✅ Mostra nossa missão e valores
- ✅ Apresenta a equipe e voluntários
- ✅ Exibe as instalações e abrigos
- ✅ Explica como ajudar e ser voluntário
- ✅ Mostra parcerias e apoios
- ✅ Depoimentos de adoções
- ✅ Galeria de fotos e vídeos
- ✅ Funciona no celular e computador

---

## Estrutura da página

```
informativo.html
├── Cabeçalho (navbar)
├── Nossa História
├── Missão e Valores
├── Equipe e Voluntários
├── Instalações
├── Como Ajudar
├── Parcerias
├── Depoimentos
├── Galeria
└── Rodapé
```

---

## Seções da página

### 1. **Nossa História**
- Como começou a ONG
- Marcos importantes
- Crescimento ao longo dos anos
- Histórias emocionantes de resgate

### 2. **Missão e Valores**
- Nossa missão principal
- Valores que seguimos
- Visão para o futuro
- Compromissos com os animais

### 3. **Equipe e Voluntários**
- Fundadores da ONG
- Veterinários e cuidadores
- Voluntários dedicados
- Como se tornar voluntário

### 4. **Instalações**
- Localização do abrigo principal
- Estrutura física
- Áreas de cuidados
- Espaços para os animais
- Fotos das instalações

### 5. **Como Ajudar**
- Diferentes formas de ajudar
- Doações financeiras
- Doações de materiais
- Voluntariado
- Apoio nas redes sociais

### 6. **Parcerias**
- Clínicas veterinárias parceiras
- Empresas apoiadoras
- Outras ONGs
- Órgãos públicos
- Como se tornar parceiro

### 7. **Depoimentos**
- Histórias de adoção bem-sucedidas
- Testemunhos de famílias
- Relatos de voluntários
- Agradecimentos especiais

### 8. **Galeria**
- Fotos dos animais resgatados
- Momentos de adoção
- Eventos realizados
- Vídeos emocionantes
- Antes e depois

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
- **Verde principal:** Títulos, botões importantes, destaques
- **Verde claro:** Hover, detalhes, links
- **Verde escuro:** Textos importantes, bordas
- **Branco:** Fundos, espaços em branco
- **Verde suave:** Fundos de seções, cards

---

## Funcionalidades principais

### 1. **Timeline da História**
- Linha do tempo interativa
- Marcos importantes da ONG
- Fotos de cada período
- Animações suaves

### 2. **Galeria de Fotos**
- Grid responsivo de imagens
- Modal para visualização ampliada
- Categorias: Animais, Eventos, Instalações
- Lazy loading para performance

### 3. **Depoimentos Interativos**
- Carrossel de depoimentos
- Vídeos de famílias adotantes
- Botões de navegação
- Autoplay opcional

### 4. **Mapa de Localização**
- Mapa interativo do abrigo
- Informações de endereço
- Instruções de como chegar
- Horários de funcionamento

### 5. **Formulário de Voluntariado**
- Campos para interesse
- Disponibilidade de horários
- Experiência com animais
- Validação de dados

---

## Validações

### Formulário de Voluntariado:
- **Nome:** Obrigatório, mínimo 2 palavras
- **Email:** Formato válido obrigatório
- **Telefone:** Formato brasileiro
- **Disponibilidade:** Pelo menos 1 opção marcada
- **Experiência:** Campo obrigatório

### Formulário de Parceria:
- **Nome da empresa:** Obrigatório
- **CNPJ:** Formato válido
- **Email comercial:** Obrigatório
- **Tipo de parceria:** Seleção obrigatória

---

## Efeitos visuais

### Animações:

1. **Timeline da história**
   - Elementos aparecem conforme scroll
   - Linha conectando os marcos
   - Fotos com efeito zoom

2. **Galeria de fotos**
   - Hover com zoom suave
   - Transições entre categorias
   - Modal com fade in/out

3. **Depoimentos**
   - Carrossel com slide suave
   - Indicadores de página
   - Autoplay com pausa no hover

4. **Cards da equipe**
   - Hover com elevação
   - Foto com efeito zoom
   - Informações aparecem suavemente

---

## Como usar

### Para desenvolvedores:

1. **Abrir o arquivo**
   - Edite `informativo.html`
   - Use `css/informativo.css` para estilos
   - Use `js/informativo.js` para funcionalidades

2. **Estrutura de conteúdo**
   - Cada seção tem seu próprio container
   - Use grid e flexbox para layouts
   - Mantenha consistência visual

3. **Funcionalidades**
   - Timeline interativa
   - Galeria com modal
   - Formulários validados
   - Mapa integrado

### Para usuários finais:

1. **Navegar na página**
   - Use o menu para ir para seções
   - Role a página para ver tudo
   - Clique nos botões de ação

2. **Ver galeria**
   - Clique nas fotos para ampliar
   - Use as categorias para filtrar
   - Navegue pelos vídeos

3. **Se candidatar a voluntário**
   - Preencha o formulário
   - Selecione suas disponibilidades
   - Envie e aguarde contato

---

## Tecnologias usadas

- **HTML:** Estrutura semântica da página
- **CSS:** Cores, layout e animações
- **JavaScript:** Interatividade e validações
- **Google Maps:** Mapa de localização (API)

---

## Checklist de implementação

### HTML:
- [ ] Estrutura semântica completa
- [ ] Navbar consistente
- [ ] Seções bem organizadas
- [ ] Formulários funcionais
- [ ] Meta tags para SEO

### CSS:
- [ ] Paleta verde e branco aplicada
- [ ] Layout responsivo
- [ ] Animações suaves
- [ ] Estados de hover
- [ ] Grid e flexbox

### JavaScript:
- [ ] Timeline interativa
- [ ] Galeria com modal
- [ ] Validação de formulários
- [ ] Carrossel de depoimentos
- [ ] Mapa integrado
- [ ] Navegação suave

---

## Conteúdo necessário

### Textos:
- [ ] História completa da ONG
- [ ] Missão e valores definidos
- [ ] Perfis da equipe
- [ ] Descrição das instalações
- [ ] Formas de ajudar
- [ ] Lista de parcerias
- [ ] Depoimentos reais

### Imagens:
- [ ] Fotos históricas da ONG
- [ ] Retratos da equipe
- [ ] Imagens das instalações
- [ ] Fotos dos animais
- [ ] Momentos de adoção
- [ ] Eventos realizados

### Vídeos:
- [ ] Depoimentos em vídeo
- [ ] Tour virtual do abrigo
- [ ] Histórias de resgate
- [ ] Eventos especiais

---

## Ideias para o futuro

### Funcionalidades que poderiam ser adicionadas:

- [ ] Blog integrado
- [ ] Sistema de notícias
- [ ] Chat online
- [ ] Área de doadores
- [ ] Portal do voluntário
- [ ] Loja virtual
- [ ] Agenda de eventos
- [ ] Relatórios anuais

### Melhorias técnicas:

- [ ] CMS para gerenciar conteúdo
- [ ] Sistema de busca
- [ ] Integração com redes sociais
- [ ] Analytics detalhado
- [ ] SEO otimizado
- [ ] PWA (Progressive Web App)

---

## Estrutura de arquivos

```
projeto_teste/
├── css/
│   ├── style.css          # Estilos da index
│   ├── cadastro.css       # Estilos do cadastro
│   └── informativo.css    # Estilos da página informativa
├── js/
│   ├── script.js          # JavaScript da index
│   ├── cadastro.js        # JavaScript do cadastro
│   └── informativo.js     # JavaScript da página informativa
├── pages/
│   ├── cadastro.html      # Página de cadastro
│   └── informativo.html   # Página informativa (futura)
├── assets/
│   ├── images/            # Imagens da ONG
│   ├── videos/            # Vídeos
│   └── icons/             # Ícones
└── documentacao/
    ├── documentacao.md
    ├── documentacao_index.md
    ├── documentacao_cadastro.md
    └── documentacao_informativo.md
```

---

## Navegadores testados

- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge

---

## Sobre este projeto

Este é um projeto para criar uma página informativa completa sobre a ONG.  
**ONG Patinhas Felizes** - Página Informativa Completa 🐾

---

*Documentação simples para iniciantes em programação web.*
