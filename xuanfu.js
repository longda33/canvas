$(()=> {
    let param = {
        tag: true,
        num: 1,
        ele: document.createElement('div'),
        icon: '&#xe6a2;',
        homeIcon: '&#xe643;',
        moreIcon: '&#xe627;',
        personalIcon: '&#xe644;',
        closeIcon: '&#xe628;',
        distance: '500',
        css: "position:fixed;" +
        "bottom:4rem;" +
        "box-shadow:10px 10px 10px gray;" +
        "right:10px;" +
        "display:none;" +
        "font-size:1.5rem;" +
        "color:#fff;" +
        "z-index:1000;" +
        "height:2.5rem;" +
        "width:2.5rem;" +
        "background:#f44336;" +
        "border-radius:50%;" +
        "line-height:2.5rem;" +
        "text-align:center",
        menuCss: "position:absolute;" +
        // "bottom:3rem;" +
        "display:none;" +
        "box-shadow:10px 10px 10px gray;" +
        "font-size:1.2rem;" +
        "color:#fff;" +
        "background:orange;" +
        "height:2rem;" +
        "width:2rem;" +
        "border-radius:50%;" +
        "text-align:center;" +
        "line-height:2rem;"
        // type: '#top'
    };

    {
        document.querySelector('body').appendChild(((ele)=> {
            ele.className = 'scroll iconfont';
            ele.innerHTML = param.moreIcon;
            // ele.href = param.type;
            ele.style.cssText = param.css;
            for (let i = 0; i < 3; i++) {
                let menu_personal = document.createElement('a');
                menu_personal.className = 'iconfont';
                menu_personal.style.cssText = param.menuCss;

                switch (i) {
                    case 0:
                        setStyle(menu_personal, '#2196f3', '2.4rem', '2.4rem', param.homeIcon, 'home');
                        break;

                    case 1:
                        setStyle(menu_personal, '#4caf50', 0, '3.5rem', param.personalIcon, 'personal');
                        break;

                    case 2:
                        setStyle(menu_personal, '#fdd835', '3.5rem', '0', param.icon, 'top');
                        break;

                }

                param.ele.appendChild(menu_personal);


            }
            return ele;
        })(param.ele));

        function setStyle(ele, ...args) {
            ele.style.background = args[0];
            ele.style.bottom = args[1];
            ele.style.right = args[2];
            ele.innerHTML = args[3];
            ele.id = args[4];
        }

    }
    {
        $(window).scroll(()=> {
            var scrollValue = $(window).scrollTop();
            if (scrollValue > param.distance) {
                if (param.tag) {
                    $(param.ele).css('display', 'block').animateCss('fadeInRight');
                    param.tag = !param.tag;
                }
            } else {
                if (!param.tag) {
                    $(param.ele).css('display', 'none');
                    $(param.ele).children().css('display', 'none');
                    param.num++;
                    param.tag = !param.tag;
                }
            }
        });

        $(param.ele).click((e)=> {
            window.e = e;
            switch (e.target.id) {

                case 'home':
                    if (!getTypeNative()) {
                        window.location.href = getAbsolutePath() + '/fenqihui/pages/recommended/recommended_index.html';
                    } else if (getTypeNative() === 'ios') {
                        backHome();
                    } else if (getTypeNative() === 'android') {
                        android.backHome();
                    }

                    break;

                case 'personal':

                    if (!getTypeNative()) {
                        window.location.href = getAbsolutePath() + '/fenqihui/pages/account/user_personal.html';
                    } else if (getTypeNative() === 'ios') {
                        //todo://前往个人中心
                        backAccount();

                    } else if (getTypeNative() === 'android') {
                        android.backAccount();
                    }
                    break;

                case 'top':
                    $(window).scrollTop(0);
                    break;


            }
            param.num % 2 == 0 && $(param.ele).children().css('display', 'none') || $(param.ele).children().css('display', 'block').animateCss('swing');
            param.num++;
        })

    }
});
