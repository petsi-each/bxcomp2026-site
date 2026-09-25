#include <stdio.h>
#include <string.h>

double calcula_manobra(char* manobra){
    const char delimitador[] = "-";
    double m_manobra = 0.0, v_manobra = 0.0;

    char *parte = strtok(manobra, delimitador);
    if(strcmp(parte, "Normal") == 0){
        m_manobra = 1.0;
    }else if(strcmp(parte, "Switch") == 0 || strcmp(parte, "Fakie") == 0){
        m_manobra = 1.5;
    }else if(strcmp(parte, "Nollie") == 0){
        m_manobra = 2.0;
    }

    parte = strtok(NULL, delimitador);
    if(strcmp(parte, "Ollie") == 0){
        v_manobra += 10;
    }else if(strcmp(parte, "Kickflip") == 0 || strcmp(parte, "Heelflip") == 0){
        v_manobra += 30;
    }else if(strcmp(parte, "Impossible") == 0){
        v_manobra += 50;
    }

    parte = strtok(NULL, delimitador);
    if(strcmp(parte, "Chao") == 0){
        v_manobra += 0;
    }else if(strcmp(parte, "Corrimao") == 0){
        v_manobra += 20;
    }else if(strcmp(parte, "Escada") == 0){
        v_manobra += 30;
    }

    return v_manobra*m_manobra;
}

int main() {
    char manobra[256];
    double m_combo = 0.0, total = 0.0, v_combo = 0.0;

    scanf("%s", manobra);
    while(strcmp(manobra, "Fim_Volta") != 0){
        if(strcmp(manobra, "Aterrissagem") == 0){
            total += v_combo * m_combo;
            v_combo = 0.0;
            m_combo = 0.0;
        }else if(strcmp(manobra, "Queda") == 0){
            v_combo = 0.0;
            m_combo = 0.0;
        }else{
            v_combo += calcula_manobra(manobra);
            m_combo += 1.0;
        }
        scanf(" %s", manobra);
    }

    printf("%d", (int)total);
    return 0;
}
