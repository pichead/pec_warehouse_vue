
<style>
</style>
<template>
  <Sidebar />
  <div id="content" style="margin-left: 250px">
    <div class="col-11 mx-auto">
      <div class="h4 mt-4 col text-center font-weight-bold">Import Excel</div>
      <br />
      <div class="row">
        <div class="mx-auto col-12 row">
          <button id="import" class="btn btn-success">Import Excel</button>
          <button
            id="upload"
            class="btn btn-dark ml-3"
            data-toggle="modal"
            data-target="#importExcel"
          >
            Update
          </button>
          <input type="file" class="d-none" id="fileUpload" />
        </div>
      </div>
      <div
        class="modal"
        id="importExcel"
        aria-hidden="true"
        style="display: none"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="h3 mt-5 text-center" style="color: black">
              อัปเดตข้อมูลแบตเตอรี่
            </div>
            <div class="modal-body">
              <form id="addform">
                <div id="text" class="form-group" style="color: black">
                  <h5 class="text-center">
                    กรุณาตรวจสอบข้อมูลก่อนกดปุ่มยืนยัน
                  </h5>
                </div>
                <div
                  id="modelbtn"
                  class="mb-3 d-flex justify-content-center row-hl"
                >
                  <button
                    id="submitmodel"
                    class="btn btn-success mr-1 col-2"
                    type="button"
                  >
                    บันทึก
                  </button>
                  <button
                    id="modalclose"
                    class="btn btn-dark col-2"
                    data-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="tb-search-wrapper my-4">
        <table
          id="tb-stocks"
          class="
            table table-striped
            re-table
            table-mobile table-stocks
            mt-2
            mb-0 mb-md-3
          "
          style="color: black; font-size: "
        >
          <thead class="thead-dark">
            <tr>
              <th class="text-lg-center sorting_disabled" scope="col">
                series
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">brand</th>
              <th class="text-lg-center sorting_disabled" scope="col">type</th>
              <th class="text-lg-center sorting_disabled" scope="col">
                cellsperblk
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                capacity
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                endVoltage
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                ambientTempMax
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                ambientTempMin
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                batteryTempMax
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                batteryTempMin
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                gDevice
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                rDevice
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                refFloatVoltage
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                floatHiUrgent
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                floatHiWarning
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                floatLoUrgent
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                floatLoWarning
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">refG</th>
              <th class="text-lg-center sorting_disabled" scope="col">
                refGLow
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                refGWarning
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">refR</th>
              <th class="text-lg-center sorting_disabled" scope="col">
                refRGood
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                refRAVG
              </th>
              <th class="text-lg-center sorting_disabled" scope="col">
                refRFair
              </th>
            </tr>
          </thead>

          <tbody id="table-body" style="background: white"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../firebase/config";
import pagination from "../assets/pagination";

