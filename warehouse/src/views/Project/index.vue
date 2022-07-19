<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Job No</div>
        <div class="row mt-5 mb-4">
            <div class="col-10">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
            <div class="col-2 pl-0">
                <a class="btn btn-primary col " type="button" href="/Project/Create">สร้าง Job No</a>
            </div>
        </div>


        <table class="table">
            <thead>
                <tr id="head" class="text-center">
                    <th>No.</th>
                    <th>Job No</th>
                    <th>Project Name</th>
                    <th>WH validate</th>
                    <th>Inter validate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="data">
                
            </tbody>
        </table>


        <div class="modal" id="delModal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">ยืนยันการลบ</h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div id="model-del-content" class="modal-body">
                        ยืนยันการลบ Project นี้หรือไม่
                    </div>
                    <div id="modalfooter" class="modal-footer">
                        
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
import { assert } from "console";
export default {
    components: { Sidebar },
    mounted() {

        render()

        async function render(){
            const Projects = await projectFirestore.collection("Projects").orderBy("JobNoFirst","desc").orderBy("JobNoSecond","desc").get()

            var i = 1
            
            $('#data').html('')
            Projects.forEach((Project) => {

                var date = new Date(Project.data().CreateDate*1000);
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year =date.getFullYear();
                if (day < 10) {
                    day = "0" + day;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                var new_date = day + "-" + month + "-" + year;

                if(Project.data().visible == true){
                    var wh_validate = wh()
                    var inter_validate = inter()
                    var edit_btn = edit_valid_check()
                    var del_btn = del_valid_check()


                    function wh(){
                        if(Project.data().wh_validate == false){
                            return '<td class="text-center text-danger">ยังไม่ยืนยัน</td>'
                        }
                        else{
                            return '<td class="text-center text-success">ยืนยัน</td>'
                        }
                    }
                    function inter(){
                        if(Project.data().inter_validate == false){
                            return '<td class="text-center text-danger">ยังไม่ยืนยัน</td>'
                        }
                        else{
                            return '<td class="text-center text-success">ยืนยัน</td>'
                        }
                    }


                    function edit_valid_check(){
                        if(wh_validate == '<td class="text-center text-success">ยืนยัน</td>'){
                            return '<button class="btn btn-warning text-white p-1 col-5 mr-1 edit-valid-btn" value="'+Project.id+'">Edit</button>'
                        }
                        else{
                            return '<button class="btn btn-primary p-1 col-5 mr-1 edit-btn" value="'+Project.id+'">Edit</button>'
                        }
                    }
                    function del_valid_check(){
                        if(wh_validate == '<td class="text-center text-success">ยืนยัน</td>'){
                            return '<button class="btn btn-danger p-1 col-5 ml-1 del-btn" disabled>Remove</button>'
                        }
                        else{
                            return '<button class="btn btn-danger p-1 col-5 ml-1 del-btn" value="'+Project.id+'" data-toggle="modal" data-target="#delModal" >Remove</button>'
                        }
                    }



                    $('#data').append(
                        '<tr>'+
                            '<td class="text-center">'+i+'</td>'+
                            '<td class="text-center">'+Project.data().JobNoFirst+'/'+Project.data().JobNoSecond+'</td>'+
                            '<td class="text-center">'+Project.data().ProjectName+'</td>'+
                            wh_validate+
                            inter_validate+
                            '<td>'+
                                edit_btn+
                                del_btn+
                            '</td>'+
                        '</tr>'
                    )
                    i++
                }
                
            })

        }


        $("#data").on("click", ".edit-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(jobId) {
            router.push({ path: `/Project/edit/${jobId}` });
        }

        $("#data").on("click", ".edit-valid-btn", function (e) {
          routeEditValid(e.target.value);
        });

        function routeEditValid(jobId) {
            router.push({ path: `/Project/edit_valid/${jobId}` });
        }

        $("#data").on("click", ".del-btn", function (e) {
            $("#modalfooter").html('<button class="btn btn-secondary del-btn-cf col" data-dismiss="modal">ยกเลิก</button>'+
                                    '<button class="btn btn-danger del-btn-cf col" value="'+e.target.value+'">ลบ</button>'
            )
        });


        $("#delModal").on("click", ".del-btn-cf", function (e) {
          delProject(e.target.value);
        });

        async function delProject(projectID) {
            const delproject = await projectFirestore.collection('Projects').doc(projectID).get()
            const delJobNo = await projectFirestore.collection('JobNo').doc(delproject.data().JobNoFirst).get()
            const jobno_array = delJobNo.data().no
            const new_job_no_array = await remove_del_data()

            async function remove_del_data(){
                const index = jobno_array.indexOf(delproject.data().JobNoSecond);

                if (index > -1) {
                    jobno_array.splice(index, 1);                    
                    return jobno_array
                }
            }

            await projectFirestore.collection('Projects').doc(projectID).update({
                JobNoFirst:'',
                JobNoSecond:'',
                visible:false
            })
            await projectFirestore.collection('JobNo').doc(delproject.data().JobNoFirst).update({
                no:new_job_no_array
            })
            await location.reload()

        }

    }
}
</script>