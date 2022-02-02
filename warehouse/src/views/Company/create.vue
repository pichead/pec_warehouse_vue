<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">สร้าง Contact Company</div>
                <div class="border mt-5 p-5 bg-white">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Company Name</label >
                                <div class="col-8">
                                    <input id="CompanyName" class="form-control" type="text" placeholder="" required/>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">E-mail</label >
                                <div class="col-8">
                                    <input id="CompanyEmail" class="form-control" type="text" placeholder="" required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Tel</label >
                                <div class="col-8">
                                    <input id="Tel" class="form-control" type="tel" placeholder="" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="h3 mt-5 font-weight-bold">Origin</div>
                        <table class="table">
                            <colgroup>
                                <col span="1" style="width: 70%;">
                                <col span="1" style="width: 30%;">
                            </colgroup>
                            <thead class="bg-primary text-white text-center">
                                <tr>
                                    <th>Origin</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="origin-contact">
                                <tr  class="bg-white">
                                    <td><input class="form-control form-control-sm origin" placeholder="Origin" /></td>
                                    <td></td>

                                </tr>
                                <tr id="origin-addmore">
                                    <td colspan="4"  class="bg-success text-center text-white">
                                        เพิ่ม
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-8">
                        <div class="h3 mt-5 font-weight-bold">Contact</div>
                        <table class="table">
                            <colgroup>
                                <col span="1" style="width: 45%;">
                                <col span="1" style="width: 40%;">
                                <col span="1" style="width: 15%;">  


                            </colgroup>
                            <thead class="thead-dark text-center">
                                <tr>
                                    <th>E-mail</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="contact">
                                <tr  class="bg-white">
                                    <td><input class="form-control form-control-sm email" placeholder="E-mail" /></td>
                                    <td><input class="form-control form-control-sm name" placeholder="Name" /></td>
                                    <td></td>

                                </tr>
                                <tr id="addmore" >
                                    <td colspan="4"  class="bg-success text-center text-white">
                                        เพิ่ม
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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



        var no = 1
        $('#addmore').on('click', function(){
            no = no+1
            $(this).before(
                '<tr id="row-'+no+'" class="bg-white">'+
                    '<td>'+
                        '<input class="form-control form-control-sm email" type="email"  placeholder="E-mail" required/>'+
                    '</td>'+
                    '<td>'+
                        '<input class="form-control form-control-sm name" type="text"  placeholder="Name"  required/>'+
                    '</td>'+
                    '<td>'+
                        '<button class="btn col btn-danger del-row py-1" data-row="'+no+'" type="button">ลบ</button>'+
                    '</td>'+
                '</tr>'
            )

        })

        $('#contact').on('click','.del-row', function(){
            const del_row = $(this).data('row')
            $("#row-"+del_row).remove()


        })
        
        var origin_no = 1
        $('#origin-addmore').on('click', function(){
            origin_no = origin_no+1
            $(this).before(
                '<tr id="origin-row-'+origin_no+'" class="bg-white">'+
                    '<td>'+
                        '<input class="form-control form-control-sm origin" type="text"  placeholder="origin" required/>'+
                    '</td>'+

                    '<td>'+
                        '<button class="btn col btn-danger del-row py-1" data-row="'+origin_no+'" type="button">ลบ</button>'+
                    '</td>'+
                '</tr>'
            )

        })

        $('#origin-contact').on('click','.del-row', function(){
            const origin_del_row = $(this).data('row')
            $("#origin-row-"+origin_del_row).remove()
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