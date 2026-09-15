#include <stdio.h>
#include <string.h>

int main() {
    int n;
    
    if (scanf("%d", &n) != 1) return 0;

    if (n == 1) {
        char palavra[105];
        scanf("%s", palavra);
        printf("1\n");
        return 0;
    }

    char palavra_anterior[105];
    char palavra_atual[105];
    
    int maior_sequencia = 1;
    int sequencia_atual = 1;

    scanf("%s", palavra_anterior);

    for (int i = 1; i < n; i++) {
        scanf("%s", palavra_atual);

        int len_ant = strlen(palavra_anterior);
        int len_atu = strlen(palavra_atual);

        if (palavra_anterior[len_ant - 1] == palavra_atual[len_atu - 1] &&
            palavra_anterior[len_ant - 2] == palavra_atual[len_atu - 2] &&
            palavra_anterior[len_ant - 3] == palavra_atual[len_atu - 3]) {
            
            sequencia_atual++;
        } else {
            if (sequencia_atual > maior_sequencia) {
                maior_sequencia = sequencia_atual;
            }
            sequencia_atual = 1;
        }

        strcpy(palavra_anterior, palavra_atual);
    }

    if (sequencia_atual > maior_sequencia) {
        maior_sequencia = sequencia_atual;
    }

    printf("%d\n", maior_sequencia);

    return 0;
}