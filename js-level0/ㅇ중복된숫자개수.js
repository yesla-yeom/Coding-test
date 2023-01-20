// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 1,000
// 0 ≤ n ≤ 1,000

function solution(array, n) {
  let newArray = []; // 새 배열 만들어줌
  for (let i = 0; i < array.length; i++) {
    // 배열을 반복시킬건데, 배열의 길이보다 적게 배열을 반복. 그리고 한 번 돌고나면 i가 1씩 증가.
    if (array[i] === n) {
      // 기존 배열의 i번째 인덱스가 n이라면!!
      newArray.push(array[i]); // 새로운 배열에 그 애를 넣어주는겨
    }
  }
  return newArray.length;
}
