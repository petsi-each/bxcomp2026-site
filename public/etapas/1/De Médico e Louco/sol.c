#include <stdio.h>
#include <string.h>

int main() {
    int n;
    scanf("%d", &n);

    for (int i = 0; i < n; i ++) {
        char resposta[100];
        
        scanf(" %[^\n]", &resposta);
        
        const char* resp_esperada = "Que corujinha linda!";

        const char* resp_errada = "QUERO CHURRASCO DE CORUJA!!!";

        if (strcmp(resposta, resp_esperada) == 0) {
            printf("Libera que esse ta legal.\n");
        }
        else if (strcmp(resposta, resp_errada) == 0) {
            printf("INTERNA ESSE MALUCO!\n");
        }
    }

    return 0;
}