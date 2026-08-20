#include <stdio.h>
#include <string.h>

int main() {
    int T;
    scanf("%d\n", &T);

    char s[1001];
    while (T) {
        // lê a string binária (até 1000 chars)
        scanf("%s", s);
        int n = strlen(s);

        // verifica a maior sequencia de bits alternantes
        int max = 1, atual = 1;
        for (int i = 1; i < n; i++) {
            if (s[i] != s[i-1]) { // bits alternantes 
                atual++;
            } else {
                if (atual > max) max = atual;  // encontrou a maior sequencia até agora
                atual = 1;  // reseta contagem (sequencia quebrada)
            }
        }
        if (atual > max) max = atual;

        // ajusta para a maior sequência ímpar (só nos interessa padrões alternantes ímpares)
        int maiorImpar;
        if (max % 2 == 1) maiorImpar = max;  // o max já for ímpar, a sequência é ela mesma
        else maiorImpar = max - 1;

        // decide e imprime
        if (maiorImpar < 5) {
            // sem corrupção
            printf("Fala, Coruja!\n");
        }
        else if (maiorImpar == 5) {
            // grau BAIXO
            printf("Duo e Simon querem ficar juntos na SJr!!\n");
        }
        else if (maiorImpar >= 7 && maiorImpar <= 9) {
            // grau MÉDIO
            printf("O Simon esta feliz com a SJr!\n");
        }
        else /* odd_max >= 11 */ {
            // grau ALTO
            printf("O Duo esta feliz com a SJr!\n");
        }
        T--;
    }

    return 0;
}



