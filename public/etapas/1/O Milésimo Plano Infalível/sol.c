#include <stdio.h>

int main(){

    //indice 0 = posicao, indice 1 = velocidade
    float pelucia[2];
    float cascao [2];
    float xaveco [2];
    float titi [2];
    float cebolinha[2];

    pelucia[0] = 0;
    cebolinha[0] = 0;

    scanf("%f", &pelucia[1]);
    scanf("%f %f %f", &cascao[0], &xaveco[0], &titi[0]);
    scanf("%f %f %f %f",&cebolinha[1], &cascao[1], &xaveco[1], &titi[1]);

    float posicao_final(float posicao_inicial, float velocidade){
        return posicao_inicial + velocidade*10.0;
    }
    
    int eh_alcancavel(float personagem[]){
        float posicao_personagem = posicao_final(personagem[0], personagem[1]);
        float posicao_pelucia = posicao_final(pelucia[0], pelucia[1]);
        
        if(posicao_personagem <= posicao_pelucia){
            return 1;
        }

        else{
            return 0;
        }
    }


    if(eh_alcancavel(cebolinha) == 0){
        printf("Que solte agola eu sou o dono da lua");
    }
    else if(eh_alcancavel(cascao) == 0){
        printf("Esse coelho ta mais sujo do que eu");
    }
    else if(eh_alcancavel(xaveco) == 0){
        printf("Eu tambem estou nesse desafio");
    }
    else if(eh_alcancavel(titi) == 0){
        printf("Ele nem e tao dentuco assim");
    }
    else{
        printf("Sujou, a dentuca e muito folte");
    }

}