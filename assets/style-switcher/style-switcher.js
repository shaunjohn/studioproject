/*-----------------------------------------------------/
 * 
 *   Styles Switcher
 * 
 *   Template Name: Euforia - Responsive Vcard Template
 *   Version: 1.2
 *   Author:  Lukasz Lelek (http://smq.ht2.pl)
 *   
------------------------------------------------------*/



jQuery(document).ready(function($) {
    "use strict";
    
    // Install Switcher
    $("head").append('<link href="assets/style-switcher/style-switcher.css" rel="stylesheet"/>');
    $("body").append('<div id="style-switcher"></div>');
    
    var swither = $("#style-switcher");
    swither.load("assets/style-switcher/style-switcher.html");

    // animate page transitions
    swither.on("change", "form .page-transitions", function () {
        var x = $(this).val();
        --x;
        PageTransitions.updateAnimcursor(x);
    });    
    
    // update portfolio padding
    swither.on("change", "form .pf-margin", function () {
        var v = $(this).val();
        
        $(".portfolio-colum")
                .removeClass('portfolio-nopadding')
                .removeClass('portfolio-padding1')
                .removeClass('portfolio-padding2')
                .removeClass('portfolio-padding3') 
                .removeClass('portfolio-padding4')
                .removeClass('portfolio-padding5')
                .removeClass('portfolio-padding6') 
                .removeClass('portfolio-padding8')
                .removeClass('portfolio-padding10')
                .removeClass('portfolio-padding15')
                .removeClass('portfolio-padding20')
                .addClass(v);
               
        var $portfolio_grid = $('.portfolio-colum');
        if ($portfolio_grid) {

           $portfolio_grid.shuffle('update');

        }
        
    });
        
});

function switcher_pt_autonext(v) {
    
        if(v === 'true'){
            PageTransitions.updateNextAnimcursor(true);
        }else {
            PageTransitions.updateNextAnimcursor(false);
        }       
        switcher_panel_activ('pt-autonext',v); 
}

function switcher_color(v) {
        
        if(document.querySelector('link[rel="stylesheet/less"]')) {
            // EDIT TO LESS 
            less.modifyVars({'@color-default': '@color-'+v});   
        } else {
            // EDIT TO CSS
            $("head").append('<link rel="stylesheet" href="assets/css/theme-' + v + '.css">');
            //$("link#style-color").attr("href", "assets/css/theme-" + v + ".css");  
        }
        switcher_panel_activ('color-selector','bg-'+v); 
}

function switcher_bg_nav(v) {
    

        $("nav").attr('class','activ '+v);
               
        switcher_panel_activ('bg-nav',v);  
}

function switcher_bg_page(v) {

        $(".page-wrapper")
                .removeClass('page-white')
                .removeClass('page-dark')
                .removeClass('page-gray-light')
                .removeClass('page-metalic')
                .addClass(v);
        switcher_panel_activ('bg-page',v); 
}

function switcher_logo(v) {

        $(".logo")
                .removeClass('logo-v1')
                .removeClass('logo-v2')
                .addClass('logo-' + v);
        switcher_panel_activ('logo_box',v);       
}

function switcher_logo_color(v) {
        
        if ($("a.logo-img")) {
            $(".logo-img img").attr("src", "assets/img/logo-" + v + ".png");
        }
        switcher_panel_activ('logo_color',v);        
}

function switcher_menu_activ(v) {
        
        $(".dl-menu")
                .removeClass('menu-active-v1')
                .removeClass('menu-active-v2')
                .removeClass('menu-active-v3')
                .addClass(v);
        switcher_panel_activ('menu_active',v); 
}

function switcher_menu_hover(v) {
        
        $(".dl-menu")
                .removeClass('menu-hover-v1 menu-hover-v2 menu-hover-v3')
                .addClass(v);
        switcher_panel_activ('menu_hover',v); 
}

function switcher_menu_text_pos(v) {
        
        $(".dl-menu")
                .removeClass('menu-left')
                .removeClass('menu-right')
                .removeClass('menu-center')
                .addClass(v);
        switcher_panel_activ('menu_text_pos',v); 
}

function switcher_menu_text_weight(v) {
        
        $(".dl-menu")
                .removeClass('menu-weight300')
                .removeClass('menu-weight400')
                .removeClass('menu-weight700')
                .removeClass('menu-weight900')
                .addClass(v);
        switcher_panel_activ('menu_text_weight',v); 
}

function switcher_socialicon(v) {
        
        $("footer ul.social-icons")
                .removeClass('social-v1')
                .removeClass('social-v2')
                .removeClass('social-v3')
                .addClass(v);
        switcher_panel_activ('socialicon',v);   
}

function switcher_panel_activ(box,param) {
   
    $(".box-switcher."+box+" a").removeClass('active');
    $(".box-switcher."+box+" ."+param).addClass('active'); 
    
} 



function switcher_pf_hover(v) {
        
        $(".portfolio-hover")
                .removeClass('hover-v1')
                .removeClass('hover-v2')
                .addClass(v);
        switcher_panel_activ('portfolio-hover',v);   
}
function switcher_pf_hover2(v) {
        
        $(".portfolio-hover")
                .removeClass('hover-white')
                .removeClass('hover-default')
                .addClass(v);
        switcher_panel_activ('portfolio-hover2',v);   
}
function switcher_pf_hover3(v) {
        
        $(".portfolio-hover")
                .removeClass('hover-scale')
                .addClass(v);
        switcher_panel_activ('portfolio-hover3',v);   
}

