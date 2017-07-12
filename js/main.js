$(function(){
   // var date = new Date();
   // console.log(date.getHours());
  //  console.log(date.getMinutes());
  //  console.log(date.getSeconds());
    var tableContainer = $('.calendar-table');
    var tableBuild = "";
    tableBuild = tableBuild + ('<table><th colspan="7">November</th><tr>');
 //   tableContainer.html(tableBuild);

    var date = new Date(); // 3 января 2014
  // console.log( date.toLocaleString('en', {weekday: 'short'}) ); // 'Пт'
    // for(i = 0; i < 7; i++){
    //     tableContainer.html('');
    // }
    for(i=1; i <= 30; i++){
        tableBuild = tableBuild + '<td>' + i + '</td>';
        if(i == 7){
            tableBuild = tableBuild + '</tr><tr>';
        } else if(i == 14){
            tableBuild = tableBuild + '</tr><tr>';
        } else if(i == 21){
            tableBuild = tableBuild + '</tr><tr>';
        } else if(i == 28){
            tableBuild = tableBuild + '</tr><tr>';
        }
    }

    tableContainer.html(tableBuild);

})