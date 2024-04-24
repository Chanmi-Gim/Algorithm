#include <iostream>
using namespace std;

int numbers[9];
int maxNum = 0, maxIdx = 0;
int main(void){
  for(int i = 0; i < 9; i++) cin >> numbers[i];
  for(int i = 0; i < 9; i++){
    if(numbers[i] > maxNum){
      maxNum = numbers[i];
      maxIdx = i+1;
    }
  }
  cout << maxNum << '\n' << maxIdx << '\n';
}