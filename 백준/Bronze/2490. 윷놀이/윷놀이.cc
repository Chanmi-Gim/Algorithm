#include <iostream>
using namespace std;

int main(){
  int result, input = 0;
  string res = "DCBAE";
  int t, i;
  for(t = 0; t < 3; t++){
    result = 0;
    for(i = 0; i < 4; i++){
      cin >> input;
      result += input;
    }
    cout << res[result] << '\n';
  }
}
