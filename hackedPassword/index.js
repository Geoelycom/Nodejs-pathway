// def bill_for(month, active_subscription, users):
//     # your code here!
//     month = datetime.datetime.strptime(month, '%Y-%m')
//     month = datetime.date(month.year, month.month, 1)
//     # first day of month
//     first_day = first_day_of_month(month)
//     # last day of month
//     last_day = last_day_of_month(month)

//     # get the number of days in the month
//     days_in_month = (last_day - first_day).days + 1

//     if active_subscription is None:
//         return 0
        
//     daily_rate = 0
//     cost = active_subscription["monthly_price_in_dollars"]
//     daily_rate += float(cost) / days_in_month
//     total_cost = 0

//     for user in users:
//         d_date = user["deactivated_on"]
//         a_date = user["activated_on"] 
        
//         if d_date is not None:
//             if d_date < month:
//             # get the number of days between the deactivated date and the first day of the month
//               total_cost += 0
//             else:
//               no_of_days_active = abs((d_date - first_day)).days + 1
//               total_cost += no_of_days_active * daily_rate


//         if d_date is None:
//           # if the user is active in the month
//           if a_date >= first_day and a_date <= last_day:
//             # get the number of days between the activated date and the first day of the month
//             no_of_days_active = abs((a_date - last_day)).days + 1
//             total_cost += no_of_days_active * daily_rate
            
//           # if the user didn't cancel the subscription
//           else:
//              total_cost += days_in_month * daily_rate

//     return round(total_cost, 2)




function bill_for(month, active_subscription, users) {
  var a_date, cost, d_date, daily_rate, days_in_month, first_day, last_day, no_of_days_active, total_cost;
  month = datetime.datetime.strptime(month, "%Y-%m");
  month = datetime.date(month.year, month.month, 1);
  first_day = first_day_of_month(month);
  last_day = last_day_of_month(month);
  days_in_month = (last_day - first_day).days + 1;

  if (active_subscription === null) {
    return 0;
  }

  daily_rate = 0;
  cost = active_subscription["monthly_price_in_dollars"];
  daily_rate += Number.parseFloat(cost) / days_in_month;
  total_cost = 0;

  for (var user, _pj_c = 0, _pj_a = users, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    user = _pj_a[_pj_c];
    $date = user["deactivated_on"];
    a_date = user["activated_on"];

    if ($date !== null) {
      if ($date < month) {
        total_cost += 0;
      } else {
        no_of_days_active = abs($date - first_day).days + 1;
        total_cost += no_of_days_active * daily_rate;
      }
    }

    if ($date === null) {
      if (a_date >= first_day && a_date <= last_day) {
        no_of_days_active = abs(a_date - last_day).days + 1;
        total_cost += no_of_days_active * daily_rate;
      } else {
        total_cost += days_in_month * daily_rate;
      }
    }
  }

  return round(total_cost, 2);
}

// Promisification
 let loadScriptPromise = src => {
   return new promise((resolve, reject) => {
     loadScript(src, (err, script) => {
       if (err) {
        reject(err);
       } else {
         resolve(script)
       }
     });
   });
 }

//  console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

//create  server object
// const http = require('http');
import axios from 'axios';
import http from 'http';
const port =  4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify({
    id: 1,
    name: 'uduak john',
    age: 25,
  }))
})


  async function loadJsonData(url) {
    const response = await axios.get(url);
    if (response.status == 200) {
      let data = await response.data;
      console.log(data)
    } else if (response.status != 200){
      throw new Error(response.status)
    }
  }

  // loadJsonData('https://hackcheck.woventeams.com/api/v4/breachedaccount/test@example.com')
  
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let searchedName =  await axios.get(url);
    if (searchedName.status == 200){
     return console.log(searchedName.data);
    } else {
      throw new HttpError(response);
    }

  }
  
  // Ask for a user name until github returns a valid user
  import readline from 'readline';
  import alert from 'alert';

  const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

async function demoGithubUser(){
  let user;
  while(true) {
    try {
      user = await rl.question('Enter a name?', (answer) => {
          loadJson(`https://api.github.com/users/${answer}`)
    })
    break;// no error exit loop. user returned successfully
    } catch (error) {
      if (error instanceof HttpError && error.response.status == 404){
        //after alert is closed
        alert('no user is avialable with that username,please reenter another user name')
      } else {
        throw error;
      }
    } 
 } 

}

rl.on('close', () => {
  process.exit(0)
})

demoGithubUser()

server.listen(port, () => console.log(`app started on port ${port}`));


async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"

  //*****answer******//
  // treat async call as promise and attach .then to it:
  wait().then(result => alert(result))
}

f()


