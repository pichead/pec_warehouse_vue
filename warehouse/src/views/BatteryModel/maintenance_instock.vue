<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">บำรุงรักษาแบตเตอรี่</div>
        
        <div class="my-5 p-4 border">
            <div class="row">
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">รอบการตรวจ</div>
                        <div class="col">
                            <select class="form-control" id="">
                                <option value="">ทั้งหมด</option>
                                <option value="">30 วัน</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 pl-5 col-form-label font-weight-bold">Model</div>
                        <div class="col">
                            <select class="form-control" id="model_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="UPS12-150MRX">UPS12-150MRX</option>
                                <option value="UPS12-320MRX">UPS12-320MRX</option>
                                <option value="UPS12-320R MRX">UPS12-320R MRX</option>
                                <option value="UPS12-37MRX">UPS12-37MRX</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">Location</div>
                        <div class="col">
                            <select class="form-control" id="location_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="โกดัง PEC">โกดัง PEC</option>
                                <option value="โกดัง พระราม2">โกดัง พระราม2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 pl-5 col-form-label font-weight-bold">C / M</div>
                        <div class="col">
                            <select class="form-control" id="cm_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="C">C "Charge"</option>
                                <option value="M">M "Measurement"</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="p-4 border">
            <table class="col table table-striped">
                <colgroup>
                    <col span="1" style="width: 5%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 20%;">
                    <col span="1" style="width: 20%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                </colgroup>
                <thead class="text-center">
                    <tr class="">
                        <th>No.</th>
                        <th>Barcode</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>วันที่ชาร์จ</th>
                        <th>C / M</th>
                        <th>
                            <input type="checkbox">
                        </th>
                    </tr>
                </thead>
                <tbody id="data" class="text-center">
                    
                </tbody>
            </table>
        </div>
        <div class="row my-4">
            <div class="col-10"></div>
            <div class="col-2">
                <button id="export_btn" type="button" class="col-12 btn btn-primary">Download(.xlsx)</button>
            </div>
        </div>

        <div id="preview_excel" class="col-11 mx-auto px-0 d-none">
                <table id="excel_data" class="col-12 table-bordered" style="padding: 0px;">
                    <colgroup>
                        <!-- <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;"> -->

                    </colgroup>
                    <thead>


                        <tr>
                            <td colspan="3">รายงานการตรวจแบตเตอรี่รายเดือน :</td>
                            <td colspan="11"></td>
                        </tr>
                        <tr>
                            <td>No.</td>
                            <td>Brand</td>
                            <td>Model</td>
                            <td>Ref</td>
                            <td>Barcode</td>
                            <td>MFG Code</td>
                            <td>Job No.</td>
                            <td>Location</td>
                            <td>Date</td>
                            <td>OCV</td>
                            <td>Mhos</td>
                            <td>Mhos%</td>
                            <td>C / M</td>
                            <td>Batt Temp</td>
                        </tr>
                    </thead>
                    <tbody id="excel_data_row">

                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
        </div>

        </div>
    </div>
</template>

<script>
// import { projectFirestore, projectAuth } from "../../firebase/config";
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {

        preload()

        async function preload(){
            console.log('load data')
            $('#data').html(
                '<tr id="row_1" class="table_row" data-model="UPS12-150MRX" data-location="โกดัง PEC" data-cm="C">'+
                        '<td class="num_row">1</td>'+
                        '<td>PEC-A2200109</td>'+
                        '<td class="model_row">UPS12-150MRX</td>'+
                        '<td class="location_row">โกดัง PEC</td>'+
                        '<td>20/01/2022</td>'+
                        '<td class="cm_row">C</td>'+
                        '<td>'+
                            '<input type="checkbox">'+
                        '</td>'+
                    '</tr>'+
                    '<tr id="row_2" class="table_row" data-model="UPS12-320MRX" data-location="โกดัง PEC" data-cm="C">'+
                        '<td class="num_row">2</td>'+
                        '<td>PEC-A2200111</td>'+
                        '<td class="model_row">UPS12-320MRX</td>'+
                        '<td class="location_row">โกดัง PEC</td>'+
                        '<td>20/01/2022</td>'+
                        '<td class="cm_row">C</td>'+
                        '<td>'+
                            '<input type="checkbox">'+
                        '</td>'+
                    '</tr>'+
                    '<tr id="row_3" class="table_row" data-model="UPS12-320R MRX" data-location="โกดัง PEC" data-cm="C">'+
                        '<td class="num_row">3</td>'+
                        '<td>PEC-A2200139</td>'+
                        '<td class="model_row">UPS12-320R MRX</td>'+
                        '<td class="location_row">โกดัง PEC</td>'+
                        '<td>20/01/2022</td>'+
                        '<td class="cm_row">C</td>'+
                        '<td>'+
                            '<input type="checkbox">'+
                        '</td>'+
                    '</tr>'+
                    '<tr id="row_4" class="table_row" data-model="UPS12-37MRX" data-location="โกดัง PEC" data-cm="M">'+
                        '<td class="num_row">4</td>'+
                        '<td>PEC-A2200135</td>'+
                        '<td class="model_row">UPS12-37MRX</td>'+
                        '<td class="location_row">โกดัง PEC</td>'+
                        '<td>20/01/2022</td>'+
                        '<td class="cm_row">M</td>'+
                        '<td>'+
                            '<input type="checkbox">'+
                        '</td>'+
                    '</tr>'+
                    '<tr id="row_5" class="table_row" data-model="UPS12-37MRX" data-location="โกดัง PEC" data-cm="M">'+
                        '<td class="num_row">5</td>'+
                        '<td>PEC-A2200145</td>'+
                        '<td class="model_row">UPS12-37MRX</td>'+
                        '<td class="location_row">โกดัง PEC</td>'+
                        '<td>20/01/2022</td>'+
                        '<td class="cm_row">M</td>'+
                        '<td>'+
                            '<input type="checkbox">'+
                        '</td>'+
                    '</tr>'+
                    '<tr id="row_6" class="table_row" data-model="UPS12-37MRX" data-location="โกดัง PEC" data-cm="C">'+
                        '<td class="num_row">6</td>'+
                        '<td>PEC-A2200147</td>'+
                        '<td class="model_row">UPS12-37MRX</td>'+
                        '<td class="location_row">โกดัง PEC</td>'+
                        '<td>20/01/2022</td>'+
                        '<td class="cm_row">C</td>'+
                        '<td>'+
                            '<input type="checkbox">'+
                        '</td>'+
                    '</tr>'
            )
        }

        $('#model_option').on('change',async function(){
            filter()
        })
         $('#location_option').on('change',async function(){
            
            filter()
        })
        $('#cm_option').on('change',async function(){
            
            filter()
        })

        async function filter(){
            await preload()
            const model_select = $('#model_option').val()
            const location_select = $('#location_option').val()
            const cm_select = $('#cm_option').val()

            $('.table_row').each(function(index){
                if(model_select != 'ทั้งหมด' && model_select != $(this).data('model')){
                    $(this).remove()
                    console.log('del model ',$(this).data('model'))
                }
                if(location_select != 'ทั้งหมด' && location_select != $(this).data('location')){
                    $(this).remove()
                    console.log('del locatio  ',$(this).data('location'))

                }
                if(cm_select != 'ทั้งหมด' && cm_select != $(this).data('cm')){
                    $(this).remove()
                    console.log('del cm ',$(this).data('cm'))

                }
                
            })

        }

    }
}
</script>