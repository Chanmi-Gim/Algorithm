#include <iostream>
using namespace std;

int T;
int a , b;
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);
  cin >> T;

  for(int i = 0; i <T; i++){
    cin >> a >> b;
    cout << a + b << '\n'; 
  }
}