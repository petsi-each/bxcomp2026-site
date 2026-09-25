#include <stdio.h>
#include <string.h>

#define MAX_TAM 1000005

int main(void) {
    char linha[MAX_TAM];

    if (fgets(linha, sizeof(linha), stdin) == NULL) {
        return 0;
    }

    // remove ('\n') no final, se existir
    int tamanho = strlen(linha);
    if (tamanho > 0 && linha[tamanho - 1] == '\n') {
        linha[tamanho - 1] = '\0';
        tamanho--;
    }
    // remove '\r'
    if (tamanho > 0 && linha[tamanho - 1] == '\r') {
        linha[tamanho - 1] = '\0';
        tamanho--;
    }

    // ignora linha vazia e segue para a proxima
    if (tamanho == 0) {
        return 0;
    }

    // letra_anterior guarda o ultimo som lido: 'i' para ping, 'o' para pong.
    // comeca em '\0'
    char letra_anterior = '\0';

    // venceu indica se ja descobrimos o vencedor: 'H' = Hugo, 'D' = Duo, '\0' = ainda nao
    char venceu = '\0';

    // percorre a string de 4 em 4 caracteres (tamanho de "ping" e "pong").
    // "<=" (em vez de "<") na condicao: o laço roda mais uma vez usando
    // o letra_anterior, simbolizando que o ultimo jogador a receber a
    // bolinha nao teve devolveu (fim da partida).
    for (int i = 0; i <= tamanho; i += 4) {
        char letra_atual;

        if (i < tamanho) {
            // o segundo caractere de cada bloco de 4 define
            letra_atual = linha[i + 1];
        } else {
            letra_atual = letra_anterior;
        }

        // letra atual repete a letra anterior?
        if (letra_atual == letra_anterior) {
            if (letra_atual == 'o') {
                // "pong" duas vezes seguidas -> Hugo marca o ponto e vence
                venceu = 'H';
            } else {
                // "ping" duas vezes seguidas -> Duo marca o ponto e vence
                venceu = 'D';
            }
            break;
        }

        letra_anterior = letra_atual;
    }

    if (venceu == 'H') {
        printf("Brasiiiiiil Hugo Calderano eh campeao\n");
    } else {
        printf("A Coruuuuuja eh campea\n");
    }

    return 0;
}