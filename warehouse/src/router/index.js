import { createRouter, createWebHistory } from 'vue-router'

import { projectFirestore,projectAuth } from '../firebase/config'
import Home from '../views/Home.vue'
import Test from '../views/test.vue'
import Excel from '../views/excel.vue'
import Welcome from '../views/Welcome.vue'
// import resetpassword from '../views/resetpassword.vue'
import ProjectIndex from '../views/Project/index.vue'
import ProjectCreate from '../views/Project/create.vue'
import ProjectEdit from '../views/Project/edit.vue'
import ProjectEditValid from '../views/Project/edit_valid.vue'

import ContactCompanyIndex from '../views/Company/index.vue'
import ContactCompanyCreate from '../views/Company/create.vue'


import OrderSheetIndex from '../views/ordersheet/index.vue'
import OrderSheetSale from '../views/ordersheet/sale.vue'
import OrderSheetWh from '../views/ordersheet/wh.vue'
import OrderCheckWh from '../views/ordersheet/order_check_wh.vue'
import OrderWhEdit from '../views/ordersheet/order_wh_edit.vue'

import OrderSheetPreview from '../views/ordersheet/preview.vue'

// user
import UserIndex from '../views/user/index.vue'

// end user

// warehouse
import InspectionIndex from '../views/Warehouse/inspection_index.vue'
import InspectionEdit from '../views/Warehouse/inspection_edit.vue'
import InspectionView from '../views/Warehouse/inspection_view.vue'
import InspectionCreate from '../views/Warehouse/inspection_create.vue'
import RegisterBatteryIndex from '../views/Warehouse/registerbattery_index.vue'
import RegisterBatteryEdit from '../views/Warehouse/registerbattery_edit.vue'
import BatteryBarcodeIndex from '../views/Warehouse/batterybarcode_index.vue'

// end warehouse

// battery
import BatteryModelIndex from '../views/BatteryModel/index.vue'
import BatteryModelView from '../views/BatteryModel/view.vue'
import BatteryModelBarcodeView from '../views/BatteryModel/barcode.vue'
import BatteryModelExcelUpload from '../views/BatteryModel/excel.vue'
import BatteryMaintenanceNew from '../views/BatteryModel/maintenance_new.vue'
import BatteryMaintenanceInStock from '../views/BatteryModel/maintenance_instock.vue'
import BatteryMaintenanceSetup from '../views/BatteryModel/maintenance_setup.vue'
import BatteryMaintenanceImport from '../views/BatteryModel/import_excel.vue'
import BatteryStatusIndex from '../views/BatteryModel/status_batt.vue'

// end battery

import BatteryIndex from '../views/Battery/index.vue'
import BatteryList from '../views/Battery/batteryList.vue'
import BatteryEdit from '../views/Battery/editbattery.vue'

// PO
import PECpoList from '../views/Po/pecpoList.vue'
import PecPoConfirmList from '../views/Po/pecpo_confirm_list.vue'
import CreatePecpo from '../views/Po/createPecpo.vue'

import EditPecpo from '../views/Po/edit.vue'
import ViewPecpo from '../views/Po/view.vue'
import ConfirmPecpo from '../views/Po/confirm.vue'
// import EditPecpo from '../views/Po/editPecpo.vue'
import PrintPecpo from '../views/Po/preview.vue'
import PoNew from '../views/Po/PoNew.vue'
import PoEditNew from '../views/Po/editNew.vue'
import PoIndexNew from '../views/Po/poIndexNew.vue'



// End PO


// Claim
import ClaimIndex from '../views/Claim/index.vue'
import ClaimView from '../views/Claim/view.vue'


// End Claim


import BatterySpec from '../views/Battery/spec.vue'
import Pmindex from '../views/finder/pmIndex.vue'
import Pmedit from '../views/finder/pmedit.vue'
import FinderEdit from '../views/finder/edit.vue'
import ImportExcel from '../views/finder/import.vue'
import BatterySpecEdit from '../views/Battery/editspec.vue'
import CustomerIndex from '../views/Battery/customer.vue'
import System from '../views/finder/system.vue'

const requireAuth = (to, from, next) => {
  projectAuth.onAuthStateChanged((user) => {
    if (!user) {
      next({ name: 'Welcome'})
    } else {
      projectFirestore.collection('Users').doc(user.uid).get().then( role =>{
        const activation =  role.data().activation
        if(activation == true){
          next()
        }
        else{
          projectAuth.signOut()
          next({ name: 'Welcome'})
        }
      })
      
    }
  });
}

const requireNoAuth = (to, from, next) => {

projectAuth.onAuthStateChanged((user) => {
  
    if (user) {
      projectFirestore.collection('Users').doc(user.uid).get().then( role =>{
        const activation =  role.data().activation
        if(activation == true){
          next({ name: 'Home'})
        }
        else{
          next()
        }
      })
      
    } else {
      next()
    }
  });
}



