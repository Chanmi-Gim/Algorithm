#include <iostream>
#include <cmath>
using namespace std;

int Y = 0, M = 0, callingTime[10000];
int main(){
  int N;
  cin >> N;
  for(int i = 0 ; i < N ; i++) cin >> callingTime[i];
  for(int i = 0 ; i < N ; i++){
    Y += (floor(callingTime[i] / 30.0)+1) * 10;
    M += (floor(callingTime[i] / 60.0)+1) * 15;
  }
  if(Y < M) cout << "Y " << Y;
  else if (Y > M) cout << "M " << M;
  else cout << "Y M " << Y;
}
