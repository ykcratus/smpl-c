let baseUrl = "http://13.82.6.102:8000/" 

export const endPoints = {
    auth_user: baseUrl + 'api/Authentication/login',
    dashboard: baseUrl +'api/SMPLService/getallcompanyassessment',
    companyAssesment: baseUrl +'api/SMPLService/getallcompanyassessment',
    vaidateEmail: baseUrl + 'api/Authentication/validateemailuser',
    inviteUser: baseUrl + 'SMPLService/getallsubscription',
    subscription : baseUrl +'SMPLService/getallsubscription',
    companyUdate: baseUrl +'SMPLService/updateorgprofile',
    companyById: baseUrl +'SMPLService/getcompanyidbyid'
}