// 1 - Processador de Checkout de E-commerce
// Cenário: Você está desenvolvendo o motor de finalização de compras de uma loja virtual. O sistema precisa executar duas etapas distintas antes de fechar o pedido: primeiro, validar o valor da compra para aplicar regras de frete/desconto (comparação de faixas numéricas e múltiplas condições); segundo, processar a forma de pagamento escolhida pelo cliente (correspondência exata de valores fixos).
// Tarefa: Crie as variáveis const valorCompra, const clienteVip (booleano) e const formaPagamento (ex: "pix", "boleto", "credito", "debito"). Analise cada etapa do problema e escolha por conta própria onde faz mais sentido usar if / else if / else e onde faz mais sentido usar switch / case para imprimir o resumo final do pedido:
// Etapa 1 — Cálculo de Benefício por Valor (Decida qual estrutura usar):
// - Se valorCompra for menor ou igual a 0: imprima "Erro: Valor de compra inválido." e encerre a lógica.
// - Se valorCompra for menor que 100: imprima "Frete padrão: R$ 20,00."
// - Se valorCompra estiver entre 100 e 299.99 ou clienteVip for true: imprima "Benefício aplicado: Frete Grátis!"
// - Se valorCompra for 300 ou mais e clienteVip for false: imprima "Benefício aplicado: Frete Grátis + 10% de desconto!"
// Etapa 2 — Processamento da Forma de Pagamento (Decida qual estrutura usar):
// - "pix": imprima "Gerando QR Code com aprovação instantânea..."
// - "credito" ou "debito": imprima "Conectando à operadora de cartão..."
// - "boleto": imprima "Gerando linha digitável com vencimento em 3 dias úteis..."
// - Qualquer outro valor não listado: imprima "Erro: Forma de pagamento não aceita."

// const valorCompra = +prompt("Digite o valor de compra");
// const clienteVip = true;
// const formaPagamento = prompt("Digite forma de pagamento");

// let compraValida = true;

// console.log("=== RESUMO DO PEDIDO ===");

// if (valorCompra <= 0) {
//     console.log("Erro: Valor de compra inválido.");
//     compraValida = false;
// }

// else if (valorCompra > 100) {
//     console.log("Frete padrão: R$ 20,00.")
// }

// else if ((valorCompra >= 100 && valorCompra <= 299.99) || clienteVip === true) {
//     console.log("Benefício aplicado: Frete Grátis!");
// }

// else if (valorCompra >= 300 && clienteVip === false) {
//     console.log("Benefício aplicado: Frete Grátis + 10% de desconto!");
// }


// if (compraValida) {
//     switch (formaPagamento.toLowerCase()) {
//         case "pix":
//             console.log("Gerando QR Code com aprovação instantânea...");
//             break;

//         case "credito":
//         case "debito":
//             console.log("Conectando à operadora de cartão...");
//             break;

//         case "boleto":
//             console.log("Gerando linha digitável com vencimento em 3 dias úteis...");
//             break;

//         default:
//             console.log("Erro: Forma de pagamento não aceita.");
//             break;
//     }
// }


// 2- Sistema de Triagem de Suporte Técnico / Helpdesk
// Cenário: Você está programando o motor de distribuição de chamados de uma plataforma de atendimento. Quando um cliente abre um ticket, o sistema precisa realizar duas classificações: primeiro, encaminhar o chamado para o departamento correto com base na categoria selecionada (correspondência exata de texto); segundo, definir o prazo máximo de resposta (SLA) calculando o impacto financeiro e o nível do plano do cliente (faixas numéricas e operadores lógicos).
// Tarefa: Crie as variáveis const categoriaChamado (ex: "financeiro", "bug", "acesso", "duvida"), const prejuizoEstimado e const clienteEnterprise (booleano). Analise cada etapa do problema e escolha por conta própria onde faz mais sentido usar if / else if / else e onde faz mais sentido usar switch / case para imprimir o direcionamento do ticket:
// Etapa 1 — Roteamento de Departamento (Decida qual estrutura usar):
// - "financeiro": imprima "Direcionando ticket para a equipe de Faturamento e Cobrança."
// - "bug": imprima "Direcionando ticket para a Engenharia de Software (Nível 2)."
// - "acesso" ou "duvida": imprima "Direcionando ticket para o Atendimento Geral (Nível 1)."
// - Qualquer outro valor não listado: imprima "Erro: Categoria de chamado inválida."
// Etapa 2 — Definição de Prioridade e SLA (Decida qual estrutura usar):
// - Se prejuizoEstimado for menor que 0: imprima "Erro: Valor de prejuízo inválido."
// - Se prejuizoEstimado for 10000 ou mais ou clienteEnterprise for true: imprima "Prioridade CRÍTICA: Atendimento imediato (SLA: 1 hora)."
// - Se prejuizoEstimado estiver entre 1000 e 9999.99 e clienteEnterprise for false: imprima "Prioridade ALTA: Atendimento em até 4 horas."
// - Caso contrário (prejuizoEstimado menor que 1000 e não for Enterprise): imprima "Prioridade NORMAL: Atendimento em até 24 horas."

const categoriaChamado = +prompt("Digitar a categoria");
const prejuizoEstimado = +prompt("Digitar nivel de prejuiço estimado");
const clienteEnterprise = false;

let chamadoValido = true;

console.log("=== TRIAGEM DO CHAMADO ===");

switch (categoriaChamado.toLowerCase()) {
    case "financeiro":
        console.log("Direcionando ticket para a equipe de Faturamento e Cobrança.");
        break;

    case "bug":
        console.log("Direcionando ticket para a Engenharia de Software (Nível 2).");
        break;

    case "acesso":
    case "duvida":
        console.log("Direcionando ticket para o Atendimento Geral (Nível 1).");
        break;

    default:
        console.log("Erro: Categoria de chamado inválida.");
        chamadoValido = false;
        break;
}
if (chamadoValido) {
    if (prejuizoEstimado < 0) {
        console.log("Erro: Valor de prejuízo inválido.");
    } 
    
    else if (prejuizoEstimado >= 10000 || clienteEnterprise === true) {
        console.log("Prioridade CRÍTICA: Atendimento imediato (SLA: 1 hora).");
    }
    
    else if (prejuizoEstimado >= 1000 && prejuizoEstimado <= 9999.99 && clienteEnterprise === false) {
        console.log("Prioridade ALTA: Atendimento em até 4 horas.");
    }
    
    else {
        console.log("Prioridade NORMAL: Atendimento em até 24 horas.");
    }
}
