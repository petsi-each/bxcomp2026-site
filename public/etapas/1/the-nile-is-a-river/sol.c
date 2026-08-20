#include <stdio.h>

int main() {
    int T;
    scanf("%d", &T);

    for (int i = 0; i < T; i++) {
        int mergulhar = 0, pular = 0, remar = 0, voar = 0; // true = 1, false = 0
        int tabuleiro[6][6]; // criar tabuleiro com borda

        for (int l = 0; l <= 5; l++) {
            for (int c = 0; c <= 5; c++) {
                if (l == 0 || c == 0 || l == 5 || c == 5) tabuleiro[l][c] = -1; // atribuir número impossível na borda
                else scanf("%d", &tabuleiro[l][c]);
            }
        }

        for (int l = 1; l <= 4; l++) {
            for (int c = 1; c <= 4; c++) {
                int atual = tabuleiro[l][c], cima = tabuleiro[l-1][c], direita = tabuleiro[l][c+1], esquerda = tabuleiro[l][c-1], baixo = tabuleiro[l+1][c];

                // caso alguma das ações seja possível uma única vez, marcar como true (1)
                if (atual != 0 && (cima == atual || cima == 0)) voar = 1;
                if (atual != 0 && (direita == atual || direita == 0)) pular = 1;
                if (atual != 0 && (esquerda == atual || esquerda == 0)) remar = 1;
                if (atual != 0 && (baixo == atual || baixo == 0)) mergulhar = 1;
            }
        }

        if (mergulhar == 1) {
            if (pular == 1) {
                if (remar == 1) {
                    if (voar == 1) printf("MERGULHAR PULAR REMAR VOAR\n");
                    else printf("MERGULHAR PULAR REMAR\n");
                } else {
                    if (voar == 1) printf("MERGULHAR PULAR VOAR\n");
                    else printf("MERGULHAR PULAR\n");
                }
            } else {
                if (remar == 1) {
                    if (voar == 1) printf("MERGULHAR REMAR VOAR\n");
                    else printf("MERGULHAR REMAR\n");
                } else {
                    if (voar == 1) printf("MERGULHAR VOAR\n");
                    else printf("MERGULHAR\n");
                }
            }
        } else {
            if (pular == 1) {
                if (remar == 1) {
                    if (voar == 1) printf("PULAR REMAR VOAR\n");
                    else printf("PULAR REMAR\n");
                } else {
                    if (voar == 1) printf("PULAR VOAR\n");
                    else printf("PULAR\n");
                }
            } else {
                if (remar == 1) {
                    if (voar == 1) printf("REMAR VOAR\n");
                    else printf("REMAR\n");
                } else {
                    if (voar == 1) printf("VOAR\n");
                    else printf("NENHUMA ACAO DISPONIVEL\n");
                }
            }
        }
    }
    return 0;

}

