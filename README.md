BiNode:
Considere uma estrutura de dados simples chamada BiNode, que possui ponteiros para dois outros nós. A estrutura de dados BiNode pode ser usada para representar tanto uma árvore binária (onde node1 é o nó esquerdo e node2 é o nó direito) ou uma lista duplamente ligada (onde node1 é o nó anterior e node2 é o próximo nó). Implemente um método para converter uma árvore de pesquisa binária (implementada com BiNode) em uma lista duplamente vinculada. Os valores devem ser mantidos em ordem e a operação deve ser executada no local (ou seja, na estrutura de dados original)


Por exemplo, para a seguinte árvore de pesquisa binária simples:
![biNode](https://i.imgur.com/KaUVmE8.png)

O método convert deve transformá-lo na lista duplamente ligada abaixo:
0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6
