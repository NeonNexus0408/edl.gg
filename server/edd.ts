import { supabaseAdmin } from "@/app/lib/supabaseAdmin";

export async function getAllData() {
  try {
    const data = await scrapData();

    data.map((item:any)=>{
      let tempData;
      tempData={
        date:new Date(item.start_time),
        // event:"",
        name:item.region_mode_parsed+item.match_id,
        // id:item.match_id
      }
      putDataToDB(tempData);
    });

    // console.log("Getting all data****", data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export async function scrapData() {
  const data = await getMatchesForDB();
  // data.foreach((item:any)=>{
    
  // })
  // console.log(data);
  return data;
}

export async function putDataToDB(data:any) {
  console.log("this is data for db", data);
  const { data:result, error } = await supabaseAdmin.from("matches").upsert(data).select();
  console.log(result, error);
}


export async function getMatchesForDB() {
  const data = await fetch("https://api.deadlock-api.com/v1/matches/active");
  // console.log(typeof data);
  return await data.json();
}

export async function putMatchesToDB() {
  
}

export async function getTeamsForDB() {
  
}

export async function putTeamsToDB() {
  
}

export async function getEventsForDB() {
  
}

export async function putEventsToDB() {
  
}

export async function getPlayerMatchForDB() {//
  
}

export async function putPlayerMatchToDB() {
  
}

export async function getPlayersForDB() {//
  
}

export async function putPlayersToDB() {
  
}
