<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">อัปโหลดข้อมูลทางไฟฟ้า</div>
        <div class="row p-4 mt-5 mb-4 border">
            <div class="col-3 col-form-label">
                ข้อมูลไฟฟ้า
            </div>
            <div class="col-9">
                <button id="addfile_btn" type="button" class="btn btn-primary col-3">เลือกไฟล์ (.xlsx,.xls)</button>
                <input type="file" class="d-none" id="fileUpload" />
            </div>
        </div>
        <div class="row my-4">
                    <div class="col-2 col-form-label">รอบการตรวจถัดไป:</div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="col-1 pt-2">
                                        <input type="radio" name="radio_check_1" >
                                    </div>
                                    <div class="col-4 col-form-label">
                                        รายเดือน
                                    </div>
                                    <select class="custom-select col-5" disabled>
                                        <option>30วัน</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-1 pt-2">
                                        <input type="radio" name="radio_check_1" checked>
                                    </div>
                                    <div class="col-4 col-form-label">
                                        กำหนดเอง
                                    </div>
                                    <input type="date" class="col-5 form-control">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="row">
                                    <div class="col-2 pt-2">
                                        <input type="radio" name="radio_check_1" >
                                    </div>
                                    <div class="col-8 col-form-label">
                                        ไม่มี (ส่งให้ลูกค้า)
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <table class="table table-sm table-hover table-striped col-12">
            <thead>
                <tr class="text-center">
                    <th>#</th>
                    <th>Barcode</th>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Ref</th>
                    <th>MFG Code</th>
                    <th>Job No.</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>OCV</th>
                    <th>Mhos</th>
                    <th>Mhos%</th>
                    <th>C/T</th>
                </tr>
            </thead>
            <tbody id="table-body">
                
            </tbody>
        </table>
        <div class="row">
            <div class="col-8"></div>
            <div class="col-4">
                <div class="row">
                    <div class="col">
                        <button class="btn btn-danger col-12" type="button">Cancel</button>

                    </div>
                    <div class="col">
                        <button class="btn btn-primary col-12" type="button">Save</button>
                    </div>

                </div>
            </div>
        </div>
        <div class="row d-none">
            <div class="col-8"></div>
            <div class="col-4">
                <div class="row">
                    <div class="col">
                        <button class="btn btn-danger col-12" type="button">Cancel</button>

                    </div>
                    <div class="col">
                        <a class="btn btn-primary col-12" href="/BatteryMaintenanceImport" type="button">Next</a>
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
export default {
    components: { Sidebar },
    mounted() {
    $("#addfile_btn").on("click", function () {
        $("#fileUpload").click();
    });
    var excelArray = [];

    $("#fileUpload").on("change", function () {
        excelArray = [];
        //Reference the FileUpload element.
        var fileUpload = $("#fileUpload")[0];

        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9()\s_\\.\-:])+(.xls|.xlsx)$/;
        // var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls)$/;

        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof FileReader != "undefined") {
                var reader = new FileReader();

                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    ProcessExcel(e.target.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                //For IE Browser.
                reader.onload = function (e) {
                    var data = "";
                    var bytes = new Uint8Array(e.target.result);
                    for (var i = 0; i < bytes.byteLength; i++) {
                    data += String.fromCharCode(bytes[i]);
                    }
                    ProcessExcel(data);
                };
                reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } 
            else {
                alert("This browser does not support HTML5.");
            }
        }
        else {
            console.log(regex.test(fileUpload.value.toLowerCase()))
            alert("Please upload a valid Excel file.");
        }
    });

    async function ProcessExcel(data) {
      //Read the Excel File data.
      var workbook = XLSX.read(data, {
        type: "binary",
      });

      //Fetch the name of First Sheet.
      var firstSheet = workbook.SheetNames[0];
      console.log('firstSheet : ',firstSheet)
      //Read all rows from First Sheet into an JSON array.
      var excelRows = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[firstSheet],{range:1}
      );

      $("#table-body").html("");
      console.log("excelRows : ",excelRows);
      console.log('excelArray : ',excelArray)
      var start_num_row = 1
      for (var i = 0; i < excelRows.length; i++) {
        // excelArray.push(excelRows[i]);
        
        $("#table-body").append(
          "<tr>" +
          '<td class="text-lg-center sorting_disabled" scope="col">' +
            start_num_row +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].Barcode +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].Model +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].Brand +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].Ref +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i]['MFG Code'] +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i]['Job No.'] +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].Location +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].date +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].OCV +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i].Mhos +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i]['Mhos%'] +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelRows[i]['C / T'] +
            "</td>" +
            "</tr>"
            
        );
        start_num_row++
      }

      $("#submitmodel").on("click", function () {
        $("#tb-stocks").after(
          '<div id="spiner" class="d-flex justify-content-center align-items-center row-hl" style="height: 600px">' +
            '<div class="lds-dual-ring"></div>' +
            "</div>"
        );
        $("#tb-stocks").addClass("d-none");
        $("#text").html(
          '<h5 class="text-center" style="color:black;">กำลังอัปเดตข้อมูล กรุณารอจนกว่าจะเสร็จสิ้น</h5>'
        );

        $("#modalclose").addClass("d-none");
        $("#submitmodel").addClass("d-none");

        const dataset = [
          {
            series: "UPS12-210MR",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "53.8",
            endVoltage: "10.5",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "13.65",
            floatHiUrgent: "14.5",
            floatHiWarning: "14.1",
            floatLoUrgent: "12.9",
            floatLoWarning: "13.3",
            refG: "1200",
            refGLow: "720",
            refGWarning: "840",
            refR: "4.4",
            refRGood: "6.6",
            refRAVG: "5.72",
          },
          {
            series: "UPS12-300MR",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "78.6",
            endVoltage: "10.5",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "13.65",
            floatHiUrgent: "14.5",
            floatHiWarning: "14.1",
            floatLoUrgent: "12.9",
            floatLoWarning: "13.3",
            refG: "1700",
            refGLow: "1020",
            refGWarning: "1190",
            refR: "3.1",
            refRGood: "4.65",
            refRAVG: "4.03",
          }
        ];

        console.log(dataset)
        for (let i = 0; i < dataset.length; i++) {
          console.log(dataset[i]);

          projectFirestore
            .collection("BatterySpecifications").add(
                dataset[i]
                )
            .then(function () {
              if (i == excelArray.length - 1) {
                $(document).ready(function () {
                  $("#text").html(
                    '<h5 class="text-center" style="color:black;">อัปเดตข้อมูลเสร็จสิ้น จะกลับไปหน้าแรกใน 3 วินาที</h5>'
                  );
                  setTimeout(function () {
                    $("#modalclose").click();
                    router.push({
                      name: "Home",
                    });
                  }, 3000);
                });
              }
            });
          // projectFirestore.collection('BatterySpecifications').add({
          //     ambientTempMax: excelArray[i].ambientTempMax,
          //     ambientTempMin: excelArray[i].ambientTempMin,
          //     batteryTempMax: excelArray[i].batteryTempMax,
          //     batteryTempMin: excelArray[i].batteryTempMin,
          //     brand: excelArray[i].brand,
          //     capacity: excelArray[i].capacity,
          //     cellsperblk: excelArray[i].cellsperblk,
          //     endVoltage: excelArray[i].endVoltage,
          //     floatHiUrgent: excelArray[i].floatHiUrgent,
          //     floatHiWarning: excelArray[i].floatHiWarning,
          //     floatLoUrgent: excelArray[i].floatLoUrgent,
          //     floatLoWarning: excelArray[i].floatLoWarning,
          //     gDevice: excelArray[i].gDevice,
          //     rDevice: excelArray[i].rDevice,
          //     refFloatVoltage: excelArray[i].refFloatVoltage,
          //     refG: excelArray[i].refG,
          //     refGLow: excelArray[i].refGLow,
          //     refGWarning: excelArray[i].refGWarning,
          //     refR: excelArray[i].refR,
          //     refRAVG: excelArray[i].refRAVG,
          //     refRGood: excelArray[i].refRGood,
          //     series: excelArray[i].series,
          //     type: excelArray[i].type
          // })
        }
      });
    }

    }
}
</script>