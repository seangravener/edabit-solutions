// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(step = 0) {
	return step ? step * 6 - step + 1 : 0
}