#include <stdio.h>

int calcularBlocos(int niveis) {
    return niveis * (niveis + 1) * (2 * niveis + 1) / 6;
}

void printar(int niveis, int piramide){
    if(piramide == 1){
        if(niveis > 0 && niveis <= 1020){
            printf("A Piramide Quefren tem: %ld blocos, \n", calcularBlocos(niveis));
        }
        else{
            printf("A Piramide de Quefren nao existe... \n");
        }
    }
    if(piramide == 2){
        if(niveis > 0 && niveis <= 1020){
            printf("a Piramide Miquerinos tem: %ld blocos \n", calcularBlocos(niveis));
        }
        else{
            printf("a Piramide de Miquerinos nao existe... \n");
        }
    }
    if(piramide == 3){
        if(niveis > 0 && niveis <= 1020){
            printf("e a Piramide Queops tem: %ld blocos,\n", calcularBlocos(niveis));
        }
        else{
            printf("e a Piramide de Queops nao existe... \n");
        }
    }
}

int main() {
    int x, y, z;

    scanf("%d %d %d", &x, &y, &z);

    // 1023 niveis (entrada) eh o limite que funciona corretamente usando int
    printar(x, 1);
    printar(y, 2);
    printar(z, 3);
    printf("Agora devolve nossa corujinha, seu comedia.");

    return 0;
}
