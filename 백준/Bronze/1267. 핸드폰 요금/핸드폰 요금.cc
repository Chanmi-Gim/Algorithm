#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int N = 0, Y = 0, M = 0;
int main(){
  cin >> N;
  vector<int> callingTime(N);
  for(int i = 0 ; i < N ; i++) cin >> callingTime[i];
  for(int i = 0 ; i < N ; i++){
    Y += (floor(callingTime[i] / 30.0)+1) * 10;
    M += (floor(callingTime[i] / 60.0)+1) * 15;
  }
  if(Y < M) cout << "Y " << Y;
  else if (Y > M) cout << "M " << M;
  else cout << "Y M " << Y;
}
