#include<stdio.h>
#include<string.h>

int main(){
	int n;
	scanf("%d",&n);
	for(int i = 0; i < n; i++){
		int ehpalindromo = 1;

		// Armazena eu frase a string a ser analisada e armazena em tamanho o número de caracteres da frase
		char frase[255];
		scanf(" %[^\n]", frase);
		int tamanho = (int) strlen(frase); 
		int j = 0;

		// Verifica um par de caracteres por vez, de "fora" pra "dentro", se não for um palíndromo, para de checar e vai para a próxima string
		while(ehpalindromo && j <= tamanho/2){
			if(frase[j] != frase[tamanho-1-j]){
				ehpalindromo = 0;
				printf("Baboseira, ta falando nada. com nada.\n");
			}
			j++;
		}
		if(!ehpalindromo) continue;

		// Se for palíndromo, verifica a quantidade de vogais e consoantes na string
		int contvogal = 0;
		int contconsoante = 0;
		for(int k = 0; k < tamanho; k++){
			if(frase[k] == 'A' || frase[k] == 'E' || frase[k] == 'I' || frase[k] == 'O' || frase[k] == 'U') contvogal++;
			else contconsoante++;
		}

		// Imprime cada uma das mensagens pra cada caso
		if(contvogal > contconsoante) printf("ALERTA!!ALERTA!!!!LER MENSAGEM O QUANTO ANTES.\n");
		else if(contvogal < contconsoante) printf("EIII, pode terminar o cafezinho antes de começar a ler.\n");
		else printf("Fica em paz, parceiro, leia apenas quando tiver um tempinho.\n");	
	}
}
