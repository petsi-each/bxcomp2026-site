// resolução da Etapa 2 - desafio cyberuja
#include <stdio.h>
#include <stdlib.h>

#define MAX 8
typedef int bool;
char letrasPermitidas[MAX] = {'p', 'i', 'u', 'P', 'I', 'U', 'h', 'H'};
const char* ofensas[] = {"hU-hu-Hu", "PIU-hu-pIu", "pIU-Piu-HU"};

bool verificarLetra(char letra){
    bool resposta = 0;

    for(int k = 0; k < MAX; k++){
        if(letra == letrasPermitidas[k])
            resposta = 1;
    }

    return resposta;
}

// tecnicamente falando, esses "verificar...()" (exceto a letra) recebem um ponteiro pra base do vetor que é a rima dessa rodada
// e o comeco e o offset (deslocamento) definem qual a palavra da rima e qual o tamanho dessa palavra que vai ser verificada

bool verificarPalavra(char* palavra, int comeco, int offset){
    if(offset == 2){
        if(palavra[comeco] == 'h' || palavra[comeco] == 'H')
            if(palavra[comeco+1] == 'u' || palavra[comeco+1] == 'U')
                return 1;
    }
    if(offset == 3){
        if(palavra[comeco] == 'p' || palavra[comeco] == 'P')
            if(palavra[comeco+1] == 'i' || palavra[comeco+1] == 'I')
                if(palavra[comeco+2] == 'u' || palavra[comeco+2] == 'U')
                    return 1;
    }

    return 0;
}

// tb recebe a base do vetor da rima da rodada, mas nao recebe offset, pq aqui ele vai do comeco da palavra até o fim das frases ofensivas
// faz isso pra cada palavra que anda no vetor
bool verificarOfensa(char* frase, int comeco){
    for(int i = 0; i < 3; i++){
        const char* ofensa = ofensas[i];

        int charAtual = comeco;
        bool Ofensivo = 1;             // ofensivo ate que se prove o contrario

        int j = 0;
        while(ofensa[j] != '\0'){
            if(ofensa[j] != frase[charAtual]){
                Ofensivo = 0;       // divergiu da frase ofensiva em algum caracter
                break;
            }

            j++;
            charAtual++;
        }

        if(Ofensivo){       // se chegou aqui sendo 1 é pq nao divergiu em nenhum caracter -> é ofensivo -> para e retorna, nao precisa comparar com as outras ofensas
            return 1;
        }

        // se nao foi ofensivo, continua comparando com as outras, pq ainda pode ser
    }

    return 0;
}

bool verificarGrito(char* palavra, int comeco, int offset){
    if(offset == 2){
        if(palavra[comeco] == 'H')
            if(palavra[comeco+1] == 'U')
                return 1;
    }
    if(offset == 3){
        if(palavra[comeco] == 'P' && palavra[comeco+1] == 'I' && palavra[comeco+2] == 'U')
            return 1;
    }
    return 0;
}

int calcularPontos(char* rima){
    int pontos = 0;
    int qtGritos = 0;
    int i = -1;
    bool regrasDesobedecidas = 0;

    do{
        i++;
        int comecoPalavra = i;
        int offsetPalavra = 0;

        while(rima[i] != '-' && rima[i] != '\0'){   // as palavras sao divididas por '-', esse while anda pra proxima palavra e pega o intervalo de indices dessa palavra pra fazer as verificações
            if(!verificarLetra(rima[i])){
                regrasDesobedecidas = 1;        // se alguma das letras dessa palavra tiver errada, perdeu esse round ja
                break;
            }
            i++;
            offsetPalavra++;
        }

        if(verificarPalavra(rima, comecoPalavra, offsetPalavra)){  
            if(verificarOfensa(rima, comecoPalavra)){       
                regrasDesobedecidas = 1;    // é uma palavra mas é uma ofensa, perdeu o round
            }
            else{
                if(verificarGrito(rima, comecoPalavra, offsetPalavra)){     // é uma palavra e nao é uma ofensa, soma nos pontos
                    if(qtGritos < 3){       
                        pontos += 2;        // é uma palavra e é um grito soma 2
                        qtGritos++;
                    }
                    else{
                        regrasDesobedecidas = 1;    // se for mais que 3 gritos na rima, perdeu o round
                    }
                }
                else{
                    pontos += 1;        // é só uma palavra soma 1
                }
            }
        }
        else{
            regrasDesobedecidas = 1;        // não é uma palavra (apesar de ter letras válidas -> ta embaralhado), perdeu o round
        }

    } while(regrasDesobedecidas == 0 && rima[i] != '\0');       // roda as letras da rima até quebrar uma regra ou chegar no final da rima
    if(qtGritos >= 3) regrasDesobedecidas = 1;   // se tiver 3 ou mais gritos, perdeu o round
    if(regrasDesobedecidas == 1){   // se desobedeceu alguma regra, perdeu o round
        pontos = -1;
    }

    return pontos;
}

int calcularVencedorRodada(char* rimaCoruja, char* rimaCyberuja){    // 0 -> coruja; 1 -> cyberuja; 2 -> nenhuma
    if(rimaCoruja == NULL) return -1;
    if(rimaCyberuja == NULL) return -1;

    int pontosCoruja = calcularPontos(rimaCoruja);
    int pontosCyberuja = calcularPontos(rimaCyberuja);

    if(pontosCoruja == pontosCyberuja)
        return 2;
    if(pontosCoruja > pontosCyberuja)
        return 0;
    if(pontosCyberuja > pontosCoruja)
        return 1;
}

int main(){
    int qtRodadas = 0;
    int vitoriasCoruja = 0;
    int vitoriasCyberuja = 0;

    scanf("%d", &qtRodadas);

    for(int i = 0; i < qtRodadas; i++){
        char* rimaCoruja = (char*)malloc(1001 * sizeof(char));       // 1000 caracteres + 1 pro fim da string
        char* rimaCyberuja = (char*)malloc(1001 * sizeof(char));     // 1000 caracteres + 1 pro fim da string

        // recebe as duas falas e calcula vencedor da rodada
        scanf("%1000s", rimaCoruja);
        scanf("%1000s", rimaCyberuja);

        int vencedorRodada = calcularVencedorRodada(rimaCoruja, rimaCyberuja); 

        if(vencedorRodada == 0)
            vitoriasCoruja++;
        if(vencedorRodada == 1)
            vitoriasCyberuja++;            
    }

    if(vitoriasCoruja > vitoriasCyberuja)
        printf("ESSA LATA VELHA NAO SIMULA NEM 1%% DA MINHA CANTORIA!!!\n");
    if(vitoriasCyberuja > vitoriasCoruja)
        printf("Tiraram essa maquina diretamente do The Voice??\n");
    if(vitoriasCoruja == vitoriasCyberuja)
        printf("Essa tecnologia ate que e decente...\n");

    return 0;
}