/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalRentCount = days * 40;

  if (days >= 7) {
    return totalRentCount - 50;
  }

  if (days >= 3) {
    return totalRentCount - 20;
  }

  return totalRentCount;
}

module.exports = calculateRentalCost;
