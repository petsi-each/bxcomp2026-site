/************************************************************************
 * Encontrar o tamanho do menor intervalo contínuo (sub-string) do      *
 * texto S que contenha todas as letras da palavra P na ordem correta,  *
 * aparecfimo de forma NÃO-CONTÍNUA (como uma subsequência de S).       *
 *                                                                      *
 * Entrada: Inteiro N (quantidade de casos de teste).                   *
 * Para cada caso (2 linhas):                                           *
 * - String S (fluxo), 1 a 10^5 caracteres, apenas letras minúsculas.   *
 * - String P (palavra), 1 a 100 caracteres, apenas letras minúsculas.  *
 *                                                                      *
 * Sucesso: Imprimir "X CARACTERES DE PURA EPIFANIA!", sfimo X o        *
 * tamanho do menor trecho contínuo encontrado.                         *
 * Falha: Imprimir "Epifania incompleta... O fluxo se perdeu."          *
 ************************************************************************/
#include <stdio.h>
#include <string.h>

int main() {
    int N, tamS, tamP, menor;
    char S[100001], P[101];

    scanf("%d", &N);
    // Para cada caso de teste
    for (int i = 0; i < N; i++){
        scanf("%s", S);
        scanf("%s", P);

        tamS = strlen(S);
        tamP = strlen(P);
        menor = tamS + 1; // substrings de S devem ter tamanho <= S

        for (int j = 0; j < tamS; j++){ // Fluxo S
            if(S[j] != P[0]) continue;

            // proxP indica a letra que queremos encontrar de P
            // subS indica a posição dentro da substring de S onde estamos buscando
            int proxP = 0, subS = j;

            // enquanto não achamos P inteira ou o fim de S...
            while (proxP < tamP && subS < tamS) {
                if (S[subS] == P[proxP])
                    proxP++; // se a letra de S for o próximo caracter de P, avançamos em P
                
                subS++; // avançamos em S independentemente do resultado
            }
            if (proxP == tamP){ // se achamos P inteira
                int tamanhoTrecho = subS - j; // a última posição da substring menos a primeira
                if (tamanhoTrecho < menor){
                    // atualiza se foi o menor até agora
                    menor = tamanhoTrecho;
                }
            }
        }

        if (menor == tamS + 1){ // se não achamos nenhum trecho
            printf("Epifania incompleta... O fluxo se perdeu.\n");
        } else {
            printf("%d CARACTERES DE PURA EPIFANIA!\n", menor);
        }
    }   

    return 0;
}