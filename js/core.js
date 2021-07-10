const fancyboxWalletConnect = () => {
	document
		.querySelectorAll("[popup-to='wallet_connect_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#wallet_connect_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxStakeLPTokens = () => {
	document
		.querySelectorAll("[popup-to='stake_lp_tokens_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#stake_lp_tokens_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxUnstakeLPTokens = () => {
	document
		.querySelectorAll("[popup-to='unstake_lp_tokens_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#unstake_lp_tokens_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxSelectToken = () => {
	document
		.querySelectorAll("[popup-to='select_token_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#select_token_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxSelectLiquidity = () => {
	document
		.querySelectorAll("[popup-to='select_liquidity_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#select_liquidity_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxTradeSettings = () => {
	document
		.querySelectorAll("[popup-to='trade_settings_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#trade_settings_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxConfirmSwap = () => {
	document
		.querySelectorAll("[popup-to='confirm_swap_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_swap_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxConfirmSwapLoading = () => {
	document
		.querySelectorAll("[popup-to='confirm_swap_loading_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_swap_loading_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxConfirmSwapReject = () => {
	document
		.querySelectorAll("[popup-to='confirm_swap_reject_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_swap_reject_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxConfirmBuyGem = () => {
	document
		.querySelectorAll("[popup-to='confirm_buy_gem_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_buy_gem_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxConfirmLiquidity = () => {
	document
		.querySelectorAll("[popup-to='confirm_liquidity_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_liquidity_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

window.addEventListener("load", (e) => {
	fancyboxWalletConnect();
	fancyboxStakeLPTokens();
	fancyboxUnstakeLPTokens();
	fancyboxSelectToken();
	fancyboxSelectLiquidity();
	fancyboxTradeSettings();
	fancyboxConfirmSwap();
	fancyboxConfirmSwapLoading();
	fancyboxConfirmSwapReject();
	fancyboxConfirmBuyGem();
	fancyboxConfirmLiquidity();
});
