#include <stdio.h>

int calcula_pontos(){
    int X = 0, i = 1;
    char salto;
    while(i<=3){
        scanf(" %c", &salto);
        X = X + (int)salto*i;
        i++;
    }
    return X;
}

int main() {
    int N, R = 0, S = 0;
    char salto;
    scanf("%d", &N);
    int i;
    for(i = 0; i < N; i++){
        R = calcula_pontos();
        S = calcula_pontos();
        if(R>S){
            printf("Rebeca: A medalha de ouro eh do BRASIL! Fiz %d pontos!\n", R);
        }else if(S>R){
            printf("Simone: I'm the GOAT! Fiz %d pontos!\n", S);
        }else{
            printf("Juizes: Empate tecnico com %d pontos! Ambas brilharam!\n", R);
        }
    }
}
