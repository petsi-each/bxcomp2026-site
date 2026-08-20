#include<stdio.h>
#include<math.h>


// Função que calcula área usando Heron
double calculaArea(int aresta1, int aresta2, int aresta3){
    double s = (aresta1 + aresta2 + aresta3) / 2.0;
    double area = sqrt(s * (s - aresta1) * (s - aresta2) * (s - aresta3));
    return area;
}

int main(){
    int n;
    scanf("%d", &n);
    int a[n], b[n], c[n];
    double area[n];

    // Leitura e cálculo das áreas
    for (int i = 0; i < n; i++){
        scanf("%d %d %d", &a[i], &b[i], &c[i]);
        area[i] = calculaArea(a[i], b[i], c[i]);
    }

    // Acha menor área e printa as arestas
    for (int j = 0; j < n; j++){
	double menorArea = 1e18;
	int indMenorArea = -1;
	for (int k = 0; k < n; k++){
	    if (area[k] < menorArea){
		menorArea = area[k];
		indMenorArea = k;
	    }
	}
	printf("%d %d %d\n", a[indMenorArea], b[indMenorArea], c[indMenorArea]);
	area[indMenorArea] = 1e18;
    }
}