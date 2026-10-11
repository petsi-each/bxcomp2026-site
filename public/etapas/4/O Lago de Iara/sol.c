#include <stdio.h>
#include <stdlib.h>

int matriz[1005][1005];

int main() {
    int M, K;
    int X, Y;
    int B;

    scanf("%d", &M);
    scanf("%d", &K);
    scanf("%d %d", &X, &Y);
    scanf("%d", &B);

    // Calcula a intensidade de cada posição do lago
    for (int i = 0; i < M; i++) {
        for (int j = 0; j < M; j++) {
            int distanciaX = abs(i - X);
            int distanciaY = abs(j - Y);

            int distancia;
            if (distanciaX > distanciaY)
                distancia = distanciaX;
            else
                distancia = distanciaY;

            int intensidade = K - distancia;

            if (intensidade < 0)
                intensidade = 0;

            matriz[i][j] = intensidade;
        }
    }

    // Imprime a matriz
    for (int i = 0; i < M; i++) {
        for (int j = 0; j < M; j++) {
            printf("%d", matriz[i][j]);

            if (j < M - 1)
                printf(" ");
        }
        printf("\n");
    }

    // Limite entre perigo e segurança
    int T = K / 2;

    // Verifica cada coruja
    for (int i = 0; i < B; i++) {
        int xb, yb;
        scanf("%d %d", &xb, &yb);

        if (matriz[xb][yb] > T)
            printf("%d %d P\n", xb, yb);
        else
            printf("%d %d S\n", xb, yb);
    }

    return 0;
}
