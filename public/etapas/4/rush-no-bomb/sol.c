#include <stdlib.h>
#include <stdio.h>

void transformaMaior(int senhaArr[], char senha[]){
	int temp;
	for (int i = 0; i < 4 - 1; i++) {
		for (int j = 0; j < 4 - i - 1; j++) {
			if (senhaArr[j] < senhaArr[j + 1]) {
			temp = senhaArr[j];
			senhaArr[j] = senhaArr[j + 1];
			senhaArr[j + 1] = temp;
			}
		}
	}
	for(int i=0; i<4; i++) senha[i]	= senhaArr[i] + '0';
	senha[4] = '\0';
} //Usei um bubblesort simples pra ordenar ao contrário o array e então só montei a senha;

int main(){
	int N, seq, tempo;
	char senha [4];
	int senhaArr[4];
	scanf("%d", &N);
	for(int i=0; i<N; i++){
		scanf("%d", &seq);
		tempo = seq%100;
		seq = seq/100;
		if(tempo<60) printf("A bomba vai explodir AAHH!!! Mission failed. We’ll get ’em next time\n");
		else{
			for(int j=0; j<4; j++){
				senhaArr[j] = seq%10;
				seq = seq/10;
			}
			transformaMaior(senhaArr, senha);
			printf("%s Ainda sobrou %d segundo(s)\n", senha, (tempo-60));
		}
	}
}
//Algumas considerações: Não acredito que o exercício esteja fácil, acho que a dificuldade ta bem tranquila, tem que usar sort, e a ideia dele é bem legal.

//Só acho que possa ser interessante melhorar a descrição da entrada e da saída, explicando que para cada caso teste serão inseridos uma sequência de 6 algarismos.
//E na saída colocar um exemplo 1 pra 1 do caso em que é possível desarmar a bomba, ademais acho que tá bem tranquilo.

//Se quiser aumentar a dificuldade acredito que uma boa forma seria deixando a senha ter um tamanho aleatório (passado na entrada), porque ai teria a necessidade 
//de usar um sort mesmo, já que do jeito atual é possível resolver apenas encontrando os maiores números entre os 4.