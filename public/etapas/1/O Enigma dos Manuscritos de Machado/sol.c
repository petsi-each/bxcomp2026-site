#include <stdio.h>
#define max 1000

int adicionaUm(int* array, int i){
    if(i < 0) return -1;

    if(array[i] + 1 == 10){
        if(i == 0){
            array[i] = 0;
            return 1;
        }
        else{
            array[i] = 0;
            return adicionaUm(array, i-1);
        }
    }
    else{
        array[i]++;
    }

    return 0;
}

int main(){
    int n = 0;
    int array[max];
    int digitoExtra = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++){
        scanf("%d", &array[i]);
    }

    digitoExtra = adicionaUm(array, n-1);

    if(digitoExtra > 0)
        printf("%d ", digitoExtra);

    for(int i = 0; i < n; i++){
        printf("%d ", array[i]);
    }

    return 0;
}