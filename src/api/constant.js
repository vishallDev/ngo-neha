let API = "http://localhost:5000";

export const endPoints = {
    register: `${API}/user/register`,
    ngoregister: `${API}/ngo/register`,
    getAllUsers: `${API}/user/all`,
    getAllNGOs: `${API}/ngo/all`,
    eventUpload: `${API}/event/upload`,
    eventAdd: `${API}/event/add`,
    eventAll: `${API}/event/all`,
    addEventParticipate: `${API}/event/addEventParticipate`,
    checkEventParticipateExists: `${API}/event/checkEventParticipateExists`,
    getEventParticipateUsers: `${API}/event/getEventParticipateUsers`,
    donationAll: `${API}/donation/all`,
    addDonation: `${API}/donation/add`,
    getDonationByUser: `${API}/donation/byUser`,
    volunteerAll: `${API}/volunteer/all`,
    volunteerAdd: `${API}/volunteer/add`,
    getVolunteerParticipateUsers: `${API}/volunteer/getVolunteerParticipateUsers`,
    addVolunteerParticipate: `${API}/volunteer/addVolunteerParticipate`,
    checkVolunteerParticipateExists: `${API}/volunteer/checkVolunteerParticipateExists`,

}