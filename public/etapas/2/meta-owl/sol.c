/* Tarefa: 
  - Receber 9 linhas, cada uma contendo um inteiro N (1 ≤ N ≤ 999)
  - Cada inteiro N representa uma célula na matriz 3x3
  - A saída deve conter as coordenadas (linha e coluna) de cada célula que
  contém um explosivo (caminho que foram mais percorridos, ou seja, o maior
  valor de N). Caso haja repetição deste inteiro, todas as células que
  contêm este valor devem ser impressas.
  - As coordenadas devem ser impressas na ordem em que aparecem na matriz,
  ou seja, da esquerda para a direita e de cima para baixo.
  - Imprimir ”Os explosivos estão nas coordenadas (coord1) e (coord2) e
  (coord3) e...” e assim por diante. O máximo de coordenadas que podem ser
  impressas é 9 (caso todas as células contenham o mesmo valor).
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(){
    int valor[9], maior = 0, C;
      
    scanf("%d", &C);
    for(int c = 0; c<C; c++){
        maior = 0;
      
        for(int i = 0; i < 9; i++){
            scanf("%d", &(valor[i]));
            if(valor[i] > maior) maior = valor[i];
        }
    
        printf("Os explosivos estao nas coordenadas ");
        for(int i = 0; i < 9; i++){
            if(valor[i] == maior){
                printf("%.0fx%d", floor(i / 3), i % 3);
                if(i != 8){
                    int ultimo = 1;
                    for(int j = i + 1; j < 9; j++){
                        if(valor[j] == maior) ultimo = 0;
                    }
                    if(!ultimo) printf(" e ");
                    else printf("\n");
                } else {
                    printf("\n");
                }
            }
        }
      
    }

    return 0;
}
