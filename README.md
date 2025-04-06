# Vehicle Assurance Application - Test Automation with Cypress

## Descrição  
Este repositório contém o caso de teste automatizado para validar o fluxo completo de preenchimento das informações necessárias para submeter uma cotação de seguro veicular na aplicação **"Vehicle Assurance"** da Tricentis.

## Fluxo de Teste  

1. Acessar o site da aplicação: [https://sampleapp.tricentis.com/101/](https://sampleapp.tricentis.com/101/)
2. Preencher as informações do veículo (automóvel, caminhão, motocicleta ou camper)
3. Validar os campos de dados do usuário
4. Submeter a cotação e verificar os resultados

## Tecnologias Utilizadas

- **NodeJS**: ambiente de execução para JavaScript no backend
- **Cypress**: ferramenta para automação de testes end-to-end
- **Cucumber**: framework para escrita de testes em formato Gherkin
- **Faker**: biblioteca para geração de dados falsos em testes
- **BDD**: prática de desenvolvimento orientado a comportamentos, usando especificações em linguagem natural

## Pré-Requisitos

- Instalar o **Node.js** e **npm** (caso ainda não tenha).  
- Instalar as dependências do projeto:
```bash
npm install
```

## Estrutura de Diretórios

```plaintext
features/           → Contém os arquivos de especificação Gherkin  
support/            → Arquivos de configuração e comandos customizados do Cypress  
step_definitions/   → Definições de passos do Cucumber para os testes
```

## Execução dos Testes

Para rodar os testes, use o comando:

```bash
npx cypress open
```

- Selecione a opção de executar os testes em um navegador.

## Conclusão  
Este projeto é uma demonstração de como usar o **Cypress** e o **Cucumber** para automatizar testes de aplicações de cotação de seguros, como o **"Vehicle Assurance"** da Tricentis.

----

## Tela de início
![image](https://github.com/user-attachments/assets/49fe4394-635e-4efb-92ac-a2dbcd084750)

## Tela de Automobile Insurance
![image](https://github.com/user-attachments/assets/8bbc7bff-7ea3-4d96-b301-ae331f007786)

## Tela de sucesso
![image](https://github.com/user-attachments/assets/ef7f8965-7a04-4204-be9a-bbb748d6238f)

----

- [Nahyara Batista - LinkedIn](https://www.linkedin.com/in/nahyarabs)


