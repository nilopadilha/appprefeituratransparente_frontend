# 🏛️ Portal Municipal - Transparência e Cidadania Digital

Este é um portal governamental moderno, robusto e funcional, transformado em um **Portal do Poder Executivo Municipal (Prefeitura)**. O sistema foi projetado para oferecer transparência ativa, serviços digitais e uma interface institucional de alta fidelidade, seguindo as melhores práticas de UI/UX para a gestão pública.

---

## 🚀 Visão Geral

O projeto evoluiu de um protótipo legislativo para uma solução completa de **Governança Digital**. Ele serve como o hub central para o cidadão, integrando desde o Diário Oficial até sistemas complexos de prestação de contas fiscais (LRF/RGF).

---

## ✨ Funcionalidades em Destaque

### 🏛️ Identidade Visual Institucional
*   **Paleta de Cores:** Azul Institucional Deep (`#004a99`), Verde Municipal (`#00a859`) e Dourado Acetinado (`#fdb913`).
*   **Design Modular:** Layout baseado em seções independentes e altamente escaláveis.

### 🧭 Navegação Governamental
*   **Top Bar:** Acesso rápido a contatos oficiais, horário de funcionamento e redes sociais.
*   **Menu Estruturado:** Organização lógica em:
    *   **A Prefeitura:** Gabinete, Secretarias e Galeria de Gestores.
    *   **O Município:** História, Hino e Símbolos.
    *   **Transparência:** Prestação de contas (LOA, LDO, PPA) e Fiscalização (LRF).
    *   **Publicações:** Diário Oficial e Acervo Legislativo.
    *   **Governo Digital:** Ouvidoria, e-SIC e Protocolos.

### 🏠 Home Page (Hub de Serviços)
*   **Hero Service Banner:** Foco em serviços sazonais (ex: IPTU, Campanhas de Vacinação).
*   **Grade de Serviços Digitais (`ServicesGrid`):** 8 botões de acesso rápido para os serviços mais procurados (Nota Fiscal, Certidões, Contracheque).
*   **Módulo Diário Oficial:** Bloco exclusivo para as últimas edições do jornal oficial com busca integrada no acervo.
*   **Abas de Publicações Oficiais:** Interface interativa para alternar entre Leis, Decretos e Licitações sem recarregar a página.
*   **Informativo Municipal:** Feed de notícias categorizado por hashtags (#Saúde, #Educação, #Obras).

### 📊 Portal da Transparência Avançado
*   **Dashboard Fiscal:** Indicadores de Receita Arrecadada, Orçamento Empenhado e Despesas Mensais.
*   **Categorização LRF/RGF:** Módulos específicos para Relatórios de Gestão Fiscal e Execução Orçamentária.
*   **🔍 Explorador de Municípios:** Integração com dados externos para comparação e consulta nacional.
    *   **IBGE SIDRA:** População (Censo 2022) e PIB (calculado per capita dinamicamente).
    *   **Programas Sociais:** Detalhamento de beneficiários e impacto na renda (Bolsa Família, BPC, Auxílio Gás).
    *   **Radar da Transparência (Atricon):** Índices oficiais de transparência pública.

### ♿ Acessibilidade (Padrão e-MAG)
*   Controle de fonte, Alto Contraste e VLibras integrados.
*   Total compatibilidade com leitores de tela e navegação por teclado.

---

## 🏗️ Arquitetura de Dados (Integrações Externas)

O portal utiliza uma abordagem **BFF (Backend For Frontend)** para integrar dados de fontes governamentais externas de forma segura e eficiente:

1.  **IBGE (SIDRA API):** As consultas de indicadores socioeconômicos são orquestradas via servidor. Implementado cálculo dinâmico de PIB per capita para garantir cobertura em 100% dos municípios, superando instabilidades de variáveis específicas da API original.
2.  **Programas Sociais (MDS/SIDRA):** Cruzamento de dados de impacto na renda domiciliar (Tabela 10300) com dados administrativos de transferência de renda.
3.  **Radar da Transparência (Atricon/PNTP):** Integração via base de dados local (`src/data/atricon_mock.json`), com selos de qualidade Diamante, Ouro e Prata.
4.  **Busca Resiliente:** Sistema de busca com tratamento de erros (null checks) e suporte a padrões como "Cidade-UF", garantindo 0% de falhas técnicas no autocomplete.

---

## 🛠️ Stack Tecnológica

*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
*   **Biblioteca:** [React 19](https://react.dev/)
*   **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Iconografia:** [Lucide React](https://lucide.dev/)
*   **Carrossel:** [Embla Carousel](https://www.embla-carousel.com/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **API Management:** Next.js API Routes (BFF Layer)

---

## ⚙️ Como Rodar o Projeto

1.  **Instalação:** `npm install`
2.  **Desenvolvimento:** `npm run dev`
3.  **Build:** `npm run build`
4.  **Acesso:** `http://localhost:3000`

---
*Este portal representa o estado da arte em transparência ativa e engajamento cidadão para municípios brasileiros.*
