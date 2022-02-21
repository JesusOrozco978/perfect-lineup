// ## Lineup Rules
// 2) Lineups may not contain more than 2 players from a single team
// 3) Lineups may not contain more than 3 players from a single game
// 4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'

const salary = (arr) => {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }

  return total
}

const countPosition = (lineup, position) => lineup.filter((lineup) => lineup.position === position).length

const teamIdCount = (arr) => {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2]) {
      return false
    }
  }

  return true
}

const gameIdCount = (arr) => {
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2] && arr[i] === arr[i - 3]) {
      return false
    }
  }

  return true
}



const validateLineup = (lineup) => {
  const salaries = lineup.map((lineup) => lineup.salary)
  const gameIds = lineup.map((lineup) => lineup.gameId).sort()
  const teamIds = lineup.map((lineup) => lineup.teamId).sort()
  const multiplePositions = ['OF']

  const singlePositions = ['P', 'C', '1B', '2B', '3B', 'SS'].every(pos => countPosition(lineup, pos) === 1)

  return salary(salaries) <= 45000 && gameIdCount(gameIds) && teamIdCount(teamIds) && multiplePositions === 3 && singlePositions
}

module.exports = validateLineup


