"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { isEmpty } from "@/lib/utils";

type Player = {
  name: string;
  flag: string;
  kd: string;
  plusMinus: string;
  adr: string;
  kast: string;
  rating: string;
};

type Team = {
  name: string;
  logo: string;
  score: number;
  players: any[];
};

type MatchStatsProps = {
  team1: Team;
  team2: Team;
  maps: string[];
};

export default function MatchStats({ team1, team2, maps }: MatchStatsProps) {
  const [activeMap, setActiveMap] = useState("All maps");
  const [activeSide, setActiveSide] = useState("Both");
  const [imageData, setImageData] = useState<any>([]);
  const [accountData, setAccountData] = useState<any>([]);

  const sides = ["Both", "Terrorist", "Counter-Terrorist"];

  useEffect(() => {
    if (!isEmpty(team1)) fetchImages();
  }, [team1]);

  const fetchImages = async () => {
    console.log("team1!!!!!!", team1);
    let temp: any[] = [],
      tempUser: any[] = [];
    // team1.players.map((player: any) =>
    for (const player of team1.players) {
      const hero = await fetch(
        "https://assets.deadlock-api.com/v2/heroes/" +
          player.hero_id +
          "?language=english"
      );
      const hero_json = await hero.json();
      console.log(hero_json);
      const accountName = await fetch(
        `https://api.deadlock-api.com/v1/commands/variables/resolve?region=Europe&account_id=${player?.account_id}&variables=leaderboard_rank_img%2Cleaderboard_place%2Cwins_losses_today%2Ctotal_kd%2Chours_played%2Csteam_account_name`
      );
      const accountName_json = await accountName.json();
      tempUser.push({
        account_id: player.account_id,
        account_name: accountName_json.steam_account_name,
      });
      console.log(accountName_json);
      const hero_image = hero_json.images.icon_hero_card;
      temp.push({ id: player.hero_id, image: hero_image });
      console.log(temp, "**********");
      console.log(tempUser, "**********temp user");
    }
    for (const player of team2.players) {
      const hero = await fetch(
        "https://assets.deadlock-api.com/v2/heroes/" +
          player.hero_id +
          "?language=english"
      );
      const hero_json = await hero.json();
      console.log(hero_json);
      const accountName = await fetch(
        `https://api.deadlock-api.com/v1/commands/variables/resolve?region=Europe&account_id=${player?.account_id}&variables=leaderboard_rank_img%2Cleaderboard_place%2Cwins_losses_today%2Ctotal_kd%2Chours_played%2Csteam_account_name`
      );
      const accountName_json = await accountName.json();
      tempUser.push({
        account_id: player.account_id,
        account_name: accountName_json.steam_account_name,
      });
      console.log(accountName_json);
      const hero_image = hero_json.images.icon_hero_card;
      temp.push({ id: player.hero_id, image: hero_image });
      console.log(temp, "**********");
      console.log(tempUser, "**********temp user");
    }
    setAccountData(tempUser);
    setImageData(temp);
  };

  return (
    <div className="bg-[#2d3844] rounded-md overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-[#3d4957]">
        <h3 className="text-lg font-semibold">Match stats</h3>
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">Side</span>
          <div className="flex">
            {sides.map((side) => (
              <button
                key={side}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeSide === side
                    ? "bg-[#4c9fd8] text-white"
                    : "bg-[#1e252d] text-gray-300 hover:bg-[#3d4957]"
                } mr-1`}
                onClick={() => setActiveSide(side)}
              >
                {side}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex border-b border-[#3d4957] bg-[#232c38]">
        {maps?.map((map) => (
          <button
            key={map}
            className={`px-4 py-2 text-sm ${
              activeMap === map
                ? "bg-[#2d3844] text-white border-t-2 border-[#4c9fd8]"
                : "text-gray-300 hover:bg-[#3d4957]"
            }`}
            onClick={() => setActiveMap(map)}
          >
            {map}
          </button>
        ))}
        <div className="ml-auto">
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#3d4957]"
          >
            Detailed stats
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Team 1 Stats */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#232c38]">
              <th className="text-left p-3 font-semibold w-[300px]" colSpan={2}>
                <div className="flex items-center">
                  <Image
                    src={team1.logo || "/placeholder.svg"}
                    alt={team1.name}
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                  {team1.name}
                </div>
              </th>
              <th className="p-3 font-semibold text-center">K-D</th>
              <th className="p-3 font-semibold text-center">+/-</th>
              <th className="p-3 font-semibold text-center">KDR</th>
              <th className="p-3 font-semibold text-center">Assist</th>
              <th className="p-3 font-semibold text-center">
                Rating
                <br />
                <span className="text-xs font-normal">2.1</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {team1.players
              // .find((val: any) => val.team == 0)
              .map((player: any, index: any) => {
                return (
                  <tr
                    key={index}
                    className={`border-b border-[#3d4957] ${
                      index % 2 === 0 ? "bg-[#2d3844]" : "bg-[#263440]"
                    } hover:bg-[#3d4957]`}
                  >
                    <td className="p-3 w-14">
                      <div className="flex justify-center">
                        <Image
                          src={`${
                            imageData?.find(
                              (val: any) => val.id == player.hero_id
                            )?.image
                          }?height=100&width=100`}
                          alt={`${player.flag} flag`}
                          width={100}
                          height={100}
                          className="rounded-xl"
                        />
                      </div>
                    </td>
                    <td className="p-3 text-left">
                      <Link href="#" className="hover:text-[#4c9fd8]">
                        {
                          accountData?.find(
                            (val: any) => val.account_id == player.account_id
                          )?.account_name
                        }
                      </Link>
                    </td>
                    <td className="p-3 text-center">
                      {player.kills}-{player.deaths}
                    </td>
                    <td
                      className={`p-3 text-center ${
                        player.kills - player.deaths > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {player.kills - player.deaths > 0 && "+"}
                      {player.kills - player.deaths}
                    </td>
                    <td
                      className={`p-3 text-center ${
                        player.kills - player.deaths > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {(player.kills / player.deaths).toFixed(2)}
                    </td>
                    <td
                      className={`p-3 text-center ${
                        player.kills - player.deaths > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {player.assists}
                    </td>
                    {/* <td className="p-3 text-center">{player.adr}</td>
                <td className="p-3 text-center">{player.kast}</td>
                <td className="p-3 text-center">{player.rating}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Team 2 Stats */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#232c38]">
              <th className="text-left p-3 font-semibold w-[300px]" colSpan={2}>
                <div className="flex items-center">
                  <Image
                    src={team2.logo || "/placeholder.svg"}
                    alt={team2.name}
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                  {team2.name}
                </div>
              </th>
              <th className="p-3 font-semibold text-center">K-D</th>
              <th className="p-3 font-semibold text-center">+/-</th>
              <th className="p-3 font-semibold text-center">KDR</th>
              <th className="p-3 font-semibold text-center">Assist</th>
              <th className="p-3 font-semibold text-center">
                Rating
                <br />
                <span className="text-xs font-normal">2.1</span>
              </th>
            </tr>
          </thead>
          <tbody>
          {team2.players
              // .find((val: any) => val.team == 0)
              .map((player: any, index: any) => {
                return (
                  <tr
                    key={index}
                    className={`border-b border-[#3d4957] ${
                      index % 2 === 0 ? "bg-[#2d3844]" : "bg-[#263440]"
                    } hover:bg-[#3d4957]`}
                  >
                    <td className="p-3 w-14">
                      <div className="flex justify-center">
                        <Image
                          src={`${
                            imageData?.find(
                              (val: any) => val.id == player.hero_id
                            )?.image
                          }?height=100&width=100`}
                          alt={`${player.flag} flag`}
                          width={100}
                          height={100}
                          className="rounded-xl"
                        />
                      </div>
                    </td>
                    <td className="p-3 text-left">
                      <Link href="#" className="hover:text-[#4c9fd8]">
                        {
                          accountData?.find(
                            (val: any) => val.account_id == player.account_id
                          )?.account_name
                        }
                      </Link>
                    </td>
                    <td className="p-3 text-center">
                      {player.kills}-{player.deaths}
                    </td>
                    <td
                      className={`p-3 text-center ${
                        player.kills - player.deaths > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {player.kills - player.deaths > 0 && "+"}
                      {player.kills - player.deaths}
                    </td>
                    <td
                      className={`p-3 text-center ${
                        player.kills - player.deaths > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {(player.kills / player.deaths).toFixed(2)}
                    </td>
                    <td
                      className={`p-3 text-center ${
                        player.kills - player.deaths > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {player.assists}
                    </td>
                    {/* <td className="p-3 text-center">{player.adr}</td>
                <td className="p-3 text-center">{player.kast}</td>
                <td className="p-3 text-center">{player.rating}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
