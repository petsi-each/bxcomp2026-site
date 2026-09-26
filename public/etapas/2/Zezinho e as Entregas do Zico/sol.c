#include <stdio.h>

#define MAX_PEDIDOS 100
#define MAX_TIMES 20

int main() {
    int N, W, C;

    scanf("%d %d %d", &N, &W, &C);

    int pedidos[MAX_TIMES + 1][MAX_PEDIDOS][MAX_PEDIDOS];
    int tamanho[MAX_TIMES + 1][MAX_PEDIDOS] = {0};
    int inicio[MAX_TIMES + 1][MAX_PEDIDOS];
    int quantidade[MAX_TIMES + 1] = {0};

    int id, horario;
    
    for (int i = 0; i < N; i++) {

        scanf("%d %d", &id, &horario);

        // viagem existe? se não, é criada
        
        int ultima = quantidade[id] - 1;

        if (ultima == -1) {

            quantidade[id] = 1;

            ultima = 0;

            inicio[id][ultima] = horario;

            tamanho[id][ultima] = 0;
        }

        // pedido pode entrar na viagem?
        
        if (
            tamanho[id][ultima] < C &&
            horario <= inicio[id][ultima] + W
        ) {
            pedidos[id][ultima][tamanho[id][ultima]] = i;

            tamanho[id][ultima]++;

        } else {

            ultima = quantidade[id];

            quantidade[id]++;

            inicio[id][ultima] = horario;

            tamanho[id][ultima] = 0;

            pedidos[id][ultima][tamanho[id][ultima]] = i;

            tamanho[id][ultima]++;
        }
    }

    // nro total de viagens
    int total = 0;

    for (int id = 1; id <= MAX_TIMES; id++) {
        total += quantidade[id];
    }

    printf("%d\n", total);

    for (int id = 1; id <= MAX_TIMES; id++) {

        for (int viagem = 0;
             viagem < quantidade[id];
             viagem++) {

            printf("%d:", id);

            for (int j = 0;
                 j < tamanho[id][viagem];
                 j++) {

                printf(" %d", pedidos[id][viagem][j]);
            }

            printf("\n");
        }
    }

    return 0;
}