#include <stdio.h>

int main(){

    // Declaração e atribuição de uma variável responsável por guardar a quantidade de casos teste.
    int casosDeTeste;
    scanf("%d", &casosDeTeste);

    while(casosDeTeste--){ // Laço que é executado "casosDeTeste" vezes.
        
        // Declaração de variáveis responsáveis por guardar as posições da coruja e do t-rex.
        int xCoruja = 0;
        int yCoruja = 0;
        int xTrex = 0;
        int yTrex = 0;

        // Declaração das variáveis que guardarão as distâncias (em espaços na matriz) horizontais e verticais entre a coruja e o t-rex (não são necessárias, mas ajudam a deixar o código mais legível).
        int distanciaX, distanciaY;

        // Declaração de uma matriz de caracteres com 7 linhas e 10 colunas (não é necessária visto que só será percorrida uma única vez, poderia ser substituído por um char).
        char matriz[7][10];

        for(int i = 0; i<7; i++){ // Laço que percorre todas as linhas da matriz.
            for(int j = 0; j<10; j++){ // Laço que percorre todas as colunas da matriz.
                
                scanf(" %c", &matriz[i][j]); // Atribuição dos valores à posição [i][j] da matriz.

                // Verificação do caracter que acabou de ser lido, se foi um 'C' atribuimos as posições da coruja, se foi um 'T' atribuimos as posições do t-rex .
                if(matriz[i][j] == 'C'){
                    xCoruja = j;
                    yCoruja = i;
                }
                else if(matriz[i][j] == 'T'){
                    xTrex = j;
                    yTrex = i;
                }
            }
        }

        // Operação ternária para atribuir as distâncias horizontais e verticais
        distanciaX = (xCoruja <= xTrex) ? xTrex-xCoruja : xCoruja-xTrex; 
        distanciaY = (yCoruja <= yTrex) ? yTrex-yCoruja : yCoruja-yTrex;
        /* Poderia ser substituído por:
        if(xCoruja <= xTrex) distanciaX = xTrex-xCoruja;
        else distanciaX = xCoruja-xTrex;
        if(yCoruja <= yTrex) distanciaY = yTrex-yCoruja;
        else distancia Y = yCoruja-yTrex;

        ou

        #include<stdlib.h>
        distanciaX = abs(xTrex-xCoruja);
        distanciaY = abs(yTrex-yCoruja);
        */

        /*
        O t-rex capta cheiros de até 384 metros;
        Cada espaço na matriz equivale ao comprimento de um t-rex;
        O comprimento de um t-rex equivale a 8 apatossauros empilhados, o comprimento de um apatossauro equivale a 6 pterossauros, um pterossauro possui 4 metros de altura;
        Portanto um t-rex possui 8*6*4 = 192 metros;
        Logo um t-rex capta cheiros de até 384/192 = 2 posições na matriz;
        Como o campo no qual o t-rex sente o cheiro é um quadrado, ambas as distâncias devem ser menores ou iguais a 2 para que o t-rex consiga cheirar a coruja.
        */
        if(distanciaX <= 2 && distanciaY <= 2) printf("Xi, ele me notou, preciso fugir antes que eu vire KFC de dinossauro!\n");
        else printf("Nao fui notada ainda hehehe\n");
    }

    return 0;
}

/*
Caso do PDF
4
0000000000
0000000000
00000000T0
0000000000
0000000000
000C000000
0000000000
0000000000
C000000000
0000000000
00T0000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000T00
0000000C00
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000T00000
0000000000
0000000000
0000000C00
*/