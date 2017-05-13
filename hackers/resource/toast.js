class Toast {
    constructor(element) {
        this.element = element;
        this.expireTime = 0;
    }
    setText(text) {
        toast.element.html(text);
        return this;
    }
    show() {
        toast.element.addClass('on');
        this.expireTime = (new Date()).getTime()+5000;
        
        setTimeout(function(){if ((new Date()).getTime()>=toast.expireTime) toast.element.removeClass('on');},5000);
        //setTimeout(function(){$('.toast').hide();},3000);
        
        return this;
    }
}