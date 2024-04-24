#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(){
  vector<int> cards(20);
  for(int i = 0; i < 20; i++) cards[i] = i+1;
  for(int i = 0; i < 10; i++){
    int startIdx = 0, endIdx= 0;
    cin >> startIdx >> endIdx;
    reverse(cards.begin() + startIdx - 1 , cards.begin()+endIdx);
  }
  for(int i = 0; i < 20; i++) cout << cards[i] << ' ';
}