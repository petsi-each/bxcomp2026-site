#include <stdio.h>
#include <string.h>

int main() {
    int N;
    scanf("%d", &N);
    
    for (int i = 0; i < N; i++) {
        int M;
        scanf("%d", &M);
        
        char mensagem[255];
        int direcoes[1000];  // Armazena as direções válidas
        int num_direcoes = 0; // Contador de direções válidas
        int erro = 0;         // Flag de erro para o túnel
        
        for (int j = 0; j < M; j++) {
            scanf("%s", mensagem);
            
            // Se já marcou erro, ignora mensagens restantes
            if (erro) continue;
            
            int tem_esquerda = (strstr(mensagem, "ESQUERDA") != NULL);
            int tem_direita = (strstr(mensagem, "DIREITA") != NULL);
            int valida = ((tem_esquerda&&!tem_direita)||(!tem_esquerda&&tem_direita));
            
            if (valida) {
                // Mensagem válida: adiciona a direção correspondente
                if (tem_esquerda) {
                    direcoes[num_direcoes++] = 1; // 1 = ESQUERDA
                } else {
                    direcoes[num_direcoes++] = 2; // 2 = DIREITA
                }
            } else {
                erro = 1;
            }
        }
        
        // Saída do resultado
        if (erro) {
            printf("Ahn? Acho que escolhemos o tunel errado...\n");
        } else {
            for (int k = 0; k < num_direcoes; k++) {
                if (k > 0) printf(" ");
                printf(direcoes[k] == 1 ? "ESQUERDA" : "DIREITA");
            }
            printf(" ESPERE POR NOS CORUJINHA!!!\n");
        }
    }
    
    return 0;
}
