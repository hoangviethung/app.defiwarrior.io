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

window.addEventListener("load", (e) => {
	fancyboxWalletConnect();
	fancyboxStakeLPTokens();
	fancyboxSelectToken();
	fancyboxSelectLiquidity();
	fancyboxTradeSettings();
	fancyboxConfirmSwap();
});

window.addEventListener("scroll", (e) => {});

window.addEventListener("resize", () => {});
