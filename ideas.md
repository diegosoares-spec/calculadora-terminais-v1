# Ideias de Design - Calculadora de Terminais

## Contexto
Calculadora educacional para o método do Caio (terminais de roleta). Precisa ser clara, confiável e didática, mostrando as contas de forma transparente para que o lead entenda e acredite no método.

---

## Resposta 1: Design Científico & Confiança
**Movimento de Design:** Neoclassicismo Digital + Minimalismo Científico

**Princípios Principais:**
1. Transparência através da visualização clara das contas
2. Hierarquia numérica forte (números são o protagonista)
3. Espaço negativo generoso para respiração visual
4. Tipografia de contraste alto para legibilidade

**Filosofia de Cores:**
- Fundo branco puro (`#FFFFFF`) → confiança, clareza, laboratório
- Números em azul profundo (`#1E40AF`) → autoridade, método científico
- Operações em cinza neutro (`#6B7280`) → suporte, não distração
- Acento verde (`#10B981`) → confirmação, sucesso
- Erros em vermelho suave (`#EF4444`) → alerta sem agressividade

**Paradigma de Layout:**
- Coluna central única com máx 600px
- Input no topo (grande, confortável)
- Resultado em card elevado com sombra suave
- Cada terminal em linha horizontal com cálculo ao lado
- Explicação em tipografia menor abaixo

**Elementos Assinatura:**
1. **Número Grande & Destaque:** O número digitado aparece em 3xl/4xl no resultado
2. **Cálculos Visíveis:** Cada operação (3+2=5) em monospace, destacada
3. **Indicadores Visuais:** Ícones pequenos (✓, ≠) para validação

**Filosofia de Interação:**
- Input com feedback imediato (sem botão, apenas Enter ou blur)
- Resultado aparece com fade-in suave
- Hover no cálculo destaca a operação
- Estados de erro com mensagem clara e construtiva

**Animação:**
- Fade-in do resultado (200ms)
- Pulse suave no número resultado (1s, uma vez)
- Transição de cor no input ao focar (100ms)
- Nenhuma animação excessiva (mantém foco nas contas)

**Sistema de Tipografia:**
- Display: Geist Mono (números grandes, confiança técnica)
- Body: Inter (clara, profissional)
- Cálculos: IBM Plex Mono (código-like, transparência)
- Hierarquia: 3xl → xl → base → sm

**Probabilidade:** 0.08

---

## Resposta 2: Design Educacional & Acessível
**Movimento de Design:** Pedagogia Visual + Design Inclusivo

**Princípios Principais:**
1. Cada passo é uma lição (não apenas um resultado)
2. Cores distintas para cada tipo de terminal
3. Espaço amplo para leitura confortável
4. Feedback verbal + visual

**Filosofia de Cores:**
- Fundo bege quente (`#FEF3E2`) → acolhedor, educacional
- Terminal Comum em roxo (`#7C3AED`) → primário, destaque
- Terminal Soma em âmbar (`#F59E0B`) → secundário, cálculo
- Terminal Subtração em cyan (`#06B6D4`) → terciário, diferença
- Texto em cinza escuro (`#1F2937`) → legibilidade

**Paradigma de Layout:**
- Seção de entrada com instrução clara acima
- Três cards lado-a-lado (mobile: stack) para os terminais
- Cada card tem cor própria, ícone, cálculo e explicação
- Rodapé com dica educacional

**Elementos Assinatura:**
1. **Cards Coloridos:** Cada terminal em seu próprio card com cor temática
2. **Ícones Explicativos:** Ícone para cada tipo (comum, soma, subtração)
3. **Passo-a-Passo Visual:** Mostra a decomposição do número

**Filosofia de Interação:**
- Botão "Calcular" explícito (não apenas Enter)
- Cards aparecem com stagger (um após outro)
- Hover nos cards mostra mais detalhes
- Clique em um card destaca e expande

**Animação:**
- Stagger de 100ms entre cards (entrada sequencial)
- Slide-up dos cards (300ms)
- Bounce suave no ícone do card ao hover
- Transição de cor no card ao interagir

**Sistema de Tipografia:**
- Display: Poppins Bold (amigável, educacional)
- Body: Poppins Regular (clara, acessível)
- Cálculos: Courier New (monospace, estruturado)
- Hierarquia: 2xl → lg → base → sm

**Probabilidade:** 0.07

---

## Resposta 3: Design Minimalista & Direto
**Movimento de Design:** Bauhaus Digital + Utilitarismo Extremo

**Princípios Principais:**
1. Forma segue função absoluta
2. Sem decoração, apenas essencial
3. Tipografia como único elemento visual
4. Velocidade de compreensão máxima

**Filosofia de Cores:**
- Fundo preto (`#000000`) → foco, modernidade
- Texto branco (`#FFFFFF`) → contraste máximo
- Destaque em amarelo (`#FBBF24`) → atenção, matemática
- Erro em rosa (`#EC4899`) → alerta mínimo
- Grid de cinza (`#404040`) → estrutura invisível

**Paradigma de Layout:**
- Grid 2x2 (input + resultado em cima, terminais em baixo)
- Sem cards, sem bordas, apenas espaçamento
- Tipografia gigante para números
- Operações em linha única, sem quebra

**Elementos Assinatura:**
1. **Tipografia Monumental:** Números em 5xl/6xl
2. **Operações Inline:** "3+2=5" em uma linha, sem decoração
3. **Grid Invisível:** Estrutura clara mas sem bordas visuais

**Filosofia de Interação:**
- Apenas Enter para calcular (sem botão)
- Resultado substitui input (não acumula)
- Sem hover states (apenas foco keyboard)
- Histórico opcional em rodapé

**Animação:**
- Nenhuma (ou apenas fade de 50ms)
- Transição de cor no texto ao focar (sem duração)
- Movimento zero = velocidade máxima

**Sistema de Tipografia:**
- Display: IBM Plex Mono Bold (técnico, monumental)
- Body: IBM Plex Mono Regular (consistência)
- Sem variações de peso (apenas mono)
- Hierarquia: 6xl → 4xl → 2xl → base

**Probabilidade:** 0.06

---

## Decisão Final
Escolho a **Resposta 1: Design Científico & Confiança** porque:
- Alinha com o objetivo de **educar sem confundir** (transparência das contas)
- Transmite **autoridade e método** (importante para lead confiar)
- Mantém **foco nas operações** (números e cálculos são protagonistas)
- Escalável para **múltiplos números** sem poluição visual
- Acessível e **profissional** (adequado para contexto de apostas)
