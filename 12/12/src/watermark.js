(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        /*AMD. Register as an anonymous module.
        *define([], factory); */
        define([], factory());
    } else if (typeof module === 'object' && module.exports) {
        /*Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.*/
        module.exports = factory();

    } else {
        /*Browser globals (root is window)*/
        root['watermark'] = factory();
    }
}(this, function () {

    /*Just return a value to define the module export.*/
    let watermark = {};

    /*加载水印*/
    let loadMark = function () {
        let defaultSettings = {
            watermark_id: 'wm_div_id',          //水印总体的id
            watermark_prefix: 'mask_div_id',    //小水印的id前缀
            watermark_txt: "测试水印",             //水印的内容
            watermark_x: 20,                     //水印起始位置x轴坐标
            watermark_y: 20,                     //水印起始位置Y轴坐标
            watermark_rows: 0,                   //水印行数
            watermark_cols: 0,                   //水印列数
            watermark_x_space: 100,              //水印x轴间隔
            watermark_y_space: 50,               //水印y轴间隔
            watermark_font: '微软雅黑',           //水印字体
            watermark_color: 'black',            //水印字体颜色
            watermark_fontsize: '1',          //水印字体大小, 以rem为单位
            watermark_alpha: 0.15,               //水印透明度，要求设置在大于等于0.005
            watermark_width: 100,                //水印宽度
            watermark_height: 100,               //水印长度
            watermark_angle: 15,                 //水印倾斜度数
            watermark_parent_selector: null,  //水印插件挂载的父元素选取器,不输入则默认挂在body上
            // need_adapt_screen: false,     // 是否根据屏幕的分辨率等比变化每个水印的宽度和字体大小
            // watermark_width_proportion: 15, // 每个水印宽度自适应屏幕变化的等比放大或缩小的值
            // watermark_fontsize_proportion: 95, // 每个水印字体大小自适应屏幕变化的等比放大或缩小的值
        };
        let watermark_parent_node = null  //水印插件挂载的父元素element,不输入则默认挂在body上

        let setting = arguments[0] || {};
        /*采用配置项替换默认值，作用类似jquery.extend*/
        // Object.assign：IE不支持  chrome，firefox等浏览器是支持该方法，但是一些低版本的浏览器并不支持该方法
        // iphone5S中和一些低端的Android手机也不兼容
        if (arguments.length === 1 && typeof arguments[0] === "object") {
            for (let key in setting) {
                if (setting[key] && defaultSettings[key] && setting[key] === defaultSettings[key]) continue;
                /*veronic: resolution of watermark_angle=0 not in force*/
                else if (setting[key] || setting[key] === 0) defaultSettings[key] = setting[key];
            }
        }

        /* 水印的样式自适应屏幕的分辨率 */
        // if (defaultSettings.need_adapt_screen) {
        //     const eachWatermaskWidth = Math.floor(document.body.clientWidth / defaultSettings.watermark_width_proportion) // 得出水印长度的等比值
        //     const getFontSize = Math.floor(document.body.clientWidth / defaultSettings.watermark_fontsize_proportion) + 'px' // 得出水印字体大小的等比值
        //     defaultSettings.watermark_fontsize = getFontSize
        //     defaultSettings.watermark_width = eachWatermaskWidth
        // }

        /* 设置水印的容器 */
        if (defaultSettings.watermark_parent_selector) {
            watermark_parent_node = document.querySelector(defaultSettings.watermark_parent_selector)
            // 给水印添加一个参考的定位
            watermark_parent_node.style.position = 'relative'
        } else {
            watermark_parent_node = document.body
        }

        /*如果元素存在则移除*/
        let watermark_element = document.getElementById(defaultSettings.watermark_id);
        if (watermark_element) {
            let _parentElement = watermark_element.parentNode;
            if (_parentElement) {
                _parentElement.removeChild(watermark_element);
            }
        }
        
        /*获取水印的起始位置*/
        // let page_offsetTop = 0;
        // let page_offsetLeft = 0;
        // page_offsetTop = watermark_parent_node.offsetTop || 0;
        // page_offsetLeft = watermark_parent_node.offsetLeft || 0;
        page_width = watermark_parent_node.offsetWidth - defaultSettings.watermark_width / 2 || 0;
        // page_height = (Math.max(watermark_parent_node.offsetHeight, watermark_parent_node.scrollHeight) - defaultSettings.watermark_height / 2) || 0;
        page_height = (watermark_parent_node.offsetHeight - defaultSettings.watermark_height / 2) || 0;
        // defaultSettings.watermark_x = defaultSettings.watermark_x + page_offsetLeft;
        // defaultSettings.watermark_y = defaultSettings.watermark_y + page_offsetTop;

        /*创建水印外壳div*/
        let otdiv = document.getElementById(defaultSettings.watermark_id);
        let shadowRoot = null;

        if (!otdiv) {
            otdiv = document.createElement('div');

            /*创建shadow dom*/
            otdiv.id = defaultSettings.watermark_id;
            otdiv.style.pointerEvents = "none";

            /*判断浏览器是否支持attachShadow方法*/
            // 考虑到shadow-dom的兼容性问题，用原生dom实现
            // if (typeof otdiv.attachShadow === 'function') {
            //     shadowRoot = otdiv.attachShadow({mode: 'open'});
            // } else if (typeof otdiv.createShadowRoot === 'function') {
            //     shadowRoot = otdiv.createShadowRoot();
            // } else {
                shadowRoot = otdiv;
            //}

            watermark_parent_node.appendChild(otdiv)

        } else if (otdiv.shadowRoot) {
            shadowRoot = otdiv.shadowRoot;
        }


        /*如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔*/
        if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
            defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
            if (defaultSettings.watermark_cols > 1) {
                defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
            }
        }
        /*如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔*/
        if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
            defaultSettings.watermark_rows = parseInt((page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
            defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
        }

        let x;
        let y;
        for (let i = 0; i < defaultSettings.watermark_rows; i++) {
            y = (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
            if (i == 0) {
                y = y + defaultSettings.watermark_y
            }
            for (let j = 0; j < defaultSettings.watermark_cols; j++) {
                x = (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
                if (j == 0) {
                    x = x + defaultSettings.watermark_x
                }

                let mask_div = document.createElement('div');
                let oText = document.createTextNode(defaultSettings.watermark_txt);
                mask_div.appendChild(oText);
                /*设置水印相关属性start*/
                mask_div.id = defaultSettings.watermark_prefix + i + j;
                /*设置水印div倾斜显示*/
                mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                mask_div.style.visibility = "";
                mask_div.style.position = "absolute";
                /*选不中*/
                mask_div.style.left = x + 'px';
                mask_div.style.top = y + 'px';
                mask_div.style.overflow = "hidden";
                mask_div.style.zIndex = "9999999";
                mask_div.style.opacity = defaultSettings.watermark_alpha;
                mask_div.style.fontSize = defaultSettings.watermark_fontsize + 'rem';
                mask_div.style.fontFamily = defaultSettings.watermark_font;
                mask_div.style.color = defaultSettings.watermark_color;
                mask_div.style.textAlign = "center";
                mask_div.style.width = defaultSettings.watermark_width + 'px';
                mask_div.style.height = defaultSettings.watermark_height + 'px';
                mask_div.style.display = "block";
                mask_div.style['-ms-user-select'] = "none";
                /*设置水印相关属性end*/
                shadowRoot.appendChild(mask_div);
            }
        }
    };
    /* 监听DOM的变化，防止手动删除 */
    // let observerDomReloadMark = (settings) => {
    //     // Select the node that will be observed for mutations
    //     let observer_node = document.querySelector('#shadowContainer')
    //     // Options for the observer (which mutations to observe)
    //     let config = {
    //         attributes: true,
    //         childList: true,
    //         subtree: true
    //     };
    //     // Callback function to execute when mutations are observed
    //     const mutationCallback = (mutationsList) => {
    //         // for (let mutation of mutationsList) {
    //         //     let type = mutation.type;
    //         //     switch (type) {
    //         //         case "childList":
    //         //             console.log("A child node has been added or removed.");
    //         //             break;
    //         //         case "attributes":
    //         //             console.log(`The ${mutation.attributeName} attribute was modified.`);
    //         //             break;
    //         //         case "subtree":
    //         //             console.log(`The subtree was modified.`);
    //         //             break;
    //         //         default:
    //         //             break;
    //         //     }
    //         // }
    //         // loadMark(settings)
    //         console.log(2222)
    //     };

    //     // Create an observer instance linked to the callback function
    //     let observer = new MutationObserver(mutationCallback);

    //     // Start observing the target node for configured mutations
    //     observer.observe(observer_node, config);

    //     // Later, you can stop observing
    //     // observer.disconnect();
    // }

    /*初始化水印，添加load和resize事件*/
    watermark.init = function (settings) {
        loadMark(settings);
        window.addEventListener('load', function () {
            loadMark(settings);
        });
        window.addEventListener('resize', function () {
            loadMark(settings);
        });
        window.addEventListener('DOMContentLoaded', function () {
            loadMark(settings);
        });

    };

    /*手动加载水印*/
    watermark.load = function (settings) {
        loadMark(settings);
        // observerDomReloadMark(settings)
    };

    return watermark;
}))