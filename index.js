// ## Lineup Rules
// 2) Lineups may not contain more than 2 players from a single team
// 3) Lineups may not contain more than 3 players from a single game
// 4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'
function calculateTotalSalary(lineup) {
  return lineup.reduce((acc, player) => {
    return acc + player.salary
  }, 0)
}

const gameIdCount = (arr) => {
  for (let i = 3; i < arr.length; i++) {
  
    if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2] && arr[i] === arr[i - 3]) {
      return false
    }
  }

  return true
}

const teamIdCount = (arr) => {
  for (let i = 2; i < arr.length; i++) {

    if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2]) {

      return false
    }
  }

  return true
}

function getPositionCounts(lineup) {
  return lineup.reduce((counts, player) => {
    counts[player.position] = counts[player.position] === undefined ? 1 : counts[player.position] + 1

    return counts
  }, {})
}
function violatesPositionCount(positions) {
  return positions['P'] !== 1 || positions['C'] !== 1 || positions['1B'] !== 1 ||
    positions['2B'] !== 1 || positions['3B'] !== 1 || positions['SS'] !== 1 ||
    positions['OF'] !== 3
}
const validateLineup = (lineup) => {

  const gameIds = lineup.map((lineup) => lineup.gameId).sort()

  const teamIds = lineup.map((lineup) => lineup.teamId).sort()
  const positionCounts = getPositionCounts(lineup)


  return calculateTotalSalary(lineup) <= 45000 && !violatesPositionCount(positionCounts) && teamIdCount(teamIds) && gameIdCount(gameIds)
}




module.exports =
  validateLineup













