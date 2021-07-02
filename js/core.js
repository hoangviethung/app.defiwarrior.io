const fancyboxWalletConnect = () => {
	document
		.querySelectorAll("[popup-to='defi_wallet_connect_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#defi_wallet_connect_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

window.addEventListener("load", (e) => {
	fancyboxWalletConnect();
});

window.addEventListener("scroll", (e) => {});

window.addEventListener("resize", () => {});
