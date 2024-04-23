#include <iostream>
#include <algorithm>
using namespace std;
int person[9];
int sum = 0;
bool flag = 0; 
int main(){
  for(int i = 0; i < 9; i++) {
    cin >> person[i];
    sum += person[i];
  }
  for(int i = 0; i < 8; i++){
    for(int j = i + 1 ; j < 9; j++) {
      if(sum - person[i] - person[j] == 100){
        person[i] = 0;
        person[j] = 0;
        flag = 1;
        break;
      }
    }
    if(flag) break; 
  }
  sort(person, person+9);
  for(int i = 0; i < 9; i++){
    if(person[i]) cout << person[i] << '\n';
  }  
}
