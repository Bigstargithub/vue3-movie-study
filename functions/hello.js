exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Bigstar',
      age: 29,
      email: 'bigstarjang1993@gmail.com' // 문자 데이터만 할당 가능
    })
  }
}