const message = 'Welcome. Get ready to master Vue.js 3fff!'
const preDateMessage ='Today is '

  function getDate()
  {
    const date = new Date();
    return date.toDateString()
  }

  const data = {
    message: 'Welcome. Get ready to master Vue.js 3dddd!',
    date: '12 Jully, 2023',
    task: [1,2,3,4],
  }

  export {data, message, preDateMessage, getDate}