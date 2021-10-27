let baseUrl = "http://13.82.6.102:8000/api" 

export const endPoints = {
    auth_user: baseUrl + '/Authentication/login',
    dashboard: baseUrl +'/SMPLService/getallcompanyassessment',
    companyAssesment: baseUrl +'/SMPLService/getallcompanyassessment',
    vaidateEmail: baseUrl + '/Authentication/validateemailuser'
}