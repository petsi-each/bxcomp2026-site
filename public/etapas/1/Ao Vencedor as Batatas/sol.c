#include <stdio.h>
#define segundos 2.5

int main(){
    char matriz[3][3];
    char chamada[3] = {'P', 'S', 'I'};
    int dropConfirmado = 0;
    int contadorB = 0;
    float espera = 0.0f;

    // le a entrada e preenche a matriz
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            scanf(" %c", &matriz[i][j]);

            if (matriz[i][j] == 'B') { // ja conta a qtd de B's, pra nao precisar contar depois
                contadorB++;
            }
        }
    }
    
    // diagonal principal
    if (matriz[0][0] == chamada[0]){
        if(matriz[1][1] == chamada[1]){
            if(matriz[2][2] == chamada[2]){
                dropConfirmado = 1;
            }
        }
    }
    // diagonal secundaria
    if(matriz[0][2] == chamada[0]){
        if(matriz[1][1] == chamada[1]){
            if(matriz[2][0] == chamada[2]){
                dropConfirmado = 1;
            }
        }
    }

    if(dropConfirmado){
        espera = contadorB * segundos;
        printf("Drop confirmado! Bater leque em %.1f segundos.\n", espera);
    }
    else{
        printf("Alerta de Fake Drop! Segura o leque.\n");
    }

    return 0;
}