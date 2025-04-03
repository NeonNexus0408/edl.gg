"use client";

import Link from "next/link";
import type { Metadata } from "next";
import MatchHeader from "@/components/matches/match-header";
import MatchStats from "@/components/matches/match-stats";
import { validateParam } from "@/lib/not-found-utils";
import { useEffect, useState } from "react";
import moment from "moment";
import { isEmpty } from "@/lib/utils";

type Props = {
  params: {
    id: string;
  };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // Validate the ID parameter
//   const id = validateParam(params.id, (id) => /^\d+$/.test(id));

//   // In a real app, you would fetch the match data based on the ID
//   return {
//     title: "Liquid vs The MongolZ - BLAST Open Lisbon 2025 | EDL.GG",
//     description:
//       "Match details and statistics for Liquid vs The MongolZ at BLAST Open Lisbon 2025",
//   };
// }

export default function MatchPage({ params }: Props) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [matchInfo, setMatchInfo] = useState<any>({});
  const [team0, setTeam0] = useState<any>([]);
  const [team1, setTeam1] = useState<any>([]);

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  useEffect(() => {
    if (!isEmpty(matchInfo?.players)) {
      const team0List = [],
        team1List = [];
      for (const value of matchInfo?.players) {
        if (value.team == 0) team0List.push(value);
        else if (value.team == 1) team1List.push(value);
      }
      setTeam0(team0List);
      setTeam1(team1List);
      console.log(team0List, team1List);
    }
    // console.log((matchInfo?.players).find((val: any) => val.team != 2));
    console.log(matchInfo?.players);
  }, [matchInfo]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.deadlock-api.com/v1/matches/34080213/metadata",
      {
        // learn more about this API here: https://graphql-pokemon2.vercel.app/
        method: "GET",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
        // body: JSON.stringify({
        //   query: pokemonQuery,
        //   variables: { name: name.toLowerCase() },
        // }),
      }
    );
    const result = await response.json();
    console.log(result);
    setMatchInfo(result.match_info);
    console.log(moment.unix(result?.match_info?.start_time).format("HH:mm"));
    setTime(moment.unix(result?.match_info?.start_time).format("HH:mm"));
    console.log(
      moment.unix(result?.match_info?.start_time).format("Do [of] MMMM YYYY")
    );
    setDate(
      moment.unix(result?.match_info?.start_time).format("Do [of] MMMM YYYY")
    );

    console.log(result?.[0]?.players?.[0]?.account_id);

    const playerResponse = await fetch(
      "https://api.deadlock-api.com/v1/players/119264432/card/raw",
      {
        // learn more about this API here: https://graphql-pokemon2.vercel.app/
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
        },
        // body: JSON.stringify({
        //   query: pokemonQuery,
        //   variables: { name: name.toLowerCase() },
        // }),
      }
    );
    const imageBlob = await playerResponse.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    document.body.appendChild(imgElement);
    console.log("playerCard=============", imgElement);
  };

  // Validate the ID parameter
  const id = validateParam(params?.id, (id) => /^\d+$/.test(id));

  // In a real app, you would fetch the match data based on the ID
  // and use checkResourceExists to verify the match exists
  const matchData = {
    id: id,
    team1: {
      name: "Liquid",
      logo: "/placeholder.svg?height=80&width=80",
      score: 0,
      players: [
        {
          name: "Justin 'jks' Savage",
          flag: "au",
          kd: "37-28",
          plusMinus: "+9",
          adr: "91.1",
          kast: "70.7%",
          rating: "1.24",
        },
        {
          name: "Guy 'NertZ' Iluz",
          flag: "il",
          kd: "28-30",
          plusMinus: "-2",
          adr: "70.6",
          kast: "75.6%",
          rating: "0.97",
        },
        {
          name: "Roland 'ultimate' Tomkowiak",
          flag: "pl",
          kd: "24-30",
          plusMinus: "-6",
          adr: "69.3",
          kast: "65.9%",
          rating: "0.92",
        },
        {
          name: "Russel 'Twistzz' Van Dulken",
          flag: "ca",
          kd: "22-30",
          plusMinus: "-8",
          adr: "71.1",
          kast: "65.9%",
          rating: "0.87",
        },
        {
          name: "Keith 'NAF' Markovic",
          flag: "ca",
          kd: "22-30",
          plusMinus: "-8",
          adr: "63.5",
          kast: "61.0%",
          rating: "0.74",
        },
      ],
    },
    team2: {
      name: "The MongolZ",
      logo: "/placeholder.svg?height=80&width=80",
      score: 2,
      players: [
        {
          name: "Garidmagnai 'bLitz' Byambasuren",
          flag: "mn",
          kd: "33-24",
          plusMinus: "+9",
          adr: "90.6",
          kast: "75.6%",
          rating: "1.31",
        },
        {
          name: "Munkhbold 'Senzu' Azbayar",
          flag: "mn",
          kd: "40-29",
          plusMinus: "+11",
          adr: "82.2",
          kast: "65.9%",
          rating: "1.25",
        },
        {
          name: "Usukhbayar '910' Banzragch",
          flag: "mn",
          kd: "31-24",
          plusMinus: "+7",
          adr: "86.8",
          kast: "73.2%",
          rating: "1.23",
        },
        {
          name: "Ayush 'mzinho' Batbold",
          flag: "mn",
          kd: "25-28",
          plusMinus: "-3",
          adr: "70.9",
          kast: "61.0%",
          rating: "1.03",
        },
        {
          name: "Sodbayar 'Techno' Munkhbold",
          flag: "mn",
          kd: "17-28",
          plusMinus: "+11",
          adr: "54.0",
          kast: "61.0%",
          rating: "0.75",
        },
      ],
    },
    event: {
      name: "BLAST Open Lisbon 2025",
      date: "23rd of March 2025",
      status: "Match over",
    },
    score: "13:55",
    maps: ["All maps", "Anubis", "Ancient"],
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link
          href="/matches"
          className="text-[#4c9fd8] hover:underline text-sm mb-4 inline-block"
        >
          ← Back to matches
        </Link>

        <MatchHeader
          team1={matchData.team1}
          team2={matchData.team2}
          score={time}
          event={{ ...matchData.event, date }}
        />
      </div>

      <MatchStats
        team1={{
          players: team0,
          logo: "",
          score: 0,
          name: "Team0",
        }}
        team2={matchData.team2}
        maps={matchData.maps}
      />
    </div>
  );
}
