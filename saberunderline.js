
class SaberUnderline{

    els = null;

    constructor(els) {
        //If it's a HTMLElement
        if(typeof els == "object"){
            this.els = els;
        }
        //If it's a String
        else if(typeof els == "string"){
            //If it's a class
            if(els.startsWith('.')){
                this.els = document.querySelectorAll(els);
            }
            //If it's an id or something else
            else{
                this.els = document.querySelector(els);
            }
        }

        this.addResizeEvent(el);
    }


    init(){
        //If it's an ID or something else
        if(this.els instanceof Element){
            this.buildSabers(this.els);
        }
        //If it's a class
        else if(NodeList.prototype.isPrototypeOf(this.els)){
            this.els.forEach((el) => {
                this.buildSabers(el);
            })
        }
    }

    setWidth(width, length){
        //If it's an ID or something else
        if(this.els instanceof Element){
            let blade = this.els.querySelector('.lightsaber__blade');
            width = width.replace('%', '');
            let newLength = (width / 100);
            let boxshadowLength = window.getComputedStyle(blade).transition.split('box-shadow ')[1].split('s')[0];
            blade.style.transition = `transform ${length} cubic-bezier(.31,.04,.73,.97), box-shadow ${boxshadowLength != null ? boxshadowLength : 0}s cubic-bezier(.31,.04,.73,.97)`;
            blade.style.transform = `scaleX(${newLength})`;
        }
        //If it's a class
        else if(NodeList.prototype.isPrototypeOf(this.els)){
            this.els.forEach((el) => {
                let blade = this.els.querySelector('.lightsaber__blade');
                width = width.replace('%', '');
                let newLength = (width / 100);
                let boxshadowLength = window.getComputedStyle(blade).transition.split('box-shadow ')[1].split('s')[0];
                blade.style.transition = `transform ${length} cubic-bezier(.31,.04,.73,.97), box-shadow ${boxshadowLength != null ? boxshadowLength : 0}s cubic-bezier(.31,.04,.73,.97)`;
                blade.style.transform = `scaleX(${newLength})`;
            })
        }
    }

    setColor(color, length){
        //If it's an ID or something else
        if(this.els instanceof Element){
            let blade = this.els.querySelector('.lightsaber__blade');
            let transformLength = window.getComputedStyle(blade).transition.split('transform ')[1].split('s')[0];
            blade.style.transition = `transform ${transformLength != null ? transformLength : 0}s cubic-bezier(.31,.04,.73,.97), box-shadow ${length} cubic-bezier(.31,.04,.73,.97)`;
            let spread = window.getComputedStyle(blade).boxShadow.split('px ')[2];
            blade.style.boxShadow = `0 0 ${spread}px ${spread / 2}px ${color}`;
        }
        //If it's a class
        else if(NodeList.prototype.isPrototypeOf(this.els)){
            this.els.forEach((el) => {
                let blade = this.els.querySelector('.lightsaber__blade');
                let transformLength = window.getComputedStyle(blade).transition.split('transform ')[1].split('s')[0];
                blade.style.transition = `transform ${transformLength != null ? transformLength : 0}s cubic-bezier(.31,.04,.73,.97), box-shadow ${length} cubic-bezier(.31,.04,.73,.97)`;
                let spread = window.getComputedStyle(blade).boxShadow.split('px ')[2];
                blade.style.boxShadow = `0 0 ${spread}px ${spread / 2}px ${color}`;
            })
        }
    }