const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/excel',
    name: 'Excel',
    component: Excel,
    beforeEnter: requireAuth
  },
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/Order_N_Booking',
    name: 'OrderSheetIndex',
    component: OrderSheetIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Order_check/Wh',
    name: 'OrderCheckWh',
    component: OrderCheckWh,
    beforeEnter: requireAuth
  },
  {
    path: '/Order_check/Wh/Edit/:id',
    name: 'OrderWhEdit',
    component: OrderWhEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/Order_N_Booking/Wh',
    name: 'OrderSheetWh',
    component: OrderSheetWh,
    beforeEnter: requireAuth
  },
  {
    path: '/Order_N_Booking/Sale',
    name: 'OrderSheetSale',
    component: OrderSheetSale,
    beforeEnter: requireAuth
  },
  {
    path: '/Order_N_Booking/Preview/:id',
    name: 'OrderSheetPreview',
    component: OrderSheetPreview,
    beforeEnter: requireAuth
  },
  {
    path: '/Project',
    name: 'ProjectIndex',
    component: ProjectIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Project/Create',
    name: 'ProjectCreate',
    component: ProjectCreate,
    beforeEnter: requireAuth
  },
  {
    path: '/Project/edit/:id',
    name: 'ProjectEdit',
    component: ProjectEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/Project/edit_valid/:id',
    name: 'ProjectEditValid',
    component: ProjectEditValid,
    beforeEnter: requireAuth
  },
  {
    path: '/ContactCompany',
    name: 'ContactCompanyIndex',
    component: ContactCompanyIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Company/Create',
    name: 'ContactCompanyCreate',
    component: ContactCompanyCreate,
    beforeEnter: requireAuth
  },
  {
    path: '/Battery/index',
    name: 'BatteryIndex',
    component: BatteryIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Battery/batterylist',
    name: 'BatteryList',
    component: BatteryList,
    beforeEnter: requireAuth
  },
  {
    path: '/Battery/edit/:id',
    name: 'BatteryEdit',
    component: BatteryEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/Battery/pecpoList',
    name: 'PECpoList',
    component: PECpoList,
    beforeEnter: requireAuth
  },
  {
    path: '/pecpo_confirm_list',
    name: 'PecPoConfirmList',
    component: PecPoConfirmList,
    beforeEnter: requireAuth
  },
  {
    path: '/createPecpo',
    name: 'CreatePecpo',
    component: CreatePecpo,
    beforeEnter: requireAuth
  },
  {
    path: '/createPecpoNew',
    name: 'PoNew',
    component: PoNew,
    beforeEnter: requireAuth
  },
  {
    path: '/poIndexNew',
    name: 'PoIndexNew',
    component: PoIndexNew,
    beforeEnter: requireAuth
  },
  {
    path: '/editPecpo/:id',
    name: 'EditPecpo',
    component: EditPecpo,
    beforeEnter: requireAuth
  },
  {
    path: '/poEditNew/:id',
    name: 'PoEditNew',
    component: PoEditNew,
    beforeEnter: requireAuth
  },
  {
    path: '/viewPecpo/:id',
    name: 'ViewPecpo',
    component: ViewPecpo,
    beforeEnter: requireAuth
  },
  {
    path: '/confirmPecpo/:id',
    name: 'ConfirmPecpo',
    component: ConfirmPecpo,
    beforeEnter: requireAuth
  },
  {
    path: '/pecpo_print/:id',
    name: 'PrintPecpo',
    component: PrintPecpo,
    beforeEnter: requireAuth
  },
  {
    path: '/Claim',
    name: 'ClaimIndex',
    component: ClaimIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Claim/view/:id',
    name: 'ClaimView',
    component: ClaimView,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/InspectionIndex',
    name: 'InspectionIndex',
    component: InspectionIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/InspectionCreate',
    name: 'InspectionCreate',
    component: InspectionCreate,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/InspectionEdit/:id',
    name: 'InspectionEdit',
    component: InspectionEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/InspectionView/:id',
    name: 'InspectionView',
    component: InspectionView,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/registerbatteryIndex',
    name: 'RegisterBatteryIndex',
    component: RegisterBatteryIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/registerbatteryEdit/:id',
    name: 'RegisterBatteryEdit',
    component: RegisterBatteryEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/Warehouse/batterybarcodeIndex',
    name: 'BatteryBarcodeIndex',
    component: BatteryBarcodeIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryModel',
    name: 'BatteryModelIndex',
    component: BatteryModelIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryModel/modelview/:id',
    name: 'BatteryModelView',
    component: BatteryModelView,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryModel/barcodeview/:id',
    name: 'BatteryModelBarcodeView',
    component: BatteryModelBarcodeView,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryModel/excelUpload',
    name: 'BatteryModelExcelUpload',
    component: BatteryModelExcelUpload,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryMaintenanceNew',
    name: 'BatteryMaintenanceNew',
    component: BatteryMaintenanceNew,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryMaintenanceInstock',
    name: 'BatteryMaintenanceInStock',
    component: BatteryMaintenanceInStock,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryMaintenanceImport',
    name: 'BatteryMaintenanceImport',
    component: BatteryMaintenanceImport,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryMaintenanceSetup',
    name: 'BatteryMaintenanceSetup',
    component: BatteryMaintenanceSetup,
    beforeEnter: requireAuth
  },
  {
    path: '/BatteryStatus',
    name: 'BatteryStatusIndex',
    component: BatteryStatusIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/Battery/Specification',
    name: 'BatterySpec',
    component: BatterySpec,
    beforeEnter: requireAuth
  },
  {
    path: '/Battery/Specification/edit/:id',
    name: 'BatterySpecEdit',
    component: BatterySpecEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/Customer',
    name: 'CustomerIndex',
    component: CustomerIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/pmIndex',
    name: 'Pmindex',
    component: Pmindex,
    beforeEnter: requireAuth
  },
  {
    path: '/pmEdit/:id',
    name: 'Pmedit',
    component: Pmedit,
    beforeEnter: requireAuth
  },
  {
    path: '/Sites',
    name: 'FinderEdit',
    component: FinderEdit,
    beforeEnter: requireAuth
  },
  {
    path: '/ImportExcel',
    name: 'ImportExcel',
    component: ImportExcel,
    beforeEnter: requireAuth
  },
  {
    path: '/system/:id/:id/:id/:id',
    name: 'System',
    component: System,
    beforeEnter: requireAuth
  },
  {
    path: '/user',
    name: 'UserIndex',
    component: UserIndex,
    beforeEnter: requireAuth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
