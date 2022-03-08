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
                                <col span="1" style="width: 170px;">
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
                                    <th>
                                        <input id="check_all" type="checkbox" class="align-bottom" style="height: 20px; width: 20px;"/>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="data">
                                
                            </tbody>
                        </table>
                     
                    </div>
                    <div class="col-12 clear-fix">
                        <div class="float-right">
                            <button id="export_btn" class="btn btn-info">Export</button>
                            <button id="render" class="btn btn-info">Render</button>

                            <!-- <input type="button" onclick="tableToExcel('data_table', 'W3C Example Table')" value="Export to Excel"> -->
                        </div>
                    </div>
                   

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

            <div id="preview_excel" class="col-12">
                <table id="excel_data" class="col-12">
                    <tr>
                        <td colspan="23" style="text-align: center;background-color:green">Inspection Form</td>
                    </tr>
                    <tr>
                        <td>
                            <picture>
                                <img src="https://firebasestorage.googleapis.com/v0/b/warehouse-327518.appspot.com/o/imgs%2F33281.jpg?alt=media&token=0cd8d785-d00f-48b9-98e8-66617aef68de" alt="Flowers" style="width:80px;height:50px">
                            </picture>
                        </td>
                        <td>วันที่ :</td>
                    </tr>
                </table>
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
                            $('#row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no).remove()
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
                                    '<td class="text-center align-bottom">'+
                                        // '<button class="del_row_btn btn p-0 px-2 btn-danger" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" type="button">ลบ</button>'+
                                        '<input value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" type="checkbox" class="checkbox-model" style="height: 20px; width: 20px;"/>'+
                                    '</td>'+
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

        

        $('#check_all').on('change',()=>{
            if($('#check_all').prop("checked")){
                $(".checkbox-model").each(function() {
                    $(this).prop("checked",true)
                });
            }
            else{
                $(".checkbox-model").each(function() {
                    $(this).prop("checked",false)
                });
            }
        })
    
        $('#export_btn').on('click',function(){
            // const table_id = "data_table"
            const table_id = "excel_data"

            
            const file_name = "Inspection Form_2022"
            tableToExcel(table_id,file_name)
            console.log('export')
        })


        var tableToExcel = (function() {
            // var uri = 'data:application/vnd.ms-excel;base64,'
            // , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
            // , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
            // , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
            // return function(table, name) {
            // if (!table.nodeType) table = document.getElementById(table)
            // var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
            // window.location.href = uri + base64(format(template, ctx))
            // }

            var uri = 'data:application/vnd.ms-excel;base64,'
                , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
                , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
                , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
            return function (table, name) {
                if (!table.nodeType) table = document.getElementById(table)
                var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
                console.log(table.innerHTML)
                window.location.href = uri + base64(format(template, ctx))
            }
        })()

        $('#render').on('click',function(){
            
            getBase64Image(document.getElementById("imageid"));
        })

        function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            console.log(dataURL)
            // $('#imgedata').attr(
            //     'src',
            //     'data:image/png;base64,'+dataURL+''
            // );
            var base64 = "url("+dataURL+")"
            var base642 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDUxRjY0ODgyQTkxMTFFMjk0RkU5NjI5MEVDQTI2QzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDUxRjY0ODkyQTkxMTFFMjk0RkU5NjI5MEVDQTI2QzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENTFGNjQ4NjJBOTExMUUyOTRGRTk2MjkwRUNBMjZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENTFGNjQ4NzJBOTExMUUyOTRGRTk2MjkwRUNBMjZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuT868wAAABESURBVHja7M4xEQAwDAOxuPw5uwi6ZeigB/CntJ2lkmytznwZFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW1qsrwABYuwNkimqm3gAAAABJRU5ErkJggg=='
            console.log(base64)
            console.log(base642)
            console.log(dataURL)
            // document.getElementById('imagedata')
            // .setAttribute(
            //     'src',
            //     dataURL
            // );
            $("#imglogo").css("background-image", 'url('+base642+')');
            $("#imglogo2").css("background-image", 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDUxRjY0ODgyQTkxMTFFMjk0RkU5NjI5MEVDQTI2QzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDUxRjY0ODkyQTkxMTFFMjk0RkU5NjI5MEVDQTI2QzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENTFGNjQ4NjJBOTExMUUyOTRGRTk2MjkwRUNBMjZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENTFGNjQ4NzJBOTExMUUyOTRGRTk2MjkwRUNBMjZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuT868wAAABESURBVHja7M4xEQAwDAOxuPw5uwi6ZeigB/CntJ2lkmytznwZFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW1qsrwABYuwNkimqm3gAAAABJRU5ErkJggg==")');
            // url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDUxRjY0ODgyQTkxMTFFMjk0RkU5NjI5MEVDQTI2QzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDUxRjY0ODkyQTkxMTFFMjk0RkU5NjI5MEVDQTI2QzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENTFGNjQ4NjJBOTExMUUyOTRGRTk2MjkwRUNBMjZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENTFGNjQ4NzJBOTExMUUyOTRGRTk2MjkwRUNBMjZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuT868wAAABESURBVHja7M4xEQAwDAOxuPw5uwi6ZeigB/CntJ2lkmytznwZFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW1qsrwABYuwNkimqm3gAAAABJRU5ErkJggg==")
            // document.getElementById("imgedata").src = base64 

            // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            
        }

        

    
    }

    
}
</script>