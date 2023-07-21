async function studentData () {
  const fetchUrl = "https://pastebin.com/raw/8zhsm6AK";

  const response = new fetch(fetchUrl);

  const data = await response.json();

  return data;
}

console.log(studentData());