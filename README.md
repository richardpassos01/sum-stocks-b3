# Como usar

Altere o valor da variável stocks adicionando suas operações, informando o tipo de operação (Compra ou Venda), 
sigla da ação que comprou, quantidade e o valor da ordem.

Ex:
````
const stocks = [
    { type: 'C', name: 'FLRY3F', quantity: 11, value: 338.58},
    { type: 'V', name: 'ABEV3', quantity: 100, value: 1918.00},
    { type: 'V', name: 'ABEV3', quantity: 400, value: 7672.00},
    { type: 'C', name: 'ITSA4', quantity: 400, value: 5504.00}
];
````

Após isso, rode o comando `node script.js` e aguarde, será gerado um arquivo txt com as informações consolidadas das suas operações.


### Sobre o Script

O script é bem simples, poderia fazer o nodejs ler a planilha excel da B3 e fazer todo trabalho, porém fiz bem rapido só para declarar meu IR, quem sabe ano que vem. Se quiser abir um PR com melhorias, bora ae.
Ps* Esses for of são feião hahahaha 
