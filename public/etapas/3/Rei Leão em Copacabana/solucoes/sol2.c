/************************************************************************
 * Receber o mapa de tamanho 32x8 e retornar o número de fogos de       *
 * artifícios de cada tamanho                                           *
 *                                                                      *
 * Pequeno:                                                             *
 *   ∗                                                                  *
 * Médio:                                                               *
 *   *                                                                  *
 *  ***                                                                 *
 *   *                                                                  *
 * Grande:                                                              *
 *     *                                                                *
 *   * * *                                                              *
 * *********                                                            *
 *   * * *                                                              *
 *     *                                                                *
 *                                                                      *
 * Restrição: fogos de artifícios diferentes que estão na mesma altura  *
 * sempre possuem distância de ao menos 1 espaço vazio entre si.        *
 *                                                                      *
 * A saída é composta por 3 números inteiros, respectivamente:          *
 * 1- O número de fogos pequenos                                        *
 * 2- O número de fogos médios                                          *
 * 3- O número de fogos grandes                                         *
 * Cada um deve ser separado por espaço ” ”                             *
 ************************************************************************/

#include <stdio.h>

int main() {
    char mapa[8][32];
    int pequeno = 0, medio = 0, grande = 0, c = 0;

    // Ler o mapa
    for(int i = 0; i < 8; i++) {
        fread(mapa[i], 1, 32, stdin);
        fgetc(stdin); // Consumir o caractere de nova linha
    }

    // Contar os fogos de artifício
    for(int i = 0; i < 8; i++) {
        for(int j = 0; j < 32; j++) {
            if(mapa[i][j] == '*') {
                pequeno++;
                c++;
            } else {
                if(c == 9){
                    grande++;
                    pequeno -= 17;
                } else if(c == 3){
                    medio++;
                    pequeno -= 5;
                }

                c = 0; // Resetar o contador quando encontrar um espaço
            }
        }
    }

    // Imprimir os resultados
    printf("\n%d %d %d\n", pequeno, medio, grande);

    return 0;
}