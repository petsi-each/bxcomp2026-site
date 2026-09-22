/*Para calcular essa proximidade na grade, é utilizada
a fórmula entre a posição do cão (Xc, Yc) e a posição
de alguém (Xp, Yp). D = |Xc - Xp| - |Xp - Yp|.

Devo ler o mapa do salão (uma matriz NxN) e determinar
se o cachorro irá me escolher (se estou mais perto do 
cachorro) ou se os meus rivais estão mais perto.*/


#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

int main() {
    int N, Dr, Dv, Xc, Yc, Xv, Yv;
    
    scanf("%d", &N);
    if(N < 3 || N > 100) {
        return 0;
    }

    char matriz[N][N];

        /*Percorrendo matriz e guardando a minha posição e a do cachorro*/
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                /*Faço as leituras dos caracteres.*/
                scanf(" %c", &matriz[i][j]);

                if(matriz[i][j] == 'C') {
                    Xc = i;
                    Yc = j;    
                }
                if(matriz[i][j] == 'V') {
                    Xv = i;
                    Yv = j;
                }
            }
        }
    
    /*Calculando a minha distância em relação ao cachorro.*/
    Dv = abs(Xc - Xv) + abs(Yc - Yv);
    
    /*Boleano fica como true por enquanto.*/
    bool venceu = true;
    
    /*Verificando as posições dos rivais.*/
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            if(matriz[i][j] == 'R') {
                Dr = abs(Xc - i) + abs(Yc - j);
                /*se a distância dos rivais for menor que a minha, a gente perde.*/
                if(Dr < Dv) {
                    venceu = false;
                }
            }
        }
    }

    /*Se venceu for true, printa a mensagem de vitória, caso contrário, a de derrota.*/
    if(venceu) {
        printf("Ao vencedor as batatas!");    
    } else {
        printf("Ao vencido, ódio ou compaixão");
    }

    return 0;
}