$(function(){
    $(".telefone").mask("(99) 9999-9999");
    $(".celular").mask("(99) 99999-9999");
    $(".cep").mask("99999-999");
    $(".rg").mask("99.999.999-*");
    $(".data").mask("99/99/9999");
    $(".datatime").mask("99/99/9999 99:99");
    $(".money").mask("000.000.000.000.000,00", {reverse: true});
    $(".cnpj").mask("99.999.999/9999-99");
});