# Testes da Calculadora de Terminais

## Teste 1: Número 32 (2 dígitos)
**Entrada:** 32

**Resultados Esperados:**
- Terminal Comum: 2 (último dígito de 32)
- Camuflado por Subtração: 1 (|3-2|=1)
- Camuflado por Soma: 5 (3+2=5)

**Resultados Obtidos:**
- ✅ Terminal Comum: 2 ✓
- ✅ Camuflado por Subtração: 1 ✓
- ✅ Camuflado por Soma: 5 ✓

**Status:** PASSOU

---

## Teste 2: Número 19 (2 dígitos com soma >= 10)
**Entrada:** 19

**Resultados Esperados:**
- Terminal Comum: 9 (último dígito de 19)
- Camuflado por Subtração: 8 (|1-9|=8)
- Camuflado por Soma: 0 (1+9=10 → terminal 0)

**Resultados Obtidos:** (Teste manual necessário)

---

## Teste 3: Número 7 (1 dígito)
**Entrada:** 7

**Resultados Esperados:**
- Terminal Comum: 7 (último dígito de 7)
- Camuflados: Não aplicável (número de 1 dígito)

**Resultados Obtidos:** (Teste manual necessário)

---

## Teste 4: Validação - Entrada Vazia
**Entrada:** (vazio)

**Resultado Esperado:** Erro amigável "Digite um número para calcular"

**Status:** Aguardando teste

---

## Teste 5: Validação - Número > 36
**Entrada:** 37

**Resultado Esperado:** Erro "Digite um número entre 0 e 36 (roleta europeia)"

**Status:** Aguardando teste

---

## Teste 6: Validação - Número Negativo
**Entrada:** -5

**Resultado Esperado:** Erro "Digite um número entre 0 e 36 (roleta europeia)"

**Status:** Aguardando teste

---

## Teste 7: Validação - Texto
**Entrada:** "abc"

**Resultado Esperado:** Erro "Entrada inválida. Digite apenas números inteiros"

**Status:** Aguardando teste

---

## Resumo
- **Teste 1 (32):** ✅ PASSOU - Todos os cálculos corretos
- **Testes Restantes:** Aguardando execução manual
