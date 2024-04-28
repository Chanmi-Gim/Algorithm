#include <iostream>
#include <algorithm>
using namespace std;

int n;
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> n;
  for(int i = 0; i < n; i++){
    int arr[26] = {0};
    string str1, str2;
    cin >> str1 >> str2;
    for(auto c : str1) arr[c - 'a']++;
    for(auto c : str2) arr[c - 'a']--;

    bool flag = false;
    for(int j = 0; j < 26; j++) {
      if(arr[j] != 0){
        flag = true;
        break;
      } 
    }
    flag ? cout << "Impossible\n" : cout << "Possible\n" ;
  }
}