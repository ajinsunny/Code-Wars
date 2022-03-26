/*The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc
Given a year, return the century it is in.*/

const century = year => Math.floor((year - 1) / 100) + 1
