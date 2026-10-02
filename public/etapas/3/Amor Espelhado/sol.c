/************************************************************************
 * Identificar se uma mensagem pode ser transformada em palíndromo      *
 * e devolver o menor palíndromo lexicográfico dessa mensagem, ou seja, *
 * se todos os palíndromos dessa mensagem estivessem no dicionário,     *
 * esse seria o primeiro a aparecer.                                    *
 *                                                                      *
 * Entrada: Inteiro N (de 1 a 100, quantidade de cartinhas).            *
 * Próximas N linhas: uma mensagem, máx 1000 caracteres.                *
 * Ignorar espaços caracteres que não forem letras.                     *
 * Tratando letras maiúsculas e minúsculas como iguais.                 *
 *                                                                      *
 * Mensagem boa: Imprimir o palíndromo alfabético, letras minúsculas.   *
 * Mensagem ruim: Imprimir ”Ixi, essa daqui vai pra fogueira...”        *
 ************************************************************************/

#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h>

int main() {
    int N;
    scanf("%d", &N);
    char mensagem[1001];
    char alfabeto[26] = {0};

    for(int i = 0; i < N; i++){
        scanf(" %[^\n]", mensagem);
        char meio = '0';
        bool achouImpar = false;
        bool mensagemBoa = true;

        for(int j = 0; j < strlen(mensagem); j++) {
            char c = mensagem[j];
            if(!isalpha(c)){
                continue; // ignora caracteres que não são letras
            }
            c = tolower(c); // deixa tudo minúsculo
            alfabeto[c - 'a']++;
        }

        for(int k = 0; k < 26; k++){
            if(alfabeto[k] % 2 != 0) {
                if(!achouImpar) {
                    meio = k + 'a'; // guarda o índice do caracter que vai para o meio do palíndromo
                    achouImpar = true; // deixa o menor caracter lexicográfico para o meio do palíndromo
                } else {
                    printf("Ixi, essa daqui vai pra fogueira...\n");
                    mensagemBoa = false;
                    break;
                }
            }
        }

        if(mensagemBoa) {
            for(int k = 0; k < 26; k++){
                for(int l = 0; l < (alfabeto[k] / 2); l++) {
                    printf("%c", k + 'a'); // imprime a primeira metade do palíndromo
                }
            }
            if (meio != '0')
                printf("%c", meio); // imprime o caracter do meio
            for(int k = 25; k >= 0; k--) {
                for(int m = 0; m < (alfabeto[k] / 2); m++) {
                    printf("%c", k + 'a'); // imprime a segunda metade do palíndromo
                }
            }
            printf("\n");   
        }
        memset(alfabeto, 0, sizeof(alfabeto)); // reseta para a próxima mensagem
    }


    return 0;
}