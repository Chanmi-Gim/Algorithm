#include <iostream>
using namespace std;
long long A, B;
int main(){
  cin >> A >> B;
  if (A > B) swap(A, B);
  if(A == B){
    cout << 0 << '\n';
  }else{
    cout << B - A - 1 << '\n';
    for(long long i = A + 1; i < B; i++) cout << i << ' ';
  } 
}