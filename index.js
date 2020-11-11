const axios = require("axios");
const chalk = require("chalk");

const HOST_PORT = 'http://127.0.0.1:8080';
const args = process.argv.slice(2);
const div = Math.pow(10, 12);

const pending = async (address, depth) => {
  if (!address) {
	console.log(chalk.red("Account Isn't Available"));
	return;
  }
  
  const res = await axios.get(`${HOST_PORT}/accounts/${address}/staking-payouts?depth=${depth}&unclaimedOnly=true`);

  const total = res.data.erasPayouts.reduce((accAll, { payouts }) => {
    if (!payouts) {
	  console.log(chalk.green("Payouts Unavailable"));	
      return 0;
    }

    return payouts.reduce((accPending, payout) => (
      payout.claimed ? accPending : accPending + parseInt(payout.nominatorStakingPayout)
    ), 0);
    return accAll + accPending;
  }, 0);
  
  return total;	
 
}

const main = async () => {
	if ((args.length != 2)) {
		console.error(chalk.red("Error. Two parameters are mandatory <stash_address> <depth>"));
		console.error(chalk.white("Example : "),chalk.green("node index 5GJQqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctykGH 3"));
	}
	else {
		const total = await pending(args[0], args[1]).catch(console.error);
		console.log(chalk.green(`Pending Payouts : ${total / div} KSM`));
	}
}

main();