    buildSabers(el) {
        let lightsaber = el.querySelector('.lightsaber');
        if(lightsaber !== null){
            el.removeChild(lightsaber);
        }


        /*=================================

              Get options from html

        ==================================*/
        let data_height = (el.getAttribute('data-height') !== null) ? el.getAttribute('data-height') : "100%";

        let data_hilt = el.getAttribute('data-hilt'); //required
        let data_color = el.getAttribute('data-color'); //required

        let data_bladeWidth = (el.getAttribute('data-blade-width') !== null) ? el.getAttribute('data-blade-width') : "40%";

        let data_bladeOffsetX = (el.getAttribute('data-blade-offset-x') !== null) ? el.getAttribute('data-blade-offset-x') : "0";
        let data_bladeOffsetY = (el.getAttribute('data-blade-offset-y') !== null) ? el.getAttribute('data-blade-offset-y') : "0";

        let data_animationLength = (el.getAttribute('data-animation-length') !== null) ? el.getAttribute('data-animation-length') : "0.4s";

        let data_boxShadowSpread = (el.getAttribute('data-box-shadow-spread') !== null) ? el.getAttribute('data-box-shadow-spread') : "10px";
        let data_boxShadowSpreadSpread = data_boxShadowSpread.replaceAll("px","") / 2;


        //Presets Manager
        if(el.getAttribute('data-preset') !== null){
            let preset = el.getAttribute('data-preset');

            if(preset === "vador"){
                data_color = "red";
                data_hilt = "https://i.imgur.com/EbsDhdE.png";
                data_bladeOffsetX = "-10px";
                data_bladeOffsetY = "2px";
            }

            else if(preset === "luke"){
                data_color = "green";
                data_hilt = "https://i.imgur.com/p0c0JW0.png";
                data_bladeOffsetX = "-10px";
                data_bladeOffsetY = "2px";
            }

            else if(preset === "anakin"){
                data_color = "#1E88E5";
                data_hilt = "https://i.imgur.com/k2kBmqX.png";
                data_bladeOffsetX = "-10px";
                data_bladeOffsetY = "4px";
            }

            else if(preset === "ahsoka"){
                data_color = "orange";
                data_hilt = "https://i.imgur.com/8hXNaZV.png";
                data_bladeOffsetX = "-10px";
                data_bladeOffsetY = "0";
            }

            else if(preset === "palpatine"){
                data_color = "red";
                data_hilt = "https://i.imgur.com/CjHMXgb.png";
                data_bladeOffsetX = "-10px";
                data_bladeOffsetY = "0";
            }

        }


        //Set parent to relative
        el.style.position = "relative";


        /*=================================

              Build Saber wrapper

        ==================================*/
        let lightsaber_wrapper = document.createElement('div');
        lightsaber_wrapper.classList.add("lightsaber");
        lightsaber_wrapper.style.display = "flex";
        lightsaber_wrapper.style.alignItems = "center";
        lightsaber_wrapper.style.position = "absolute";
        lightsaber_wrapper.style.top = el.clientHeight + "px";
        lightsaber_wrapper.style.left = "0";
        lightsaber_wrapper.style.width = el.clientWidth + "px";
        lightsaber_wrapper.style.height = `${data_height}`;


        /*=================================

              Build Hilt

        ==================================*/
        let hilt_wrapper = document.createElement('div');
        hilt_wrapper.classList.add("lightsaber__hilt");
        hilt_wrapper.style.width = "fit-content";
        hilt_wrapper.style.height = "100%";
        hilt_wrapper.style.zIndex = "3";
        let hilt_wrapper__img = document.createElement('img');
        hilt_wrapper__img.src = `${data_hilt}`;
        hilt_wrapper__img.alt = "Saber Hilt";
        hilt_wrapper__img.style.height = "100%";
        hilt_wrapper__img.style.filter = "drop-shadow(0 0 1px #000)";
        hilt_wrapper.appendChild(hilt_wrapper__img);


        /*=================================

              Bluid Blade

        ==================================*/
        let blade_wrapper = document.createElement('div');
        blade_wrapper.classList.add(`lightsaber__blade`);
        blade_wrapper.style.marginTop = `${data_bladeOffsetY}`;
        blade_wrapper.style.marginLeft = `${data_bladeOffsetX}`;
        blade_wrapper.style.width = "0";
        blade_wrapper.style.height = `${data_bladeWidth}`;
        blade_wrapper.style.backgroundColor = "#fff";
        blade_wrapper.style.boxShadow = `0 0 ${data_boxShadowSpread} ${data_boxShadowSpreadSpread}px ${data_color}`;
        blade_wrapper.style.borderRadius = "0 10px 10px 0";
        blade_wrapper.style.transform = "scaleX(0)";
        blade_wrapper.style.transformOrigin = "left";
        blade_wrapper.style.transition = `transform ${data_animationLength} cubic-bezier(.35,.06,.24,.96), box-shadow ${data_animationLength} cubic-bezier(.31,.04,.73,.97)`;
        blade_wrapper.style.zIndex = "2";


        /*=================================

              Append hilt and blade to saber

        ==================================*/
        lightsaber_wrapper.appendChild(hilt_wrapper);
        lightsaber_wrapper.appendChild(blade_wrapper);


        /*=================================

              Append Saber to parent

        ==================================*/
        el.appendChild(lightsaber_wrapper);

        setTimeout(function(){
            blade_wrapper.style.width = "calc(100% - "+window.getComputedStyle(hilt_wrapper__img).width+")";
        },50)


        /*=================================

              Animation Manager

        ==================================*/
        el.addEventListener('mouseover', function () {
            let data_interact = (el.getAttribute('data-interact') === "false");
            if(!data_interact){
                let blade = el.querySelector('.lightsaber__blade');
                blade.style.transform = "scaleX(1)";
            }
        });
        el.addEventListener('mouseleave', function () {
            let data_interact = (el.getAttribute('data-interact') === "false");
            if(!data_interact) {
                let blade = el.querySelector('.lightsaber__blade');
                blade.style.transform = "scaleX(0)";
            }
        });
    }


    addResizeEvent(el){
        window.addEventListener('resize', function(){
            new SaberUnderline(el);
        });
    }

}
