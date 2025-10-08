# 🚀 Portfólio Pessoal - Desenvolvedor Full Stack

Um portfólio moderno e interativo desenvolvido com React e TypeScript, apresentando projetos, habilidades e experiência profissional de forma elegante e responsiva.

## ✨ Funcionalidades

- **🎨 Design Moderno**: Interface clean e profissional com animações suaves
- **📱 Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **⚡ Performance Otimizada**: Carregamento lazy de imagens e componentes otimizados
- **🎯 Navegação Intuitiva**: Single Page Application com roteamento suave
- **📊 Seções Detalhadas**: Sobre, habilidades, projetos, experiência e contato
- **🔗 Links Interativos**: Acesso direto aos projetos e redes sociais

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18** - Biblioteca principal para interface
- **TypeScript** - Tipagem estática para maior robustez
- **Tailwind CSS** - Framework CSS para estilização rápida
- **Framer Motion** - Animações fluidas e micro-interações
- **React Router DOM** - Roteamento SPA

### Build & Development

- **Vite** - Build tool ultrarrápido
- **ESLint** - Linting e qualidade de código
- **PostCSS** - Processamento CSS avançado

### Ícones & UI

- **Lucide React** - Ícones modernos e consistentes
- **React Hot Toast** - Notificações elegantes
- **React Hook Form** - Gerenciamento de formulários

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Passos de Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/igortriveloni86/meu-portfolio
cd meu-portfolio
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto em desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

## 📋 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção otimizado
npm run preview  # Visualiza build de produção localmente
npm run lint     # Executa linter ESLint para qualidade de código
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal de apresentação
│   ├── About.tsx       # Seção sobre mim
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── Experience.tsx  # Experiência profissional
│   ├── Contact.tsx     # Formulário de contato
│   ├── Footer.tsx      # Rodapé com links
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais
```

## 🎨 Personalização

### Informações Pessoais

Edite os seguintes arquivos para personalizar com suas informações:

- **`src/components/Hero.tsx`** - Nome, título e descrição principal
- **`src/components/About.tsx`** - Biografia e informações pessoais
- **`src/components/Skills.tsx`** - Suas habilidades técnicas
- **`src/components/Projects.tsx`** - Seus projetos e portfólio
- **`src/components/Experience.tsx`** - Experiência profissional
- **`src/components/Contact.tsx`** - Informações de contato
- **`src/components/Header.tsx`** - Adicione seu currículo

### Tema e Cores

Personalize o tema editando:

- **`tailwind.config.js`** - Cores, fontes e configurações do Tailwind
- **`src/index.css`** - Variáveis CSS customizadas

### Imagens e Assets

- Substitua as imagens em `public/` pelas suas próprias
- Atualize os links de imagem nos componentes

## 📱 Seções do Portfólio

### 🏠 Hero Section

- Apresentação principal com nome e título

### 👨‍💻 Sobre Mim

- Biografia profissional
- Foto pessoal
- Valores e objetivos

### 🛠️ Habilidades

- Tecnologias frontend e backend
- Ferramentas e frameworks

### 💼 Projetos

- Galeria de projetos desenvolvidos
- Descrições detalhadas
- Links para código e demo

### 📈 Experiência

- Histórico profissional
- Cargos e responsabilidades
- Período de atuação

### 📞 Contato

- Informações de contato direto

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages para servir da pasta dist/
```

### Hospedagem Tradicional

```bash
npm run build
# Faça upload da pasta dist/ para seu servidor
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Add some nome-da-feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Biblioteca principal
- [Vite](https://vitejs.dev/) - Build tool ultrarrápido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://framer.com/motion/) - Animações
- [Lucide](https://lucide.dev/) - Ícones modernos

---

⭐ **Se este projeto foi útil, deixe uma estrela no repositório!**

💼 **Desenvolvido com ❤️ para showcase de habilidades técnicas**
