#include <stdio.h>

int main () {
    int T;
    scanf("%d", &T);

    for (int i = 0; i < T; i++) {
        int N;
        scanf("%d", &N);

        int matriz[N][N];
        int numero = 1;

        int x, y;
        int direcao = 0;
        int contador = 0;
        int limite = 1;

        // Ponto de partida para matrizes ímpares
        x = N / 2;
        y = N / 2;
        
        matriz[y][x] = numero++;
        if (N*N > 1) {
            x++; // Move para a direita para iniciar a espiral
        }

        while (numero <= N*N) {
            matriz[y][x] = numero++;
            contador++;

            if (contador == limite) {
                contador = 0;
                direcao = (direcao + 1) % 4;
                
                if (direcao == 0 || direcao == 2) {
                    limite++;
                }
            }

            switch (direcao) {
                case 0: x++; break;
                case 1: y--; break;
                case 2: x--; break;
                case 3: y++; break;
            }
        }

        for (int j = 0; j < N; j++) {
            for (int k = 0; k < N; k++) {
                printf("%d ", matriz[j][k]);
            }
            printf("\n");
        }
    }
}
