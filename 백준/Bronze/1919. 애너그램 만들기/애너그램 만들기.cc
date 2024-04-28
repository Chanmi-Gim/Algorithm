#include <iostream>
#include <algorithm>
using namespace std;

int words[2][26];
string word1, word2;
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);
  cin >> word1 >> word2;
  for(auto c : word1) words[0][c - 'a']++;
  for(auto c : word2) words[1][c - 'a']++;
  int count = 0;
  for(int j = 0 ;j < 26; j++){
    count += abs(words[0][j] - words[1][j]);
  }
  cout << count;
}
