
const addLiquidityETHResult = await contract.functions.addLiquidityETH(
  token,
  amountTokenDesired,
  amountTokenMin,
  amountETHMin,
  to,
  deadline
);

