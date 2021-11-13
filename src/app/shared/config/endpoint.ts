let baseUrl = "http://13.82.6.102:8000/" 

export const endPoints = {
    auth_user: baseUrl + 'api/Authentication/login',
    companyRegistration: baseUrl +'api/Authentication/register',
    createRole: baseUrl + 'api/Authentication/createrole',
    changePassword: baseUrl + 'api/Authentication/ChangePassword',
    validateEmail: baseUrl + 'api/Authentication/validateemailuser',
    saveVaidateEmail: baseUrl +'api/Authentication/savevalidateemailuser',
    validatePasscode: baseUrl +'api/Authentication/validateemailuserpasscode',
    updateValidateUser: baseUrl +'api/Authentication/updatevalidateemailuser',
    accessorLogin: baseUrl +'api/Authentication/AssessorLoginWithCompanyId',
    getCountries: baseUrl + "SMPLService/getcountries",
    subscription: baseUrl + 'SMPLService/getallsubscription',
    assessorType: baseUrl +'SMPLService/getallassessortype',
    subscriptionById: baseUrl + 'SMPLService/Getlevelsubscriptiontypeid',
    getAllAnswer: baseUrl + 'SMPLService/getallbanswer',
    dashboard: baseUrl +'SMPLService/getallcompanyassessment',
    companyAssesment: baseUrl +'SMPLService/getallcompanyassessment',
    uploadAssessor: baseUrl +'SMPLService/uploadassessordocument',
 
    companyUpdate: baseUrl +'SMPLService/updateorgprofile',
    companyById: baseUrl +'SMPLService/getcompanyidbyid',
    uploadCompanyPhoto: baseUrl + 'SMPLService/upload',
 
    createNew: baseUrl + 'api/Authentication/createuser',
    getAllCountry: baseUrl + 'SMPLService/getallcountry',
    getAllUsers: baseUrl + 'SMPLService/getallcompanyusermaster',
    saveUser: baseUrl + 'SMPLService/save',

    getCitybyId: baseUrl + '/SMPLService/getallcity',
    deleteAssesment: baseUrl +'SMPLService/deleteaseesmentdetails',
    deleteUser: baseUrl + 'SMPLService/deletecopmanyuser',
    lockUser: baseUrl + 'SMPLService/suspendcopmanyuser',
    unlockUser: baseUrl + 'SMPLService/updatesuspendcopmanyuser',
    copyAssesment: baseUrl +'SMPLService/savecopyassessment',
    downloadDashboad: baseUrl + 'SMPLService/getdocumentlistbydocarray',
    unblockUser: baseUrl + 'SMPLService/unblockuser',
    lockAssesment: baseUrl + 'SMPLService/assessmentquestionslockorunlockbyassesmentidandcategoryid'
    

}

