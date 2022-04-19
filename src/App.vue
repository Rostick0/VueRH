<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	border: 0;
}
*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
nav,
footer,
header,
aside {
	display: block;
}
html,
body {
	font-family: inherit;
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
	font-family: inherit;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance:textfield;
}
input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul, li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
}


@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');

@font-face {
    font-family: 'OrchideaPro-Medium';
    src: local('OrchideaPro-Medium'),
    url('fonts/medium/OrchideaPro-Medium.woff2') format('woff2'), 
		url('fonts/medium/OrchideaPro-Medium.woff') format('woff'),
		url('fonts/medium/OrchideaPro-Medium.ttf') format('ttf'),
		url('fonts/medium/OrchideaPro-Medium.eot') format('eot');
}

@font-face {
    font-family: 'OrchideaPro-Bold';
    src: local('OrchideaPro-Bold'),
    url('fonts/bold/OrchideaPro-Bold.woff2') format('woff2'), 
		url('fonts/bold/OrchideaPro-Bold.woff') format('woff'),
		url('fonts/bold/OrchideaPro-Bold.ttf') format('ttf'),
		url('fonts/bold/OrchideaPro-Bold.eot') format('eot');
}

@font-face {
    font-family: 'OrchideaPro-SemiBold';
    src: local('OrchideaPro-SemiBold'),
    url('fonts/semi_bold/OrchideaPro-SemiBold.woff2') format('woff2'), 
		url('fonts/semi_bold/OrchideaPro-SemiBold.woff') format('woff'),
		url('fonts/semi_bold/OrchideaPro-SemiBold.ttf') format('ttf'),
		url('fonts/semi_bold/OrchideaPro-SemiBold.eot') format('eot');
}

@font-face {
    font-family: 'OrchideaPro-ExtraBold';
    src: local('OrchideaPro-ExtraBold'),
    url('fonts/extra_bold/OrchideaPro-ExtraBold.woff2') format('woff2'), 
		url('fonts/extra_bold/OrchideaPro-ExtraBold.woff') format('woff'),
		url('fonts/extra_bold/OrchideaPro-ExtraBold.ttf') format('ttf'),
		url('fonts/extra_bold/OrchideaPro-ExtraBold.eot') format('eot');
}


html, body {
    font-family: 'OrchideaPro-Medium';
    font-size: 16px;
}

.container {
    padding: 0 17%;

	@media (max-width: 1366px) {
		& {
			padding: 0 5%;
		}
	}
}

#app {
  display: flex;
  flex-direction: column;

  min-height: 100%;

  color: #424242;
}

.main {
  flex: 1 0 100%;
}

.footer {
  flex: 0 0 100%;
}

.top-name {
  color: #424242;

  font-family: 'OrchideaPro-Bold';
  font-size: 1.875rem;
}

</style>