import Sidebar from "../components/Sidebar.vue";
import router from "@/router";
export default {
  components: { Sidebar },
  mounted() {
    $("#import").on("click", function () {
      $("#fileUpload").click();
    });
    var excelArray = [];

    $("#fileUpload").on("change", function () {
      excelArray = [];
      //Reference the FileUpload element.
      var fileUpload = $("#fileUpload")[0];

      //Validate whether File is valid Excel file.
      var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
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
        } else {
          alert("This browser does not support HTML5.");
        }
      } else {
        alert("Please upload a valid Excel file.");
      }
    });

    function ProcessExcel(data) {
      //Read the Excel File data.
      var workbook = XLSX.read(data, {
        type: "binary",
      });

      //Fetch the name of First Sheet.
      var firstSheet = workbook.SheetNames[0];

      //Read all rows from First Sheet into an JSON array.
      var excelRows = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[firstSheet]
      );

      $("#table-body").html("");
      console.log(excelRows);
      for (var i = 0; i < excelRows.length; i++) {
        excelArray.push(excelRows[i]);
        $("#table-body").append(
          "<tr>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].series +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].brand +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].type +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].cellsperblk +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].capacity +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].endVoltage +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].ambientTempMax +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].ambientTempMin +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].batteryTempMax +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].batteryTempMin +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].gDevice +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].rDevice +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refFloatVoltage +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].floatHiUrgent +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].floatHiWarning +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].floatLoUrgent +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].floatLoWarning +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refG +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refGLow +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refGWarning +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refR +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refRGood +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refRAVG +
            "</td>" +
            '<td class="text-lg-center sorting_disabled" scope="col">' +
            excelArray[i].refRFair +
            "</td>" +
            "</tr>"
        );
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
          },
          {
            series: "UPS12-400MR",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "103",
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
            refG: "2000",
            refGLow: "1200",
            refGWarning: "1400",
            refR: "2.4",
            refRGood: "3.6",
            refRAVG: "3.12",
          },
          {
            series: "UPS12-490MR",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "141.2",
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
            refG: "2200",
            refGLow: "1320",
            refGWarning: "1540",
            refR: "2.9",
            refRGood: "4.35",
            refRAVG: "3.77",
          },
          {
            series: "UPS6-620MR",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "3",
            capacity: "199",
            endVoltage: "5.25",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "6.83",
            floatHiUrgent: "7.25",
            floatHiWarning: "7.05",
            floatLoUrgent: "6.45",
            floatLoWarning: "6.65",
            refG: "2800",
            refGLow: "1680",
            refGWarning: "1960",
          },
          {
            series: "UPS12-100 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "34",
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
            refG: "1000",
            refGLow: "600",
            refGWarning: "700",
            refR: "7.5",
            refRGood: "11.25",
            refRAVG: "9.75",
          },
          {
            series: "UPS12-130 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "36",
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
            refG: "1000",
            refGLow: "600",
            refGWarning: "700",
            refR: "4.38",
            refRGood: "6.57",
            refRAVG: "5.69",
          },
          {
            series: "UPS12-150 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "36",
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
            refG: "1000",
            refGLow: "600",
            refGWarning: "700",
            refR: "3.59",
            refRGood: "5.39",
            refRAVG: "4.67",
          },
          {
            series: "UPS12-200 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "56",
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
            refR: "3.75",
            refRGood: "5.63",
            refRAVG: "4.88",
          },
          {
            series: "UPS12-220 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "56",
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
            refG: "1350",
            refGLow: "810",
            refGWarning: "945",
            refR: "3",
            refRGood: "4.5",
            refRAVG: "3.9",
          },
          {
            series: "UPS12-280R MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "84",
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
            refG: "1400",
            refGLow: "840",
            refGWarning: "980",
            refR: "2.86",
            refRGood: "4.29",
            refRAVG: "3.72",
          },
          {
            series: "UPS12-320R MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "84",
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
            refG: "1600",
            refGLow: "960",
            refGWarning: "1120",
            refR: "2.34",
            refRGood: "3.51",
            refRAVG: "3.04",
          },
          {
            series: "UPS12-370R MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "102",
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
            refG: "1900",
            refGLow: "1140",
            refGWarning: "1330",
            refR: "2.22",
            refRGood: "3.33",
            refRAVG: "2.89",
          },
          {
            series: "UPS12-400 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "110",
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
            refG: "2000",
            refGLow: "1200",
            refGWarning: "1400",
            refR: "2.13",
            refRGood: "3.2",
            refRAVG: "2.77",
          },
          {
            series: "UPS12-440 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "120",
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
            refG: "2200",
            refGLow: "1320",
            refGWarning: "1540",
            refR: "2.07",
            refRGood: "3.11",
            refRAVG: "2.69",
          },
          {
            series: "UPS12-475 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "114",
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
            refG: "2450",
            refGLow: "1470",
            refGWarning: "1715",
            refR: "1.77",
            refRGood: "2.66",
            refRAVG: "2.3",
          },
          {
            series: "UPS12-490 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "150",
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
            refG: "2000",
            refGLow: "1200",
            refGWarning: "1400",
            refR: "2.24",
            refRGood: "3.36",
            refRAVG: "2.91",
          },
          {
            series: "UPS12-520 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "154",
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
            refG: "2200",
            refGLow: "1320",
            refGWarning: "1540",
            refR: "1.8",
            refRGood: "2.7",
            refRAVG: "2.34",
          },
          {
            series: "UPS12-550 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "154",
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
            refG: "2300",
            refGLow: "1380",
            refGWarning: "1610",
            refR: "1.73",
            refRGood: "2.6",
            refRAVG: "2.25",
          },
          {
            series: "UPS12-600 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "148",
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
            refG: "2500",
            refGLow: "1500",
            refGWarning: "1750",
            refR: "1.66",
            refRGood: "2.49",
            refRAVG: "2.16",
          },
          {
            series: "UPS12-630 MRX",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "140",
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
            refG: "2500",
            refGLow: "1500",
            refGWarning: "1750",
            refR: "1.51",
            refRGood: "2.27",
            refRAVG: "1.96",
          },
          {
            series: "UPS12-615 MRXF",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "172",
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
            refG: "2500",
            refGLow: "1500",
            refGWarning: "1750",
            refR: "1.91",
            refRGood: "2.87",
            refRAVG: "2.48",
          },
          {
            series: "UPS12-700 MRXF",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "201",
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
            refG: "2700",
            refGLow: "1620",
            refGWarning: "1890",
            refR: "1.84",
            refRGood: "2.76",
            refRAVG: "2.39",
          },
          {
            series: "UPS12-1000 MRXF",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "254",
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
            refG: "3700",
            refGLow: "2220",
            refGWarning: "2590",
            refR: "1.47",
            refRGood: "2.21",
            refRAVG: "1.91",
          },
          {
            series: "TEL12-30",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "33",
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
            refG: "650",
            refGLow: "390",
            refGWarning: "455",
          },
          {
            series: "TEL12-45",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "50",
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
            refG: "900",
            refGLow: "540",
            refGWarning: "630",
          },
          {
            series: "TEL12-70",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "75",
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
          },
          {
            series: "TEL12-80",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "88",
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
            refG: "1350",
            refGLow: "810",
            refGWarning: "945",
          },
          {
            series: "TEL12-90",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "100",
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
            refG: "1500",
            refGLow: "900",
            refGWarning: "1050",
          },
          {
            series: "TEL12-125",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "6",
            capacity: "134.8",
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
            refG: "2500",
            refGLow: "1500",
            refGWarning: "1750",
          },
          {
            series: "2-300 LBT",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "1",
            capacity: "300",
            endVoltage: "1.8",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "2.26",
            floatHiUrgent: "2.4",
            floatHiWarning: "2.35",
            floatLoUrgent: "2.15",
            floatLoWarning: "2.22",
            refG: "2650",
            refGLow: "1590",
            refGWarning: "1855",
          },
          {
            series: "2-400 LBT",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "1",
            capacity: "400",
            endVoltage: "1.8",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "2.26",
            floatHiUrgent: "2.4",
            floatHiWarning: "2.35",
            floatLoUrgent: "2.15",
            floatLoWarning: "2.22",
            refG: "2800",
            refGLow: "1680",
            refGWarning: "1960",
          },
          {
            series: "AT-15P",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "1",
            capacity: "800",
            endVoltage: "1.8",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "2.26",
            floatHiUrgent: "2.4",
            floatHiWarning: "2.35",
            floatLoUrgent: "2.15",
            floatLoWarning: "2.22",
            refG: "4000",
            refGLow: "2400",
            refGWarning: "2800",
          },
          {
            series: "AT-27P",
            brand: "C&D",
            type: "VRLA",
            cellsperblk: "1",
            capacity: "1490",
            endVoltage: "1.8",
            ambientTempMax: "24",
            ambientTempMin: "20",
            batteryTempMax: "25",
            batteryTempMin: "20",
            gDevice: "Frankin/Midtronics",
            rDevice: "Hioki",
            refFloatVoltage: "2.26",
            floatHiUrgent: "2.4",
            floatHiWarning: "2.35",
            floatLoUrgent: "2.15",
            floatLoWarning: "2.22",
            refG: "6600",
            refGLow: "3960",
            refGWarning: "4620",
          },
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
  },
  data() {
    return {
      option: 1,
      totalItem: 1,
    };
  },
  methods: {},
};
</script>