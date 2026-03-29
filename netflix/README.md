# Netflix Profiles Page

Uma página web inspirada na tela de seleção de perfis da Netflix, desenvolvida com HTML, CSS e JavaScript. O projeto demonstra boas práticas de desenvolvimento web moderno, incluindo semântica, acessibilidade, responsividade e interatividade.

## 🚀 Funcionalidades

### 🎨 Design e Interface
- **Tema Dark/Light**: Alternância entre modos escuro (padrão) e claro com persistência automática.
- **Layout Responsivo**: Adapta-se perfeitamente a dispositivos móveis, tablets e desktops com 3 breakpoints.
- **Cards de Perfil**: Imagens quadradas com hover elegante, elevação e mudança de cor.
- **Tipografia Moderna**: Fonte 'Helvetica Neue' com pesos variados para hierarquia visual.
- **Gradiente de Fundo**: Efeito radial inspirado na Netflix, adaptável aos temas.

### 🔧 Interatividade
- **Perfis Clicáveis**: 3 perfis com links para `catalogo.html` (página de catálogo).
- **Gerenciar Perfis**: Card adicional com ícone de engrenagem para gerenciamento.
- **Toggle de Tema**: Botão flutuante no canto superior direito, apenas com ícone (☀️/🌙), sem borda.
- **Hover e Foco**: Animações suaves em elementos interativos.

### 📱 Responsividade
- **Mobile (<640px)**: 2 colunas, fontes reduzidas, espaçamentos otimizados.
- **Tablet (641-1024px)**: Colunas ajustáveis, tamanhos médios.
- **Desktop (>1024px)**: Layout expandido com colunas maiores.

### ♿ Acessibilidade
- HTML semântico com roles apropriados.
- ARIA labels para seções.
- Foco visível em elementos interativos.
- Contraste adequado em ambos os temas.
- Suporte a navegação por teclado.

### 🛠️ Desenvolvimento
- **Código Comentado**: CSS com explicações linha a linha para aprendizado.
- **Variáveis CSS**: Facilita manutenção e customização de cores/temas.
- **JavaScript Vanilla**: Manipulação de DOM e localStorage sem frameworks.
- **Estrutura Modular**: Arquivos separados para HTML, CSS e JS.

## 📁 Estrutura do Projeto

```
netflix/
├── index.html          # Estrutura HTML semântica
├── styles.css          # Estilos CSS com comentários
├── script.js           # Lógica JavaScript para temas
├── catalogo.html      # Página de catálogo visitável após seleção de perfil
├── assets/
│   ├── perfil1.jpg     # Imagem do perfil 1
│   ├── perfil2.jpg     # Imagem do perfil 2
│   ├── perfil3.jpg     # Imagem do perfil 3
│   └── L.ico           # Ícone/logo da página
└── README.md           # Esta documentação
```

## 🏃‍♂️ Como Executar

1. **Clone ou baixe** os arquivos do projeto.
2. **Abra** `index.html` em um navegador moderno (Chrome, Firefox, Safari, Edge).
3. **Verifique** se a pasta `assets` contém as imagens e o ícone.
4. **Teste** as funcionalidades:
   - Clique nos perfis ou em "Gerenciar perfis".
   - Clique no botão de toggle (☀️/🌙) no canto superior direito para alternar temas.
   - Redimensione a janela do navegador para testar responsividade.

## 🎯 Tecnologias Utilizadas

- **HTML5**: Semântica, meta tags, links, ARIA.
- **CSS3**: Grid/Flexbox, variáveis, media queries, transições, aspect-ratio.
- **JavaScript ES6**: DOM manipulation, localStorage, event listeners.

## 🎨 Customização

### Cores e Temas
Edite as variáveis em `:root` e `.light-mode` no `styles.css`:
```css
:root {
  --bg: #111;           /* Fundo escuro */
  --card: #181818;      /* Cards */
  --text: #ffffff;      /* Texto */
  --primary: #ff69b4;   /* Destaque */
}
```

### Layout
Ajuste o grid em `nav.profiles` para mais perfis:
```css
grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
```

### Funcionalidades
Modifique `script.js` para adicionar navegação real ou mais interações.

## 📚 Aprendizado

Este projeto serve como exemplo prático de:
- **HTML Semântico**: Uso correto de tags para acessibilidade e SEO.
- **CSS Avançado**: Responsividade, animações, variáveis.
- **JavaScript Básico**: Interatividade e persistência de dados.
- **Boas Práticas**: Código comentado, estrutura organizada, performance.

## 🔮 Melhorias Futuras

- Integração com API para perfis dinâmicos.
- Animações de entrada (fade-in, slide).
- Suporte a múltiplos idiomas.
- Autenticação e perfis personalizados.
- Testes automatizados (Jest, Cypress).

## 📄 Licença

Este projeto é para fins educacionais. Sinta-se à vontade para usar e modificar.

## 🙏 Créditos e Agradecimentos

Este projeto foi desenvolvido com a **ajuda essencial do GitHub Copilot**, que contribuiu para:
- Otimização do código HTML, CSS e JavaScript.
- Implementação de funcionalidades avançadas como dark/light mode e responsividade.
- Adição de comentários educacionais no CSS.
- Garantia de boas práticas de acessibilidade e semântica.
- Documentação completa no README.

O GitHub Copilot foi usado em todas as etapas do desenvolvimento, desde a correção inicial de bugs até a finalização das funcionalidades interativas.</content>
<parameter name="filePath">c:\Users\lara2\OneDrive\Documentos\netflix\README.md