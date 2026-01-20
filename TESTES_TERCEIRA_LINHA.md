# Testes da Terceira Linha de Terminal

## Teste 1: Número 29 (com terceira linha)
**Entrada:** 29

**Cálculos Esperados:**

**Primeira Linha (Terminal Comum):**
- Resultado: 9 (último dígito de 29)

**Segunda Linha (Camuflados):**
- Subtração: |2-9| = 7
- Soma: 2+9 = 11 → 1 (último dígito de 11)

**Terceira Linha (Aplicar lógica ao resultado da segunda linha = 11):**
- Subtração: |1-1| = 0 ✓
- Soma: 1+1 = 2 ✓

**Resultados Obtidos:**
- ✅ Terminal Comum: 9 ✓
- ✅ Camuflado Subtração: 7 ✓
- ✅ Camuflado Soma: 1 ✓
- ✅ Terceira Linha Subtração: 0 ✓
- ✅ Terceira Linha Soma: 2 ✓

**Status:** PASSOU ✓

---

## Teste 2: Número 19 (com terceira linha)
**Entrada:** 19

**Cálculos Esperados:**

**Primeira Linha (Terminal Comum):**
- Resultado: 9 (último dígito de 19)

**Segunda Linha (Camuflados):**
- Subtração: |1-9| = 8
- Soma: 1+9 = 10 → 0 (último dígito de 10)

**Terceira Linha (Aplicar lógica ao resultado da segunda linha = 10):**
- Subtração: |1-0| = 1
- Soma: 1+0 = 1

**Resultados Obtidos:**
- ✅ Terminal Comum: 9 ✓
- ✅ Camuflado Subtração: 8 ✓
- ✅ Camuflado Soma: 0 ✓
- ✅ Terceira Linha Subtração: 1 ✓
- ✅ Terceira Linha Soma: 1 ✓

**Status:** PASSOU ✓

---

## Teste 3: Número 28 (com terceira linha)
**Entrada:** 28

**Cálculos Esperados:**

**Primeira Linha (Terminal Comum):**
- Resultado: 8 (último dígito de 28)

**Segunda Linha (Camuflados):**
- Subtração: |2-8| = 6
- Soma: 2+8 = 10 → 0 (último dígito de 10)

**Terceira Linha (Aplicar lógica ao resultado da segunda linha = 10):**
- Subtração: |1-0| = 1
- Soma: 1+0 = 1

**Resultados Obtidos:**
- ✅ Terminal Comum: 8 ✓
- ✅ Camuflado Subtração: 6 ✓
- ✅ Camuflado Soma: 0 ✓
- ✅ Terceira Linha Subtração: 1 ✓
- ✅ Terceira Linha Soma: 1 ✓

**Status:** PASSOU ✓

---

## Teste 4: Número 32 (SEM terceira linha)
**Entrada:** 32

**Resultado Esperado:** Apenas primeira e segunda linhas (sem terceira linha)

**Status:** ✅ CONFIRMADO - Números que não são 19/28/29 não mostram terceira linha

---

## Resumo
- **Teste 1 (29):** ✅ PASSOU - Terceira linha funcionando corretamente
- **Teste 2 (19):** ✅ PASSOU - Terceira linha funcionando corretamente
- **Teste 3 (28):** ✅ PASSOU - Terceira linha funcionando corretamente
- **Todos os testes:** ✅ 100% PASSOU
