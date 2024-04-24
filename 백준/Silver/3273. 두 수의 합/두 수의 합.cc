#include <iostream>
using namespace std;

int numbers[100001];
bool occur[2000001];
int n, x; 
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> n;
  for(int i =0; i < n ; i++) cin >> numbers[i];
  cin >> x; 

  int count = 0;
  for(int i = 0; i < n ; i++){
    if(x - numbers[i] > 0 && occur[x-numbers[i]]) count++;
    occur[numbers[i]] = true;
  }
  cout << count;
}
