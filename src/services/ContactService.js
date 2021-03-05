export const sendFormValues = async ( body ) => {
  const path = process.env.REACT_APP_FORM_PATH;
  const apiKey = process.env.REACT_APP_APIKEY;

  const response = await fetch(path, {
    method: 'post',
    headers: {
      'X-API-Key': apiKey,
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  });
  console.log(response.json());
}
