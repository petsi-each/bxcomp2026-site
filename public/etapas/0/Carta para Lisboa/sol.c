#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAXM 100
#define MAXP 31

int comparaPalavra(char *a, char *b) { // compara as palavras
    while (*a && *b) {
        if (tolower(*a) != tolower(*b))
            return 0;
        a++; b++;
    }
    return *a == '\0' && *b == '\0';
}

// ve se a palavra termina com ol 
int terminaComOL( char *palavra) {
    int len = strlen(palavra);
    if (len < 2) return 0;
    char c1 = tolower(palavra[len - 2]);
    char c2 = tolower(palavra[len - 1]);
    return (c1 == 'o' && c2 == 'l');
}

int main(void) {
    int C ;
    scanf("%d", &C);

    while (C>0) {
        char alerta[MAXP];
        int K, N;

        scanf("%s", alerta);
        scanf("%d", &K);
        scanf("%d", &N);

        char palavras[MAXM][MAXP];
        for (int i = 0; i < N; i++) {
            scanf("%s", palavras[i]);
        }

        // pelo menos k palavras terminando em "OL"
        int contEsperanca = 0;
        for (int i = 0; i < N; i++) {
            if (terminaComOL(palavras[i])) contEsperanca++;
        }
        int regra1 = (contEsperanca >= K);

        // palavra de alerta n pode repetir em sequencia
        int regra2 = 1;
        for (int i = 0; i < N - 1; i++) {
            if (comparaPalavra(palavras[i], alerta) && comparaPalavra(palavras[i + 1], alerta)) {
                regra2 = 0;
                break;
            }
        }

        // primeira e ultim mesmo tam
        int regra3 = (strlen(palavras[0]) == strlen(palavras[N - 1]));

        if (regra1 && regra2 && regra3) {
            printf("Fita pronta a ser enviada para Lisboa!\n");
        } else {
            printf("Cuidado! Sua fita sera barrada!\n");
        }
        C--;
    }
}
