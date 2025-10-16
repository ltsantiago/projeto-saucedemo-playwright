#!/bin/bash


# Função para exibir a mensagem de boas-vindas
exibir_mensagem_boas_vindas() {
    clear
    echo ""
    echo "============================================"
    echo "Olá!! seja bem-vindo(a) a minha prova técnica - Saucedemo"
    read -p "Por favor, me diga seu Nome: " name
    echo "$name"
    clear
    echo -e "Seja bem-vindo(a): $name\nVamos escolher uma das opções abaixo:"
    echo "================================================================" 
}

# Função para exibir as opções do menu
exibir_menu() {
    echo "1. Opção => (1) - Login"
    echo "2. Opção => (2) - Carrinho"
    echo "3. Opção => (3) - Checkout"
    echo "4. Sair da Aplicação"
}

# Função para ler a opção selecionada pelo usuário
ler_opcao() {
    read -p "Digite o número da opção desejada: " opcao
    echo "$opcao"
}

# Loop principal do menu
while true; do
    clear  # Limpa a tela
    exibir_mensagem_boas_vindas
    echo ""
    exibir_menu
    echo ""
    opcao=$(ler_opcao)

    case $opcao in
        1)
            echo "Você selecionou a Opção 1 - Executando Suite de Login"
            testcaselogin=`npx playwright test`
            echo "$testcaselogin"
            ;;
        2)
            echo "Você selecionou a Opção 2 - Executando Suite do Carrinho"
            testcasecart=`npx playwright test`
            echo "$testcasecart"
            ;;
        3)
            echo "Você selecionou a Opção 3"
            ;;
        4)
            echo "Saindo do script..."
            exit 0
            ;;
        *)
            echo "Opção inválida. Por favor, digite um número de opção válido."
            ;;
    esac

    read -p "Pressione Enter para Retornar..."
done