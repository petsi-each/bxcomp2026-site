#include <stdio.h>

typedef struct {
    int num;
    int rep;
} NUMERO;

int main() {
    int N, M;
    scanf("%d", &N);
    scanf("%d", &M);

    NUMERO Lista[N+1];
    for (int i = 1; i <= N; i++) {
        Lista[i].num = 0;
        Lista[i].rep = 0;
    }

    for (int i = 0; i < M; i++) {
        int numero;
        scanf("%d", &numero);

        Lista[numero].num++;
    }

    /*
    for (int i = 1; i <= N; i++) {
        printf("%d ", Lista[i].num);
    }
    */
    
    for (int i = 1; i < N; i++) {
        if (Lista[i].rep == 0) {
            for (int j = i+1; j <= N; j++) {
                if (Lista[i].num == Lista[j].num) {
                    Lista[i].rep = 1;
                    Lista[j].rep = 1;
                }            
            }
        }
    }
    
    int maior = 0;
    int index = 0;
    for (int i = 1; i <= N; i++) {
        // printf("\nMAIOR = %d\nLista[%d].num = %d\nLista[%d].rep = %d\n", maior, i, Lista[i].num, i, Lista[i].rep);
        if (Lista[i].rep == 0 && maior < Lista[i].num) {
            // printf("MUDOU AQUI HEIN\n");
            maior = Lista[i].num;
            index = i;
        }
    }
    
    if (index != 0) printf("Entrem no portal %d petianes!\n", index);
    else printf("Ferrou! Salve-se quem puder!\n");

    return 0;
}
