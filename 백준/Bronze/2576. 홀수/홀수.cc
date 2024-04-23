#include <iostream>
using namespace std;

int main(){
  int n, sum = 0;
  int min = 100;
  for(int i = 0 ;i < 7 ; i++){
    cin >> n;
    if(n % 2 != 0){
      sum += n;
      if(n < min) min = n;
    }
  }
  sum == 0? cout << -1 : cout << sum << '\n' << min;
}
