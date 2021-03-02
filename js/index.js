$(document).ready(function () {
    document.getElementById('cantidadIngreso').onkeypress = isNumberKey;
    document.getElementById('cantidadGasto').onkeypress = isNumberKey;
})  

$('#cantidadIngreso').keypress(function(e) {
    if (e.which == 13 || Event.keyCode == 13) {
        generarAccionMonetaria('INGRESO');
    }
})

$('#cantidadGasto').keypress(function(e) {
    if (e.which == 13 || Event.keyCode == 13) {
        generarAccionMonetaria('GASTO');
    }
})

let isNumberKey = (evt) => {
    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

let generarAccionMonetaria = (tipoAccion) => {

    var cantidadMonetaria;
    var simbolo;
    var color;

    if (tipoAccion === 'INGRESO') {
        cantidadMonetaria = $('#cantidadIngreso').val();

        if (cantidadMonetaria == ""){
            alert('Debe ingresar algun dato');
    
            return false;
        }

        color = "text-success";
        simbolo = '+';
        $('#cantidadIngreso').val('');
    }
    else if (tipoAccion === 'GASTO') {
        cantidadMonetaria = $('#cantidadGasto').val();

        if (cantidadMonetaria == ""){
            alert('Debe ingresar algun dato');
    
            return false;
        }
        
        color = "text-danger";
        simbolo = '-';
        $('#cantidadGasto').val('');
    }

    $('#lista').append(
                    '<li class="list-group-item">'
                    + '      <div class="d-flex flex-row justify-content-between">'
                    + '        <button type="button" class="btn btn-info btn-sm text-white" title="Ver detalle">'
                    + '            <i class="fas fa-eye"></i>'
                    + '        </button>'
                    + '        <span class="' + color + '">' + simbolo + ' ' + cantidadMonetaria + '</span>'
                    + '      </div>'
                    + '</li>');

}

