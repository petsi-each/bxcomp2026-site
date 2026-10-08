#include <stdio.h>
#include <stdbool.h>

int main() {
    char mapa[8][32];
    
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 32; j++) {
            scanf(" %c", &mapa[i][j]); // o espaço antes do %c é necessário para ignorar \n 
        }
    }

    // inicializa variáveis para contagem dos fogos
    int pequenos = 0;
    int medios = 0;
    int grandes = 0;

    /* é necessário começar contando os grandes para não os contar de novo
    ao analisar os pequenos e médios, então ao encontrar um *, verificar 
    se ele é a ponta de um dos fogos grandes */
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 32; j++) {
            if (mapa[i][j] == '*') {
                if (i + 4 >= 8 || j - 4 < 0 || j + 4 >= 32) continue; // garante que não vamos acessar um índice fora da matriz
                
                bool eh_grande = true;

                // verifica se há os * passando pela coluna j
                for (int a = i; a <= i + 4; a++) {
                    if (mapa[a][j] != '*') eh_grande = false;
                }

                // verifica se há os * passando pela linha i + 2
                for (int b = j - 4; b <= j + 4; b++) {
                    if (mapa[i + 2][b] != '*') eh_grande = false;
                }

                // verifica os demais *
                if (mapa[i + 1][j + 2] != '*' || mapa[i + 1][j - 2] != '*' || mapa[i + 3][j - 2] != '*' || mapa[i + 3][j + 2] != '*') eh_grande = false;

                if (!eh_grande) continue;

                grandes++;

                // apaga os * para não contar novamente
                for (int a = i; a <= i + 4; a++) {
                    mapa[a][j] = '.';
                }

                for (int b = j - 4; b <= j + 4; b++) {
                    mapa[i + 2][b] = '.';
                }
                
                mapa[i][j] = '.';
                mapa[i + 1][j + 2] = '.'; 
                mapa[i + 1][j - 2] = '.';
                mapa[i + 3][j - 2] = '.';
                mapa[i + 3][j + 2] = '.';       
            }
            
        }
    }

    // conta os fogos médios e os apaga
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 32; j++) {
            if (mapa[i][j] == '*') {
                if (i + 2 >= 8 || j - 1 < 0 || j + 1 >= 32) continue;

                if (mapa[i + 1][j] != '*' || mapa[i + 2][j] != '*' || mapa[i + 1][j - 1] != '*' || mapa[i + 1][j + 1] != '*') continue;

                medios++;

                mapa[i][j] = '.';
                mapa[i + 1][j] = '.'; 
                mapa[i + 2][j] = '.'; 
                mapa[i + 1][j - 1] = '.';
                mapa[i + 1][j + 1] = '.';
            }
        }
    }

    // conta os fogos pequenos
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 32; j++) {
            if (mapa[i][j] == '*') pequenos++;
        }
    }

    printf("%d %d %d\n", pequenos, medios, grandes);

    return 0;
}