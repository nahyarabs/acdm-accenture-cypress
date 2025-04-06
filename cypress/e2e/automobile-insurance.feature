#uft-8
#language: pt

Funcionalidade: cotacao de seguro automotivo de um carro

    Contexto: usuario acessa o portal Tricentis e navega ate a pagina Automobile
        Dado que o usuario acessou o portal Tricentis
        E navegou ate a pagina Automobile

    Cenario: preenchimento dos campos obrigatorios com dados validos
        Quando o usuario preenche todas as abas obrigatorias com dados validos
        E envia o formulario
        Entao o usuario vera notificacao de sucesso de envio da cotacao

#    Cenario: preenchimento dos campos com dados invalidos
#        Quando o usuario preenche uma ou mais abas com dados invalidos
#        E tenta enviar o formulário
#        Então o usuario vera notificacao de erro informando os campos incorretos

#    Cenario: enviar o formulario sem nenhum campo preenchido
#        Quando o usuario tenta enviar o formulario sem preencher os dados
#        Então o usuario vera notificao para preencher as abas obrigatorias


