<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">สร้าง Project</div>
                <div class="border my-5 p-5 bg-white">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Project Name</label >
                                <div class="col-8">
                                    <input id="ProjectName" class="form-control" type="text" placeholder="Name" required/>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Job No.</label >
                                <div class="col">
                                    <input id="JobNo1" class="form-control" placeholder="00" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="2" maxlength="2" required/>
                                </div>
                                <div class="col-1 h2">/</div>
                                <div class="col">
                                    <input id="JobNo2" class="form-control" placeholder="0000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="4" maxlength="4" required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Start Date</label >
                                <div class="col-8">
                                    <input id="date" type="date" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">End Date</label >
                                <div class="col-8">
                                    <input id="date" type="date" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        

                    </div>
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


        projectFirestore.collection("BatterySpecifications").get().then((series) => {
            $('#series-option-1').append('<option selected disabled>Choose here</option>')
            series.forEach((serie) => {
                $('#series-option-1').append('<option value="'+serie.id+'" data-no="1">'+serie.data().series+'</option>')
            })
        }).then(()=>{
            $('#series-option-1').addClass('selectpicker')
            $('#series-option-1').attr('data-live-search',true)
            $('.selectpicker').selectpicker();
        })

        var no = 1
        $('#addmore').on('click', function(){
            no = no+1
            $(this).before('<div class="col-3 mb-3">'+
                    '<div class="border px-3 py-2  bg-white">'+
                        '<div class="row">'+
                            '<div class="col-10">No.'+no+'</div>'+
                            '<button class="col-2 close" type="button">x</button>'+
                        '</div>'+
                    '</div>'+
                    '<div class="border p-3  bg-white" style="font-size:14px">'+
                        '<div class="form-group row mb-0">'+
                            '<label class="col-5 col-form-label">รุ่น</label >'+
                            '<div class="col-7">'+
                                '<select id="series-option-'+no+'" data-no="'+no+'" class="form-control form-control-sm series-option" style="font-size:14px" required>'+

                                '</select>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group row mb-0">'+
                            '<label class="col-5 col-form-label">ยี่ห้อ</label >'+
                            '<div class="col-7">'+
                                '<input id="company-option-'+no+'" class="form-control form-control-sm" type="text" disabled/>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group row mb-0">'+
                            '<label class="col-5 col-form-label">จำนวน</label >'+
                            '<div class="col-7 form-group row mb-0">'+
                                '<div class="col-10 pr-0">'+
                                    '<input class="form-control form-control-sm blk" data-no="'+no+'" type="number" required>'+
                                '</div>'+
                                '<label class="col-2 col-form-label pr-0" >Blk.</label >'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>')
            projectFirestore.collection("BatterySpecifications").get().then((series) => {
                $('#series-option-'+no+'').append('<option selected disabled>Choose here</option>')
                series.forEach((serie) => {
                    $('#series-option-'+no+'').append('<option value="'+serie.id+'" data-no="'+no+'">'+serie.data().series+'</option>')
                })
            }).then(()=>{
                $('#series-option-'+no+'').addClass('selectpicker')
                $('#series-option-'+no+'').attr('data-live-search',true)
                $('.selectpicker').selectpicker();
            })
        })

        $('#lots').on('change','.series-option', function(){
            const company_no = $(this).data('no')
            const spec_id = $(this).val()
            projectFirestore.collection("BatterySpecifications").doc(spec_id).get().then((serie) => {
                console.log
                $('#company-option-'+company_no).val(serie.data().brand)
            })
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
                    projectFirestore.collection('Po').add({
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