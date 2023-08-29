
  // scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const firstName = athlete.firstName
    const surname = athlete.surname
    const id = athlete.id
    const races = athlete.races
    const date = []
    const time = []
    let latestTime = 0

    for (const [key,value] of Object.entries(races.reverse())) {
      date.push(value.date)
      time.push(value.time)
    }
    const latestDate = new Date(date[0])
  
    const fragment = document.createDocumentFragment();
  
    const title = fragment.appendChild(document.createElement("h2"));
    title.textContent = id
  
    const list = fragment.appendChild(document.createElement("dl"));
  
    const day = latestDate.getDate();
    const month = MONTHS[latestDate.getMonth()];
    const year = latestDate.getFullYear();
  
    for (const [key, value] of Object.entries(time[0])) {
      latestTime += value
      //const first = value
      //console.log(first)
    }
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName + " " + surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day + " " + month + " " + year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>00:${latestTime}</dd>
    `;
  
    fragment.appendChild(list);
  
    document.querySelector('[data-athlete="'+id+'"]').appendChild(fragment)
  }
  
 const [SV782] = data.response.data
 const [NM372]= data.response.data
  console.log(NM372)
  for (const [key,value] of Object.entries(data.response.data)) {
    createHtml(value);
  }

  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782))