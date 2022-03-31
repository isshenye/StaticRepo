html,
html>body {
	margin: 0px;
	padding: 0px;
	height: 100%;
	width: 100%;
}

body {
	font-family: "Helvetica Neue", Ubuntu, "WenQuanYi Micro Hei", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Micro Hei Mono", "WenQuanYi Zen Hei", "WenQuanYi Zen Hei", "Apple LiGothic Medium", "SimHei", "ST Heiti", "WenQuanYi Zen Hei Sharp", Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	line-height: 1.8em;
	text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
	background: #ffffff;
}

img {
	border-width: 0px;
}

a {
	color: #000;
	text-decoration: none;
	outline: none;
	border: none;
}

.list,
.list li,
.list-left li {
	list-style: none;
	list-style-type: none;
	margin: 0px;
	padding: 0px;
}

.pos-f {
	position: fixed;
}

.left-100 {
	width: 100%;
	height: 100%;
}

.blur #DonateText,
.blur #donateBox,
.blur #github {
	-webkit-filter: blur(3px);
	filter: blur(3px);
}

.tr3 {
	transition: all .3s;
}

#DonateText {
	position: fixed;
	font-size: 12px;
	width: 70px;
	height: 70px;
	line-height: 70px;
	color: #fff;
	background: #ffd886 url(https://wugenqiang.js.org/images/02/like.svg) no-repeat center 10px;
	background-size: 20px;
	border-radius: 35px;
	text-align: center;
	left: calc(50% - 120px);
	top: calc(50% - 60px);
	z-index: -1;
	transform: rotatez(-15deg);
}

#donateBox {
	left: calc(50% - 150px);
	top: calc(50% - 15px);
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 6px;
	width: 299px;
	height: 28px;
	float: left;
	z-index: 1;
}

#donateBox li {
	width: 74px;
	float: left;
	text-align: center;
	border-left: 1px solid #ddd;
	background: no-repeat center center;
	background-color: rgba(204, 217, 220, 0.1);
	background-size: 45px;
	transition: all .3s;
	cursor: pointer;
	overflow: hidden;
	line-height: 600px;
	height: 28px;
	-webkit-filter: grayscale(1);
	filter: grayscale(1);
	opacity: 0.5;
}

#donateBox li:hover {
	background-color: rgba(204, 217, 220, 0.3);
	-webkit-filter: grayscale(0);
	filter: grayscale(0);
	opacity: 1;
}

#donateBox>li:first-child {
	border-width: 0;
}

#donateBox a {
	display: block;
}

#donateBox #PayPal {
	background-image: url(https://wugenqiang.js.org/images/02/paypal.svg);
}

#donateBox>#QQPay {
	background-image: url(https://wugenqiang.js.org/images/02/QQqianbao.png);
	line-height: 28px;
}

#donateBox>#QQPay:hover {
	overflow: visible;
}

#donateBox #AliPay {
	background-image: url(https://wugenqiang.js.org/images/02/alipay.svg);
}

#donateBox #WeChat {
	background-image: url(https://wugenqiang.js.org/images/02/wechat.svg);
}

#QRBox {
	top: 0;
	left: 0;
	z-index: 1;
	background-color: rgba(255, 255, 255, 0.3);
	display: none;
	perspective: 400px;
}

#MainBox {
	cursor: pointer;
	position: absolute;
	text-align: center;
	width: 200px;
	height: 200px;
	left: calc(50% - 100px);
	top: calc(50% - 100px);
	background: #fff no-repeat center center;
	background-size: 190px;
	border-radius: 6px;
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
	opacity: 0;
	transition: all 1s ease-in-out;
	transform-style: preserve-3d;
	transform-origin: center center;
	overflow: hidden;
}

#github {
	width: 24px;
	height: 24px;
	left: calc(50% + 135px);
	top: calc(50% - 30px);
	background: no-repeat center center url(https://wugenqiang.js.org/images/02/github.svg);
	background-size: contain;
	opacity: 0.3;
	transform: rotatez(15deg);
}

#MainBox.showQR {
	animation-name: showQR;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;
	animation-delay: 300ms;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
	-webkit-animation: showQR 3s ease-in-out 300ms 1 normal forwards;
}

@keyframes showQR {
	from {
		transform: rotateX(90deg);
	}
	8% {
		opacity: 1;
		transform: rotateX(-60deg);
	}
	18% {
		opacity: 1;
		transform: rotateX(40deg);
	}
	34% {
		opacity: 1;
		transform: rotateX(-28deg);
	}
	44% {
		opacity: 1;
		transform: rotateX(18deg);
	}
	58% {
		opacity: 1;
		transform: rotateX(-12deg);
	}
	72% {
		opacity: 1;
		transform: rotateX(9deg);
	}
	88% {
		opacity: 1;
		transform: rotateX(-5deg);
	}
	96% {
		opacity: 1;
		transform: rotateX(2deg);
	}
	to {
		opacity: 1;
	}
}

#MainBox.hideQR {
	opacity: 1;
	animation-name: hideQR;
	animation-duration: 0.5s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
	-webkit-animation: hideQR 0.5s ease-in-out 0s 1 normal forwards;
}

@keyframes hideQR {
	from {}
	20%,
	50% {
		transform: scale(1.08, 1.08);
		opacity: 1;
	}
	to {
		opacity: 0;
		transform: rotateZ(40deg) scale(0.6, 0.6);
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

#QRBox.fadeIn {
	display: block;
	animation: fadeIn 300ms;
}

@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}

#QRBox.fadeOut {
	display: block;
	animation: fadeOut 300ms;
}
