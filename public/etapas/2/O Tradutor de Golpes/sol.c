#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    // Definição e leitura da variável que guarda o número de lutas
    int numeroLutas;
    scanf("%d", &numeroLutas);

    // Variável temporária utilizada para limpar o buffer do scan
    int c;
    while ((c = getchar()) != '\n' && c != EOF); // É feita a leitura do terminal em loop até que o "lixo" presente no buffer seja limpado, ou seja, chegue em uma nova linha ou fim do arquivo

    // Como o número de lutas é o nosso número de casos fazemos um loop que diminui nossa variavel de número de lutas toda vez que uma execução do loop chega no final
    while(numeroLutas--)
    {

        // Definição e leitura da variável que guarda uma linha que contém as palavras identificadas pelo sensor 
        char linha[9999];
        fgets(linha, sizeof(linha), stdin);

        int pontuacao = 0; // Variavel que guarda quantos pontos a Bia fez
        int contagemWazaari = 0; // Variavel que guarda quantos wazaaris tiveram
        int vitoriaIppon = 0; // Variavel que guarda se teve uma vitória por ippon (ou 2 wazaaris), 0 se não houve e 1 se houve
        
        char *palavra = strtok(linha, " \t\n\r"); // Separa a primeira palavra (tokens) dividida por espaço, tabulação ou quebra de linha
        
        // Loop que é percorrido enquanto houver palavras
        while (palavra != NULL) {

            // Verifica se o sensor identificou um "ippon", alterando a variável de controle e parando a leitura de mais palavras
            if (strcmp(palavra, "ippon") == 0)
            {
                vitoriaIppon = 1;
                break;
            }

            // Verifica se o sensor identificou um "wazaari", alterando a variável de contagem de wazaaris, adicionando 10 pontos para a Bia e parando a leitura de mais palavras caso já tenha lido 2 wazaaris 
            else if (strcmp(palavra, "wazaari") == 0)
            {
                contagemWazaari++;
                pontuacao += 10;
                
                if (contagemWazaari == 2) {
                    vitoriaIppon = 1;
                    break;
                }
            } 

            // Verifica se o sensor identificou um "shido", adicionando 5 pontos para a Bia
            else if (strcmp(palavra, "shido") == 0)
            {
                pontuacao += 5;
            }
            
            // Pega a próxima palavra identficada pelo sensor
            palavra = strtok(NULL, " \t\n\r");
        }
        
        // Imprime a saída baseada no resultado da luta
        if (vitoriaIppon)
        {
            printf("Bia Souza eh OURO! Vitoria por Ippon!\n");
        } 
        else 
        {
            printf("Fim da luta! Bia somou %d pontos.\n", pontuacao);
        }
    }
    
    return 0;
}