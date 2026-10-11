#include <stdio.h> // Inclui a biblioteca padrão de entrada e saída da linguagem C

// Função principal do programa
int main() {
    int N; // Declaração da variável inteira que armazena o número de simulações de poções
    scanf("%d", &N); // Lê o número de simulações de poções a serem processadas

    while (N--) // Loop que itera N vezes, processando cada simulação de poção
    {
        char maletas[3][5][5]; // Matriz tridimensional para armazenar os ingredientes das 3 maletas com 5x5 posições cada

        int x[3]; // Vetor para armazenar as coordenadas x do canto superior esquerdo da área de corte de cada maleta
        int y[3]; // Vetor para armazenar as coordenadas y do canto superior esquerdo da área de corte de cada maleta
        int t[3]; // Vetor para armazenar o tamanho das áreas de corte de cada maleta

        // Variáveis para contar os ingredientes encontrados
        int ervas = 0;
        int pos = 0;
        int venenos = 0;
        int olhoDeSapo = 0;
        int asaDeMorcego = 0;
        int caudaDeRato = 0;

        int combos = 0; // Variável para contar o número de combos

        int pontuacao = 0; // Variável para armazenar a pontuação total da poção
        int pontuacaoPos = 1; // Variável para armazenar a pontuação dos pós, que será multiplicada por 2 para cada pó encontrado

        // Leitura dos ingredientes das maletas
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 5; j++)
            {
                for(int k = 0; k < 5; k++)
                {
                    scanf(" %c", &maletas[i][j][k]);
                }
            }
        }

        // Leitura das coordenadas e tamanhos das áreas de corte para cada maleta
        for(int i = 0; i < 3; i++)
        {
            scanf("%d %d %d", &x[i], &y[i], &t[i]);
        }

        // Contagem da quantidade de cada ingrediente encontrado nas áreas de corte das maletas
        for(int i = 0; i < 3; i++){
            for(int posX = x[i]; posX < x[i]+t[i]; posX++){
                for(int posY = y[i]; posY < y[i]+t[i]; posY++){
                    switch(maletas[i][posX][posY]){
                        case 'E':
                            ervas++;
                            break;
                        case 'P':
                            pos++;
                            break;
                        case 'V':
                            venenos++;
                            break;
                        case 'O':
                            olhoDeSapo++;
                            break;
                        case 'A':
                            asaDeMorcego++;
                            break;
                        case 'C':
                            caudaDeRato++;
                            break;
                    }
                }
            }
        }

        // Cálculo do número de combos possíveis com os ingredientes encontrados
        // O número de combos é determinado pelo menor número de ingredientes entre olho de sapo, asa de morcego e cauda de rato
        if(olhoDeSapo <= asaDeMorcego)
        {
            if(olhoDeSapo <= caudaDeRato)
            {
                combos = olhoDeSapo;
            }
            else
            {
                combos = caudaDeRato;
            }
        }
        else
        {
            if (asaDeMorcego <= caudaDeRato)
            {
                combos = asaDeMorcego;
            }
            else{
                combos = caudaDeRato;
            }
        }

        // Subtração dos ingredientes usados para os combos da contagem total de cada ingrediente
        asaDeMorcego -= combos;
        caudaDeRato -= combos;
        olhoDeSapo -= combos;

        pontuacao += ervas * 3; // Cada erva vale 3 pontos
        if(pos > 0) // Se houver pós...
        {
            // A pontuação dos pós é multiplicada por 2 para cada pó encontrado, de forma exponencial
            for(int i = 0; i < pos; i++)
            {
                pontuacaoPos *= 2;
            }
            pontuacao += pontuacaoPos;
        }
        pontuacao -= venenos * 3; // Cada veneno vale 3 pontos
        pontuacao += combos * 10; // Cada combo vale 10 pontos

        // Cada animal que sobra vale apenas 1 ponto cada um
        pontuacao += asaDeMorcego;
        pontuacao += caudaDeRato;
        pontuacao += olhoDeSapo;

        // Impressão da pontuação final da poção e mensagem correspondente
        if (pontuacao > 0) // Se a pontuação for maior que 0, a poção é considerada forte e a Cuca fará um feitiço terrível
        {
            printf("%d  PONTOS! A CUCA VAI FAZER UM FEITICO TERRIVEL!!!\n", pontuacao);
        }
        else // Se a pontuação for menor ou igual a 0, a poção é considerada fraca
        {
            printf("Poção fraca... A Cuca vai te transformar em sapo!\n");
        }
    }
}