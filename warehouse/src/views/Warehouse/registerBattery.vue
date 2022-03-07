<style>

</style>
<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">รับสินค้าเข้าคลัง</div>
            <div class="border my-5 bg-white p-5">
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 col-form-label">Packing List</div>
                            <div class="col-7">
                                <input type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 col-form-label">Inspection No.</div>
                            <div class="col-7">
                                <input type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 my-3">
                        <button class="btn btn-primary col-12"  data-toggle="modal" data-target="#AddPO" type="button">Add PEC PO</button>
                    </div>
                    <div class="col-12">
                        <table id="data_table" class="table">
                            <colgroup>
                                <col span="1" style="width: 50px;">
                                <col span="1" style="width: 120px;">
                                <col span="1" style="width: 150px;">
                                <col span="1" style="width: 120px;">
                                <col span="1" style="width: 200px;">
                                <col span="1" style="width: 150px;">
                                <col span="1" style="width: 120px;">
                            </colgroup>
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th>No.</th>
                                    <th>PEC PO</th>
                                    <th>Job No</th>
                                    <th>OrderSheet</th>
                                    <th>Model</th>
                                    <th>Warranty(Year)</th>
                                    <th>Amount</th>
                                    <!-- <th>pallet</th> -->
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="data">
                                
                            </tbody>
                        </table>
                        <!-- <div class="responsive-table">
                            <table id="sortable">
                                <tr class="ui-state-default">
                                <th>Drag Row</th>
                                <th>Id</th>
                                <th>Fruit</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                </tr>
                                <tr>
                                <td><i class="fa fa-bars"></i></td>
                                <td data-id="1">1</td>
                                <td>Apple</td>
                                <td>5</td>
                                <td><img src="" alt="noImage" width="30px" height="25px"></td>
                                </tr>
                                <tr>
                                <td><i class="fa fa-bars"></i></td>
                                <td data-id="2">2</td>
                                <td>Orange</td>
                                <td>8</td>
                                <td><img src="" alt="noImage" width="30px" height="25px"></td>
                                </tr>
                                <tr>
                                <td><i class="fa fa-bars" ></i></td>
                                <td data-role="test" data-id="3">3</td>
                                <td>Banana</td>
                                <td>3</td>
                                <td><img src="" alt="noImage" width="30px" height="25px"></td>
                                </tr>
                            </table>
                        </div> -->
                    </div>
                    <div class="col-12 clear-fix">
                        <div class="float-right">
                            <button id="export_btn" class="btn btn-info">Export</button>
                            <button type="button" tableexport-id="ced092d-xlsx" class="button-default xlsx">Export to xlsx</button>
                        </div>
                    </div>
                    <table id="tblData">
                    <tbody style="background-color:red;"><tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>john@gmail.com</td>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <td>Michael&nbsp;Addison</td>
                        <td>michael@gmail.com</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Sam&nbsp;Farmer</td>
                        <td>sam@gmail.com</td>
                        <td>France</td>
                    </tr>
                    <tr>
                        <td>Christian Gray</td>
                        <td>christian@gmail.com</td>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <td>Oscar P Ward</td>
                        <td>oscar.pward@gmail.com</td>
                        <td>UK</td>
                    </tr>
                </tbody>
                </table>
                <button id="export">Export HTML Table To Excel File</button>

                </div>
            </div>

            <div class="modal" id="AddPO">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">PEC PO Select</h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="username">PEC PO</label>
                                <select id="Po_select" class="form-control">

                                </select>
                            </div>
                        </form>
                    </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button id="modal_add_po" class="btn btn-primary" data-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
import numeral from "numeral";
// import tableExport from "tableexport"

