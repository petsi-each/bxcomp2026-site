#include <stdio.h>
#include <stdlib.h>

// estrutura para armazenar o ponto inicial e final de cada ala
typedef struct {
    int inicio;
    int fim;
} Ala;

// funcao de comparacao usada pela funcao qsort para ordenar o vetor de alas
// ela recebe dois ponteiros genericos e os converte para o tipo da estrutura
int comparar(const void *a, const void *b) {
    Ala *ala_a = (Ala *)a;
    Ala *ala_b = (Ala *)b;
    
    // o objetivo principal eh ordenar as alas pelo ponto de partida de forma crescente
    if (ala_a->inicio != ala_b->inicio) {
        return ala_a->inicio - ala_b->inicio;
    }
    // criterio de desempate: se os inicios forem iguais, ordena pelo fim de forma crescente
    return ala_a->fim - ala_b->fim;
}

int main() {
    int t;
    
    // le o numero de simulacoes. caso retorne diferente de 1, encerra o programa
    if (scanf("%d", &t) != 1) {
        return 0;
    }

    // laco de repeticao que percorre todos os casos de teste
    while (t--) {
        int n, d;
        // n eh o numero de alas e d eh a distancia maxima tolerada
        scanf("%d %d", &n, &d);

        Ala alas[1005];
        
        // laco para ler o inicio e o fim de cada uma das n alas desordenadas
        for (int i = 0; i < n; i++) {
            scanf("%d %d", &alas[i].inicio, &alas[i].fim);
        }

        // ordena as alas usando o algoritmo quicksort da biblioteca padrao
        // parametros: vetor, quantidade de elementos, tamanho de cada elemento, funcao de comparacao
        qsort(alas, n, sizeof(Ala), comparar);

        int penalidade = 0;
        
        // a variavel fim_atual guarda o ponto mais distante alcancado pelas alas processadas
        // inicializamos com o fim da primeira ala (que agora esta ordenada)
        int fim_atual = alas[0].fim;

        // iteramos a partir da segunda ala (indice 1) ate a ultima
        for (int i = 1; i < n; i++) {
            // verifica a regra de embolamento: se a proxima ala comeca antes ou onde a atual termina
            if (alas[i].inicio <= fim_atual) {
                // aplica a penalidade fixa de 100 pontos conforme a regra
                penalidade += 100;
                
                // atualiza o final do bloco caso a nova ala va mais longe que a anterior
                if (alas[i].fim > fim_atual) {
                    fim_atual = alas[i].fim;
                }
            } else {
                // caso contrario, nao houve embolamento. vamos checar a regra de buraco na avenida
                int distancia = alas[i].inicio - fim_atual;
                
                // se o espaco vazio for maior que a tolerancia permitida
                if (distancia > d) {
                    // adiciona 1 ponto de penalidade para cada metro excedente
                    penalidade += (distancia - d);
                }
                
                // como as alas estao separadas, o novo fim passa a ser o fim da ala atual
                fim_atual = alas[i].fim;
            }
        }

        // verifica a penalidade final e imprime a mensagem correspondente
        if (penalidade == 0) {
            // sem nenhuma penalidade, a escola faz um desfile perfeito (texto igual ao exemplo de saida)
            printf("Que desfile impecavel! A Coruja vai voar pro titulo!\n");
        } else {
            // com penalidades, imprime a frase informando o total de pontos perdidos
            printf("Ih, deu ruim na evolucao! As Corujas tomaram %d pontos de penalidade.\n", penalidade);
        }
    }

    // retorna 0 indicando que o programa finalizou com sucesso
    return 0;
}