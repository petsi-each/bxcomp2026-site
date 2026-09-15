#include <stdio.h>

int main() {
    int N; // Variável que representa a quantidade de músicas
    int T; // Variável para armazenar o tempo máximo do show e segundos
    int quantidadeMusicas = 0; // Variável para contar a quantidade de músicas que podem ser tocadas dentro do intervalo de tempo T

    scanf("%d", &N); // Leitura da quantidade de músicas
    
    int duracaoMusica[N]; // Arranjo para armazenar a duração de cada música

    // Leitura da duração de cada música
    for (int i = 0; i < N; i++) {
        scanf("%d", &duracaoMusica[i]);
    }

    scanf("%d", &T); // Leitura do tempo máximo do show em segundos


    int temporario; // Variável temporária para auxiliar na ordenação das durações das músicas

    /* 
    Ordenação das durações das músicas em ordem crescente usando Bubble Sort (outros algoritmos de ordenação poderiam ser usados para maior eficiência, mas Bubble Sort é simples e suficiente para este caso)
    
    O algoritmo funciona da seguinte maneira:
    1- Ele percorre o arranjo de durações das músicas várias vezes.
    2- Em cada passagem, ele compara elementos adjacentes e os troca de posição se estiverem na ordem errada (se o elemento atual for maior que o próximo).
    3- O processo é repetido até que o arranjo esteja completamente ordenado, ou seja, até que nenhuma troca seja necessária em uma passagem completa.
    */
    for (int i = 0; i < N - 1; i++) {
        for (int j = 0; j < N - i - 1; j++) {
            if (duracaoMusica[j] > duracaoMusica[j + 1]) { // Se a duração da música atual for maior que a próxima...
                temporario = duracaoMusica[j]; // Armazena a duração da música atual na variável temporária
                duracaoMusica[j] = duracaoMusica[j + 1]; // A duração da próxima música é movida para a posição da música atual
                duracaoMusica[j + 1] = temporario; // A duração da música armazenada na variável temporária (a música atual) é movida para a posição da próxima música
            }
        }
    }

    // Passando pelas durações das músicas ordenadas, contando quantas músicas podem ser tocadas dentro do tempo T
    for (int i = 0; i < N; i++) {
        if (duracaoMusica[i] <= T) { // Se a duração da música atual for menor ou igual ao tempo restante T, ela pode ser tocada
            quantidadeMusicas++; // Incrementa a contagem de músicas que podem ser tocadas
            T -= duracaoMusica[i]; // Subtrai a duração da música do tempo restante T
        } else {
            break;
        }
    }
    
    printf("%d\n", quantidadeMusicas); // Imprime a quantidade de músicas que podem ser tocadas dentro do tempo T
    
    return 0;
}