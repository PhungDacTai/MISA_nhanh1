$(document).ready(function () {
    loadData();
})

/**
 * 
 * */
function loadData() {
    //Lấy dữ liệu
    $.ajax({
        url: "http://api.manhnv.net/api/employees",
        method: "GET",
    }).done(function (res){
        //Chạy đúng
        var data = res;
        $.each(data, function (index, item){
            var tr = $(`<tr>
                            <td>`+ item.EmployeeCode +`</td>
                            <td>`+ item['FullName']+`</td>
                            <td>`+ item['Gender'] +`</td>
                            <td>`+ item['DateOfBirth'] +`</td>
                            <td></td>
                            <td>`+ item['PhoneNumber'] +`</td>
                            <td>`+ item['Email'] +`</td>
                            <td style="max-width:215px;"><span style="width:215px">`+ item['Address'] +`</span></td>
                            <td>`+ item['Salary'] +`</td>
                            <td>206225549</td>
                        </tr>`);
            $('table tbody').append(tr);
        })
        
 
    }).fail(function (res){
        //Chạy fail
    })
    // Binding dl lên table
    
}