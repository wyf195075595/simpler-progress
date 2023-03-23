class Progress extends HTMLElement {
    constructor() {
        // 调用超类的构造器
        super();
        // 创建一个影子 DOM 树并将其附加到这个元素
        // 设置为 this.shadowRoot 的值
        this.attachShadow({mode:'open'});
        
        // 克隆模板，定义自定义组件的后代及样式
        // 然后把内容追加到影子根节点
        this.createTemplate();
        this.shadowRoot.append(this.template.content.cloneNode(true));
        
        // 内容模板
        this.contentTemplate = `正在安装 #percentage %`;

        // 取得对影子DOM中重要元素的引用
        this.progress = this.shadowRoot.querySelector('.progress');
        this.progressContent = this.shadowRoot.querySelector('.progress-content');
        this.progressWrapper = this.shadowRoot.querySelector('.progress-wrapper');
        

        // 初始化进度
        this.start = 0;
        this.max = 100;
    }
    // 钩子函数： 自定义元素增加、删除、修改属性时 ，调用。
    // 触发此回调函数，必须监听变化的属性static get observedAttributes() ,返回监听的属性。
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }
    // 创建一个 template 元素，用于保存样式和元素树,可以在每个 元素的实例中使用它门
    createTemplate() {
        let template = document.createElement('template');
        template.innerHTML = `
            <style>
              .progress-wrapper {
                position: relative;
                overflow: hidden;
                width: 300px;
                height: 20px;
                text-align: center;
                border-radius: 10px;
                background-color: #cdeee3;
              }
        
              .progress {
                width: 0%;
                height: 100%;
                transition: all 200ms;
                background-color: #3da985;
              }
        
              p {
                font-size: 12px;
                font-weight: bolder;
                position: absolute;
                z-index: 10;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                transition: all 200ms;
                background-image: linear-gradient(to right, #cdeee3 0%, #3da985 0%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            </style>
            <div class="progress-wrapper">
                <div class="progress"></div>
                <p class="progress-content">正在安装 0%</p>
            </div>
        `
        this.template = template;
    }
    // 更新进度条
    updateProgress(percentage) {
        this.progress.style.width = percentage + "%";
        this.progressContent.innerText = this.contentTemplate.replace("#percentage", percentage);
        this.progressContent.style.backgroundImage = `linear-gradient(to right, #cdeee3 ${percentage}%, #3da985 ${percentage}%)`;
    }
    // 常用属性读写
    get percentage() { return this.start }
    get width() { return this.progressWrapper.style.width }
    get height() { return this.progressWrapper.style.height }
    get fontSize() { return this.progressContent.style.fontSize }
    set percentage(pt) { 
        if(String(pt).length) {
            if(pt >= this.max) pt = this.max;
            this.start = pt;
            this.updateProgress(pt);
            this.setAttribute("data-percentage", pt);
        }
    }
    set height(val) {
        if(val) {
            this.progressWrapper.style.height = val;
            let fontSize = parseInt(1/3 * (+String(val).replace("px", "")))
            this.fontSize = fontSize + "px";
        }
    }
    set width(val) {
        if(val) {
            this.progressWrapper.style.width = val;
        }
    }
    set fontSize(val) {
        if(val) {
            this.progressContent.style.fontSize = val;
        }
    }
}
// 这个静态属性对 attributeChangedCallback 方法是必须的，只有在这个数组中列出的属性名才会触发对该方法的调用
Progress.observedAttributes = ['innerText', 'value','data-percentage'];
customElements.define('my-progress', Progress);

export default Progress;

