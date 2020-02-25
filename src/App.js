import React, { Component } from "react";
import Move from "./components/Move";
import Results from "./components/Results";
import "./App.css";
import Hero from "./heroes.json";

const possibleMoves = Object.keys(Hero);

export const getRandom = (x, y) => {
    return Math.floor(Math.random() * x + y);
};

export const getWinner = (userMove, computerMove) => {
    if (userMove === computerMove) return 0;
    return Hero[userMove].beats.some(beats => beats === computerMove) ? 1 : 2;
};