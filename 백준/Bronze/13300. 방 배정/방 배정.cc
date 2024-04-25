#include <iostream>
#include <algorithm>
using namespace std;

int n, k, s, y;
int arr[12] = {0};
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> n >> k; 
  for(int i = 0; i < n; i++){
    cin >> s >> y;
    if(s == 1) arr[y+5]++;
    else arr[y-1]++;
  }

  int count = 0; 
  for(int i = 0; i < 12; i++){
    int s = arr[i]/k;
    int r = arr[i]%k;
    count += r ? s + 1 : s;
  }
  cout << count;
}