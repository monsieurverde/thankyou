import React, { Component } from 'react';


class Contact extends Component {

  render() {  
  var $form = $('form#contact-form'),
      url = 'https://script.google.com/macros/s/AKfycby1e-pHwkyJJi_GYYfeYgoWH2yogXkWspnkTpHG/exec'
  
      //console.log('UTL = [' + url +']');
  
      
  $('#submit-form00').on('click', function(e) {
      alert('Thank you 222 [' + url +']');
      ///console.log('url = [' + url +']');
      ///$('button#submit-form999').on('click',  alert('Thank you 222 [' + $form +']') )
  })
  
  $('button#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize()
    }).success(
      alert('Thank you for contacting us.\nYour request has been submitted.\nWe will contact you by phone or email shortly.') 
    );
  })

}
}

export default Contact;

/*

    document.getElementById('browser').value = (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'browser'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
*/
