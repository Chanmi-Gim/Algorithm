#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int numbers[8], N;
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);
  cin >> N;
  while(N > 0){
    int num = N % 10;
    if(num == 9 || num == 6) numbers[6]++;
    else numbers[num]++;
    N /= 10;
  }
  numbers[6] = ceil(numbers[6] / 2.0);
  cout << *max_element(numbers, numbers+9);
}
