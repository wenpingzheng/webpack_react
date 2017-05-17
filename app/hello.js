/*
module.exports = function() {
	var hello = document.createElement('div');
	hello.textContent = "hi 我是小郑子";
	return hello;
}*/

import React,{Component} from 'react'

class Hello extends Component{
	render() {
		return (
			<h1>hi 我是小郑子可</h1>
		)
	}
}
export default Hello