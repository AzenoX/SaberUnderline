# SaberUnderline

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](http://azenox.fr/)

Little Script for adding some underline with lightsabers

## Getting Started

Demo: [https://azenox.fr/demos/saber/saber.html](https://azenox.fr/demos/saber/saber.html)

### Install

You can get it from my server (not 100% uptime so careful)

[http://azenox.fr/lib/saberunderline.js](http://azenox.fr/lib/saberunderline.js)  
[http://azenox.fr/lib/saberunderline.min.js](http://azenox.fr/lib/saberunderline.min.js)

Or just download the file and import it
```html
<script src="path/to/saberunderline.js"></script>
```

<br/>

### Usage

Here is a basic usage (Almost everything can be personalized with html attributes):

<br/>

<i>index.html :</i>
```html
<h2
    class="saberunderline"
    data-color="blue"
    data-hilt="./sabers/anakin.png"
    data-bladeOffsetX="-10px"
    data-bladeOffsetY="4px">
        No, I am your father!
</h2>
```

<i>app.js :</i>
```javascript
    let element = document.querySelector('.saberunderline');
    new SaberUnderline(element).init();
```

<br/>

#### Attributes


<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 250px;">Name</th>
			<th style="width: 100px;">Default Value</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>data-preset</td>
			<td><i>none</i></td>
			<td>you can use a preset (Between: 'vador', 'luke', 'anakin', 'ahsoka' or 'palpatine'). A preset automatically set 4 attributes, <b>data-color</b>, <b>data-hilt</b>, <b>data-blade-offset-y</b>, <b>data-blade-offset-x</b>. So you don't have to specify them.</td>
		</tr>
		<tr>
			<td>data-interact</td>
			<td>0.4s</td>
			<td>Duration of the animation when you pass your mouse on it</td>
		</tr>
		<tr>
			<td>data-hilt</td>
			<td><i>none</i></td>
			<td>Url to the hilt (can be relative or absolute)</td>
		</tr>
		<tr>
			<td>data-height</td>
			<td>100%</td>
			<td>The height of lightsaber relative to parent div</td>
		</tr>
		<tr>
			<td>data-color</td>
			<td><i>none</i></td>
			<td>Color of the blade (can be every color: RGB, RGBA, HEX, etc...)</td>
		</tr>
		<tr>
			<td>data-blade-width</td>
			<td>40%</td>
			<td>Thickness of the blade</td>
		</tr>
		<tr>
			<td>data-blade-offset-y</td>
			<td>0px</td>
			<td>Offset of the blade on Y axis (Can be useful if you use a custom hilt)</td>
		</tr>
		<tr>
			<td>data-blade-offset-x</td>
			<td>0px</td>
			<td>Offset of the blade on X axis (Can be useful if you use a custom hilt)</td>
		</tr>
		<tr>
			<td>data-animation-length</td>
			<td>0.4s</td>
			<td>Duration of the animation when you pass your mouse on it</td>
		</tr>
		<tr>
			<td>data-box-shadow-spread</td>
			<td>10px</td>
			<td>Size of the blade shadow</td>
		</tr>
	</tbody>
</table>

<br/>

#### Methods

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 100px;">Parameters</th>
			<th style="width: 100px;">Default Value</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>.setWidth()</td>
			<td>width</td>
			<td><i>none</i></td>
			<td>The new blade width (<b>MUST BE IN PERCENT %)</b></td>
		</tr>
		<tr>
			<td></td>
			<td>length</td>
			<td><i>none</i></td>
			<td>Duration (in milliseconds) of the animation</td>
		</tr>
		<tr>
			<td>.setColor()</td>
			<td>color</td>
			<td><i>none</i></td>
			<td>The new blade color (box-shadow color)</td>
		</tr>
		<tr>
			<td></td>
			<td>length</td>
			<td><i>none</i></td>
			<td>Duration (in milliseconds) of the animation</td>
		</tr>
	</tbody>
</table>

<br />

Here is an advanced usage you can do with all methods:

<i>index.html :</i>
```html
<h2
    id="saberAshoka"
    class="saberunderline"
    data-color="purple"
    data-hilt="./sabers/ahsoka.png"
    data-bladeOffsetX="-10px"
    data-bladeOffsetY="0"
    data-animation-length="1s"
    data-interact="false">
        No, I am your father! No, I am your father!
</h2>
```

<i>app.js :</i>
```javascript
    let el = document.querySelectorAll('.saberunderline');
    new SaberUnderline(el).init();
    
    //Little Animation
    setTimeout(function(){
        let saber = new SaberUnderline('#saberAshoka');
        saber.setWidth('100%', "1s");
        saber.setColor('red', "1s");
    },500)
```


## Versions
**Last version :** 1.0



## License

You can use this project as you want. Copy it, modify it, redistribute it...


