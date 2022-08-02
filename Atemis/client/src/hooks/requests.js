// Load planets and return as JSON.
const API_url = "http://localhost:8000";
async function httpGetPlanets() {
  const response = await fetch(`${API_url}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_url}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

// Submit given launch data to launch system.
// quick note.. the fecth fucntion in js defaults to a get request, to make a post requst, we add the option object.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_url}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch),
  
    })
  } catch (error) {
    return {
      ok: false,
    }
  }
  
}

  // Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_url}/launches/${id}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // body: JSON.stringify(id)
    }) 
  } catch (error) {
    console.log(error)
    return { 
      ok: false,
    }
  }
  
}

export { httpGetPlanets,httpGetLaunches,httpSubmitLaunch,httpAbortLaunch };
