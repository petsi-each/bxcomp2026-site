#include<stdio.h>
#include<limits.h>

int main(){
	int n; // Número de poças
	int k; // Capacidade do balde
	scanf("%d", &n);
	scanf("%d", &k);
	int pocas[n];
	for (int i = 0; i < n; i++){
		scanf("%d", &pocas[i]); // Armazena o cenário
	}

	// Cálculo de poças coletadas pelo brainrot

	int contbr = 0;  // Contador de poças brainrot
	int baldebr = 0; // Balde brainrot
	int j = 0;
	while (baldebr + pocas[j] <= k){
		baldebr = baldebr + pocas[j];
		contbr++;
		j++;
	}
	
	// Calculo de poças coletadas pelas corujas

	int contco = 0; // Contador de poças corujas
	int baldeco = 0; // Balde corujas
	while (baldeco < k){
		int min = INT_MAX; // Armazena a quantidade de líquido da menor poça restante
		int posmin = -1;   // Armazena a posição da menor poça restante
		for (j = 0; j < n; j++){
			if (pocas[j] < min){
				min = pocas[j];
				posmin = j;
			}
		}
		if (baldeco + min <= k){ // Se der pra adicionar a poça no balde, faz isso e faz dela INT_MAX pra ela não ser mais considerada
			baldeco = baldeco + min;
			pocas[posmin] = INT_MAX;
			contco++;
		} else break;
	}
	if (contbr < contco) printf("QUACK QUACK QUACK QUACK");
	else if (contbr == n) printf("mi mi mi la la la ballerina cappuccina vou te raptar");
	else printf("Troque esse cenario Tung Tung Tung Tung Tung Tung Sahur, a nao ser que voce queira que eu conte para o Cappuccino Assassino que voce tem um caso com a Ballerina Cappuccina");
}
