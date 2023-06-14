function solution(people, limit) {
  let sum = 0 , count = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
      if (people[left] + people[right] <= limit) {
          left++;
          right--;
      } else {left++;}
      count++;
  }
  return count;
}