export default {
    components: { Sidebar },
    mounted() {
        
        async function predata(){
            const Predata_po = await projectFirestore.collection('Po').get()
            $('#Po_select').html('<option disabled value="" selected >Choose PEC PO</option>')
            Predata_po.forEach((pec_po)=>{
                $('#Po_select').append(
                    '<option value="'+pec_po.id+'">PEC'+pec_po.data().pecpo_no+'/'+pec_po.data().pecpo_year+'</option>'
                )
            })
        }
        predata()

        $('#modal_add_po').on('click',async function(){
            const model_po_select_val = $('#Po_select').val()
            const po_select_data = await projectFirestore.collection('Po').doc(model_po_select_val).get()
            await add_po_to_table()

            function add_po_to_table(){
                console.log(po_select_data.data())
                for(let i = 0; i < po_select_data.data().battorder.length; i++){
                    for(let j = 0; j < po_select_data.data().battorder[i].ordersheet.length; j++){
                        for(let k = 0;k < po_select_data.data().battorder[i].ordersheet[j].battery.length; k++){
                            $('#data').append(
                                '<tr id="row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'">'+
                                    '<td><div class="col-form-label running_num"></div></td>'+
                                    '<td><div class="col-form-label">PEC'+po_select_data.data().pecpo_no+'/'+po_select_data.data().pecpo_year+'</div></td>'+
                                    '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'</div></td>'+
                                    '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'/'+po_select_data.data().battorder[i].ordersheet[j].ordersheet+'</div></td>'+
                                    '<td><div class="col-form-label">'+po_select_data.data().battorder[i].ordersheet[j].battery[k].series+'</div></td>'+
                                    '<td class="text-center"><div class="col-form-label">'+(parseInt(po_select_data.data().warranty)/12)+'</div></td>'+
                                    '<td>'+
                                        '<input class="col-12 form-control" type="number" step="1" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].order_amount+'" />'+
                                    '</td>'+
                                    '<td><div class="col-form-label">'+
                                        '<button class="del_row_btn btn p-0 px-2 btn-danger" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" type="button">ลบ</button>'+
                                    '</div></td>'+
                                '</tr>'
                            )
                        }
                    }
                }
                gen_running_num()

                
            }
        })


        $('#data').on('click','.del_row_btn',function(){
            const del_row_val = $(this).val()
            $('#row_'+del_row_val).remove()
            gen_running_num()
        })

        function gen_running_num(){
            const table_row_count = $('.running_num').length
            for(let i = 0; i < table_row_count; i++){
                $($('.running_num')[i]).html(i+1)
            }
        }

        $("#data_table tbody").sortable({
            cursor: "move",
            placeholder: "sortable-placeholder",
            helper: function(e, tr)
            {
                var $originals = tr.children();
                var $helper = tr.clone();
                $helper.children().each(function(index)
                {
                // Set helper cell sizes to match the original sizes
                $(this).width($originals.eq(index).width());
                });
                return $helper;                
            },
            stop: function( event, ui ) {
                gen_running_num()
            }
        })

        $('#export_btn').on('click',function(){
            console.log('Export Click')
            $("#data_table").tableExport(
                {
                headers: true,                      // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                footers: true,                      // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                formats: ["xls"],    // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
                filename: "id",                     // (id, String), filename for the downloaded file, (default: 'id')
                bootstrap: false,                   // (Boolean), style buttons using bootstrap, (default: true)
                exportButtons: true,                // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                position: "bottom",                 // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                ignoreRows: null,                   // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
                ignoreCols: null,                   // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                trimWhitespace: false,               // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
                RTL: false,                         // (Boolean), set direction of the worksheet to right-to-left (default: false)
                sheetname: "id"                     // (id, String), sheet name for the exported spreadsheet, (default: 'id')
                }
            )
           
        })
        

        $('#export').on('click',function(){

            exportTableToExcel('tblData','exportexcel')
        })
        function exportTableToExcel(tableID, filename = ''){
            var downloadLink;
            var dataType = 'application/vnd.ms-excel';
            var tableSelect = document.getElementById(tableID);
            var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
            
            // Specify file name
            filename = filename?filename+'.xls':'excel_data.xls';
            
            // Create download link element
            downloadLink = document.createElement("a");
            
            document.body.appendChild(downloadLink);
            
            if(navigator.msSaveOrOpenBlob){
                var blob = new Blob(['\ufeff', tableHTML], {
                    type: dataType
                });
                navigator.msSaveOrOpenBlob( blob, filename);
            }else{
                // Create a link to the file
                downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
            
                // Setting the file name
                downloadLink.download = filename;
                
                //triggering the function
                downloadLink.click();
            }
        }


    }
}
</script>