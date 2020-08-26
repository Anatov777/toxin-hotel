// var picker = new Lightpick({ field: document.getElementById('datepicker') });

if (document.getElementById('demo-3_1')) {
    var picker = new Lightpick({
        field: document.getElementById('demo-3_1'),
        secondField: document.getElementById('demo-3_2'),
        singleDate: false,
        selectForward: true,
        footer: true,
        autoclose: false,
        onSelect: function(start, end){
            var str = '';
            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            str += end ? end.format('Do MMMM YYYY') : '...';
            // document.getElementById('result-3').innerHTML = str;
        }
    });
}

if (document.getElementById('demo-1')) {
    var pickerSingle = new Lightpick({
        field: document.getElementById('demo-1'),
        onSelect: function(date){
            document.getElementById('demo-1').innerHTML = date.format('Do MMMM YYYY');
        }
    });
}