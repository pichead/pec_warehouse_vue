<style>
    #table_main_filter {
        display:none;
    }
</style>
<template>


<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 my-5 font-weight-bold  font-weight-bold">Battery Status</div>

            <div class="border rounded p-4 my-3">
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 pl-5 col-form-label  font-weight-bold">Barcode</div>
                            <div class="col-8 my-2">
                                <input id="search_barcode" type="text"  class="form-control" placeholder="Search...."/>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 pl-5 col-form-label  font-weight-bold">Job No</div>
                            <div class="col-8 my-2">
                                <input id="search_job" type="text"  class="form-control" placeholder="Search...."/>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 pl-5 col-form-label  font-weight-bold">Location</div>
                            <div class="col-8 my-2">
                                <select id="location" class="form-control">
                                    <option value="">ทั้งหมด</option>
                                    <option value="โกดัง PEC">โกดัง PEC</option>
                                    <option value="โกดัง พระราม2">โกดัง พระราม2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 pl-5 col-form-label  font-weight-bold">Model</div>
                            <div class="col-8 my-2">
                                <select id="model" class="form-control">

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 pl-5 col-form-label  font-weight-bold">Status</div>
                            <div class="col-8 my-2">
                                <select id="status" class="form-control">
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mt-3">
                        <div class="d-flex flex-row-reverse row-hl">

                            <div class="pl-4 pr-0 item-hl">
                                <button id="status-btn" class="red-btn btn" type="button" data-toggle="modal" data-target="#modal_status">เปลี่ยนสถานะ</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <table id="table_main" class="table">
                <thead class="text-center">
                    <th>No</th>
                    <th>Job No</th>
                    <th>Location</th>
                    <th>Zone</th>
                    <th>Barcode</th>
                    <th>Model</th>
                    <th>Status</th>
                    <th>
                        <input id="check_all" type="checkbox" style="width:15px;height:15px" />
                    </th>
                </thead>
                <tbody id="data">

                </tbody>
            </table>


            <div class="modal" id="modal_status">
                <form id="status_form" class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold">เปลี่ยนสถานะ</h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="col-11 mx-auto">
                            <div class="row">
                                <!-- <div class="col-4 my-2 col-form-label font-weight-bold">Job No</div>
                                <div class="col-8 my-2">
                                    <select id="modal-job" class="form-control" required>

                                    </select>
                                </div> -->

                                <div class="col-4 my-2 col-form-label font-weight-bold">Location</div>
                                <div class="col-8 my-2">
                                    <select id="modal-location" class="form-control" required>
                                        <option value="" disabled selected >เลือกสถานที่</option>
                                        <option value="โกดัง PEC">โกดัง PEC</option>
                                        <option value="โกดัง พระราม2">โกดัง พระราม2</option>
                                    </select>
                                </div>
                                <div class="col-4 my-2 col-form-label font-weight-bold">Zone</div>
                                <div class="col-8 my-2">
                                    <select id="modal-location" class="form-control" required>
                                        <option value="" disabled selected >เลือก Zone</option>
                                        <option value="Zone A">Zone A</option>
                                        <option value="Zone B">Zone B</option>
                                    </select>
                                </div>

                                <div class="col-4 my-2 col-form-label font-weight-bold">Status</div>
                                <div class="col-8 my-2">
                                    <select id="modal-status" class="form-control" required>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary col-2" data-dismiss="modal">ปิด</button>
                        <button class="btn blue-btn col-2" type="submit">บันทึก</button>
                    </div>
                    </div>
                </form>
            </div>
            <div class="mb-4"></div>
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {
        const timestamp = Math.round(new Date().getTime() / 1000);
        var batt = []
        var model = []
        var job = []
        var status = []
        var table
        preload()

        async function preload(){

            const get_batt = await projectFirestore.collection("Batteries_beta").where('location_id','==','U1CHpc83zGdhZhudwQ36').get()
            const get_job = await projectFirestore.collection("Projects").where('visible','==',true).get()
            const get_status = await projectFirestore.collection("StatusItemsWarehouse").orderBy("number","asc").get()
            const get_batt_model = await projectFirestore.collection("BatterySpecifications").where('visible','==',true).orderBy("series","asc").get()


            await get_all_data()
            await render()

        

            function get_all_data(){
                get_batt.forEach((battdata)=>{
                    batt.push({id:battdata.id,data:battdata.data()})
                })

                get_job.forEach((jobdata)=>{
                    job.push({id:jobdata.id,data:jobdata.data()})
                })

                get_status.forEach((statusdata)=>{
                    status.push({id:statusdata.id,data:statusdata.data()})
                })

                get_batt_model.forEach((batt_model_data)=>{
                    model.push({id:batt_model_data.id,data:batt_model_data.data()})
                })

            }

            
            

        }


        async function render(){


            await render_data()
                
            function render_data(){
                $('#data').html('')
                $('#model').html('<option value="" >ทั้งหมด</option>')
                $('#status').html('<option value="" >ทั้งหมด</option>')
                var running_number = 1
                for(let i = 0; i < batt.length; i++){
                    const job_data = job.find(x => x.id === batt[i].data.jobId);
                    $('#data').append(
                        '<tr>'+
                            '<td class="text-center">'+running_number+'</td>'+
                            '<td class="text-center">'+job_data.data.JobNoFirst+'/'+job_data.data.JobNoSecond+'</td>'+
                            '<td class="text-center">'+batt[i].data.history[batt[i].data.history.length - 1].building+'</td>'+
                            '<td class="text-center">'+batt[i].data.history[batt[i].data.history.length - 1].room+'</td>'+
                            '<td class="text-center">'+batt[i].data.barcode+'</td>'+
                            '<td class="text-center">'+batt[i].data.series+'</td>'+
                            '<td class="text-center">'+batt[i].data.history[batt[i].data.history.length - 1].status+'</td>'+
                            '<td class="text-center"><input type="checkbox" class="check-item" value="'+batt[i].id+'" style="width:15px;height:15px" /></td>'+
                        '</tr>'
                    )
                    running_number++
                    if(i+1 == batt.length){
                        data_table()
                    }

                }

                for(let i = 0; i < model.length; i++ ){
                    $('#model').append(
                        '<option value="'+model[i].data.series+'">'+model[i].data.series+'</option>'
                    )
                }

                for(let i = 0; i < status.length; i++){
                    $('#status').append(
                        '<option value="'+status[i].data.name+'">'+status[i].data.name+'</option>'
                    )
                }

            }

            function data_table(){
                table = $('#table_main').DataTable({
                    "searching": true,
                    "ordering": false,
                    "pageLength": 10,
                    "info":false,
                    "lengthChange": false
                })
                
                

            }


            
        }

        $('#check_all').on('change',function(){
            if($(this).is(':checked')){
                $('.check-item').prop('checked', true);
            }
            else{
                $('.check-item').prop('checked', false);
            }
        })


        $('#status-btn').on('click',function(){
            $('#modal-job').html('<option disabled selected value="">เลือก Job No</option>')
            $('#modal-status').html('<option disabled selected value="">เลือก Status</option>')

            for(let i = 0; i < job.length; i++){
                $('#modal-job').append(
                    '<option value="'+job[i].id+'">'+job[i].data.JobNoFirst+'/'+job[i].data.JobNoSecond+' : '+job[i].data.ProjectName+'</option>'
                )
            }

            for(let i = 0; i < status.length; i++){
                $('#modal-status').append(
                    '<option value="'+status[i].data.name+'">'+status[i].data.name+'</option>'
                )
            }
        })

        
        const status_form = document.querySelector('#status_form');
        status_form.addEventListener('submit', async function(e){
            e.preventDefault();

            const save_status =  $('#modal-status').val()
            const save_job =  $('#modal-job').val()
            const save_location =  $('#modal-location').val()
            var batt_arr = []

            await get_all_check()
            await save()
            

            function get_all_check(){
                $('.check-item').each(function () {
                    if($(this).is(":checked")){
                        batt_arr.push($(this).val())
                    }
                })
            }
            function save(){
                for(let i = 0; i < batt_arr.length; i++){
                    var history_data = batt.find(x => x.id === batt_arr[i]).data.history;

                    history_data.push({
                        building:save_location,
                        room:'Zone A',
                        system:"",
                        status:save_status,
                        timestamp:timestamp
                    })

                    projectFirestore.collection('Batteries_beta').doc(batt_arr[i]).update({
                        history:history_data,
                        status:save_status
                    }).then(()=>{
                        if(i+1 == batt_arr.length){
                            location.reload()
                        }
                    })


                }
                
            }



        })
        
        

        $('#search_job').keyup(function(){
            table.columns( 1 ).search( this.value ).draw();

        })

        $('#location').change(function(){
            table.columns( 2 ).search( this.value ).draw();
        })

        $('#search_barcode').keyup(function(){
            table.columns( 4 ).search( this.value ).draw();

        })

        $('#model').change(function(){
            table.columns( 5 ).search( this.value ).draw();
        })

        $('#status').change(function(){
            table.columns( 6 ).search( this.value ).draw();
        })


    }
}
</script>