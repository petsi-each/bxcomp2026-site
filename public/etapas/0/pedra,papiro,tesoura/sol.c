#include <stdlib.h>
#include <stdio.h>

int fibonacci(int jogada, int atual, int anterior){
	if(jogada==atual) return 0; //Pedra
	if(jogada<atual&&jogada%2==0) return 1; //Papiro
	if(jogada<atual&&jogada%2==1) return 2; //Tesoura
	return fibonacci(jogada, atual+anterior, atual);
}

int main(){
	int N, R, petiano, trex, jogada_petiano, jogada_trex, pontos_petiano, pontos_trex;
	scanf("%d", &N);
	for(int i=0; i<N; i++){
		scanf("%d", &R);
		pontos_petiano = 0;
		pontos_trex = 0;
		for(int j=0; j<R; j++){
			scanf("%d", &petiano);
			scanf("%d", &trex);
			jogada_petiano = fibonacci(petiano, 0, 1);
			jogada_trex = fibonacci(trex, 0, 1);
			if(jogada_petiano==0&&jogada_trex==2||jogada_petiano==1&&jogada_trex==0||jogada_petiano==2&&jogada_trex==1) pontos_petiano++;
			else if (jogada_petiano==2&&jogada_trex==0||jogada_petiano==0&&jogada_trex==1||jogada_petiano==1&&jogada_trex==2) pontos_trex++;
		}
		if(pontos_petiano>pontos_trex) printf("A CORUJA VOLTOU A PIAAAAAR!!!!!!\n");
		else if(pontos_trex>pontos_petiano) printf("NOOO, ACHO QUE OS DINOSSAUROS VAO TER CORUJA AO FORNO HOJE NA JANTA\n");
		else printf("Precisamos marcar uma revanche...\n");
	}
}

//Fiz alguns testes, e acredito que a saída do exemplo esteja errada, pois no primeiro caso teste os petianos ganhariam de 2 a 1
//Logo a saída não seria uma vitória do t-rex, tirando isso, creio que o exercício esteja muito bem escrito e entendível;
//Ele é relativamente fácil, caso os bixos saibam programar uma sequência de fibonacci;
