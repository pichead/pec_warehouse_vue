<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
            <div class="h3 mt-5 font-weight-bold">BATTERY SPECIFICATION</div>
            <div class="row mt-5 mb-4 font-weight-bold">
                <div class="col-lg-6 mb-3">
                        <div class="border p-4 rounded h-100 bg-white">
                            <div class="form-group row">
                                <label class="col-6 col-form-label">BATTERY MODEL</label >
                                <div class="col-6">
                                    <input id="BatteryModel" class="form-control" style="background: #f4f4f4;" value="" required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">BATTERY BRAND</label >
                                <div class="col-6">
                                    <input id="BatteryBrand" class="form-control" style="background: #f4f4f4;" value="" required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">BATTERY TYPE</label >
                                <div class="col-6">
                                    <input id="BatteryType" class="form-control" style="background: #f4f4f4;" value="" required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">CELLS PER BLK</label >
                                <div class="col-6">
                                    <input id="CellPerBlk" class="form-control" style="background: #f4f4f4;" value="" type="number"/>
                                </div>
      
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">CAPACITY</label >
                                <div class="col-5">
                                    <input id="Cap" class="form-control" style="background: #f4f4f4;" value="" type="number"/>
                                </div>
                                <label class="col-1 col-form-label pl-0">Ah</label >
                            </div>
                            <!-- <div class="form-group row">
                                <label class="col-6 col-form-label">CAPACITY HOUR 1</label >
                                <div class="col-6">
                                    <input id="CapH1" class="form-control" style="background: #f4f4f4;" value=""/>
                                </div>
                            </div> -->
                            <div class="form-group row">
                                <label class="col-6 col-form-label">END VOLTAGE</label >
                                <div class="col-5">
                                    <input id="EndV" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                                </div>
                                <label class="col-1 col-form-label pl-0">V</label >
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">AMBIENT TEMP MAX</label >
                                <div class="col-5">
                                    <input id="ambtempmax" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                                </div>
                                <label class="col-1 col-form-label pl-0">°C</label >
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">AMBIENT TEMP MIN</label >
                                <div class="col-5">
                                    <input id="ambtempmin" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                                </div>
                                <label class="col-1 col-form-label pl-0">°C</label >

                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">BATTERY TEMP MAX</label >
                                <div class="col-5">
                                    <input id="batttempmax" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                                </div>
                                <label class="col-1 col-form-label pl-0">°C</label >
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">BATTERY TEMP MIN</label >
                                <div class="col-5">
                                    <input id="batttempmin" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                                </div>
                                <label class="col-1 col-form-label pl-0">°C</label >
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">CONDUCTANCE DEVICE</label >
                                <div class="col-6">
                                    <input id="condev" class="form-control" style="background: #f4f4f4;" value="" type="text"/>
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <label class="col-6 col-form-label">RESISTANCE DEVICE</label >
                                <div class="col-6">
                                    <input id="resdev" class="form-control" style="background: #f4f4f4;" value="" type="text"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                <div class="col-lg-6 mb-3" >
                    <div class="border p-4 rounded bg-white" >
                        <div class="form-group row">
                            <label class="col-6 col-form-label">FLOAT VOLTAGE</label >
                            <div class="col-5">
                                <input id="FloatV" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">V</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">HIGH FLOAT URGENT</label >
                            <div class="col-5">
                                <input id="HighFloatUrg" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">V</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">HIGH FLOAT WARNING</label >
                            <div class="col-5">
                                <input id="HighFloatWar" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">V</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">LOW FLOAT URGENT</label >
                            <div class="col-5">
                                <input id="LowFloatUrg" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">V</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">LOW FLOAT WARNING</label >
                            <div class="col-5">
                                <input id="LowFloatWar" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">V</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">REF CONDUCTANCE</label >
                            <div class="col-5">
                                <input id="RefCon" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">S</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">CONDUCTANCE WARNING</label >
                            <div class="col-5">
                                <input id="LowConWar" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">S</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">CONDUCTANCE FAIL</label >
                            <div class="col-5">
                                <input id="LowCon" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">S</label >
                        </div>
                        
                        <div class="form-group row">
                            <label class="col-6 col-form-label">REF RESISTANCE</label >
                            <div class="col-4">
                                <input id="RefResis" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-2 col-form-label pl-0">mOhm</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">RESISTANCE WARNING</label >
                            <div class="col-4">
                                <input id="ResisAvg" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-2 col-form-label pl-0">mOhm</label >
                        </div>
                        <div class="form-group row">
                            <label class="col-6 col-form-label">RESISTANCE FAIL</label >
                            <div class="col-4">
                                <input id="ResisGood" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-2 col-form-label pl-0">mOhm</label >
                        </div>
                        
                        <!-- <div class="form-group row">
                            <label class="col-6 col-form-label">RESISTANCE FAIR</label >
                            <div class="col-5">
                                <input id="ResisFair" class="form-control" style="background: #f4f4f4;" value="" type="number" step="0.01"/>
                            </div>
                            <label class="col-1 col-form-label pl-0">mOhm</label >
                        </div> -->
                        <!-- <div class="form-group row">
                            <label class="col-6 col-form-label">RESISTANCE POOR</label >
                            <div class="col-6">
                                <input id="ResisPoor" class="form-control" style="background: #f4f4f4;" value=""/>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            </div>
            <div class="d-flex justify-content-center row-hl my-5">
                <button class="btn btn-primary p-1 col-1 ml-1" type="submit">บันทึก</button>
                <button class="btn btn-danger p-1 col-1 ml-1">ยกเลิก</button>
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
        var dataid = id

        projectFirestore.collection('BatterySpecifications').doc(dataid).get().then( specdata =>{

            $('#BatteryModel').val(specdata.data().series)
            $('#BatteryBrand').val(specdata.data().brand)
            $('#BatteryType').val(specdata.data().type)
            $('#CellPerBlk').val(specdata.data().cellsperblk)
            $('#Cap').val(specdata.data().capacity)
            // $('#CapH1').val()
            $('#EndV').val(specdata.data().endVoltage)
            $('#ambtempmax').val(specdata.data().ambientTempMax)
            $('#ambtempmin').val(specdata.data().ambientTempMin)
            $('#batttempmax').val(specdata.data().batteryTempMax)
            $('#batttempmin').val(specdata.data().batteryTempMin)
            $('#condev').val(specdata.data().gDevice)
            $('#resdev').val(specdata.data().rDevice)
            $('#FloatV').val(specdata.data().refFloatVoltage)
            $('#HighFloatUrg').val(specdata.data().floatHiUrgent)
            $('#HighFloatWar').val(specdata.data().floatHiWarning)
            $('#LowFloatUrg').val(specdata.data().floatLoUrgent)
            $('#LowFloatWar').val(specdata.data().floatLoWarning)
            $('#RefCon').val(specdata.data().refG)
            $('#LowCon').val(specdata.data().refGLow)
            $('#LowConUrg').val()
            $('#LowConWar').val(specdata.data().refGWarning)
            $('#RefResis').val(specdata.data().refR)
            $('#ResisGood').val(specdata.data().refRGood)
            $('#ResisAvg').val(specdata.data().refRAVG)
            // $('#ResisFair').val(specdata.data().refRFair)
            $('#ResisPoor').val()

        })


        const addform = document.querySelector('#addform');
        addform.addEventListener('submit',(e)=>{
                        
            e.preventDefault();
            console.log('save')
            projectFirestore.collection('BatterySpecifications').doc(dataid).update({
            series:$('#BatteryModel').val(),
            brand:$('#BatteryBrand').val(),
            type:$('#BatteryType').val(),
            cellsperblk:$('#CellPerBlk').val(),
            capacity:$('#Cap').val(),
            endVoltage:$('#EndV').val(),
            ambientTempMax:$('#ambtempmax').val(),
            ambientTempMin:$('#ambtempmin').val(),
            batteryTempMax:$('#batttempmax').val(),
            batteryTempMin:$('#batttempmin').val(),
            gDevice:$('#condev').val(),
            rDevice:$('#resdev').val(),
            refFloatVoltage:$('#FloatV').val(),
            floatHiUrgent:$('#HighFloatUrg').val(),
            floatHiWarning:$('#HighFloatWar').val(),
            floatLoUrgent:$('#LowFloatUrg').val(),
            floatLoWarning:$('#LowFloatWar').val(),
            refG:$('#RefCon').val(),
            refGLow:$('#LowCon').val(),
            // $('#LowConUrg').val()
            refGWarning:$('#LowConWar').val(),
            refR:$('#RefResis').val(),
            refRGood:$('#ResisGood').val(),
            refRAVG:$('#ResisAvg').val(),
            refRFair:$('#ResisFair').val(),
            visible:true
            // $('#ResisPoor').val()
            }).then(()=>{
                console.log('pass')
                router.push({ 
                    name: 'BatteryIndex',
                    params: { mserror: true} 

                })
            })

        })
        
    },
}
</script>