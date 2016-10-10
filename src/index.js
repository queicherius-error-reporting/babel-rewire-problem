// Any of the 3 things you can do to make the error disappear:
// 1) Remove the "answer" variable and inline it
// 2) Remove the default parameter value of "punctuation"
// 3) Remove the if statement

const answer = 42

export default function (something, punctuation = '!') {
  if (something === 'test') {
    console.log('Something is test!')
  }

  return answer + punctuation
}
