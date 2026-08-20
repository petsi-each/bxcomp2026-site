#include <stdio.h>

/*
Voce recebera um numero N que representa o numero de linhas da mensagem. Para cada linha,
voce recebera um inteiro C, que representa o nivel de deslocamento das letras no alfabeto. A linha
criptografada sera enviada logo em seguida, com um limite maximo de 200 caracteres.
*/

int main () {
    int N; // número de linhas da mensagem (= número de casos teste)
    scanf("%d", &N);

    for (int i = 0; i < N; i++) {
        int C; // nível de deslocamento das letras no alfabeto
        scanf("%d", &C);
        C = (C % 26 + 26) % 26;  // rotação do alfabeto


        char texto[201]; // texto encriptografado
        scanf(" %[^\n]", texto);  // lê até quebra de linha

        // algoritmo para decifrar mensagem 
        char resposta[201];
        int pos = 0;
        while (texto[pos] != '\0') { // enquanto não chegar no final da string (enquanto ainda estiver na linha)
            char c = texto[pos];
            
            // se é letra minúscula
            if (c >= 'a' && c <= 'z') {
                char deslocado = c - C;
                if (deslocado < 'a') 
                    deslocado += 26;
                resposta[pos] = deslocado;
            }   
            // se é letra maiúscula 
            else if  (c >= 'A' && c <= 'Z') {
                char deslocado = c - C;
                if (deslocado < 'A') 
                    deslocado += 26;
                resposta[pos] = deslocado;
            }
            else
                resposta[pos] = c;
            pos++;
        }
        resposta[pos] = '\0';
        printf("%s\n", resposta);
    }
    return 0;
}