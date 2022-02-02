<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">ลงทะเบียน PEC PO</div>
                <div class="border mt-5 mb-2 p-5 bg-white">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Company</label >
                                <div class="col-8">
                                    <select id="company" class="form-control  series-option"  required>
                                        <option selected disabled>choose company</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Term of payment</label >
                                <div class="col-4">
                                    <input id="Tpayment" class="form-control" type="number" required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">PEC PO</label >
                                <div class="col">
                                    <input id="pecpono" class="form-control pecpo" placeholder="000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="3" maxlength="3" required/>
                                </div>
                                <div class="col-1 h2">/</div>
                                <div class="col">
                                    <input id="pecpoyear" class="form-control pecpo" placeholder="0000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="4" maxlength="4" required/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Delivery date</label >
                                <div class="col-4">
                                    <input id="delivery_date" class="form-control" type="number" required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                                
                            </div>
                        </div>
     
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control" rows="3" placeholder="note..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border col-12 my-3 p-3">
                    <div class="row">
                        <div class="col-4">
                            <div class="row">
                                <div class="col-5 col-form-label">Origin</div>
                                <input id="con_origin" class="col mr-5 form-control" value="" readonly>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-5 col-form-label">Warranty</div>
                                <input id="con_warranty" class="col mr-5 form-control" value="" readonly>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-5 col-form-label">Delivery Date</div>
                                <input id="con_delivery" class="col mr-5 form-control" value="" readonly>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border my-2">
                    <div class="col-12 bg-dark text-white font-weight-bold text-center">
                        <div class="row py-3">
                            <div class="col-2">Project</div>
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-2">OrderSheet</div>
                                    <div class="col-4">Description</div>
                                    <div class="col">Qty.</div>
                                    <div class="col">Price(US$)</div>
                                    <div class="col-2 px-0">AmountPrice(US$)</div>
                                    <div class="col-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="data">

                        <div id="mainrow-0" class="col-12">
                            <div class="row">
                                <div class="col-2 py-3 border">
                                    <select id="project-0" class="form-select col px-0 project" data-pa="0">
                                    </select>
                                    <div class="col-10 mx-auto mt-3">
                                    </div>
                                </div>
                                <div id="ordersheetrow-0" class="col-10">
                                    <div id="row-0-0" class="row">
                                        <div class="col-2 py-3 border">
                                            <select id="project-0-0" class="form-select col px-0 child child-0" data-pa="0" data-child="0">
                                                <option selected disabled>OrderSheet</option>
                                            </select>
                                        </div>
                                        <div id="des-0-0" class="col-4 py-3 border"></div>
                                        <div id="amount-0-0" class="col py-3 border text-right"></div>
                                        <div id="unitprice-0-0" class="col py-3 border"></div>
                                        <div id="amountprice-0-0" class="col-2 py-3 border text-right"></div>
                                        <div class="col-1 py-3 border">
                                        </div>                                         
                                    </div>
                                    
                                    <div id="btn-add-ordersheet-0" class="col-12 p-0 ">
                                        <div class="row">
                                            <button class="btn btn-info col btn-add-ordersheet" value="0" data-pa="0" type="button">Add OrderSheet</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col-12">
                        <div class="row">
                            <button id="addproject" class="btn btn-success col" value="0" type="button">Add Project</button>
                        </div>
                    </div>
                    <div id="footer">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-2 border  py-3 text-center font-weight-bold">
                                    Shipping
                                </div>
                                <div class="col-10 border">
                                    <div class="row">
                                        <div class="col-6 py-3 border">
                                            <div class="col-12">
                                                <div class="row">
                                                    <input id="shippingdata" class="h-100 col-7" type="text" placeholder="shipping"/>
                                                    <div class="col-2">price</div>
                                                    <input id="shippingprice" class="col-3" type="number" placeholder="price"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-3 py-3 border text-center font-weight-bold">Total</div>

                                        <div id="pototalprice" class="col-3 py-3 border text-right"></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>

                <div class="d-flex justify-content-center row-hl my-5">
                    <a class="btn btn-secondary col-2 mr-2" type="button" href="/Battery/pecpoList">กลับ</a>
                    <button class="btn btn-danger  col-2 " type="submit">บันทึก</button>

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
        
        var project
        var con_origin = ""
        var con_warranty = ""
        var con_delivery = ""
        
        $('#project-0').on('change',async function(){
            await reset_table()
            $('#con_origin').val("")
            $('#con_warranty').val("")
            $('#con_delivery').val("")
            $('#des-0-0').html("")
            $('#amount-0-0').html("")
            $('#unitprice-0-0').html("")
            $('#amountprice-0-0').html("")
            con_origin = ""
            con_warranty = ""
            con_delivery = ""
        })


        $('#project-0-0').on('change',async function(){
            const order_con = $(this)
            const order_con_origin = order_con.find('option:selected').data('origin')
            const order_con_warranty = order_con.find('option:selected').data('warranty')
            const order_con_delivery = order_con.find('option:selected').data('delivery')
            var cdate = new Date(order_con_delivery);
            var cday = cdate.getDate();
            var cmonth = cdate.getMonth() + 1;
            var cyear = cdate.getFullYear();
                if (cday < 10) {
                    cday = "0" + cday;
                }
                if (cmonth < 10) {
                    cmonth = "0" + cmonth;
                }
                var new_cdate = cday + "-" + cmonth + "-" + cyear;
            $('.del-'+order_con.data('pa')).remove() 

            await set_con()
            await set_text()
            await reset_table()

            function set_con(){
                con_origin = order_con_origin
                con_warranty = order_con_warranty
                con_delivery = order_con_delivery
            }

            function set_text(){
                $('#con_origin').val(order_con_origin)
                $('#con_warranty').val(order_con_warranty+' Month')
                $('#con_delivery').val(new_cdate)
            }

        })

        function reset_table(){
            $('.reset-project').remove()
        }

        
        projectFirestore.collection("Projects").where('visible','==',true).get().then((project_data)=>{
            project = project_data
            $('#project-0').html('')
            $('#project-0').append(
                '<option selected disabled>Choose Project</option>'
            )
            project.forEach((projectdata)=>{
                $('#project-0').append(
                    '<option value="'+projectdata.id+'">JobNo:'+projectdata.data().JobNoFirst+'/'+projectdata.data().JobNoSecond+'&nbsp&nbsp&nbsp'+projectdata.data().ProjectName+'&nbsp</option>'
                )
            })

        })

        projectFirestore.collection("ContactCompany").where('visible','==',true).get().then((compdata)=>{
            compdata.forEach((data)=>{
                $('#company').append(
                    '<option value="'+data.id+'">'+data.data().CompanyName+'</option>'
                )
            })

        })

        $('#data').on('change','.project',async function(){
            const project_select_id = $(this).find('option:selected').val()
            const project_select_pa = $(this).data('pa')
            const project_select_data = await projectFirestore.collection("Projects").doc(project_select_id).get()
            await render_ordersheet_select_project()
            function render_ordersheet_select_project(){
                $('.child-'+project_select_pa).html('<option selected disabled>OrderSheet</option>')
                for(let i = 0; i < project_select_data.data().orderSheet.length;i++){
                    if(project_select_data.data().orderSheet[i].po == false){                        
                        $('.child-'+project_select_pa).append('<option  data-id="'+project_select_id+'" value="'+project_select_data.data().orderSheet[i].no+'" data-origin="'+project_select_data.data().orderSheet[i].battery[0].origin+'" data-warranty="'+project_select_data.data().orderSheet[i].battery[0].warranty+'" data-delivery="'+project_select_data.data().orderSheet[i].battery[0].deliverydate+'">'+project_select_data.data().JobNoFirst+'/'+project_select_data.data().JobNoSecond+'/'+project_select_data.data().orderSheet[i].no+'</option>')
                    }
                }
                $('.del-'+project_select_pa).remove()   
            }
        })

        $('#data').on('change','.child',async function(){
            const OrderSheet_select = $(this).find('option:selected').val()
            const OrderSheet_select_pa = $(this).data('pa')
            const OrderSheet_select_child = $(this).data('child')
            const project_ordersheet_select_id = $(this).find('option:selected').data('id')
            const project_ordersheet_select_data = await projectFirestore.collection("Projects").doc(project_ordersheet_select_id).get()
            await clear_data_row()
            await render_data_row()
            function clear_data_row(){
                $("#des-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).html('')
                $("#amount-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).html('')
                $("#unitprice-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).html('')
                $("#amountprice-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).html('')
            }

            async function render_data_row(){
                for(let i = 0; i < project_ordersheet_select_data.data().orderSheet.length;i++){
                    if(project_ordersheet_select_data.data().orderSheet[i].no == OrderSheet_select){

                        for(let j = 0; j < project_ordersheet_select_data.data().orderSheet[i].battery.length; j++){


                            $("#des-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).append(
                                '<div class="col-12 my-2 px-0 d-flex">'+project_ordersheet_select_data.data().orderSheet[i].battery[j].series+'</div>'
                            )
                            $("#amount-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).append(
                                '<div id="amountrow-'+OrderSheet_select_pa+'-'+OrderSheet_select_child+'-'+project_ordersheet_select_data.data().orderSheet[i].battery[j].no+'" class="col-12 my-2 d-flex">'+project_ordersheet_select_data.data().orderSheet[i].battery[j].order_amount+'</div>'
                            )
                            $("#unitprice-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).append(
                                '<div class="col-12 my-2 p-0" style="height:24px;">'+
                                '<input class="col-12 p-0 batt-price d-flex" data-pa="'+OrderSheet_select_pa+'" data-child="'+OrderSheet_select_child+'" data-batt="'+project_ordersheet_select_data.data().orderSheet[i].battery[j].no+'" data-ordersheet="'+project_ordersheet_select_data.data().orderSheet[i].no+'"  data-project="'+project_ordersheet_select_id+'" style="height:24px;" placeholder="price" value="0" type="number" require />'+
                                '</div>'
                            )
                            $("#amountprice-"+OrderSheet_select_pa+"-"+OrderSheet_select_child).append(
                                '<div id="amountprice-'+OrderSheet_select_pa+'-'+OrderSheet_select_child+'-'+project_ordersheet_select_data.data().orderSheet[i].battery[j].no+'" class="col-12 my-2 price d-flex">0</div>'
                            )
                        }
                        
                    }
                }
            }

        })

        $('#data').on('change','.batt-price',async function(){
            const batt_unit_price = parseFloat($(this).val())
            const batt_unit_price_pa = $(this).data('pa')
            const batt_unit_price_child = $(this).data('child')
            const batt_unit_price_batt = $(this).data('batt')
            const amount_unit_row = parseInt($('#amountrow-'+batt_unit_price_pa+'-'+batt_unit_price_child+'-'+batt_unit_price_batt).text())
            $('#amountprice-'+batt_unit_price_pa+'-'+batt_unit_price_child+'-'+batt_unit_price_batt).text(batt_unit_price*amount_unit_row)
            totalprice()
        })

        $('#data').on('click','.btn-add-ordersheet',async function(){
            const add_pa = $(this).data('pa')
            const add_no = $(this).val()
            const add_project_id = $('#project-'+add_pa).find('option:selected').val()
            const add_project_data = await projectFirestore.collection("Projects").doc(add_project_id).get()
            console.log(add_no)
            await pre_ordersheet_row()
            await addnewval($(this))
            await render_ordersheet_row()
            

            function pre_ordersheet_row(){
                $('#btn-add-ordersheet-'+add_pa).before(
                    '<div id="row-'+add_pa+'-'+String(parseInt(add_no)+1)+'" class="row del-'+add_pa+'">'+
                        '<div class="col-2 py-3 border">'+
                            '<select id="project-'+add_pa+'-'+String(parseInt(add_no)+1)+'" class="form-select col px-0 child child-'+add_pa+'" data-pa="'+add_pa+'" data-child="'+String(parseInt(add_no)+1)+'">'+
                                '<option selected disabled>OrderSheet</option>'+
                            '</select>'+
                        '</div>'+
                        '<div id="des-'+add_pa+'-'+String(parseInt(add_no)+1)+'" class="col-4 py-3 border"></div>'+
                        '<div id="amount-'+add_pa+'-'+String(parseInt(add_no)+1)+'" class="col py-3 border text-right"></div>'+
                        '<div id="unitprice-'+add_pa+'-'+String(parseInt(add_no)+1)+'" class="col py-3 border"></div>'+
                        '<div id="amountprice-'+add_pa+'-'+String(parseInt(add_no)+1)+'" class="col-2 py-3 border text-right"></div>'+
                        '<div class="col-1 py-3 border">'+
                            '<button class="btn btn-danger col p-0 del-child-row" data-pa="'+add_pa+'" data-child="'+String(parseInt(add_no)+1)+'" type="button">X</button>'+
                        '</div>'+
                    '</div>'
                )
                
            }

            function render_ordersheet_row(){

                // $('#project-'+add_pa+'-'+String(parseInt(add_no)+1)).html('<option selected disabled>OrderSheet</option>')
                for(let i = 0; i < add_project_data.data().orderSheet.length;i++){
                    if(add_project_data.data().orderSheet[i].po == false){                        
                        $('#project-'+add_pa+'-'+String(parseInt(add_no)+1)).append('<option  data-id="'+add_project_id+'" value="'+add_project_data.data().orderSheet[i].no+'">'+add_project_data.data().JobNoFirst+'/'+add_project_data.data().JobNoSecond+'/'+add_project_data.data().orderSheet[i].no+'</option>')
                    }
                }  
            }

            function addnewval(addbtn){
                const newval  = parseInt(add_no)+1
                addbtn.val(newval)
            }
            
        })
        
        $('#data').on('click','.del-child-row',async function(){
            const delrowpa = $(this).data('pa')
            const delrowchild = $(this).data('child')
            $('#row-'+delrowpa+'-'+delrowchild).remove()
        })
        
        $('#addproject').on('click',async function(){
            const addbtnval = $(this).val()
            const newbtnval  = parseInt(addbtnval)+1
            await add_new_project_row()
            await render_new_project_row_data($(this))


            function add_new_project_row(){
                $('#data').append(
                    '<div id="mainrow-'+String(parseInt(addbtnval)+1)+'" class="col-12 reset-project">'+
                                '<div class="row">'+
                                    '<div class="col-2 py-3 border">'+
                                        '<select id="project-'+String(parseInt(addbtnval)+1)+'" class="form-select col px-0 project" data-pa="'+String(parseInt(addbtnval)+1)+'">'+
                                        '</select>'+
                                        '<div class="col-10 mx-auto mt-3">'+
                                            '<div class="row">'+
                                                '<button class="btn btn-danger col btn-del-project" data-row="'+(parseInt(addbtnval)+1)+'" type="button">Remove</button>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div id="ordersheetrow-'+String(parseInt(addbtnval)+1)+'" class="col-10">'+
                                        '<div id="row-'+String(parseInt(addbtnval)+1)+'-0" class="row">'+
                                            '<div class="col-2 py-3 border">'+
                                                '<select id="project-'+String(parseInt(addbtnval)+1)+'-0" class="form-select col px-0 child child-'+String(parseInt(addbtnval)+1)+'" data-pa="'+String(parseInt(addbtnval)+1)+'" data-child="0">'+
                                                    '<option selected disabled>OrderSheet</option>'+
                                                '</select>'+
                                            '</div>'+
                                            '<div id="des-'+String(parseInt(addbtnval)+1)+'-0" class="col-4 py-3 border"></div>'+
                                            '<div id="amount-'+String(parseInt(addbtnval)+1)+'-0" class="col py-3 border text-right"></div>'+
                                            '<div id="unitprice-'+String(parseInt(addbtnval)+1)+'-0" class="col py-3 border"></div>'+
                                            '<div id="amountprice-'+String(parseInt(addbtnval)+1)+'-0" class="col-2 py-3 border text-right">'+
                                            '</div>'+
                                            '<div class="col-1 py-3 border">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div id="btn-add-ordersheet-'+String(parseInt(addbtnval)+1)+'" class="col-12 p-0 ">'+
                                            '<div class="row">'+
                                                '<button class="btn btn-info col btn-add-ordersheet" value="0" data-pa="'+String(parseInt(addbtnval)+1)+'" type="button">Add OrderSheet</button>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                )
            }


            function render_new_project_row_data(addbtn){
                
                $('#project-'+newbtnval).html('')
                $('#project-'+newbtnval).append(
                    '<option selected disabled>Choose Project</option>'
                )
                project.forEach((projectdata)=>{
                    $('#project-'+newbtnval).append(
                        '<option value="'+projectdata.id+'">JobNo:'+projectdata.data().JobNoFirst+'/'+projectdata.data().JobNoSecond+'&nbsp&nbsp&nbsp'+projectdata.data().ProjectName+'&nbsp</option>'
                    )
                })
                addbtn.val(newbtnval)
            }



        })
        
        $('#data').on('click','.btn-del-project',async function(){
            const projec_del_row = $(this).data('row')
            $('#mainrow-'+projec_del_row).remove()
        })

        $('#shippingprice').on('change',function(){
            totalprice()
        })
        
        async function totalprice(){
            var totalprice = 0
            await sumprice()    
            await sumshippingprice()    
            await rendertotalprice()


            function sumprice(){
                $('.price').each(function() {
                    totalprice = totalprice + parseFloat($(this).text())
                });
            }

            function sumshippingprice(){
                const shippingprice = $('#shippingprice').val()
                if(shippingprice){
                    totalprice = totalprice + parseFloat(shippingprice)
                }
            }

            function rendertotalprice(){
                $('#pototalprice').html(totalprice+' $')
            }
            
        }



        const addform = document.querySelector('#addform');
        addform.addEventListener('submit', async function(e){
            e.preventDefault();
            const pecpono = $('#pecpono').val()
            const pecpoyear = $('#pecpoyear').val()
            const company = $('#company').find('option:selected').val()
            const tpayment = $('#Tpayment').val()
            const delivery_date = $('#delivery_date').val()
            const comment = $('#comment').val()
            const project_count = $('.project').length
            const battprice_count = $('.batt-price').length
            const shipping_name = $('#shippingdata').val()
            const shipping_price = $('#shippingprice').val()

            var projectlist =  []
            var battorder =  []
            // console.log(battprice_count)
            await getbattorder()
            await savedata()
            // await getproject()
            // await getordersheet()
            
            function getbattorder(){
                const batt = $('.batt-price')
                for(let i = 0; i < battprice_count; i++){
                    const project_id = $(batt[i]).data('project')
                    const ordersheet_no = $(batt[i]).data('ordersheet')
                    const batt_no = $(batt[i]).data('batt')
                    const batt_unit_price = $(batt[i]).val()
                    const battdata = {project_id:project_id,orderSheet:ordersheet_no,batt_no:batt_no,batt_unit_price:batt_unit_price}
                    battorder.push(battdata)
                }
            }

            function savedata(){
                var timestamp = Math.round(new Date().getTime() / 1000);
                projectFirestore.collection('Po').add({
                    pecpo_no:pecpono,
                    pecpo_year:pecpoyear,
                    company:company,
                    tpayment:tpayment,
                    delivery:delivery_date,
                    comment:comment,
                    battorder:battorder,
                    shippingname:shipping_name,
                    shippingprice:shipping_price,
                    createdate:timestamp,
                    visible:true

                }).then(()=>{
                    router.push({ 
                        name: 'PECpoList',
                        params: { mserror: true} 
                    })
                })


            }

            function getproject(){
                for(let i = 0; i < project_count; i++){
                    const projectdata  = $('.project')[i]
                    const projectselect = $(projectdata).find('option:selected').val()
                    const projectpa = $(projectdata).data('pa')
                    projectlist.push({projectid:projectselect,pa:projectpa})

                }
            }

            function getordersheet(){
                console.log('projectlist : ',projectlist)

                for(let i = 0; i  < projectlist.length; i++){
                    const ordersheetcount = $('.child-'+projectlist[i].pa).length
                    console.log(ordersheetcount)
                    for(let j = 0; j < ordersheetcount; j++){
                        const ordersheetselect = $('.child-'+projectlist[i].pa)
                        const ordersheetchild = $(ordersheetselect).data('child')
                    }
                }


            }




        })

    }
}
</script>