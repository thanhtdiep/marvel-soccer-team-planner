import React, { useState } from 'react';
import './App.css';
import SearchBar from './component/searchBar';
import Table from './component/table';
import CharacterInfo from './component/infoBoard';
import Dropdown from './component/dropdown';
import Player from './component/player';
import Token from './component/token';
import Footer from './component/footer';

function App() {
  // states
  const [character, setCharacter] = useState(null);
  const [selected, setSelected] = useState(null);
  const [goalkeeper, setGoalkeeper] = useState([]);
  const [striker, setStriker] = useState([]);
  const [midfielder, setMidFielder] = useState([]);
  const [defender, setDefender] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  // handle character
  function handleCharacter(char) {
    setCharacter(char);
  }
  function handleSelected(c) {
    setSelected(c);
  }
  function handleRoleSelect(r) {
    setRole(r);
  }
  function handleAddRole() {
    if (role === "Goalkeeper") setGoalkeeper([...goalkeeper, selected]);
    else if (role === "Striker") setStriker([...striker, selected]);
    else if (role === "Midfielder") setMidFielder([...midfielder, selected]);
    else if (role === "Defender") setDefender([...defender, selected]);
  }
  function handleRemove(p) {
    if (p === "gk") setGoalkeeper([]);
    else if (p === "st") setStriker([]);
    else if (p === "md") setMidFielder([]);
    else if (p === "df") setDefender([]);
  }
  function handleLoading(b) {
    setLoading(b);
  }

  return (
    <div className="h-full">
      <div className="col-span-3 bg-gray-800 text-white text-center shadow-lg">
        {/* Title Logo */}
        <img className="m-auto h-20 p-2" src="./marvel-logo.png" />
      </div>
      <div className="h-screen flex-wrap grid grid-cols-3 grid-rows-8 gap-2 p-1 text-center">
        {/* Searchbar and Result Table */}
        <div className="flex-wrap col-span-3 lg:col-span-1 row-span-4">
          <SearchBar result={handleCharacter} onClick={(b) =>handleLoading(b)}/>
          <Table data={character} loading={loading} onSelected={handleSelected} />
        </div>

        <div className="flex space-x-4 col-span-3 lg:col-span-2 p-4">
          {selected ? (<CharacterInfo data={selected} className="flex-1" />) : null}
          {selected ? (<Dropdown roleSelect={(r) => handleRoleSelect(r)} gk={goalkeeper} st={striker} md={midfielder} df={defender} className="flex-1" />) : null}
          {selected ? (
            <button
              type="button"
              onClick={() => handleAddRole()}
              className="focus:outline-none h-10 flex text-gray-800 text-sm py-2.5 px-5 rounded-md border border-gray-800 hover:bg-gray-200">Add</button>
          ) : null}
        </div>

        <div className="relative col-span-3 lg:col-span-2 row-span-2 p-0">
          {/* Football Field */}
          <img className="border-solid border-2 border-gray-800" src='./soccer-field.png' />

          {/* Tokens */}
          <div id="token-lineup" className="flex-wrap absolute grid grid-cols-4 gap-28">
            <div className="col-span-1">
              {goalkeeper.length > 0 ? goalkeeper.map((player) => (
                <Token data={player} />
              )) : null}
            </div>
            <div className="col-span-1">
              {defender.length > 0 ? defender.map((player) => (
                <Token data={player} />
              )) : null}
            </div>
            <div className="col-span-1">
              {midfielder.length > 0 ? midfielder.map((player) => (
                <Token data={player} />
              )) : null}
            </div>
            <div className="col-span-1">
              {striker.length > 0 ? striker.map((player) => (
                <Token data={player} />
              )) : null}
            </div>
          </div>
        </div>

        <div className="flex space-x-4 lg:col-span-2 p-4">
          {/* Current Team Lineup */}
          <div className="flex grid grid-cols-2 grid-rows-4 gap-2 p-1">
            <div className="col-span-3 m-2 italic font-bold">
              - Goalkeeper -
              {goalkeeper.length > 0 ? (
                <button onClick={() => handleRemove("gk")} className="inline-block px-2 py-1 text-xs font-medium leading-6 text-center text-red-500 uppercase focus:outline-none">
                  Remove
                </button>)
                : null}
              {goalkeeper.length > 0 ? (<Player data={goalkeeper[0]} />) : <p className="italic font-normal">No player selected</p>}
            </div>
            <div className="col-span-3 m-2 italic font-bold">
              - Defender -
              {defender.length > 0 ? (
                <button onClick={() => handleRemove("st")} className="inline-block px-2 py-1 text-xs font-medium leading-6 text-center text-red-500 uppercase focus:outline-none">
                  Remove
                </button>)
                : null}
              <div className="flex flex-wrap">
                {defender.length > 0 ? defender.map((char) => (<Player data={char} />)) : <p className="italic font-normal">No player selected</p>}
              </div>
            </div>
            <div className="col-span-3 m-2 italic font-bold">
              - Midfielder -
              {midfielder.length > 0 ? (
                <button onClick={() => handleRemove("md")} className="inline-block px-2 py-1 text-xs font-medium leading-6 text-center text-red-500 uppercase focus:outline-none">
                  Remove
                </button>)
                : null}
              <div className="flex flex-wrap">
                {midfielder.length > 0 ? midfielder.map((char) => (<Player data={char} />)) : <p className="italic font-normal">No player selected</p>}
              </div>
            </div>
            <div className="col-span-3 m-2 italic font-bold">
              - Striker -
              {striker.length > 0 ? (
                <button onClick={() => handleRemove("df")} className="inline-block px-2 py-1 text-xs font-medium leading-6 text-center text-red-500 uppercase focus:outline-none">
                  Remove
                </button>)
                : null}
              <div className="flex flex-wrap">
                {striker.length > 0 ? striker.map((char) => (<Player data={char} />)) : <p className="italic font-normal">No player selected</p>}
              </div>
            </div>
          </div>
        </div>
        <div id="test" className="space-x-4 lg:col-span-3 p-4"><Footer gk={goalkeeper} st={striker} md={midfielder} df={defender} /></div>
      </div>
    </div>
  );
}

export default App;
