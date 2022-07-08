const getData = (url) => {
  if (!url) return 'No url was provided';
  return fetch(url).then((res) => res.json()).catch((error) => { console.error('There was an error!', error); });
};

export default getData;
