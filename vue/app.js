var app = new Vue({
   el: ".app",
   data: {
       url: "",
       prefix: "",
       suffix: "",
       isoCodes: ['/US/en_US/','/CA/en_CA/','/CA/fr_CA/','/GB/en_GB/','/FR/fr_FR/', '/DE/de_DE/', '/ES/es_ES/', '/DK/da_DK/', '/IT/it_IT/', '/NL/nl_NL/', '/SE/sv_SE/', '/PT/pt_PT/', '/RU/ru_RU/', '/TR/tr_TR/', '/AT/de_DE/', '/BE/fr_FR/', '/CH/de_DE/', '/IE/en/', '/FI/en/']
   },
   watch: {
       url: function(){
           var x = this.url;
           var iIndex = x.indexOf('/', 10)+1;
           this.prefix = x.slice(0, x.indexOf('/', iIndex - 3));
           x = x.slice(x.indexOf('/', iIndex), x.length);
           this.suffix = x.slice(x.indexOf('/', 2) + 1, x.length);
       }
   }
});

var clip = new ClipboardJS('.clip-btn');