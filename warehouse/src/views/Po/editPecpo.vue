<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">รายละเอียด PEC PO</div>
                <div class="border my-5 p-5 bg-white">
                    <div class="row">
                        <div class="col-12 form-group clearfix">
                            <div class="float-right">
                                <svg id="edit-data" xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" type="button" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg>
                                <!-- <i class="bi bi-lock-fill" style="height:30px;width:30px"></i>
                                <button id="edit-system" class="btn-sm btn-danger">-</button> -->
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">PEC PO</label >
                                <div class="col-8">
                                    <input id="pono" class="form-control po-data" type="text" disabled required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Date</label >
                                <div class="col-8">
                                    <input id="date" type="date" class="form-control po-data" disabled  required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Name</label >
                                <div class="col-8">
                                    <input id="name" class="form-control po-data" type="text" disabled  required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Company</label >
                                <div class="col-8">
                                    <input id="company" class="form-control  po-data" type="text" disabled  required/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">หมายเหตุ</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control po-data" rows="3"  disabled ></textarea>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
                <div id="lots" class="row">

                </div>

                <div class="d-flex justify-content-center row-hl my-5">
                    <button class="btn btn-danger p-1 col-2 mr-2" type="submit">บันทึก</button>
                    <a class="btn btn-secondary col-2" type="button" href="/Battery/pecpoList">กลับ</a>
                </div>

            </div>
        </form>
    </div>
    
</template>

<script>

import Sidebar from "../../components/Sidebar.vue";
import { projectFirestore, projectAuth } from "../../firebase/config";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        // var productId = this.$route.params.productId
        var poId = id
        projectFirestore.collection("Po").doc(poId).get().then( po =>{
            $('#pono').val(po.data().pec_po)
            $('#name').val(po.data().name)
            $('#date').val(po.data().date)
            $('#company').val(po.data().company)
            $('#comment').val(po.data().comment)
            for(let i = 0;i < po.data().lot.length;i++){
                $('#lots').append('<div class="col-3 mb-3">'+
                    '<div class="border px-3 py-2  bg-white">'+
                        '<div class="row">'+
                            '<div class="col-10">No.'+(i+1)+'</div>'+
                            '<button class="col-2 close" type="button">x</button>'+
                        '</div>'+
                    '</div>'+
                    '<div class="border p-3  bg-white" style="font-size:14px">'+
                        '<div class="form-group row mb-0">'+
                            '<label class="col-5 col-form-label">รุ่น</label >'+
                            '<div class="col-7">'+
                                '<select id="series-option-'+(i+1)+'" size=5 data-no="'+(i+1)+'" class="form-control form-control-sm series-option po-data" style="font-size:14px"   required>'+

                                '</select>'+                           
                            '</div>'+
                        '</div>'+
                        '<div class="form-group row mb-0">'+
                            '<label class="col-5 col-form-label">ยี่ห้อ</label >'+
                            '<div class="col-7">'+
                                '<input id="company-option-'+(i+1)+'" class="form-control form-control-sm " type="text" value="'+po.data().lot[i].companyname+'"  disabled/>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group row mb-0">'+
                            '<label class="col-5 col-form-label">จำนวน</label >'+
                            '<div class="col-7 form-group row mb-0">'+
                                '<div class="col-10 pr-0">'+
                                    '<input class="form-control form-control-sm blk po-data" data-no="'+(i+1)+'" type="number" value="'+po.data().lot[i].blk+'"  disabled  required>'+
                                '</div>'+
                                '<label class="col-2 col-form-label pr-0" >Blk.</label >'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '</div>')
                projectFirestore.collection("BatterySpecifications").get().then((series) => {
                    series.forEach((serie) => {
                        
                            if(po.data().lot[i].seriename == serie.data().series){
                                $('#series-option-'+(i+1)+'').append('<option selected value="'+serie.id+'" data-no="'+(i+1)+'">'+po.data().lot[i].seriename+'</option>')
                            }
                            else{
                                if(serie.data().visible == true){
                                    $('#series-option-'+(i+1)+'').append('<option value="'+serie.id+'" data-no="'+(i+1)+'">'+serie.data().series+'</option>')
                                }
                            }
                        
                        
                    })
                }).then(()=>{
                    $('#series-option-'+(i+1)+'').addClass('selectpicker')
                    $('#series-option-'+(i+1)+'').attr('data-live-search',true)
                    $('.selectpicker').selectpicker();
                    $(".btn-light").attr('disabled',true)
                })
            }
                
        })

        $('#lots').on('change','.series-option', function(){
            const company_no = $(this).data('no')
            const spec_id = $(this).val()
            console.log(company_no)
            console.log(spec_id)

            projectFirestore.collection("BatterySpecifications").doc(spec_id).get().then((serie) => {
                $('#company-option-'+company_no).val(serie.data().brand)
            })
        
        })
                                


        $('#edit-data').on('click',function(){
            $(".btn-light").prop('disabled', function(i, v) { return !v; });
            $(".po-data").prop('disabled', function(i, v) { return !v; });
            $(".series-option").attr('disabled',false)

        })


        const addform = document.querySelector('#addform');
        addform.addEventListener('submit',(e)=>{
            e.preventDefault();
            console.log('save')
            const lotarray = []
            const lotcount = $('.blk').length
            var i = 0
            $('.blk').each(function(){
                const lotno = $(this).data('no')
                const blk = $(this).val();
                const companyname = $('#company-option-'+lotno+'').val();
                const seriesdata = $('#series-option-'+lotno+'').find('option:selected').text();
                const seriesid = $('#series-option-'+lotno+'').find('option:selected').val();
                const lotdata = {serieid: seriesid,blk:blk,seriename:seriesdata,companyname:companyname}
                lotarray.push(lotdata)
                i = i+1
                if( i == lotcount){
                    // console.log(lotarray)
                    projectFirestore.collection('Po').doc(poId).update({
                        lot:lotarray,
                        pec_po:$('#pono').val(),
                        name:$('#name').val(),
                        date:$('#date').val(),
                        company:$('#company').val(),
                        comment:$('#comment').val(),
                        status:"รอการยืนยัน",
                        visible:true,

                    }).then(()=>{
                        router.push({ 
                            name: 'PECpoList',
                            params: { mserror: true} 

                        })
                    })
                }
            });

            
        

        })

    }
}
</script>