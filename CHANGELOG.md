# Registro de Mudanças - Portal da Câmara Municipal de Natal

Este documento detalha as melhorias de UI/UX, acessibilidade e funcionalidades implementadas no projeto frontend.

## [1.0.0] - 2026-05-25

### ♿ Acessibilidade e Inclusão
- **Barra de Acessibilidade:** Implementada no topo do site com:
  - Controle dinâmico de tamanho de fonte (A+, A-).
  - Modo de **Alto Contraste** (Cores preta e amarela para conformidade legal).
  - Atalho para o serviço **VLibras**.
- **Semântica HTML:** Melhorada em toda a aplicação para leitores de tela (uso correto de `<footer>`, `main`, etc.).

### 🏗️ Navegação e Estrutura
- **Navbar (Cabeçalho):** 
  - Transformada em `sticky` (fixa no topo).
  - Nova identidade visual com sigla **CMN**.
  - Sombra sutil e cores otimizadas.
- **Footer (Rodapé):** 
  - Refatoração completa da nomenclatura interna.
  - Organização dos links em colunas institucionais (Processo Legislativo, Transparência, Ouvidoria).
  - Inclusão de redes sociais e direitos autorais.

### 🏠 Home Page (Página Inicial)
- **Seção de Notícias:** 
  - Uso de `next/image` para performance (Lazy Loading).
  - Adição de Badges de categoria (ex: Legislativo, Urbanismo).
  - Novo layout de grid (2/3 destaque, 1/3 lateral) para melhor legibilidade.
- **Linha do Tempo Legislativa:** Criado componente de acompanhamento de tramitação de projetos de lei em tempo real.
- **Carrossel de Vereadores:** 
  - Efeitos de hover (grayscale para color).
  - Setas de navegação e responsividade.
  - Botão de acesso ao perfil completo.
- **Grid de Acesso Rápido:** Cartões modernizados com ícones e cores específicas por área.
- **TV Câmara:** Integração refinada do player de vídeo com CTA de transmissão ao vivo.

### 📊 Portal da Transparência
- **Funcionalidades de Busca:** Barra de pesquisa em tempo real.
- **Filtros Dinâmicos:** Filtro por categorias (Finanças, RH, Administrativo).
- **Interface de Cards:** Lista de documentos transformada em cards interativos com ícones de tipo de arquivo.

### 🎨 Design e Estilos
- **Tailwind CSS 4:** Utilização de recursos modernos de estilização.
- **Micro-interações:** Transições suaves em botões, links e componentes interativos.
- **Variáveis CSS:** Centralização de cores e tokens de design no `globals.css`.

---
*Documentação gerada autonomamente pelo Gemini CLI.*
