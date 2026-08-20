//nascer (deve estar em toda linha temporal e precisa ser a primeira coisa)
//virar meme (apenas morto)
//ressucitar (apenas morto e caso não tenha virado meme)
//morto (após nascer)
//aomossou (após nascer)
//tomou_banho (após nascer e apenas 1 vez ao ano)

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// função que realiza a troca entre dois elementos
void troca(int vet[], char* vetString[], int i, int j)
{
	char* auxString = vetString[i];
	int aux = vet[i];
	vetString[i] = vetString[j];
	vet[i] = vet[j];
	vetString[j] = auxString;
	vet[j] = aux;
}

// particiona e retorna o índice do pivô
int particiona(int vet[], char* vetString[], int inicio, int fim)
{
	int pivo, pivo_indice, i;
	
	pivo = vet[fim]; // o pivô é sempre o último elemento
	pivo_indice = inicio;
	
	for(i = inicio; i < fim; i++)
	{
		// verifica se o elemento é <= ao pivô
		if(vet[i] <= pivo)
		{
			// realiza a troca
			troca(vet, vetString, i, pivo_indice);
			// incrementa o pivo_indice
			pivo_indice++;
		}
	}
	
	// troca o pivô
	troca(vet, vetString, pivo_indice, fim);
	
	// retorna o índice do pivô
	return pivo_indice;
}

// escolhe um pivô aleatório para evitar o pior caso do quicksort
int particiona_random(int vet[], char* vetString[], int inicio, int fim)
{
	// seleciona um número entre fim (inclusive) e inicio (inclusive)
	int pivo_indice = (rand() % (fim - inicio + 1)) + inicio;
	
	// faz a troca para colocar o pivô no fim
	troca(vet, vetString, pivo_indice, fim);
	// chama a particiona
	return particiona(vet, vetString, inicio, fim);
}

void quick_sort(int vet[], char* vetString[], int inicio, int fim)
{
	if(inicio < fim)
	{
		// função particionar retorna o índice do pivô
		int pivo_indice = particiona_random(vet, vetString, inicio, fim);
		
		// chamadas recursivas quick_sort
		quick_sort(vet, vetString, inicio, pivo_indice - 1);
		quick_sort(vet, vetString, pivo_indice + 1, fim);
	}
}

void printa_LinhaDoTempo(int vet[], char* vetString[], int tam){
	for(int i=0; i<tam; i++){
		printf("%d %s\n", vet[i], vetString[i]);
	}
}

int main (){
	//char string[255];
	//scanf(“\n%[^\n]”, string);
	
	int N, E, ano[50], vivo, meme, tomou_banho, comprometido, remover;
	char pessoa[255];
	
	scanf("%d", &N);
	for(int i=0; i<N; i++){
		vivo = 0;
		meme = -1;
		remover = -1;
		comprometido=0;
		tomou_banho = -1;
		scanf("\n%[^\n]", pessoa);
		scanf("%d", &E);
		char* acao[E];
		for(int j=0; j<E; j++){
			scanf("%d", &ano[j]);
			acao[j] = malloc(sizeof(char)*255);
			scanf("\n%[^\n]", acao[j]);
		}
		//printa_LinhaDoTempo(ano, acao, E);
		quick_sort(ano, acao, 0, E-1); //organiza a linha do tempo de forma cronológica
		//printa_LinhaDoTempo(ano, acao, E);
		for(int k=0; k<E; k++){
			if(strstr(acao[k],"nasceu")) vivo = 1;
			if(vivo==0&&k==0){
				remover = 0;
				k = 1;
				if(strstr(acao[k],"nasceu")) vivo = 1;
			}
			if(vivo==0&&k==1){
				comprometido = 1;
				break;
			}
			if(strstr(acao[k], "aomossou")&&vivo==0){
				if(remover!=-1){
					printf("%d\n", remover);
					comprometido = 1;
					break;
				}else remover = k;
			}
			else if(strstr(acao[k], "tomou_banho")){
				if(tomou_banho==ano[k]||vivo==0){
					if(remover!=-1){
						comprometido = 1;
						break;
					}else remover = k;
				}
				tomou_banho = ano[k];
			}
			else if(strstr(acao[k], "morreu")){
				if(vivo==0){
					if(remover!=-1){
						comprometido = 1;
						break;
					}else remover = k;
				}
				vivo = 0;
			}
			else if(strstr(acao[k], "ressuscitou")){
				if(vivo==1){
					if(remover!=-1){
						comprometido = 1;
						break;
					}else remover = k;
				}else if(meme!=-1){
					if(remover!=-1){
						comprometido = 1;
						break;
					}else remover = meme;
				}
				vivo = 1;
			}else if(strstr(acao[k], "virou_meme")){
				if(vivo==1){
					if(remover!=-1){
						comprometido = 1;
						break;
					}else remover = k;
				}
				meme = k;
			}
		}
		if(comprometido==1) printf("%s: LINHA TEMPORAL PERDIDA, REINICIAR A MATRIX\n", pessoa);
		else if(remover!=-1) printf("%s: PARADOXO DETECTADO, REMOVER \"%d %s\"\n", pessoa, ano[remover], acao[remover]);
		else printf("%s: LINHA TEMPORAL OK\n", pessoa);
	}
}