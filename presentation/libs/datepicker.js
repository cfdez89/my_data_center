/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Directiva para capturar una fecha 
 * Se obtiene la fecha seleccionada por el usuario
 */

(function(){
    'use strict';
    angular
    .module('myDataCenter')   
    .directive('myDatepicker', function ($parse) {
        return function (scope, element, attrs, controller) {
            var ngModel = $parse(attrs.ngModel);
            $(function(){
                element.datepicker({
                    changeYear:true,
                    changeMonth:true,
                    dateFormat:'yy-mm-dd',
                    maxDate: new Date(),
                    yearRange: '1950:2030',
                    onSelect:function (dateText, inst) {
                        scope.$apply(function(scope){
                            // Cambia valor del modelo
                            ngModel.assign(scope, dateText);
                        });
                    }
                });
            });
        }
    });
})();